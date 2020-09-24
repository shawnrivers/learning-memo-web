import * as React from 'react';
import { useRouter } from 'next/router';
import { StyledLink } from '../../../components/atoms/styled/StyledLink';
import { TopicPage } from '../../../components/templates/TopicPage';

const IdPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.query)

  return (
    <TopicPage heading={`Route ${id}`}>
      <StyledLink href='/next/routes'>Back to Routes</StyledLink>
    </TopicPage>
  );
};

export default IdPage;
