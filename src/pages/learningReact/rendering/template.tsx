import * as React from 'react';
import { StyledButton } from '../../../components/atoms/styled/StyledButton';
import { TopicPage } from '../../../components/templates/TopicPage';

export const RenderingPage: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
  const [invisibleCounter, setInvisibleCounter] = React.useState(0);

  React.useLayoutEffect(() => {
    console.log('Mounted');
  }, []);

  React.useLayoutEffect(() => {
    console.log('Rendered');
  });

  return (
    <TopicPage heading='Rendering'>
      <h3>Counter State: {counter}</h3>
      <div>
        <StyledButton onClick={() => setCounter(counter + 1)}>
          Increment State
        </StyledButton>
      </div>
      <div>
        <StyledButton onClick={() => setInvisibleCounter(invisibleCounter + 1)}>
          Increment invisible counter
        </StyledButton>
      </div>
    </TopicPage>
  );
};
