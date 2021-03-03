type IRawItem = {
  created_utc: number;
  url: string;
  title: string;
  author: string;
};

export type IContent = {
  date: Date;
  url: string;
  title: string;
  author: string;
};

export type ISubreddit = {
  date: Date;
  title: string;
  onClick: () => void;
};

export type IUserSubmission = {
  author: string;
} & ISubreddit;

export type IResponseBulk = {
  data: {
    data: {
      children: [{ data: IRawItem }];
    };
  };
};
