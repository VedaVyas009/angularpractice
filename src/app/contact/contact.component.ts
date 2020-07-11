import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contact Us';
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       mobile: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }

}
