import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './app'

describe('App (TS)', () => {
  it('renders and increments counter', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(button).toHaveTextContent(/count is 1/i)
  })
})
