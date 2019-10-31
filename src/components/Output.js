import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
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
  },
  button: {
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 50%)'
  },
  mobileHidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
});

const Output = ({
  classes,
  input
}) => {
  const isInitialMount = useRef(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [numDisplayed, setNumDisplayed] = useState(50);

  const displayMore = () => {
    const batchSize = 50;
    const newNumDisplayed = numDisplayed + batchSize > data.length
      ? data.length
      : numDisplayed + batchSize;
    setNumDisplayed(newNumDisplayed);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setIsLoading(true);
      Converter.findSimilarEuclidean(input)
        .then(results => {
          setData(results);
          setError(null);
          setNumDisplayed(50);
        }).catch(e => {
          setError(e);
          setData([]);
        }).finally(() => {
          setIsLoading(false);
        });
    }
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
      {!isLoading && !error && data.length !== 0 && (
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
                <TableCell className={classes.mobileHidden}>HSL</TableCell>
                <TableCell className={classes.mobileHidden}>
                  Similarity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(0, numDisplayed).map((data, index) => (
                <TableRow key={index}>
                  <TableCell style={{ backgroundColor: data.hexString }} />
                  <TableCell>{data.colorId}</TableCell>
                  <TableCell>{data.rgb}</TableCell>
                  <TableCell>{data.hexString}</TableCell>
                  <TableCell className={classes.mobileHidden}>
                    {data.hsl}
                  </TableCell>
                  <TableCell className={classes.mobileHidden}>
                    {data.similarity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {numDisplayed < data.length && (
            <Button
              className={classes.button}
              color="secondary"
              variant="text"
              onClick={() => displayMore()}
            >
              Show more
            </Button>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(Output);
