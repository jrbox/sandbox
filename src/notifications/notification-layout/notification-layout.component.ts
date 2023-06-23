import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../notification.model';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'fab-notification-layout',
  templateUrl: './notification-layout.component.html',
  styleUrls: ['./notification-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationLayoutComponent {
  // api notification
  notifications$: Observable<Notification[]> =
    this.notificationService.notifications$;
  notificationCount$: Observable<number> =
    this.notificationService.notificationCount$;

  constructor(private notificationService: NotificationService) {}

  refreshNotification() {
    this.notificationService.loadNotification().subscribe();
  }
}
