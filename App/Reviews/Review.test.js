/**
 * @jest-environment jsdom
 */
// import dependencies
import React from 'react';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
import Review from './Review';

describe('Review Functionality', function() {
  it('should render without throwing an error', function() {
    let dataParams = {
      date: 'may',
      reviewTitle: 'sdfasdfasdf',
      reviewBody: 'ASDFASDFASDFASDFADSF',
      helpfulCount: 3

    };
    render(<Review currentUser = {'Ben'} data = {dataParams} />);
    expect(screen.getByText('stars')).toBeInTheDocument();
  });


});