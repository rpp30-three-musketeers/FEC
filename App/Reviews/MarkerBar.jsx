import React from 'react';
import ReactDOM from 'react-dom';
import './MarkerBar.css';

const MarkerBar = function(props) {
  console.log(props, 'marker props');
  return (
    <>
      <p>{props.char}</p>
      <div id = {'markerBarContainer'}>
        <div id = {'firstContainer'}>
          <div id = {'firstBar'}>
          </div>
          <div> {'Poor'}
          </div>
        </div>
        <div id = {'secondContainer'}>
          <div id = {'secondBar'}>
          </div>
          <div> {'Average'}
          </div>
        </div>
        <div id = {'thirdContainer'}>
          <div id = {'thirdBar'}>
          </div>
          <div> {'Perfect'}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkerBar;