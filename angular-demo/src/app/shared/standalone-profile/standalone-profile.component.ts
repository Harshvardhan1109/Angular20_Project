import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-standalone-profile',
  imports: [CommonModule],
  template: `
    <section>
      <h2>Standalone Profile Component</h2>
      <p>This is the only standalone component in the app.</p>
    </section>
  `,
})
export class StandaloneProfileComponent {}
