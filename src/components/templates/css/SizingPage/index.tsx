/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Divider } from '../../../atoms/Divider';
import { TopicPage } from '../../TopicPage';
import { Container } from './components/Container';
import { ExampleBlock } from './components/ExampleBlock';
import { Spacer } from './components/Spacer';

const TEXT_A = 'Lorem ipsum dolor sit amet.';
const TEXT_B = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Etiam tempus euismod fermentum.
  Nulla eget blandit ligula.
  Duis idiaculis orci.`;
const TEXT_C = 'LoremipsumdolorsitametconsecteturLoremis sal rhoncus.';

const DefaultSizingSection: React.FC = () => {
  return (
    <section>
      <h2>Default Sizing</h2>
      <section>
        <h3>Inline boxes</h3>
        <p>
          Without specifying the size, an inline box's width is the width of its
          content, and its height is the height of its content.
        </p>
        <p>
          Its size will also be constrained by its parent element's size.
          <ul>
            <li>
              min-content {'<'} inline size {'<'} parent's inline size
            </li>
            <li>
              block size = content height (after calculating the inline size)
            </li>
          </ul>
        </p>
        <ExampleBlock>
          <Container fixedWidth>
            <span>{TEXT_A}</span>
          </Container>
          <Spacer />
          <Container fixedWidth>
            <span>{TEXT_B}</span>
          </Container>
          <Spacer />
          <Container fixedWidth>
            <span>{TEXT_C}</span>
          </Container>
        </ExampleBlock>
      </section>

      <section>
        <h3>Block boxes</h3>
        <p>
          Without specifying the size, a block box's width is 100% of its
          parent's width, and its height is the height of its content.
        </p>
        <ExampleBlock>
          <Container fixedWidth>
            <p>{TEXT_A}</p>
          </Container>
          <Spacer />
          <Container fixedWidth>
            <p>{TEXT_B}</p>
          </Container>
          <Spacer />
          <Container fixedWidth>
            <p>{TEXT_C}</p>
          </Container>
        </ExampleBlock>
      </section>

      <section>
        <h3>Replaced elements</h3>
        <p>
          Without specifying the size, for an element like{' '}
          <code>{'<img>'}</code> and <code>{'<video>'}</code>, its width and
          height are the width and height of the resource.
        </p>
        <ExampleBlock>
          <Container fixedWidth>
            <img src='/avatar.jpg' />
          </Container>
        </ExampleBlock>
      </section>
    </section>
  );
};

const sizedStyles = css`
  width: 200px;
  height: 200px;
`;

const percentageSizedStyles = css`
  width: 80%;
  height: 60%;
`;

const maxSizedStyles = css`
  max-width: 200px;
  max-height: 200px;
`;

const minSizedStyles = css`
  min-width: 200px;
  min-height: 200px;
