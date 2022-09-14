import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Form Validation';
  demoForm: FormGroup;
  nameCtrl = new FormControl("", [Validators.required]);
  ageCtrl = new FormControl("", [Validators.required]);
  constructor() {
    this.demoForm = new FormGroup({
      nameCtrl: this.nameCtrl,
      ageCtrl: this.ageCtrl
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.demoForm.controls[controlName].hasError(errorName);
  };
  save(){
    console.log('Save Action');
  }
}
