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
        {props.data.notes.map((note) => (
          <li key={note.id}>
            <StyledLink
              href='/next/data-fetching/[id]'
              as={`/next/data-fetching/${note.id}`}
            >
              {note.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </TopicPage>
  );
};

export default DataFetchingPage;

type Props = {
  data: {
    notes: Note[];
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3000/api/note');
  const { data } = await response.json();

  return {
    props: {
      data: {
        notes: data,
      },
    },
  };
};
