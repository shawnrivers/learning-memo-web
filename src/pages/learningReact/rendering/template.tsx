import * as React from 'react';
import { Divider } from '../../../components/atoms/Divider';
import { StyledButton } from '../../../components/atoms/styled/StyledButton';
import { TopicPage } from '../../../components/templates/TopicPage';

const RenderingPage: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
  const [invisibleCounter, setInvisibleCounter] = React.useState(0);
  // eslint-disable-next-line
  let [counter2, setCounter2] = React.useState(0);
  const [object, setObject] = React.useState({ a: 1 });

  React.useLayoutEffect(() => {
    console.log('Mounted');
  }, []);

  React.useLayoutEffect(() => {
    console.log('Rendered');
  });

  return (
    <TopicPage heading='Rendering'>
      <h2>Invisible state changes will trigger re-render</h2>
      <p>
        <code>counter: {counter}</code>
      </p>
      <div>
        <StyledButton onClick={() => setCounter(counter + 1)}>
          Increment counter
        </StyledButton>
        <StyledButton onClick={() => setInvisibleCounter(invisibleCounter + 1)}>
          Increment invisible counter
        </StyledButton>
      </div>
      <Divider />
      <h2>Mutating states (reference) will not trigger re-render</h2>
      <p>
        <code>counter2: {counter2}</code>
      </p>
      <p>
        <code>Object: {JSON.stringify(object)}</code>
      </p>
      <div>
        <StyledButton
          onClick={() => {
            counter2++;
            // This will trigger a re-render,
            // because === on primitive types compares the actual value.
            setCounter2(counter2);
          }}
        >
          Increment counter 2
        </StyledButton>
        <StyledButton
          onClick={() => {
            object.a += 1;
            // This will not trigger a re-render,
            // because === on reference type compares the reference.
            setObject(object);
          }}
        >
          Modify object
        </StyledButton>
      </div>
    </TopicPage>
  );
};

export default RenderingPage;
