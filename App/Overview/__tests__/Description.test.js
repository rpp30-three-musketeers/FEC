/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Description from '../Description.jsx';

describe('Description Functionality', function() {
  it('should render without throwing an error', function() {
    render(<Description slogan={'testing slogan'} description={'testing description'}/>);
    expect(screen.getByTestId('description-container'));
  });

});