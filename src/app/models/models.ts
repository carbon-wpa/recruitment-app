export interface IPostItem {
  title: string;
  description: string;
  points: number;
  tags: string[];
}

export interface IMenuItem {
  name: string;
  url: string;
}

export const MAX_VOTING_NUMBER = 10;
export const MIN_VOTING_NUMBER = 0;
