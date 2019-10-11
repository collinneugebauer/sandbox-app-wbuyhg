/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsComponent } from './notifications.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export class NotificationsModule {
}
NotificationsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    NgbDropdownModule,
                    FontAwesomeModule
                ],
                declarations: [NotificationsComponent],
                exports: [NotificationsComponent]
            },] }
];
export { SurescriptsNotification } from './notification.model';
export { SurescriptsNotifications } from './notifications.model';
export { SurescriptsNotificationStatus } from './notification-status.enum';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9ub3RpZmljYXRpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFZckUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBVi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O0FBR0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nYkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW05vdGlmaWNhdGlvbnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOb3RpZmljYXRpb25zQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc01vZHVsZSB7IH1cclxuXHJcbmV4cG9ydCB7IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kZWwnO1xyXG5leHBvcnQgeyBTdXJlc2NyaXB0c05vdGlmaWNhdGlvbnMgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMubW9kZWwnO1xyXG5leHBvcnQgeyBTdXJlc2NyaXB0c05vdGlmaWNhdGlvblN0YXR1cyB9IGZyb20gJy4vbm90aWZpY2F0aW9uLXN0YXR1cy5lbnVtJztcclxuXHJcbiJdfQ==