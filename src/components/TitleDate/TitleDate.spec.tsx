/// <reference types="jest" />
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { TitleDate } from '.';

const mock_date = new Date();

describe('components/TitleDate', () => {
  it('should return title passed to component', () => {
    render(<TitleDate title={'test'} date={new Date()} />);
    expect(screen.getByTestId('titledate-title')).toHaveTextContent('test');
  });
  it('should return date passed to component', () => {
    render(<TitleDate title={'test'} date={mock_date} />);
    expect(screen.getByTestId('titledate-date')).toHaveTextContent(
      mock_date.toUTCString()
    );
  });
  it('should be in the document', () => {
    render(<TitleDate title={'test'} date={new Date()} />);
    expect(screen.getByTestId('titledate-container')).toBeInTheDocument();
  });
});
