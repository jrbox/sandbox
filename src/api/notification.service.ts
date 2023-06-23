import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from './notification.model';

const NOTIFICATIONS: Notification[] = [
  {
    title: 'First Notification',
    description: 'Premier message',
    creationDate: '2023-06-20',
  },
  {
    title: 'Other Notification',
    description: 'Autre  message',
    creationDate: '2023-06-20',
  },
];

const NOTIFICATIONS2: Notification[] = [
  {
    title: 'First Notification 2',
    description: 'Premier message',
    creationDate: '2023-06-20',
  },
  {
    title: 'Other Notification 2',
    description: 'Autre  message',
    creationDate: '2023-06-20',
  },
];

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  initialize = false;

  /** Récupérer les données en provenance d'une API */
  findNotification(): Observable<Notification[]> {
    if (!this.initialize) {
      this.initialize = true;
      return of(NOTIFICATIONS);
    }
    return of(NOTIFICATIONS2);
    //return this.http.get<Notification[]>('/api/notifications');
  }
}
