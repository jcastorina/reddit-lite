import { useState } from 'react';
import { useContent } from './lib/api/useContent';
import { Nav } from './components/Nav';
import { Subreddit } from './features/Subreddit';
import { UserSubmission } from './features/UserSubmission';
import './App.css';

const App = () => {
  const [resource, setResource] = useState<string>('/subreddits.json');
  const { content, isSubreddit } = useContent(resource);

  if (!content) {
    return <>Loading..</>;
  }

  return (
    <>
      <Nav onClick={() => setResource('/subreddits.json')} />
      <div id="list-wrapper">
        {content.map((v, i) =>
          isSubreddit ? (
            <Subreddit
              key={i}
              title={v.title}
              date={v.date}
              onClick={() => setResource(v.url.slice(0, -1) + '.json')}
            />
          ) : (
            <UserSubmission
              key={i}
              title={v.title}
              date={v.date}
              author={v.author}
              onClick={() => {
                window.open(v.url, '_blank');
              }}
            />
          )
        )}
      </div>
    </>
  );
};

export default App;
