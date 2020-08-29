import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

const obj1 = {
  a: 1,
  b: '2',
};

const obj2 = {
  a: 1,
  b: '2',
};

const ReferencePage: React.FC = () => {
  return (
    <TopicPage heading='Reference'>
      <p>
        <code>obj1: {JSON.stringify(obj1)}</code>
      </p>
      <p>
        <code>obj2: {JSON.stringify(obj2)}</code>
      </p>
      <p>
        <code>obj1 === obj2: {String(obj1 === obj2)}</code>
      </p>
      <p>
        <code>obj1.a === obj2.a: {String(obj1.a === obj2.a)}</code>
      </p>
    </TopicPage>
  );
};

export default ReferencePage;
