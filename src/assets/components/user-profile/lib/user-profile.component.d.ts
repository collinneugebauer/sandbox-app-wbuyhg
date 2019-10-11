import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsUserProfile } from './user-profile.model';
export declare class UserProfileComponent implements OnInit {
    private http;
    logoutUrl: string;
    ssoBaseUrl: string;
    environment: string;
    isStaging: boolean;
    isProduction: boolean;
    constructor(http: HttpClient);
    profile: SurescriptsUserProfile;
    ngOnInit(): void;
}