`;

const SpecifiedSizingSection: React.FC = () => {
  return (
    <section>
      <h2>Specified Sizing</h2>
      <section>
        <h3>Inline boxes</h3>
        <p>Specifying the size will have no influence on inline boxes.</p>
        <p>
          Even specifying the size, an inline box's width is the width of its
          content, and its height is the height of its content.
        </p>
        <ExampleBlock
          caption={
            <>
              Specifying <code>width: 200px; height: 80px;</code>
            </>
          }
        >
          <Container fixedWidth>
            <span css={sizedStyles}>{TEXT_A}</span>
          </Container>
          <Spacer />
          <Container fixedWidth>
            <span css={sizedStyles}>{TEXT_B}</span>
          </Container>
          <Spacer />
          <Container fixedWidth>
            <span css={sizedStyles}>{TEXT_C}</span>
          </Container>
        </ExampleBlock>
      </section>

      <section>
        <h3>Block boxes</h3>
        <section>
          <p>
            With specifying the <code>width</code> and <code>height</code>, a
            block box's width equals to the specified <code>width</code>, and
            its height equals to the <code>height</code>.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying <code>width: 200px; height: 80px;</code>
              </>
            }
          >
            <Container fixedWidth>
              <p css={sizedStyles}>{TEXT_A}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={sizedStyles}>{TEXT_B}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={sizedStyles}>{TEXT_C}</p>
            </Container>
          </ExampleBlock>
          <ExampleBlock
            caption={
              <>
                Specifying <code>width: 80%; height: 60%;</code>
              </>
            }
          >
            <Container fixedWidth>
              <p css={percentageSizedStyles}>{TEXT_A}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={percentageSizedStyles}>{TEXT_B}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={percentageSizedStyles}>{TEXT_C}</p>
            </Container>
          </ExampleBlock>
        </section>
        <section>
          <p>
            For a block box element, specifying <code>max-width</code> (
            <code>min-width</code>), its content width will be the width of its
            content, but not larger (smaller) than the value of{' '}
            <code>max-width</code> (<code>min-width</code>). The same works for{' '}
            <code>max-height</code> and <code>min-height</code>.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying <code>max-width: 200px; max-height: 80px;</code>
              </>
            }
          >
            <Container fixedWidth>
              <p css={maxSizedStyles}>{TEXT_A}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={maxSizedStyles}>{TEXT_B}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={maxSizedStyles}>{TEXT_C}</p>
            </Container>
          </ExampleBlock>
          <Spacer />
          <ExampleBlock
            caption={
              <>
                Specifying <code>min-width: 200px; min-height: 80px;</code>
              </>
            }
          >
            <Container fixedWidth>
              <p css={minSizedStyles}>{TEXT_A}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={minSizedStyles}>{TEXT_B}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={minSizedStyles}>{TEXT_C}</p>
            </Container>
          </ExampleBlock>
        </section>
      </section>

      <section>
        <h3>Replaced elements</h3>
        <section>
          <p>
            With specifying the <code>width</code> and <code>height</code>, a
            replace element's width equals to the specified <code>width</code>,
            and its height equals to the <code>height</code>.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying <code>width: 200px; height: 250px;</code>
              </>
            }
          >
            <Container fixedWidth>
              <img src='/avatar.jpg' css={sizedStyles} />
            </Container>
          </ExampleBlock>
          <ExampleBlock
            caption={
              <>
                Specifying <code>width: 80%; height: 60%;</code>
              </>
            }
          >
            <Container fixedWidth>
              <img src='/avatar.jpg' css={percentageSizedStyles} />
            </Container>
          </ExampleBlock>
        </section>
        <section>
          <p>
            For a replaced box element, specifying <code>max-width</code> (
            <code>min-width</code>), its content width will be the width of its
            resource, but not larger (smaller) than the value of{' '}
            <code>max-width</code> (<code>min-width</code>). The same works for
            <code>max-height</code> and <code>min-height</code>.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying <code>max-width: 200px; max-height: 250px;</code>
              </>
            }
          >
            <Container fixedWidth>
              <img src='/avatar.jpg' css={maxSizedStyles} />
            </Container>
          </ExampleBlock>
          <Spacer />
          <ExampleBlock
            caption={
              <>
                Specifying <code>min-width: 200px; min-height: 250px;</code>
              </>
            }
          >
            <Container fixedWidth>
              <img src='/avatar.jpg' css={minSizedStyles} />
            </Container>
          </ExampleBlock>
        </section>
      </section>
    </section>
  );
};

const contentBoxStyles = css`
  box-sizing: content-box;
  padding: 8px;
  margin: 8px;
`;

const borderBoxStyles = css`
  box-sizing: border-box;
  padding: 8px;
  margin: 8px;
