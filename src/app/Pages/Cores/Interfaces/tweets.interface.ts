export interface Tweets {
  readonly twit_Id: number;
  readonly user_Id: string;
   content: string;
   commentsCount: number;
   likes_Count: number
  readonly date_Created: Date;

}
