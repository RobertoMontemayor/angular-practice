import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() number = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
