import * as React from 'react';
import { StyledButton } from '../../components/atoms/styled/StyledButton';
import { TopicPage } from '../../components/templates/TopicPage';

const array = [1, 2, 3];

function createFlow<T>(array: T[]) {
  let i = 0;

  function next(): T {
    const element = array[i];
    i++;
    return element;
  }

  return { next };
}

function* createFlowWithGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const flow = createFlow(array);
const flowWithGenerator = createFlowWithGenerator();

console.log('flow:', { flow, flowWithGenerator });

const IteratorsPage: React.FC = () => {
  const [currentElement, setCurrentElement] = React.useState(undefined);
  const [
    currentElementWithGenerator,
    setCurrentElementWithGenerator,
  ] = React.useState(undefined);

  return (
    <TopicPage heading='Generators'>
      <p>
        array: <code>{String(array)}</code>
      </p>
      <p>
        current element: <code>{String(currentElement)}</code>
      </p>
      <p>
        current element (generator):{' '}
        <code>{String(currentElementWithGenerator)}</code>
      </p>
      <StyledButton
        onClick={() => {
          const currentEl = flow.next();
          const currentElWithGenerator = flowWithGenerator.next();
          setCurrentElement(currentEl);
          console.log('currentElWithGenerator:', currentElWithGenerator);
          setCurrentElementWithGenerator(currentElWithGenerator.value);
        }}
      >
        get next element
      </StyledButton>
    </TopicPage>
  );
};

export default IteratorsPage;
