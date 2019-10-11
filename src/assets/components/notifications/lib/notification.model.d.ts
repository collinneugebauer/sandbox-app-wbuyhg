import { SurescriptsNotificationStatus } from './notification-status.enum';
export declare class SurescriptsNotification {
    title: string;
    summary: string;
    id: string;
    status: SurescriptsNotificationStatus;
    postedDate: Date;
    readablePostedDate: string;
    constructor(init?: Partial<SurescriptsNotification>);
}
