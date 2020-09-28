/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { motion } from 'framer-motion';
import { TopicPage } from '../../components/templates/TopicPage';

const FramerMotionDragPage: React.FC = () => {
  return (
    <TopicPage heading='Drag'>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        dragMomentum={true}
        css={css`
          display: inline-block;
          background-color: #555;
          padding: 12px 24px;
          border-radius: 12px;
        `}
      >
        <h2
          css={css`
            color: #fff;
          `}
        >
          Test
        </h2>
      </motion.div>
    </TopicPage>
  );
};

export default FramerMotionDragPage;
