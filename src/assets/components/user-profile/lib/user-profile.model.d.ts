import { SurescriptsUser } from './user.model';
export declare class SurescriptsUserProfile {
    user: SurescriptsUser;
    environment: string;
    baseUrl: string;
    constructor(init?: Partial<SurescriptsUserProfile>);
}
