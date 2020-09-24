import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

const Child: React.FC = () => {
  console.log('[Child] function body');

  React.useEffect(() => {
    console.log('[Child] effect');
  });

  return (
    <div>
      {console.log('[Child] return')}
      <h3>Child</h3>
    </div>
  );
};

const Parent: React.FC = (props) => {
  console.log('[Parent] function body');

  React.useEffect(() => {
    console.log('[Parent] effect');
  });

  return (
    <div>
      {console.log('[Parent] return: before Child')}
      <h2>Parent</h2>
      {props.children}
      {console.log('[Parent] return: after Child')}
    </div>
  );
};

const HierarchyPage: React.FC = () => {
  return (
    <TopicPage heading='Hierarchy Execution Order'>
      <Parent>
        <Child />
      </Parent>
    </TopicPage>
  );
};

console.log(Parent);

export default HierarchyPage;
