import {Component, Input} from '@angular/core';
import {IPostItem} from '../models/models';


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

  constructor() {
  }


}
