import React from 'react';
import './piano-note.css';

const ZERO = 0;

const STEM_X = '132.94351';
const STEM_Y = '79.62748';
const BASE_HEIGHT_SIXTEENTH_NOTE = 167.53473;
const BASE_HEIGHT = 129.53473;
const BASE_WIDTH = 3.5;
const SMALLER_STEM_Y = '117.62748';
const FLIPPED_STEM_X = '-72.072655';
const FLIPPED_STEM_Y = '-287.29202';
const SMALLER_FLIPPED_STEM_Y = '-264.29202';

export const NoteStem = ({ type, xshift = ZERO, yshift = ZERO, heightShift = ZERO }) => {
  const translate = `translate(${xshift},${yshift})`;

  if (type === 'sixteenth-note') {
    return (
      <g transform={translate}>
        <rect
          className='note-stem'
          x={STEM_X}
          y={STEM_Y}
          width={BASE_WIDTH}
          height={BASE_HEIGHT_SIXTEENTH_NOTE + heightShift}
          transform='matrix(0.99999308,0.00371988,-0.00256694,0.99999671,0,0)' />
      </g>
    );
  }
  else if (type !== 'whole-note') {
    return (
      <g transform={translate}>
        <rect
          className='note-stem'
          x={STEM_X}
          y={SMALLER_STEM_Y}
          width={BASE_WIDTH}
          height={BASE_HEIGHT + heightShift}
          transform='matrix(0.99999308,0.00371988,-0.00256694,0.99999671,0,0)' />
      </g>
    );
  }

  return null;
};

export const FlippedNoteStem = ({ type, xshift, yshift }) => {
  const translate = `translate(${xshift},${yshift})`;

  if (type === 'sixteenth-note') {
    return (
      <g transform={translate}>
        <rect
          className='note-stem'
          x={FLIPPED_STEM_X}
          y={FLIPPED_STEM_Y}
          width='2.7296242'
          height='167.53473'
          transform='matrix(-0.99999308,-0.00371988,0.00256694,-0.99999671,0,0)' />
      </g>
    );
  }
  else if (type !== 'whole-note') {
    return (
      <g transform={translate}>
        <rect
          className='note-stem'
          x={FLIPPED_STEM_X}
          y={SMALLER_FLIPPED_STEM_Y}
          width='2.7296242'
          height='144.53473'
          transform='matrix(-0.99999308,-0.00371988,0.00256694,-0.99999671,0,0)' />
      </g>
    );
  }

  return null;
};
