import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Notification } from './notification.model';
import { NotificationState } from './notification.state';

// etat initial du store
const initialState: NotificationState = {
  enabled: true,
  notifications: [],
};

@Injectable({
  providedIn: 'root',
})
export class NotificationStore {
  private _state = new BehaviorSubject<NotificationState>(initialState);
  private readonly _state$ = this._state.asObservable();

  /** L'état actuel du store */
  private get state() {
    return this._state.getValue();
  }

  /** Modification explicite de l'état du store (interne) */
  private updateState(newState: NotificationState) {
    this._state.next(newState);
  }

  /** Modification implicite de l'état du store */
  updateNotifications(notifications: Notification[]) {
    const newState = {
      ...this.state,
      notifications: notifications,
    };
    this.updateState(newState);
  }

  // Select sur les notifications
  readonly notifications$: Observable<Notification[]> = this._state$.pipe(
    map((notificationState) => notificationState.notifications)
  );

  // Select sur le nombre de notification
  readonly notificationCount$: Observable<number> = this._state$.pipe(
    map((notificationState) => notificationState.notifications.length)
  );
}
