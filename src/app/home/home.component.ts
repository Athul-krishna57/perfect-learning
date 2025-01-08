import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    id: 1,
    name: 'Maths',
    children: [
      { id: 2, name: 'Block-01' },
      { id: 3, name: 'Block-02',children: [{ id: 7, name: 'Chapter-20' }], },
    ],
  },
  {
    id: 4,
    name: 'Chemistry',
    children: [
      { id: 5, name: 'Block-01' },
      {
        id: 6,
        name: 'Block-02',
        children: [{ id: 7, name: 'Chapter-20' }],
      },
    ],
  },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}


  treeData = TREE_DATA;

  currentNode: TreeNode | null = null;

  flatData: TreeNode[] = [];

  isSelected(node: TreeNode) {
    return this.currentNode === node;
  }

  navigateOrderQuestion(subjectName:string){
    this.router.navigate(['/orderQuestion'], { queryParams: { subject: subjectName } });
  }

}
