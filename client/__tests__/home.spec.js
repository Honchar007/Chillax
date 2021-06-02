import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/home'

describe('Home page', () => {
  it('should render', () => {
    render(<Home />)
    const img = screen.getByTestId('custom-element')
    const h1 = screen.getByTestId('h1Test')
    expect(img).toBeInTheDocument()
    expect(h1).toBeInTheDocument()
  })
})
