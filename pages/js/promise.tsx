import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

const ReferencePage: React.FC = () => {
  const [promiseStatus, setPromiseStatus] = React.useState<
    'none' | 'pending' | 'rejected' | 'resolved'
  >('none');

  React.useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setPromiseStatus('pending');
      setTimeout(() => {
        // resolve('done');
        reject('failed');
      }, 3000);
    });

    promise
      .then((result) => {
        setPromiseStatus('resolved');
        console.log('Resolved result:', result);
      })
      .catch((error) => {
        setPromiseStatus('rejected');
        console.error('Error:', error);
      });
  }, []);

  return (
    <TopicPage heading='Promise'>
      <p>
        Promise: <code>{promiseStatus}</code>
      </p>
    </TopicPage>
  );
};

export default ReferencePage;
