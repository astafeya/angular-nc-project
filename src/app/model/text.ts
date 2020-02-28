import { Evaluation } from "./evaluation";
import { Comment } from "./comment";

export interface Text {
  id: number;
  title: string;
  visibility: boolean;
  content: string;
  creationDate: Date;
  lastEditDate: Date;
}
