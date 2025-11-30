import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { AuthPanelComponent } from './components/auth-panel/auth-panel.component';

@NgModule({
  declarations:[
    AuthPanelComponent
  ],  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],  
  exports:[AuthPanelComponent]  
})
export class CoreModule {}
