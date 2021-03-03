import { useState, useEffect, useMemo } from 'react';
import { get } from '.';
import { IContent, IResponseBulk } from '../../types';

const checkIsSubreddit = (content: IContent[] | null) => {
  return !Boolean(content?.find((v) => v.author));
};

const mapResults = (results: IResponseBulk) =>
  results.data.data.children.map((v) => {
    const { title, url, created_utc, author } = v.data;
    const date = new Date(created_utc * 1000);
    return {
      title,
      url,
      date,
      author,
    };
  });

export const useContent = (resource: string, refreshRate: number = 60) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [content, setContent] = useState<IContent[] | null>(null);
  const isSubreddit = useMemo(() => checkIsSubreddit(content), [content]);

  useEffect(() => {
    let t = setInterval(() => {
      setUpdate((u) => !u);
    }, refreshRate * 1000);

    (async function () {
      const results: IResponseBulk = await get(resource);
      setContent(mapResults(results));
    })();
    return () => clearInterval(t);
  }, [resource, update]);
  console.log(isSubreddit);
  return { content, isSubreddit };
};
