import { SurescriptsNotification } from './notification.model';
export declare class SurescriptsNotifications {
    baseUrl: string;
    items: Array<SurescriptsNotification>;
    total: number;
    constructor(init?: Partial<SurescriptsNotifications>);
}
