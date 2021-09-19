/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Styles from '../Styles.jsx';

describe('Styles Functionality', function() {
  it('should render when styles prop is provided', function() {
    render(<Styles styles={[{"style_id":286894,"name":"Forest Green & Black","original_price":"140.00","sale_price":null,"default?":true,"photos":[{"thumbnail_url":"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}],"skus":{"1665053":{"quantity":8,"size":"XS"},"1665054":{"quantity":16,"size":"S"},"1665055":{"quantity":17,"size":"M"},"1665056":{"quantity":10,"size":"L"},"1665057":{"quantity":15,"size":"XL"},"1665058":{"quantity":4,"size":"XL"}}}]} selectedStyleIndex={0} />);
    expect(screen.getByTestId('styles-container'));
  });

  it('should NOT render when props are NOT provided', function() {
    render(<Styles />);
    expect(screen.queryByTestId('styles-container')).toBeNull();
  });

});