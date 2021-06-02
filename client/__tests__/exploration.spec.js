import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Exploration from '../pages/exploration'

describe('Index page', () => {
  it('should render', () => {
    render(<Exploration />)
    const div = screen.getByTestId('divTest')
    const h1 = screen.getByTestId('h1Test')
    expect(div).toBeInTheDocument()
    expect(h1).toBeInTheDocument()
  })
})
