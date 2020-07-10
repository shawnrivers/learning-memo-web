import * as React from 'react';
import { BackButton } from '../../../components/atoms/buttons/BackButton';
import { StyledButton } from '../../../components/atoms/styled/StyledButton';
import { Layout } from '../../../components/templates/Layout';

export const UseEffectPage: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
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
    <Layout headerButton={<BackButton />}>
      <h1>useEffect deps on state & ref</h1>
      <div>
        <h3>Counter State: {counter}</h3>
        <h3>Counter Ref: {counterRef.current}</h3>
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
    </Layout>
  );
};
