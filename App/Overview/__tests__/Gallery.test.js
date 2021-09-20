/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Gallery from '../Gallery.jsx';

describe('Gallery Functionality', function() {
  it('should render without throwing an error', function() {
    render(<Gallery />);
    expect(screen.getByTestId('gallery-container'));
  });

});