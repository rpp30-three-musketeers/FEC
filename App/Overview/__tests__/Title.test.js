/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from '../Title.jsx';

describe('Title Functionality', function() {
  it('should render without throwing an error', function() {
    render(<Title />);
    expect(screen.getByTestId('title-container'));
  });

});