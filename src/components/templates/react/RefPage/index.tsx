import * as React from 'react';
import { TopicPage } from '../../TopicPage';
import { AutoFocusTextInputClass } from './components/class';
import { AutoFocusTextInputFunction } from './components/function';

export const RefPage: React.FC = () => {
  const [componentType, setComponentType] = React.useState<
    'class' | 'function'
  >('class');

  return (
    <TopicPage heading='Ref'>
      <div>
        <p>
          Component type: {componentType}{' '}
          <button
            onClick={() =>
              setComponentType(componentType === 'class' ? 'function' : 'class')
            }
          >
            switch component type
          </button>
        </p>
        {componentType === 'class' ? (
          <AutoFocusTextInputClass />
        ) : (
          <AutoFocusTextInputFunction />
        )}
      </div>
    </TopicPage>
  );
};
