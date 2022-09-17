import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled>disabled</MenuItem>
      <MenuItem index={2}>xyz</MenuItem>
    </Menu>
  )
}

let menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

const setup = (props: MenuProps) => {
  render(generateMenu(props))
  menuElement = screen.getByTestId('test-menu')
  activeElement = screen.getByText('active')
  disabledElement = screen.getByText('disabled')
}

describe('test Menu and MenuItem component', () => {

  it('should render correct Menu and MenuItem based on default props', () => {
    setup(testProps)
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })

  it('click items should change active and call the right callback', () => {
    setup(testProps)
    const thirdItem = screen.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  });

  it('should render vertical mode when mode is set to vertical', () => {
    render(generateMenu(testVerProps))
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  });
})