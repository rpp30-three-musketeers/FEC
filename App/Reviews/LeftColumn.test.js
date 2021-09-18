/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LeftColumn from './LeftColumn';

describe('LeftColumn Functionality', function() {
  it('should render without throwing an error', function() {
    render(<LeftColumn rating = {4} percentRecommend = {90} />);
    expect(screen.getAllByText('size marker bar').length).toBe(2);
  });

  it('should render an average rating based on a rating prop', function() {
    render(<LeftColumn rating = {4} percentRecommend = {90} />);
    // expect(screen.getByText(document.getElementById('rating').textContent)).toBe('4');
    expect(screen.getByTitle('rating')).toHaveTextContent('4');
  });

  it('should render a percent recommended based on an input prop', function() {
    render(<LeftColumn rating = {4} percentRecommend = {90} />);
    expect(screen.getByTitle('pct')).toHaveTextContent('90');
  });

  it('should rerender average rating prop upon a change of state (new product selected)', () => {

    const {rerender} = render(<LeftColumn rating = {4} percentRecommend = {90} />);
    // re-render the same component with different props
    rerender(<LeftColumn rating = {3.7} percentRecommend = {81} />);
    expect(screen.getByTitle('pct')).toHaveTextContent('81');
    expect(screen.getByTitle('rating')).toHaveTextContent('3.7');
  });

  it('should render star quantity based on number of stars given for that product', () => {


  });


  it('should rerender star quantity upon a different product select', () => {


  });


});