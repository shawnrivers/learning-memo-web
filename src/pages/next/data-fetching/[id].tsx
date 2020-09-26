import { GetServerSideProps } from 'next';
import * as React from 'react';
import { StyledLink } from '../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../components/templates/TopicPage';
import { Note } from '../../../data/data';

const DataFetchingNotePage: React.FC<Props> = (props) => {
  console.log({ props });

  return (
    <TopicPage
      heading='Data Fetching Note'
      headerButton={
        <StyledLink href='/next/data-fetching'>
          Back to Data Fetching
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

export default DataFetchingNotePage;

type Props = {
  data: {
    note: Note;
  } | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params, res, req } = context;

  const response = await fetch(`http://localhost:3000/api/note/${params.id}
  `);

  console.log({ response });

  if (!response.ok) {
    res.writeHead(302, {
      Location: '/next/data-fetching',
    });

    res.end();

    return {
      props: {
        data: null,
      },
    };
  } else {
    const { data } = await response.json();

    return {
      props: {
        data: {
          note: data,
        },
      },
    };
  }
};
