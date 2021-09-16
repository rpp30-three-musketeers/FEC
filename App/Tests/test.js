/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Functionality', function() {
  it('should render without throwing an error', function() {
    const app = render(<Header/>);
  });
});
