import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Notification } from '../notification.model';

@Component({
  selector: 'fab-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationListComponent implements OnInit {
  @Input()
  notificationCount: number | null = 0;

  @Input()
  notifications: Notification[] | null = [];

  @Output('refresh')
  resfreshEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  refresh() {
    this.resfreshEvent.next();
  }
}
