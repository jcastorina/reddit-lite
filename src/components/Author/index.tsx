export const Author = ({ author }: { author: string }) => {
  return (
    <small data-testid="author-container">
      <br />
      <span>
        <i>Submitted by: </i>
        <span data-testid="author-text">{author}</span>
      </span>
    </small>
  );
};
