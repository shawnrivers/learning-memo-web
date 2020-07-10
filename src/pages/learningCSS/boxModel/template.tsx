/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { BackButton } from '../../../components/atoms/buttons/BackButton';
import { Layout } from '../../../components/templates/Layout';

const Container = styled.div`
  background-color: #f39d9dcc;
  padding: 4px;
  margin: 16px;
`;

const contentStyles = css`
  background-color: #1e89d499;
  padding: 8px;
`;

export const BoxModelPage: React.FC = () => {
  return (
    <Layout headerButton={<BackButton />}>
      <h1>Box Model</h1>

      <h2>Default Width of block level boxes</h2>
      <h3>div with default width</h3>
      <Container>
        <div
          css={css`
            ${contentStyles};
            width: auto;
          `}
        >
          These are a lot of characters.
        </div>
      </Container>
      <h3>div with 100% width</h3>
      <Container>
        <div
          css={css`
            ${contentStyles};
            width: 100%;
          `}
        >
          These are a lot of characters.
        </div>
      </Container>
      <h3>span with default width (inline)</h3>
      <Container>
        <span
          css={css`
            ${contentStyles}
          `}
        >
          These are a lot of characters.
        </span>
      </Container>
      <h3>button with default width (inline-block)</h3>
      <Container>
        <button
          css={css`
            ${contentStyles}
            color: white;
          `}
        >
          These are a lot of characters.
        </button>
      </Container>

      <hr />

      <h2>Inline Elements</h2>
      <Container>
        <span
          css={css`
            ${contentStyles}
          `}
        >
          These are a lot of characters.
        </span>
      </Container>
      <Container>
        <span
          css={css`
            ${contentStyles}
          `}
        >
          These are a lot of characters. These are a lot of characters. These
          are a lot of characters. These are a lot of characters. These are a
          lot of characters. These are a lot of characters.
        </span>
      </Container>

      <hr />

      <h2>Absolute Boxes with No Width</h2>
      <Container>
        <div
          css={css`
            ${contentStyles};
            position: absolute;
          `}
        >
          These are a lot of characters.
        </div>
      </Container>

      <hr />

      <h2>Floated Boxes With No Width</h2>
      <Container>
        <div
          css={css`
            ${contentStyles};
            float: left;
          `}
        >
          These are a lot of characters.
        </div>
      </Container>
    </Layout>
  );
};
