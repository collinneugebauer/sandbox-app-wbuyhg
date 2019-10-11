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
export class LeftNavigationModule {
    /**
     * @param {?} library
     */
    constructor(library) {
        library.addIcons(faChevronLeft, faChevronRight);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LeftNavigationModule,
            providers: [LeftNavigationService]
        };
    }
}
LeftNavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FontAwesomeModule, RouterModule],
                declarations: [LeftNavigationComponent],
                exports: [LeftNavigationComponent]
            },] }
];
/** @nocollapse */
LeftNavigationModule.ctorParameters = () => [
    { type: FaIconLibrary }
];
export { NavHeading, NavItem, NavItemType, NavItemLink } from './nav-item.model';
export { LeftNavigationService } from './left-navigation.service';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1uYXZpZ2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdXJlc2NyaXB0cy9sZWZ0LW5hdmlnYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGVmdC1uYXZpZ2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8vQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDakQ7Ozs7SUFDRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFFLHFCQUFxQixDQUFFO1NBQ3JDLENBQUM7S0FDSDs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLENBQUM7Z0JBQ3hELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNuQzs7OztZQVIyQixhQUFhOztBQXFCekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGVmdE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2xlZnQtbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMZWZ0TmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL2xlZnQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUsIEZhSWNvbkxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIFJvdXRlck1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGVmdE5hdmlnYXRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtMZWZ0TmF2aWdhdGlvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExlZnROYXZpZ2F0aW9uTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihsaWJyYXJ5OiBGYUljb25MaWJyYXJ5KSB7XHJcbiAgICBsaWJyYXJ5LmFkZEljb25zKGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0KTtcclxuICB9XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGVmdE5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogWyBMZWZ0TmF2aWdhdGlvblNlcnZpY2UgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE5hdkhlYWRpbmcsIE5hdkl0ZW0sIE5hdkl0ZW1UeXBlLCBOYXZJdGVtTGluayB9IGZyb20gJy4vbmF2LWl0ZW0ubW9kZWwnO1xyXG5leHBvcnQgeyBMZWZ0TmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL2xlZnQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcclxuIl19