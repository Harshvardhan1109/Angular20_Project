import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss'],
  standalone:false
})
export class ReactiveFormDemoComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.min(18)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid) return;
    console.log(this.userForm.value);
  }

  get f() {
    return this.userForm.controls;
  }
}
