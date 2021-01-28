import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export interface Question {
    id: string;
    ques: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    answer: string;
  }