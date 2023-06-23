import { Notification } from './notification.model';
// utilisation des alias pour gerer les conflits de nommage
import { Notification as NotificationApi } from './../api/notification.model';
import { Adapter } from './../shared/adapter.model';
import { Injectable } from '@angular/core';
//import NotificationApi = API.notification;

@Injectable({
  providedIn: 'root',
})
export class NotificationAdapter
  implements Adapter<NotificationApi, Notification>
{
  adapt = (notificationApi: NotificationApi): Notification => {
    return {
      title: notificationApi.title,
      message: notificationApi.description,
      creationDate: new Date(notificationApi.creationDate),
    };
  };

  adaptArray = (notificationApis: NotificationApi[]): Notification[] => {
    return notificationApis.map((notificationApi) =>
      this.adapt(notificationApi)
    );
  };
}
