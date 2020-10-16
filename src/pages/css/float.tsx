/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

const FloatPage: React.FC = () => {
  return (
    <TopicPage heading='Learning float'>
      <div
        css={css`
          p {
            background-color: rgb(79, 185, 227);
            color: white;
            margin: 1rem 0;
          }
        `}
      >
        <section>
          <h2>Float</h2>
          <Box
            css={css`
              float: left;
            `}
          >
            Float
          </Box>
          <p>{LOREM1}</p>
          <p>{LOREM2}</p>
          <p>{LOREM3}</p>
        </section>
        <section>
          <h2>Inline Block</h2>
          <p>
            <Box
              css={css`
                display: inline-block;
              `}
            >
              Inline Block
            </Box>
            <span>{LOREM1}</span>
          </p>
          <p>{LOREM2}</p>
          <p>{LOREM3}</p>
        </section>
        <section>
          <h2>Block</h2>
          <Box>Block</Box>
          <p>{LOREM1}</p>
          <p>{LOREM2}</p>
          <p>{LOREM3}</p>
        </section>
        <section>
          <h2>Box wrapping around float</h2>
          <section>
            <h3>Problem</h3>
            <div
              css={css`
                background-color: rgb(140, 90, 227);
                padding: 1rem;
              `}
            >
              <Box
                css={css`
                  float: left;
                `}
              >
                Float
              </Box>
              <p>{LOREM1.slice(0, 100)}</p>
            </div>
            <p>{LOREM2}</p>
            <p>{LOREM3}</p>
          </section>
          <section>
            <h3>
              Solution 1 <code>:after</code> + <code>clear</code>
            </h3>
            <div
              css={css`
                background-color: rgb(140, 90, 227);
                padding: 1rem;

                &:after {
                  content: '';
                  display: block;
                  clear: left;
                }
              `}
            >
              <Box
                css={css`
                  float: left;
                `}
              >
                Float
              </Box>
              <p>{LOREM1.slice(0, 100)}</p>
            </div>
            <p>{LOREM2}</p>
            <p>{LOREM3}</p>
          </section>
          <section>
            <h3>
              Solution 2: use <code>display: flow-root</code> to create block
              formatting context
            </h3>
            <div
              css={css`
                background-color: rgb(140, 90, 227);
                padding: 1rem;
                display: flow-root;
              `}
            >
              <Box
                css={css`
                  float: left;
                `}
              >
                Float
              </Box>
              <p>{LOREM1.slice(0, 100)}</p>
            </div>
            <p>{LOREM2}</p>
            <p>{LOREM3}</p>
          </section>
        </section>
      </div>
    </TopicPage>
  );
};

export default FloatPage;

const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, ...divProps } = props;

  return (
    <div
      css={css`
        width: 150px;
        height: 100px;
        border-radius: 5px;
        background-color: rgb(207, 232, 220);
        color: black;
        margin: 1rem;
        padding: 1rem;
      `}
      {...divProps}
    >
      {children}
    </div>
  );
};

const LOREM1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
ultricies tellus laoreet sit amet.`;

const LOREM2 = `Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.`;

const LOREM3 = `Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;
