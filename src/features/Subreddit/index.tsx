import { TitleDate } from '../../components/TitleDate';
import { ISubreddit } from '../../types';

export const Subreddit = ({ title, date, onClick }: ISubreddit) => {
  return (
    <div id="item-wrapper" data-testid="subreddit" onClick={onClick}>
      <TitleDate title={title} date={date} />
    </div>
  );
};
