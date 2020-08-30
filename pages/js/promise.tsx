import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

async function handlePromise<T>(promise: Promise<T>): Promise<T> {
  try {
    const result = await promise;
    console.log('[handlePromise] result:', result);
    return result;
  } catch (error) {
    console.error('[handlePromise] error:', error);
  }
}

const ReferencePage: React.FC = () => {
  const [promiseStatus, setPromiseStatus] = React.useState<
    'none' | 'pending' | 'rejected' | 'resolved'
  >('none');

  React.useEffect(() => {
    const promise = new Promise<string>((resolve, reject) => {
      setPromiseStatus('pending');
      setTimeout(() => {
        // resolve('done');
        reject('failed');
      }, 2000);
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

    handlePromise(promise);
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
