import { render, screen } from '@testing-library/react';
import React from 'react'
import Alert from './alert';

describe('test Alert component', () => {
  it('should render the correct default button', () => {
    render(<Alert message='Title' ></Alert>)
    const element = screen.getByText('Title')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert-message')
  });

  it('should render the correct component based on different props', () => {
    render(<Alert message='Title' description='This is Description' type='success' />)
    const element = screen.getByText('Title')
    const element2 = screen.getByText('This is Description')
    expect(element).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element).toHaveClass('alert-message')
    expect(element2).toHaveClass('alert-description')
  });
})