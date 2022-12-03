export enum Status {
  Draft = 'Draft',
  Published = 'Published',
}

export type PostType = {
  id: string;
  title: string;
  status: Status;
  date: string;
  url: string;
  description: string;
};
