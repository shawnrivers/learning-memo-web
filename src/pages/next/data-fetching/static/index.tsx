import { GetStaticProps } from 'next';
import * as React from 'react';
import { StyledLink } from '../../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../../components/templates/TopicPage';
import { Note } from '../../../../data/data';

const DataFetchingStaticPage: React.FC<Props> = (props) => {
  return (
    <TopicPage
      heading='Data Fetching (Static)'
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
              href='/next/data-fetching/static/[id]'
              as={`/next/data-fetching/static/${note.id}`}
            >
              {note.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </TopicPage>
  );
};

export default DataFetchingStaticPage;

type Props = {
  data: {
    notes: Note[];
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
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
