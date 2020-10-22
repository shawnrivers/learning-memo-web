import * as React from 'react';
import { fetchPostsReject } from '../../../../../utils/fakeAPI';
import { StyledButton } from '../../../../atoms/styled/StyledButton';

export const EventHandlerErrorComponent: React.FC = () => {
  return (
    <StyledButton onClick={() => fetchPostsReject()}>
      Fetch data causes error
    </StyledButton>
  );
};
