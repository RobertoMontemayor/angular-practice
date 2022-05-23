import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  digit = " "
  lastNumber = 0
  task = ""
  triggerEvent = (content: any)=>{
    console.log("event is triggered")
    console.log(this.digit += content.digit)
    
    // if(Number.isNaN(parseInt(content.digit))) {
    //   this.digit = content.digit
    // }
    // else {
    //   switch(content.digit){
    //     case "+":
    //       this.lastNumber = parseInt(this.digit)
    //       this.digit = " "
    //       this.task = "add"
    //       break
    //     case "-":
    //       this.lastNumber = parseInt(this.digit)
    //       this.digit = " "
    //       this.task = "subtract"
    //       break
    //     case "=":
    //       if(Number.isNaN(parseInt(this.digit))){
    //         this.digit = "ERROR"
    //       }else{
    //         let currentNumber = parseInt(this.digit)
    //       }
    //       break
    //       default:
    //         this.digit = this.digit + content.digit
    //         break
    //   }
    // }
  }
}
