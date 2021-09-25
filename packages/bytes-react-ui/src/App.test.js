/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders welcome message', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />)
  expect(screen.getByText('是否安装依赖:')).toBeInTheDocument()
})
