import React, { Fragment } from 'react';
import {
  renderFlippedNoteFlag,
  renderFlippedNoteHead,
  renderFlippedNoteStem,
  renderNoteFlag,
  renderNoteHead,
  renderNoteStem
} from './DrawPianoNote';
import {
  renderRestNote
} from './DrawMusicSymbol';

const keyList = [
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6'
];

const renderPianoKey = (pianoKey, noteType) => {
  const keyIndex = keyList.findIndex(key => key === pianoKey);
  const shouldFlip = keyIndex > 34 ? true : false;

  return (
    <svg height='1in' width='1in' viewBox='0 0 210 297'>
      {shouldFlip ? renderFlippedNoteHead(noteType) : renderNoteHead(noteType)}
      {shouldFlip ? renderFlippedNoteStem(noteType) : renderNoteStem(noteType)}
      {shouldFlip ? renderFlippedNoteFlag(noteType) : renderNoteFlag(noteType)}
    </svg >
  );
};

const renderMusicSymbol = (musicalSymbol) => {
  return (
    <svg height='1in' width='1in' viewBox='0 0 210 297'>
      { renderRestNote(musicalSymbol)}
    </svg >
  );
};

const Draw = ({ musicalSymbol, pianoKey, noteType }) => {

  return (
    <Fragment>
      {musicalSymbol ? renderMusicSymbol(musicalSymbol) : renderPianoKey(pianoKey, noteType)}
    </Fragment>

  );
};

export default Draw;