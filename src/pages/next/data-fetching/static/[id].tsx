import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { StyledLink } from '../../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../../components/templates/TopicPage';
import { Note } from '../../../../data/data';

const DataFetchingNoteStaticPage: React.FC<Props> = (props) => {
  return (
    <TopicPage
      heading='Data Fetching Note'
      headerButton={
        <StyledLink href='/next/data-fetching/static'>
          Back to Note List
        </StyledLink>
      }
    >
      {props.data ? (
        <section>
          <h2>Title: {props.data.note.title}</h2>
          <p>ID: {props.data.note.id}</p>
        </section>
      ) : null}
    </TopicPage>
  );
};

export default DataFetchingNoteStaticPage;

type Props = {
  data: {
    note: Note;
  } | null;
};

type Params = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await fetch('http://localhost:3000/api/note');
  const { data } = (await response.json()) as { data: Note[] };

  const paths = data.map((note) => ({ params: { id: note.id.toString() } }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { params } = context;

  const response = await fetch(`http://localhost:3000/api/note/${params.id}
  `);

  if (!response.ok) {
    return {
      props: {
        data: null,
      },
    };
  } else {
    const { data } = (await response.json()) as { data: Note };

    return {
      props: {
        data: {
          note: data,
        },
      },
    };
  }
};
