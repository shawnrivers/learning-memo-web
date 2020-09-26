import { GetServerSideProps } from 'next';
import * as React from 'react';
import { StyledLink } from '../../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../../components/templates/TopicPage';
import { Note } from '../../../../data/data';

const DataFetchingNoteServerPage: React.FC<Props> = (props) => {
  return (
    <TopicPage
      heading='Data Fetching Note'
      headerButton={
        <StyledLink href='/next/data-fetching/server'>
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

export default DataFetchingNoteServerPage;

type Props = {
  data: {
    note: Note;
  } | null;
};

type Params = {
  id: string;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params, res } = context;

  const response = await fetch(`http://localhost:3000/api/note/${params.id}
  `);

  if (!response.ok) {
    res.writeHead(302, {
      Location: '/next/data-fetching/server',
    });

    res.end();

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
