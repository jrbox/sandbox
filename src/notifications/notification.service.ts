import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';

import { NotificationService as NotificationApiService } from './../api/notification.service';
import { NotificationAdapter } from './notification.adapter';
import { Notification } from './notification.model';
import { NotificationStore } from './notification.store';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // Mise à disposition des données du store
  readonly notifications$: Observable<Notification[]> =
    this.loadNotification().pipe(
      switchMap(() => this.notificationStore.notifications$)
    );

  /** Adaptation différente de la donnée métier */
  readonly notificationCount$: Observable<number> =
    this.notificationStore.notificationCount$;

  constructor(
    private notificationApiService: NotificationApiService,
    private notificationAdapater: NotificationAdapter,
    private notificationStore: NotificationStore
  ) {}

  /** Charger, Adapter et Centraliser les données métiers dans un store */
  loadNotification(): Observable<Notification[]> {
    return this.notificationApiService.findNotification().pipe(
      map(this.notificationAdapater.adaptArray),
      tap((notifications) =>
        this.notificationStore.updateNotifications(notifications)
      )
    );
  }
}
