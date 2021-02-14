import React from 'react';
import './testdisplay.css';

const getCurrentMod = noteModifier => {
  const currentShowAccent = noteModifier.accent ? 'Accent' : '';
  const currentShowStacatto = noteModifier.stacatto ? 'Stacatto' : '';
  const currentShowFermata = noteModifier.fermata ? 'Fermata' : '';
  const currentShowRolled = noteModifier.rolled ? 'Rolled' : '';
  const currentAccidental = noteModifier.flat ? 'flat' : noteModifier.sharp ? 'sharp' : noteModifier.natural ? 'natural': '';

  return `${currentAccidental} ${currentShowAccent} ${currentShowStacatto} ${currentShowFermata} ${currentShowRolled}`;
};

const TestDisplay = ({ keySignature, timeSignature, row, pianoKey, noteType, noteModifier, musicalSymbol, pedal }) => {
  const renderRow = row.map((item, index) => {
    const mainSymbol = item.pianoKey || item.musicalSymbol;
    const showAccent = item.noteModifier.accent ? 'Accent' : '';
    const showStacatto = item.noteModifier.stacatto ? 'Stacatto' : '';
    const showFermata = item.noteModifier.fermata ? 'Fermata' : '';
    const showRolled = item.noteModifier.rolled ? 'Rolled' : '';
    const mod = `${item.noteModifier.accidental} ${showAccent} ${showStacatto} ${showFermata} ${showRolled}`;

    return (
      <div key={item.pianoKey || item.musicalSymbol + index} className="item">
        {mainSymbol}<br />
        {item.pianoKey && item.noteType}<br />
        {mod}<br />
        {item.pedal}
      </div>
    );
  });

  const currentMainSymbol = pianoKey || musicalSymbol;
  const currentMod = getCurrentMod(noteModifier);

  return (
    <div className="staff-container">
      {'Key Signature: ' + keySignature}<br />
      {'Time Signature: ' + timeSignature}<br />
      <div className="row">
        {renderRow}
      </div>
      <div>
        Selection: {currentMainSymbol || pianoKey} &nbsp;
        {pianoKey && noteType }
        {currentMod} <br/>
        {pedal}
      </div>
    </div>
  );
};

export default TestDisplay;