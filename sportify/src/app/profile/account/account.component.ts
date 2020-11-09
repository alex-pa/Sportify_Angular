import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  name:string = 'Alex'
  email:string = 'example@gmail.com'

  myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({
            "userName": new FormControl(this.name),
            "userEmail": new FormControl(this.email)
        });
    }
      
    submit(){
        
      }
}