`;

const BoxSizingSection: React.FC = () => {
  return (
    <section>
      <h2>Box Sizing</h2>
      <section>
        <h3>Inline boxes</h3>
        <section>
          <p>
            For an inline box element, its width is its content width + LR
            padding + border size, and its height is its content height + TB
            padding + border size.
          </p>
          <p>
            But the padding and border sizing will not push its siblings away,
            and will not be counted in the content size of its parent.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying <code>padding: 8px; margin: 8px;</code>
              </>
            }
          >
            <Container fixedWidth>
              <span css={contentBoxStyles}>{TEXT_A}</span>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <span css={contentBoxStyles}>{TEXT_B}</span>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <span css={contentBoxStyles}>{TEXT_C}</span>
            </Container>
          </ExampleBlock>
        </section>
        <section>
          <p>
            With <code>box-sizing: border-box</code>, an inline box element's
            width will be its content width, and its height will be its content
            height.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying{' '}
                <code>padding: 8px; margin: 8px; box-sizing: border-box</code>
              </>
            }
          >
            <Container fixedWidth>
              <span css={borderBoxStyles}>{TEXT_A}</span>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <span css={borderBoxStyles}>{TEXT_B}</span>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <span css={borderBoxStyles}>{TEXT_C}</span>
            </Container>
          </ExampleBlock>
        </section>
      </section>

      <section>
        <h3>Block boxes</h3>
        <section>
          <p>
            For a block box element, its width is its content width (specified
            width) + LR padding + border size, and its height is its content
            height (specified height) + TB padding + border size.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying{' '}
                <code>
                  width: 200px; height: 80px; padding: 8px; margin: 8px;
                </code>
              </>
            }
          >
            <Container fixedWidth>
              <p css={[contentBoxStyles, sizedStyles]}>{TEXT_A}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={[contentBoxStyles, sizedStyles]}>{TEXT_B}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={[contentBoxStyles, sizedStyles]}>{TEXT_C}</p>
            </Container>
          </ExampleBlock>
        </section>
        <section>
          <p>
            With <code>box-sizing: border-box</code>, an block box element's
            width will be its content width (specified width), and its height
            will be its content height (specified width).
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying{' '}
                <code>
                  width: 200px; height: 80px; padding: 8px; margin: 8px;
                  box-sizing: border-box;
                </code>
              </>
            }
          >
            <Container fixedWidth>
              <p css={[borderBoxStyles, sizedStyles]}>{TEXT_A}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={[borderBoxStyles, sizedStyles]}>{TEXT_B}</p>
            </Container>
            <Spacer />
            <Container fixedWidth>
              <p css={[borderBoxStyles, sizedStyles]}>{TEXT_C}</p>
            </Container>
          </ExampleBlock>
        </section>
      </section>

      <section>
        <h3>Replaced elements</h3>
        <section>
          <p>
            For a replaced box element, its width is its content width
            (specified width) + LR padding + border size, and its height is its
            content height (specified height) + TB padding + border size.
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying{' '}
                <code>
                  width: 200px; height: 250px; padding: 8px; margin: 8px;
                </code>
              </>
            }
          >
            <Container fixedWidth>
              <img src='/avatar.jpg' css={[contentBoxStyles, sizedStyles]} />
            </Container>
          </ExampleBlock>
        </section>
        <section>
          <p>
            With <code>box-sizing: border-box</code>, an block box element's
            width will be its content width (specified width), and its height
            will be its content height (specified width).
          </p>
          <ExampleBlock
            caption={
              <>
                Specifying{' '}
                <code>
                  width: 200px; height: 250px; padding: 8px; margin: 8px;
                  box-sizing: border-box;
                </code>
              </>
            }
          >
            <Container fixedWidth>
              <img src='/avatar.jpg' css={[borderBoxStyles, sizedStyles]} />
            </Container>
          </ExampleBlock>
        </section>
      </section>
    </section>
  );
};

const CSSSizingPage: React.FC = () => {
  return (
    <TopicPage heading='Sizing'>
      <DefaultSizingSection />
      <Divider />
      <SpecifiedSizingSection />
      <Divider />
      <BoxSizingSection />
    </TopicPage>
  );
};

export default CSSSizingPage;
