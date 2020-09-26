import { GetServerSideProps } from 'next';
import * as React from 'react';
import { StyledLink } from '../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../components/templates/TopicPage';
import { Note } from '../../../data/data';

const DataFetchingPage: React.FC<Props> = (props) => {
  console.log(props);

  return (
    <TopicPage
      heading='Data Fetching'
      headerButton={<StyledLink href='/next'>Back to Next.js</StyledLink>}
    >
      <ul>
        {props.data.notes.data.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </TopicPage>
  );
};

export default DataFetchingPage;

type Props = {
  data: {
    notes: {
      data: Note[];
    };
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3000/api/note');
  const data: { data: Note[] } = await response.json();

  return {
    props: {
      data: {
        notes: data,
      },
    },
  };
};
