/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RightColumn from './RightColumn';

describe('RightColumn Functionality', function() {
  it('should render without throwing an error', function() {
    render(<RightColumn reviewCount = {10} sortedBy = {'Relevance'} />);
    expect(screen.getByText('10 reviews, sorted by Relevance')).toBeInTheDocument();
  });

});