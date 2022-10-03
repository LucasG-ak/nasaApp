import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.scss'],
})
export class MinicardComponent implements OnInit {
  @Input() text: string;
  @Input() properties: string;

  constructor() { }

  ngOnInit() {}

}
