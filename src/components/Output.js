import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Converter from '../Converter';

const styles = {
  root: {}
};

const Output = ({
  classes,
  input
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    (async () => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        setIsLoading(true);
        setResults(await Converter.findSimilar(input));
        setIsLoading(false);
      }
    })();
  }, [input]);

  return (
    <div className={classes.root}>
      {isLoading && (<div>Loading...</div>)}
      {!isLoading && (
        <div>
          {results.map((result, index) => (
            <div key={index}>
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(Output);
