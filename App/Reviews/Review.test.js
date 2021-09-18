/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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