/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Single from './Single';
import data from '../../data/courses.json'

describe('Testing the single component', () => {
  it('Single snapshot test', () => {
    const component = renderer.create(<Single key={data[0].id} item={data[0]} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
