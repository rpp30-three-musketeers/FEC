/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Overview from '../Overview.jsx';

describe('Overview Functionality', function() {
  it('should render without throwing an error', function() {
    render(<Overview />);
    expect(screen.getByTestId('overview-container'));
  });

});