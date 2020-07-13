import * as React from 'react';
import { StyledButton } from '../../components/atoms/styled/StyledButton';
import { StyledLink } from '../../components/atoms/styled/StyledLink';
import { Layout } from '../../components/templates/Layout';
import { homeRoutes } from '../../constants/routes';

export type HomePageProps = {
  isCodeSplitOn: boolean;
  onSwitchCodeSplit(): void;
};

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <Layout
      headerButton={
        <StyledButton onClick={props.onSwitchCodeSplit}>
          Code Split {!props.isCodeSplitOn ? 'ON' : 'OFF'}
        </StyledButton>
      }
    >
      <h1>Learning Memo</h1>
      <ul>
        {homeRoutes.map(({ to, name }) => (
          <li key={name}>
            <StyledLink to={to} className='Page-link'>
              {name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default HomePage;
