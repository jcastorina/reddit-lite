/// <reference types="jest" />
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Nav } from '.';

describe('components/Nav', () => {
  it('should be in the document', () => {
    render(<Nav onClick={() => {}} />);
    expect(screen.getByTestId('nav-container')).toBeInTheDocument();
  });
  it('logo click event should call onClick once', () => {
    const mock_click_handler = jest.fn();
    render(<Nav onClick={mock_click_handler} />);
    fireEvent.click(screen.getByTestId('nav-logo'));
    expect(mock_click_handler).toHaveBeenCalledTimes(1);
  });
  it('header click event should call onClick', () => {
    const stub = jest.fn();
    render(<Nav onClick={stub} />);
    fireEvent.click(screen.getByTestId('nav-header'));
    expect(stub).toHaveBeenCalledTimes(1);
  });
});
