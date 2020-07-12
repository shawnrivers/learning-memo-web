import * as React from 'react';
import { StyledButton } from '../../../components/atoms/styled/StyledButton';
import { TopicPage } from '../../../components/templates/TopicPage';

export const UseEffectPage: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
  const [invisibleCounter, setInvisibleCounter] = React.useState(0);
  const counterRef = React.useRef(0);

  React.useEffect(() => {
    console.log('Mounted');
  }, []);

  React.useEffect(() => {
    console.log('Rendered');
  });

  React.useEffect(() => {
    console.log('Rendered (state changed)');
  }, [counter]);

  React.useEffect(() => {
    console.log('Rendered (ref current changed)');
  }, [counterRef.current]);

  React.useEffect(() => {
    console.log('Rendered (ref changed)');
  }, [counterRef]);

  return (
    <TopicPage heading='useEffect deps on state & ref'>
      <div>
        <h3>Counter State: {counter}</h3>
        <h3>Counter Ref: {counterRef.current}</h3>
        <div>
          <StyledButton
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment State
          </StyledButton>
          <StyledButton
            onClick={() => {
              counterRef.current++;
            }}
          >
            Increment Ref
          </StyledButton>
          <StyledButton
            onClick={() => {
              setCounter(0);
              counterRef.current = 0;
            }}
          >
            Reset
          </StyledButton>
        </div>
        <div>
          <StyledButton
            onClick={() => setInvisibleCounter(invisibleCounter + 1)}
          >
            Increment invisible counter
          </StyledButton>
        </div>
      </div>
    </TopicPage>
  );
};
