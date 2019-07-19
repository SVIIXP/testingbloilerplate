/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import data from '../../data/courses.json'

const numItems = data.length

it('numItems === 12', () => {
  expect(numItems).toBe(12)
})

const dataTest = data[0].title

it('There os a KS om this title', () => {
  expect(dataTest).toMatch(/JS/)
})

it('The title contains React', () => {
  expect(dataTest).toContain('React')
})
