
import {Photo} from './Photo';

export class Comment {
  public commentId: number;
  public content: string;
  public photo: Photo;
  public photoId: number;
  public userName: string;
}
