/// <reference types="jest" />
import axios from 'axios';
import { get } from '.';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('lib/reddit-api', () => {
  it('should fetch data obj', () => {
    const stub_path = '/subreddit.json';
    const mock_fetch_obj = {
      data: {
        children: [
          {
            data: {
              created_utc: new Date().getUTCMilliseconds(),
              url: '/test',
              title: 'test',
              author: 'test_author',
            },
          },
        ],
      },
    };
    const resp = { data: mock_fetch_obj };
    mockedAxios.get.mockResolvedValue(resp);
    return get(stub_path).then((data) => expect(data).toEqual(resp));
  });
  it('should notify network error', () => {
    mockedAxios.get.mockRejectedValue('Network error');
    const stub_path = '/subreddit.json';
    return get(stub_path).catch((e) => expect(e).toEqual('Network error'));
  });
});
