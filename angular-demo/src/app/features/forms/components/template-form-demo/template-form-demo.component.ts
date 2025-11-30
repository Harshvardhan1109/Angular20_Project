import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form-demo',
  templateUrl: './template-form-demo.component.html',
  styleUrls: ['./template-form-demo.component.scss'],
  standalone:false
})
export class TemplateFormDemoComponent {
  model = {
    username: '',
    country: 'IN',
  };

  onCountryChange(country: string): void {
    console.log('Country changed', country);
  }

  onSubmit(form: any): void {
    if (form.invalid) return;
    console.log('Template form value', form.value);
  }
}
