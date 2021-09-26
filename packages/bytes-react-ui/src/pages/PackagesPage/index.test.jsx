import React from 'react'
import { render, screen } from '@testing-library/react'
import PackagePage from './index'

it('render PackagePage fine', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<PackagePage />)
  expect(
    screen.getByText('在项目创建之后，你仍然可以通过安装插件来增加功能')
  ).toBeInTheDocument()
  expect(screen.getByText('选择功能')).toBeInTheDocument()
})
