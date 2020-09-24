import * as React from 'react';
import { StyledLink } from '../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../components/templates/TopicPage';

const notes = new Array(5)
  .fill(1)
  .map((e, i) => ({ id: i, title: `Note ${i}` }));

const NextRoutesPage: React.FC = () => {
  return (
    <TopicPage heading='Routes'>
      <section>
        <h2>First Way</h2>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <StyledLink
                href='/next/routes/[id]'
                as={`/next/routes/${note.id}`}
              >
                {note.title}
              </StyledLink>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Second Way</h2>
        <p>
          NOTE: link to <var>/next/routes/[id]?id=</var>
        </p>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <StyledLink
                href={{ pathname: '/next/routes/[id]', query: { id: note.id } }}
              >
                {note.title}
              </StyledLink>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Third Way</h2>
        <p>NOTE: not CSR</p>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <StyledLink href={`/next/routes/${note.id}`}>
                {note.title}
              </StyledLink>
            </li>
          ))}
        </ul>
      </section>
    </TopicPage>
  );
};

export default NextRoutesPage;
