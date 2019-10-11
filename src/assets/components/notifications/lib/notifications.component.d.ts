import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsNotifications } from './notifications.model';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SurescriptsNotification } from './notification.model';
import { SurescriptsNotificationStatus } from './notification-status.enum';
import { Router } from '@angular/router';
export declare class NotificationsComponent implements OnInit {
    private http;
    private router;
    faBell: IconDefinition;
    ssoBaseUrl: string;
    notifications: SurescriptsNotifications;
    unreadCount: number;
    SurescriptsNotificationStatus: typeof SurescriptsNotificationStatus;
    constructor(http: HttpClient, router: Router);
    ngOnInit(): void;
    private poll;
    itemClicked(item: SurescriptsNotification): void;
    dismiss($event: MouseEvent, item: SurescriptsNotification): void;
}
