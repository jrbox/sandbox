import 'zone.js/dist/zone';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NotificationsModule } from './notifications/notifications.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NotificationsModule],
  template: `
    <fab-notification-layout></fab-notification-layout>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
