import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  // standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  user = {
    fname: '',
    email: '',
    contact: '',
    feedback: ''
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.contactForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]{3,30}$")]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern("^[0-9]{9,11}$")]],
      feedback: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]{5,300}$")]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      window.alert('Please fill out the form correctly.');
      return;
    }
    else{
      window.alert("Thank you for Contacting Us");
    }
    
  }
}
