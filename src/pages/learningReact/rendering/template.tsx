import * as React from 'react';
import { Divider } from '../../../components/atoms/Divider';
import { StyledButton } from '../../../components/atoms/styled/StyledButton';
import { TopicPage } from '../../../components/templates/TopicPage';

type LoggingSectionProps = {
  id?: string;
  heading: React.ReactNode;
  showLog?: boolean;
  state?: {
    key: string;
    value: string;
  };
  button?: {
    onClick(): void;
    text: string;
  };
};

const LoggingSection: React.FC<LoggingSectionProps> = (props) => {
  const { showLog = false, state, button } = props;

  React.useEffect(() => {
    if (showLog) {
      console.log(`[Section${props.id ?? ''}] Rendered`);
    }
  });

  return (
    <div>
      <h2>{props.id}. {props.heading}</h2>
      {state !== undefined ? (
        <p>
          <code>
            {state.key}: {state.value}
          </code>
        </p>
      ) : null}
      {button !== undefined ? (
        <div>
          <StyledButton onClick={button.onClick}>{button.text}</StyledButton>
        </div>
      ) : null}
      {props.children}
    </div>
  );
};

const MemoizedLoggingSection = React.memo(LoggingSection);

const RenderingPage: React.FC = () => {
  const [invisibleCounter, setInvisibleCounter] = React.useState(0);
  // eslint-disable-next-line
  let [counter1, setCounter1] = React.useState(0);
  // eslint-disable-next-line
  let [counter2, setCounter2] = React.useState(0);
  const [object1, setObject1] = React.useState({ a: 1 });
  const [object2, setObject2] = React.useState({ a: 1 });
  const [object3, setObject3] = React.useState({ a: 1 });

  React.useLayoutEffect(() => {
    console.log('[Parent] Mounted');
  }, []);

  React.useLayoutEffect(() => {
    console.log('[Parent] Rendered');
  });

  return (
    <TopicPage heading='Rendering'>
      <LoggingSection
        id='1'
        heading={
          <>
            Invisible state changes <em>will</em> trigger re-renders
          </>
        }
      >
        <div>
          <StyledButton
            onClick={() => setInvisibleCounter(invisibleCounter + 1)}
          >
            Increment invisible counter
          </StyledButton>
        </div>
      </LoggingSection>
      <Divider />
      <LoggingSection
        id='2'
        heading={
          <>
            Mutating primitive states without calling the setter{' '}
            <em>will not</em> trigger re-renders
          </>
        }
      >
        <p>
          <code>counter1: {counter1}</code>
        </p>
        <div>
          <StyledButton
            onClick={() => {
              counter1++;
            }}
          >
            Mutate counter1
          </StyledButton>
        </div>
      </LoggingSection>
      <Divider />
      <LoggingSection
        id='3'
        heading={
          <>
            Mutating primitive states and call the setter <em>will</em> trigger
            re-renders
          </>
        }
      >
        <p>
          <code>counter2: {counter2}</code>
        </p>
        <div>
          <StyledButton
            onClick={() => {
              // This will trigger a re-render,
              // because === on primitive types compares the actual value.
              counter2++;
              setCounter2(counter2);
            }}
          >
            Mutate counter2
          </StyledButton>
        </div>
      </LoggingSection>
      <Divider />
      <LoggingSection
        id='4'
        heading={
          <>
            Mutating reference states <em>will not</em> trigger re-renders
          </>
        }
      >
        <p>
          <code>Object1: {JSON.stringify(object1)}</code>
        </p>
        <div>
          <StyledButton
            onClick={() => {
              // This will not trigger a re-render,
              // because === on reference type compares the reference.
              object1.a += 1;
              setObject1(object1);
            }}
          >
            Mutate object1
          </StyledButton>
        </div>
      </LoggingSection>
      <Divider />
      <LoggingSection
        id='5'
        heading={
          <>
            Returning new objects <em>will</em> trigger re-renders
          </>
        }
      >
        <p>
          <code>Object2: {JSON.stringify(object2)}</code>
        </p>
        <p>
          <code>Object3: {JSON.stringify(object3)}</code>
        </p>
        <div>
          <StyledButton
            onClick={() => {
              // This will trigger a re-render,
              // because === on different references always returns false.
              const object = { ...object2, a: object2.a + 1 };
              setObject2(object);
            }}
          >
            Modify object2 and return a new object
          </StyledButton>
        </div>
        <div>
          <StyledButton
            onClick={() => {
              // This will trigger a re-render,
              // because === on different references always returns false.
              const object = { ...object3 };
              setObject3(object);
            }}
          >
            Do not modify object3 but return a new object
          </StyledButton>
        </div>
      </LoggingSection>
      <Divider />
      <LoggingSection showLog id='6' heading='Normal component re-renders when its parent component re-renders' />
      <Divider />
      <MemoizedLoggingSection showLog id='7' heading='React.memo component only re-renders when the props change while its parent component re-renders' />
    </TopicPage>
  );
};

export default RenderingPage;
