import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-new-resume',
  templateUrl: './new-resume.component.html',
  styleUrls: ['./new-resume.component.css']
})
export class NewResumeComponent {

 ResumeForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.ResumeForm = this.fb.group({
      details: this.fb.array([]) ,
    });
  }

  details() : FormArray {
    return this.ResumeForm.get("details") as FormArray
  }

  newResume(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
      company: '',
      position: '',
      start: '',
      end:'',
      lang:'',
      desc: '',
    })
  }

  addResume() {
    this.details().push(this.newResume());
  }

  removeResume(i:number) {
    this.details().removeAt(i);
  }

  onSubmit() {
    console.log(this.ResumeForm.value);
  }
}
