import React, { Fragment } from 'react';
import './draw-piano-note.css';

export const renderWholeNote = () => {
  return (
    <Fragment>
      <ellipse
        className="note-head"
        cx="-82.805458"
        cy="-255.27422"
        rx="33.469791"
        ry="23.018749"
        transform="rotate(176.96693)" />
      <ellipse
        className="whitewhole-notehead"
        cx="-32.653008"
        cy="262.86511"
        rx="14.159471"
        ry="20.443333"
        transform="matrix(0.81850018,-0.57450628,0.47157607,0.88182539,0,0)" />
    </Fragment>
  );
};

export const renderFlippedNoteHead = (type) => {
  if (type === 'whole-note') {
    return renderWholeNote();
  }
  else if (type === 'half-note') {
    return (
      <Fragment>
        <ellipse
          className="note-head"
          cx="-47.021908"
          cy="-142.20645"
          rx="33.469791"
          ry="23.018749"
          transform="rotate(158.33661)" />
        <rect
          className="halfnote-whitehead"
          width='62.962799'
          height='23.84276'
          x='22.261833'
          y='130.5632'
          ry='11.92138'
          transform='matrix(0.93550633,-0.35330994,0.32685128,0.94507579,0,0)' />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ellipse
        className="note-head"
        cx="-47.021908"
        cy="-142.20645"
        rx="33.469791"
        ry="23.018749"
        transform="rotate(158.33661)" />
    </Fragment>
  );
};

export const renderFlippedNoteStem = (type) => {
  if (type === 'sixteenth-note') {
    return (
      <rect
        className="note-stem"
        width="1.7296242"
        height="167.53473"
        x="-66.072655"
        y="-287.29202"
        transform="matrix(-0.99999308,-0.00371988,0.00256694,-0.99999671,0,0)" />
    );
  }
  else if (type !== 'whole-note') {
    return (
      <rect
        className="note-stem"
        width="1.7296242"
        height="144.53473"
        x="-66.072655"
        y="-264.29202"
        transform="matrix(-0.99999308,-0.00371988,0.00256694,-0.99999671,0,0)" />
    );
  }

  return;
};

export const renderFlippedNoteFlag = (type) => {
  if (type === 'sixteenth-note') {
    return (
      <Fragment>
        <path
          className="note-flag"
          d="m 105.78776,158.13301 c -0.0164,0.22775 -4.31729,-16.20049 -3.92943,-13.64981 2.42727,15.96632 6.31222,46.90152 1.37432,55.91549 -4.48172,8.18117 -11.59427,13.41885 -22.99869,16.93615 -3.5674,1.10026 -14.0341,0.79471 -15.32866,0.79277 -0.72232,-8.7e-4 -0.36903,5.62561 -0.009,20.77735 0.86402,36.36241 0.43856,22.39705 1.45895,11.04843 4.73363,-13.14167 10.68696,-18.2754 24.5507,-30.06682 9.27311,-7.88696 12.77446,-11.40174 15.67205,-15.73218 6.24982,-9.34041 5.94405,-19.54368 1.4082,-36.44582 -1.32154,-4.92454 -2.19845,-9.57555 -2.19845,-9.57555 z"
        />
        <path
          className="note-flag"
          d="m 111.12572,203.4264 c -0.0317,0.22612 -3.21563,-16.45464 -3.00056,-13.88361 1.3457,16.0936 3.13692,47.22031 -2.39725,55.88099 -5.02291,7.86051 -12.472261,12.60693 -24.087801,15.34763 -3.63345,0.85733 -14.10783,0.13172 -15.34724,-0.24211 -0.82088,-0.24759 -1.83889,1.90724 -1.40928,20.7295 0.14637,6.41269 -1.54708,3.9717 0,0 5.60856,-12.79277 12.60535,-6.39196 27.23227,-17.22222 9.783551,-7.24406 13.513821,-10.51487 16.696681,-14.64019 6.86511,-8.89796 7.24768,-19.09864 3.86128,-36.26804 -0.98665,-5.00241 -1.54811,-9.70195 -1.54811,-9.70195 z"
        />
      </Fragment>
    );
  }
  else if (type === 'eighth-note') {
    return (
      <path
        className="note-flag"
        d="m 105.78776,158.13301 c -0.0164,0.22775 -4.31729,-16.20049 -3.92943,-13.64981 2.42727,15.96632 6.31222,46.90152 1.37432,55.91549 -4.48172,8.18117 -11.59427,13.41885 -22.99869,16.93615 -3.5674,1.10026 -14.0341,0.79471 -15.32866,0.79277 -0.72232,-8.7e-4 -0.36903,5.62561 -0.009,20.77735 0.86402,36.36241 0.43856,22.39705 1.45895,11.04843 4.73363,-13.14167 10.68696,-18.2754 24.5507,-30.06682 9.27311,-7.88696 12.77446,-11.40174 15.67205,-15.73218 6.24982,-9.34041 5.94405,-19.54368 1.4082,-36.44582 -1.32154,-4.92454 -2.19845,-9.57555 -2.19845,-9.57555 z"
      />
    );
  }

  return;
};

export const renderNoteHead = (type) => {
  if (type === 'whole-note') {
    return renderWholeNote();
  }
  if (type === 'half-note') {
    return (
      <Fragment>
        <ellipse
          className="note-head"
          cx="-7.9447203"
          cy="279.65167"
          rx="33.469791"
          ry="23.018749"
          transform="rotate(-21.66339)" />
        <rect
          className="halfnote-whitehead"
          width='62.962799'
          height='23.84276'
          x='-26.261833'
          y='267.5632'
          ry='11.92138'
          transform='matrix(0.93550633,-0.35330994,0.32685128,0.94507579,0,0)' />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <ellipse
        className="note-head"
        cx="-7.9447203"
        cy="279.65167"
        rx="33.469791"
        ry="23.018749"
        transform="rotate(-21.66339)" />
    </Fragment>
  );
};

export const renderNoteStem = (type) => {
  if (type === 'sixteenth-note') {
    return (
      <rect
        className="note-stem"
        width="1.7296242"
        height="167.53473"
        x="126.94351"
        y="89.62748"
        transform="matrix(0.99999308,0.00371988,-0.00256694,0.99999671,0,0)" />
    );
  }
  else if (type !== 'whole-note') {
    return (
      <rect
        className="note-stem"
        width="1.7296242"
        height="129.53473"
        x="126.94351"
        y="127.62748"
        transform="matrix(0.99999308,0.00371988,-0.00256694,0.99999671,0,0)" />
    );
  }

  return;
};

export const renderNoteFlag = (type) => {
  if (type === 'sixteenth-note') {
    return (
      <Fragment>
        <path
          className="note-flag"
          d="m 168.49401,232.27887 c -0.0164,-0.22775 -4.31729,16.20049 -3.92943,13.64981 2.42727,-15.96632 6.31222,-46.90152 1.37432,-55.91549 -4.48172,-8.18117 -11.59427,-13.41885 -22.99869,-16.93615 -3.5674,-1.10026 -14.0341,-0.79471 -15.32866,-0.79277 -0.72232,8.7e-4 -0.36903,-5.62561 -0.009,-20.77735 0.86402,-36.36241 0.43856,-22.39705 1.45895,-11.04843 4.73363,13.14167 10.68696,18.2754 24.5507,30.06682 9.27311,7.88696 12.77446,11.40174 15.67205,15.73218 6.24982,9.34041 5.94405,19.54368 1.4082,36.44582 -1.32154,4.92454 -2.19845,9.57555 -2.19845,9.57555 z"
        />
        <path
          className="note-flag"
          d="m 173.83198,171.30437 c -0.0317,-0.22612 -3.21563,16.45463 -3.00056,13.8836 1.3457,-16.09359 3.13692,-47.2203 -2.39725,-55.88098 -5.02291,-7.86051 -12.47227,-12.60693 -24.08781,-15.34763 -3.63345,-0.85733 -14.10783,-0.13172 -15.34724,0.24211 -0.82088,0.24759 -1.83889,-1.90724 -1.40928,-20.729497 0.14637,-6.41269 -1.54708,-3.9717 0,0 5.60856,12.792767 12.60535,6.39196 27.23227,17.222217 9.78356,7.24406 13.51383,10.51487 16.69669,14.64019 6.86511,8.89796 7.24768,19.09864 3.86128,36.26804 -0.98665,5.00241 -1.54811,9.70195 -1.54811,9.70195 z"
        />
      </Fragment>
    );
  }
  else if (type === 'eighth-note') {
    return (
      <path
        className="note-flag"
        d="m 168.49401,232.27887 c -0.0164,-0.22775 -4.31729,16.20049 -3.92943,13.64981 2.42727,-15.96632 6.31222,-46.90152 1.37432,-55.91549 -4.48172,-8.18117 -11.59427,-13.41885 -22.99869,-16.93615 -3.5674,-1.10026 -14.0341,-0.79471 -15.32866,-0.79277 -0.72232,8.7e-4 -0.36903,-5.62561 -0.009,-20.77735 0.86402,-36.36241 0.43856,-22.39705 1.45895,-11.04843 4.73363,13.14167 10.68696,18.2754 24.5507,30.06682 9.27311,7.88696 12.77446,11.40174 15.67205,15.73218 6.24982,9.34041 5.94405,19.54368 1.4082,36.44582 -1.32154,4.92454 -2.19845,9.57555 -2.19845,9.57555 z"
      />
    );
  }

  return;
};