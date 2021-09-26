import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './index'
import { BrowserRouter as Router } from 'react-router-dom'

it('Header renders fine', () => {
  render(
    <Router>
      <Header />
    </Router>
  )
  expect(screen.getByText('创建新项目')).toBeInTheDocument()
})
