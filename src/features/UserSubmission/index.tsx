import { TitleDate } from '../../components/TitleDate';
import { Author } from '../../components/Author';
import { IUserSubmission } from '../../types';

export const UserSubmission = ({
  title,
  date,
  author,
  onClick,
}: IUserSubmission) => {
  return (
    <div id="item-wrapper" data-testid="usersubmission" onClick={onClick}>
      <TitleDate title={title} date={date} />
      <Author author={author} />
    </div>
  );
};
