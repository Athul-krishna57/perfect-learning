import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sort-question',
  templateUrl: './sort-question.component.html',
  styleUrl: './sort-question.component.css',
})
export class SortQuestionComponent {

  subjectName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.subjectName = params['subject'];
    });
  }

  items = [
    {
      'Id': '_1011',
      'question': '1. What is 5 + 3?',
      'options': ['1','2','3','4']
    },
    {
      'Id': '_1012',
      'question': '1. What is 5 + 4?',
      'options': ['5','2','3','9']
    },
    {
      'Id':  '_1013',
      'question': '1. What is 5 + 5?',
      'options': ['1','2','3','4']
    },
    {
      'Id': '_1014',
      'question': '1. What is 5 + 6?',
      'options': ['1','2','3','4']
    },
    {
      'Id': '_1015',
      'question': '1. What is 5 + 8?',
      'options': ['1','2','3','4']
    },
    {
      'Id': '_1016',
      'question': '1. What is 5 + 9?',
      'options': ['1','2','3','4']
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items)
  }

  save(){
    const requestObj:any = {
      LoggedInUser: '1202142321321',
      UDTQuestion: []
    }
    // const UDTQuestion:Array<any>  = []
    this.items.forEach((item, index) => {
      requestObj.UDTQuestion.push({
        'QuestionID': this.subjectName + '_' + item.Id,
        'DisplayOrder ': index
      })
    })
    console.log(requestObj)
  }

}
