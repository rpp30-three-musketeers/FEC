/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Features from '../Features.jsx';

describe('Features Functionality', function() {
  it('should render when features prop is provided', function() {
    render(<Features features={[{"feature": "Fabric", "value": "Canvas"},{"feature": "Buttons","value": "Brass"}]}/>);
    expect(screen.getByTestId('features-container'));
  });

  it('should NOT render when features prop is NOT provided', function() {
    render(<Features />);
    expect(screen.queryByTestId('features-container')).toBeNull();
  });

});