/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LeftNavigationComponent } from './left-navigation.component';
import { LeftNavigationService } from './left-navigation.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
var LeftNavigationModule = /** @class */ (function () {
    function LeftNavigationModule(library) {
        library.addIcons(faChevronLeft, faChevronRight);
    }
    /**
     * @return {?}
     */
    LeftNavigationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: LeftNavigationModule,
            providers: [LeftNavigationService]
        };
    };
    LeftNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FontAwesomeModule, RouterModule],
                    declarations: [LeftNavigationComponent],
                    exports: [LeftNavigationComponent]
                },] }
    ];
    /** @nocollapse */
    LeftNavigationModule.ctorParameters = function () { return [
        { type: FaIconLibrary }
    ]; };
    return LeftNavigationModule;
}());
export { LeftNavigationModule };
export { NavHeading, NavItem, NavItemType, NavItemLink } from './nav-item.model';
export { LeftNavigationService } from './left-navigation.service';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1uYXZpZ2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdXJlc2NyaXB0cy9sZWZ0LW5hdmlnYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGVmdC1uYXZpZ2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFRN0MsOEJBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDakQ7Ozs7SUFDTSw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBRSxxQkFBcUIsQ0FBRTtTQUNyQyxDQUFDO0tBQ0g7O2dCQWRGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO29CQUN4RCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DOzs7O2dCQVIyQixhQUFhOzsrQkFKekM7O1NBYWEsb0JBQW9CO0FBWWpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExlZnROYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sZWZ0LW5hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGVmdE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9sZWZ0LW5hdmlnYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlLCBGYUljb25MaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xlZnROYXZpZ2F0aW9uQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTGVmdE5hdmlnYXRpb25Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZWZ0TmF2aWdhdGlvbk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IobGlicmFyeTogRmFJY29uTGlicmFyeSkge1xyXG4gICAgbGlicmFyeS5hZGRJY29ucyhmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCk7XHJcbiAgfVxyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExlZnROYXZpZ2F0aW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFsgTGVmdE5hdmlnYXRpb25TZXJ2aWNlIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBOYXZIZWFkaW5nLCBOYXZJdGVtLCBOYXZJdGVtVHlwZSwgTmF2SXRlbUxpbmsgfSBmcm9tICcuL25hdi1pdGVtLm1vZGVsJztcclxuZXhwb3J0IHsgTGVmdE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9sZWZ0LW5hdmlnYXRpb24uc2VydmljZSc7XHJcbiJdfQ==