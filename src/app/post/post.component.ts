import { Component, Input } from '@angular/core';
import { IPostItem, MAX_VOTING_NUMBER, MIN_VOTING_NUMBER } from '../models/models';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input()
  public postItem: IPostItem;


  @Input()
  public isOdd: boolean;

  MAX_VOTING_NUMBER = MAX_VOTING_NUMBER;
  MIN_VOTING_NUMBER = MIN_VOTING_NUMBER;

  constructor() {
  }

  public voteUp(): void {
    if (this.postItem.points + 1 > MAX_VOTING_NUMBER) {
      return;
    }
    this.postItem.points++;
  }

  public voteDown(): void {
    if (this.postItem.points - 1 < MIN_VOTING_NUMBER) {
      return;
    }
    this.postItem.points--;
  }

}
