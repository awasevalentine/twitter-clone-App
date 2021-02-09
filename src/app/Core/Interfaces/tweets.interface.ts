export interface Tweets {
  readonly twit_Id: number;
  readonly user_Id: string;
  content: string;
  user_Image_Path: string;
   commentsCount: number;
   likes_Count: number
  readonly date_Created: Date;

}
