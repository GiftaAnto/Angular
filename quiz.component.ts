import { Component, OnInit } from '@angular/core';
import { Questions } from './questionList';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = Questions;
  final=true;
  correct=true;
  wrong=true;
  mark=0;
  index = 0;
  inputcheck=false;
  checkvalue=false;
  result=true;
  nextButton=false;
  question=false;
  scoreElement=true;
  scoreUp=false;

  ngOnInit() {
    
  }
 
  
  check(choice: String, ans: String){
    if(choice==ans){
      this.wrong=true;
      this.correct = false;
      this.mark++;
    }
    else{
      this.wrong=false;
      this.correct=true;
    }
    this.inputcheck=true;
  }
  next(){
    this.wrong=true;
    this.correct=true;
    this.index++;
    this.inputcheck=false;
    this.checkvalue=true;
    if(this.index==9){
      this.nextButton=true;
      this.result=false;
    }
  }

  score(){
    this.question=true;
    this.scoreElement=false;
    this.scoreUp=true;
  }
  prev(){
    this.index--;
  }
}


  