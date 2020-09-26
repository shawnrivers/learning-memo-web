import { GetServerSideProps } from 'next';
import * as React from 'react';
import { StyledLink } from '../../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../../components/templates/TopicPage';
import { Note } from '../../../../data/data';

const DataFetchingServerPage: React.FC<Props> = (props) => {
  return (
    <TopicPage
      heading='Data Fetching (Server)'
      headerButton={
        <StyledLink href='/next/data-fetching'>
          Back to Data Fetching
        </StyledLink>
      }
    >
      <ul>
        {props.data.notes.map((note) => (
          <li key={note.id}>
            <StyledLink
              href='/next/data-fetching/server/[id]'
              as={`/next/data-fetching/server/${note.id}`}
            >
              {note.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </TopicPage>
  );
};

export default DataFetchingServerPage;

type Props = {
  data: {
    notes: Note[];
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3000/api/note');
  const { data } = (await response.json()) as { data: Note[] };

  return {
    props: {
      data: {
        notes: data,
      },
    },
  };
};
