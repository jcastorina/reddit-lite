/// <reference types="jest" />
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Subreddit } from '.';

const stub_date = new Date();

describe('features/Subreddit', () => {
  it('div element click event should call onClick once', () => {
    const stub_click_handler = jest.fn();
    render(
      <Subreddit title={'test'} date={stub_date} onClick={stub_click_handler} />
    );
    fireEvent.click(screen.getByTestId('subreddit'));
    expect(stub_click_handler).toHaveBeenCalledTimes(1);
  });
  it('should be in the document', () => {
    render(<Subreddit title={'test'} date={stub_date} onClick={() => {}} />);
    expect(screen.getByTestId('subreddit')).toBeInTheDocument();
  });
});
