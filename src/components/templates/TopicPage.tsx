import * as React from 'react';
import { BackButton } from '../atoms/buttons/BackButton';
import { Layout } from './Layout';

type TopicLayoutProps = {
  heading: string;
};

export const TopicPage: React.FC<TopicLayoutProps> = (props) => {
  return (
    <Layout headerButton={<BackButton />}>
      <h1>{props.heading}</h1>
      {props.children}
    </Layout>
  );
};
