import React from 'react'
import { render, screen } from '@testing-library/react'
import IndexPage from './index'

it('IndexPage Renders fine', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<IndexPage />)
  expect(screen.getByText('是否安装依赖:')).toBeInTheDocument()
  // expect(screen.getByText('确认')).toBeInTheDocument()
})
