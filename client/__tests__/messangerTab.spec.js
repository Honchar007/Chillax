import '@testing-library/jest-dom'
import React from 'react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import MessangerTab from '../components/MessangerTab'

it('should render', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MessangerTab></MessangerTab>, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<MessangerTab></MessangerTab>).toJSON()
  expect(tree).toMatchSnapshot()
})
