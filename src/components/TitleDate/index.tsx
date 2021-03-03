export const TitleDate = ({ title, date }: { title: string; date: Date }) => {
  return (
    <span data-testid="titledate-container">
      <span id="title" data-testid="titledate-title">
        {title}
        {'   '}
      </span>
      <br />
      <small>
        <i>
          <time>
            Created on:{' '}
            <span data-testid="titledate-date">{date.toUTCString()}</span>
          </time>
        </i>
      </small>
    </span>
  );
};
