/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


it('App snapshot test', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
