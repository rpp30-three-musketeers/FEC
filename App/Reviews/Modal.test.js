/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Functionality', function() {
  let aUrl = 'https://www.istockphoto.com/photo/running-shoes-gm1249496770-364161908?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsneakers&utm_term=sneakers%3A%3Asearch-aggressive-affiliates-v1%3Aa';
  it('should render without throwing an error', function() {
    render(<Modal photoUrl = {aUrl}/>);
    const image = screen.getByAltText('Review-Photo');
    expect(image.src).toContain(aUrl);
  });



});