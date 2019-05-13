import React from 'react';
import { JsonServiceConsumer } from '../services';

export default WrappedComponent => {
  const withJsonService = ({ ...props }) => {
    return (
      <JsonServiceConsumer>
        {jsonService => {
          return <WrappedComponent {...props} jsonService={jsonService} />;
        }}
      </JsonServiceConsumer>
    );
  };

  return withJsonService;
};
