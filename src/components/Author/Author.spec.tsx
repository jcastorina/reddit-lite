/// <reference types="jest" />
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Author } from '.';

describe('components/Author', () => {
  it('should return username passed to author', () => {
    render(<Author author={'test'} />);
    expect(screen.getByTestId('author-text')).toHaveTextContent('test');
  });
  it('should be in the document', () => {
    render(<Author author={'test'} />);
    expect(screen.getByTestId('author-container')).toBeInTheDocument();
  });
});
