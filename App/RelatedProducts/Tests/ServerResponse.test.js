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
