import React from 'react'
import renderer from 'react-test-renderer'
import NavBar from '../components/Navbar/Navbar'

it('renders correctly', () => {
  const tree = renderer.create(<NavBar></NavBar>).toJSON()
  expect(tree).toMatchSnapshot()
})
