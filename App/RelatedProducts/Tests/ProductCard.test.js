/**
* @jest-environment jsdom
*/
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from '../ProductCard.jsx';
import RelatedProducts from '../RelatedProducts.jsx';
import data from './sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Product Card Functionality', () => {
  it('should render without throwing an error', function() {
    render(<Product/>);
    // screen.debug();
    expect(screen.getAllByText('***__').length).toBe(1);
  });

  it('should contain a price', function() {
    render(<Product id={47423}/>);
    expect(screen.getByTitle('price'));
  });

  it('should contain a name', function() {
    render(<Product id={47423}/>);
    expect(screen.getByTitle('name'));
  });

  it('should contain a category', function() {
    render(<Product id={47423}/>);
    expect(screen.getByTitle('category'));
  });

  it('should contain a rating', function() {
    render(<Product id={47423}/>);
    expect(screen.getByTitle('rating')).toHaveTextContent();
  });


});
