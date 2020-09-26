import * as React from 'react';
import { StyledLink } from '../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../components/templates/TopicPage';

const DataFetchingPage: React.FC = () => {
  return (
    <TopicPage
      heading='Data Fetching'
      headerButton={<StyledLink href='/next'>Back to Next.js</StyledLink>}
    >
      <section>
        <h2>Rendering Methods</h2>
        <ul>
          <li>
            <StyledLink href='/next/data-fetching/server'>
              Server Side Rendered
            </StyledLink>
          </li>
          <li>
            <StyledLink href='/next/data-fetching/static'>
              Static Generated
            </StyledLink>
          </li>
        </ul>
      </section>
    </TopicPage>
  );
};

export default DataFetchingPage;
