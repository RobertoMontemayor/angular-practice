import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.css']
})
export class NumberPadComponent implements OnInit {
  @Output() updateDisplay = new EventEmitter<{digit: string}>();
  constructor() { }

  ngOnInit(): void {
  }
  updateNumber = (digit: string) =>{
    console.log(digit)
    this.updateDisplay.emit({
       digit
    })
  }
}
