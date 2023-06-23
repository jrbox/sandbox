import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationLayoutComponent } from './notification-layout/notification-layout.component';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NotificationLayoutComponent,
    NotificationButtonComponent,
    NotificationListComponent,
  ],
  exports: [NotificationLayoutComponent],
})
export class NotificationsModule {}
