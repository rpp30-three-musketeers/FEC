import React from 'react';

const ProductIdContext = React.createContext();

export const ProductIdProvider = ProductIdContext.Provider;
export const ProductConsumer = ProductIdContext.Consumer;

export default ProductIdContext;