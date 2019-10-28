import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import Converter from '../Converter';

const styles = theme => ({
  loading: {
    textAlign: 'center'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1em'
    },
    '& > h1': {
      margin: '0.5em',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '75%',
        fontSize: '1.5em'
      }
    },
    '& > div': {
      width: '50px',
      height: '50px',
      borderRadius: '50%'
    }
  }
});

const Output = ({
  classes,
  input
}) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    (async () => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        setIsLoading(true);
        try {
          const similar = await Converter.findSimilar(input);
          similar.sort((a, b) => b.similarity - a.similarity);
          setError(null);
          setResults(similar);
        } catch (e) {
          setError(e);
        }
        setIsLoading(false);
      }
    })();
  }, [input]);

  return (
    <React.Fragment>
      {isLoading && (
        <h1 className={classes.loading}>Loading...</h1>
      )}
      {!isLoading && error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && results.length !== 0 && (
        <React.Fragment>
          <div className={classes.title}>
            <h1>
              Converting {input}
            </h1>
            <div style={{ backgroundColor: input }} />
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Display</TableCell>
                <TableCell>Xterm</TableCell>
                <TableCell>RGB</TableCell>
                <TableCell>HEX</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.slice(0, 50).map((result, index) => (
                <TableRow key={index}>
                  <TableCell style={{ backgroundColor: result.hexString }} />
                  <TableCell>{result.colorId}</TableCell>
                  <TableCell>{result.rgb}</TableCell>
                  <TableCell>{result.hexString}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(Output);
