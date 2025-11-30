import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MsalUser } from '../../services/msal-facade.service';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss'],
  standalone:false
})
export class AuthPanelComponent {
  @Input() user: MsalUser | null = null;
  @Output() login = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  onLoginClick(): void {
    this.login.emit();
  }
  onLogoutClick(): void {
    this.logout.emit();
  }
}
