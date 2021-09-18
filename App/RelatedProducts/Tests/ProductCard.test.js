/**
* @jest-environment jsdom
*/

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Product from '../ProductCard.jsx';

describe('Product Card Functionality', () => {
  it('should render without throwing an error', function() {
    render(<Product id={47423}/>);
    screen.debug();
    expect(screen.getAllByText('***__').length).toBe(1);
  });

  it('should contain a price', function() {
    render(<Product id={47423}/>);
    expect(screen.getByTitle('price').toHaveTextContent('$40.00'));
  });

  it('should contain a name', function() {
    render(<Product id={47423}/>)
    expect(screen.getByTitle('name')).toHaveTextContent('Morning Joggers');
  });

  it('should contain a category', function() {
    render(<Product id={47423}/>)
    expect(screen.getByTitle('category')).toHaveTextContent('Pants');
  });

  it('should contain a rating', function() {
    render(<Product id={47423}/>)
    expect(screen.getByTitle('rating')).toHaveTextContent('***__');
  });


});
