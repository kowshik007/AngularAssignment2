import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-forms',
  templateUrl: './learning-forms.component.html',
  styleUrls: ['./learning-forms.component.css']
})
export class LearningFormsComponent implements OnInit {
  userName: string="user01"
  constructor() { }
  isUserEmpty(){
    if(this.userName==""){
      return true;
    }else{
      return false;
    }
  }
  resetUserName(){
    this.userName=""
  }
  ngOnInit(): void {
  }

}
