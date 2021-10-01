import React from 'react';
import ReactDOM from 'react-dom';
import './RatedBar.css';

const RatedBar = function(props) {
  return (
    <div id = 'ratedBar'>
      <div id= 'star'>{props.star + ' stars'}</div>
      <div id = {'fullBar'}>
        <div id = {'pctBar'} style = {
          {backgroundColor: 'green',
            width: props.pctTotal,
            height: '100%'}
        }></div>
      </div>
      <div id = {'count'}>{' (' + props.count + ')'}</div>
    </div>

  );
};

export default RatedBar;