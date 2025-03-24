import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  Contactform = new FormGroup({
    FullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    MobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    Message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });


  onSubmit() {
    if (this.Contactform.valid) {  
      const formData = this.Contactform.value;
      console.log(formData)
      const message = `Full Name: ${formData.FullName}\nEmail: ${formData.Email}\nPhone: ${formData.MobileNumber}\nMessage: ${formData.Message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/7057094091?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } else {
      console.log('Form is invalid');
    }
  }
}

