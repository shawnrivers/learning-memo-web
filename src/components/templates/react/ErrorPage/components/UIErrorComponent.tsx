import * as React from 'react';

export const UIErrorComponent: React.FC = () => {
  const [someState, _] = React.useState<any>(null);

  return <div>{someState.nonExist}</div>;
};
