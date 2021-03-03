/// <reference types="jest" />
import { renderHook } from '@testing-library/react-hooks';
import { useContent } from './useContent';

const stub_path = '/subreddits.json';

//const contentArray

jest.mock('./index', () => ({
  get: jest.fn().mockResolvedValue({
    data: {
      data: {
        children: [
          {
            data: {
              created_utc: 1234567890,
              url: '/test',
              title: 'test',
              author: 'test_author',
            },
          },
        ],
      },
    },
  }),
}));

describe('lib/fetch-hook', () => {
  it('should return false for subreddit and null for content while fetching', async () => {
    const refreshTime = 0.11;
    const { result } = renderHook(() => useContent(stub_path, refreshTime));
    expect(result.current.isSubreddit).toBe(false);
    expect(result.current.content).toBe(null);
  });
  it('should return content after timeout', async () => {
    const refreshTime = 5;

    const { result, waitForNextUpdate } = renderHook(() =>
      useContent(stub_path, refreshTime)
    );
    expect(result.current.content).toBe(null);
    await waitForNextUpdate();
    expect(result.current.content).toStrictEqual([
      {
        date: new Date(1234567890 * 1000),
        url: '/test',
        title: 'test',
        author: 'test_author',
      },
    ]);
  });
});
