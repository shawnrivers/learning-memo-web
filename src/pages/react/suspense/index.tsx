import * as React from 'react';
import { StyledLink } from '../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../components/templates/TopicPage';

const SuspenseBasicPage: React.FC = () => {
  return (
    <TopicPage heading='Suspense'>
      <ul>
        <li>
          <StyledLink href='suspense/basics'>Basics</StyledLink>
        </li>
        <li>
          <StyledLink href='suspense/comparison'>
            Comparisons: fetch vs. SWR vs. Redux
          </StyledLink>
        </li>
      </ul>
    </TopicPage>
  );
};

export default SuspenseBasicPage;
