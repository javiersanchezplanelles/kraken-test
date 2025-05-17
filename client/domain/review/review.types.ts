export interface UserReview {
  id: number;
  author: string;
  review: string;
  date: string;
}

export type UserReviewField = keyof Pick<UserReview, 'author' | 'review'>;
