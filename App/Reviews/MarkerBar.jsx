import React from 'react';
import ReactDOM from 'react-dom';
import './MarkerBar.css';

const MarkerBar = function(props) {
  // eslint-disable-next-line one-var
  let showS1, showS2, showS3 = false;
  let style = function(percent) {
    let modifiedStyle = {
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '16px solid green',
      marginLeft: percent + '%'
    };
    return modifiedStyle;
  };
  let floatVal = parseFloat(props.value);
  let pct = (floatVal / 5) * 100;
  let styleInput;
  console.log(pct, 'percent for markerBar');
  if (pct >= 0 && pct < 33.33) {
    showS1 = true;
    styleInput = (pct / 33.33) * 100;
  } else if (pct >= 33.33 && pct < 66.66) {
    showS2 = true;
    styleInput = ((pct - 33.33) / 33.33) * 100;
  } else {
    showS3 = true;
    styleInput = ((pct - 66.66) / 33.34) * 100;
  }

  return (
    <>
      <p>{props.char}</p>
      <div id = {'markerBarContainer'}>
        <div id = {'firstContainer'}>
          <div id = {'firstBar'}>
            {showS1 ? <div id = 'indicator' style = {style(styleInput)}></div> : null}
          </div>
          <div>
            {'Poor'}
          </div>
        </div>
        <div id = {'secondContainer'}>
          <div id = {'secondBar'} >
            {showS2 ? <div id = 'indicator' style = {style(styleInput)}></div> : null}
          </div>
          <div>
            {'Average'}
          </div>
        </div>
        <div id = {'thirdContainer'}>
          <div id = {'thirdBar'}>
            {showS3 ? <div id = 'indicator' style = {style(styleInput)}></div> : null}
          </div>
          <div> {'Perfect'}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkerBar;