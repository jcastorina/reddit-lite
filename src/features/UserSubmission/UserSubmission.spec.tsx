/// <reference types="jest" />
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserSubmission } from '.';

const stub_date = new Date();

describe('features/UserSubmission', () => {
  it('div element click event should call onClick once', () => {
    const stub_click_handler = jest.fn();
    render(
      <UserSubmission
        title={'test'}
        date={stub_date}
        author={'test'}
        onClick={stub_click_handler}
      />
    );
    fireEvent.click(screen.getByTestId('usersubmission'));
    expect(stub_click_handler).toHaveBeenCalledTimes(1);
  });
  it('should be in the document', () => {
    render(
      <UserSubmission
        title={'test'}
        date={stub_date}
        author={'test'}
        onClick={() => {}}
      />
    );
    expect(screen.getByTestId('usersubmission')).toBeInTheDocument();
  });
});
