import * as React from 'react';

export const NormalJSErrorComponent: React.FC = () => {
  const [someState, _] = React.useState<any>(null);

  React.useEffect(() => {
    console.log(someState.nonExist);
  });

  return null;
};
