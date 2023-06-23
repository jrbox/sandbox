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
export class NotificationLayoutComponent implements OnInit {
  // api notification
  notifications$?: Observable<Notification[]>;
  notificationCount$?: Observable<number>;

  constructor(private notificationService: NotificationService) {
    notificationService.notificationCount$.subscribe((count) => {
      console.log(count, 'notificationCount view');
    });
  }

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService.notificationCount$;
    this.notifications$ = this.notificationService.notifications$;
  }

  refreshNotification() {
    this.notificationService.loadNotification().subscribe();
  }
}
