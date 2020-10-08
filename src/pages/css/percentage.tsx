/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

const PercentagePage: React.FC = () => {
  return (
    <TopicPage heading='Percentage'>
      <figure
        css={css`
          margin: 24px;
        `}
      >
        <div
          css={css`
            border: 4px solid purple;
            width: 400px;
            height: 300px;
          `}
        >
          <code>width: 400px; height: 300px;</code>
          <div
            css={css`
              width: 30%;
              margin: 10%;
              padding: 10%;
              background-color: #bbbbbb;
            `}
          >
            <code>
              width: 30%; <br />
              padding: 10%; <br />
              margin: 10%
            </code>
          </div>
        </div>
        <figcaption>
          <ul>
            <li>
              <code>width = 30% * 400px = 120px</code>
            </li>
            <li>
              <code>margin = 10% * 400px = 40px</code>
            </li>
            <li>
              <code>padding = 10% * 400px = 40px</code>
            </li>
          </ul>
        </figcaption>
      </figure>
      <figure
        css={css`
          margin: 24px;
        `}
      >
        <div
          css={css`
            border: 4px solid purple;
            width: 400px;
            height: 300px;
          `}
        >
          <code>width: 400px; height: 300px;</code>
          <div
            css={css`
              width: 50%;
              margin: 20%;
              padding: 20%;
              background-color: #bbbbbb;
            `}
          >
            <code>
              width: 50%; <br />
              padding: 20%; <br />
              margin: 20%
            </code>
          </div>
        </div>
        <figcaption>
          <ul>
            <li>
              <code>width = 50% * 400px = 200px</code>
            </li>
            <li>
              <code>margin = 20% * 400px = 80px</code>
            </li>
            <li>
              <code>padding = 20% * 400px = 80px</code>
            </li>
          </ul>
        </figcaption>
      </figure>
    </TopicPage>
  );
};

export default PercentagePage;
