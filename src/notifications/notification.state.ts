import { Notification } from './notification.model';

export interface NotificationState {
  enabled: boolean;
  notifications: Notification[];
}
