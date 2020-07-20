import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/layout/layout.module';
// App Sidebar Component
import { AppSidebarComponent } from './app-sidebar.component';
import { AppSidebarFooterComponent } from './app-sidebar-footer.component';
import { AppSidebarFormComponent } from './app-sidebar-form.component';
import { AppSidebarHeaderComponent } from './app-sidebar-header.component';
import { AppSidebarMinimizerComponent } from './app-sidebar-minimizer.component';
import { AppSidebarService } from './app-sidebar.service';
// App SidebarNav Component
import { NavDropdownDirective, NavDropdownToggleDirective } from './app-sidebar-nav.directive';
import { AppSidebarNavComponent } from './app-sidebar-nav.component';
import { AppSidebarNavDividerComponent } from './app-sidebar-nav/app-sidebar-nav-divider.component';
import { AppSidebarNavDropdownComponent } from './app-sidebar-nav/app-sidebar-nav-dropdown.component';
import { AppSidebarNavItemsComponent } from './app-sidebar-nav/app-sidebar-nav-items.component';
import { AppSidebarNavLinkComponent, AppSidebarNavLinkContentComponent } from './app-sidebar-nav/app-sidebar-nav-link.component';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav/app-sidebar-nav-title.component';
import { SidebarNavHelper } from './app-sidebar-nav.service';
import { AppSidebarNavLabelComponent } from './app-sidebar-nav/app-sidebar-nav-label.component';
import { AppSidebarNavIconPipe } from './app-sidebar-nav/app-sidebar-nav-icon.pipe';
import { AppSidebarNavBadgePipe } from './app-sidebar-nav/app-sidebar-nav-badge.pipe';
import { AppSidebarNavLinkPipe } from './app-sidebar-nav/app-sidebar-nav-link.pipe';
import { AppSidebarNavItemClassPipe } from './app-sidebar-nav/app-sidebar-nav-item-class.pipe';
var AppSidebarModule = /** @class */ (function () {
    function AppSidebarModule() {
    }
    AppSidebarModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                LayoutModule
            ],
            exports: [
                AppSidebarFooterComponent,
                AppSidebarFormComponent,
                AppSidebarHeaderComponent,
                AppSidebarMinimizerComponent,
                AppSidebarComponent,
                AppSidebarNavItemsComponent,
                AppSidebarNavComponent,
                AppSidebarNavDividerComponent,
                AppSidebarNavDropdownComponent,
                AppSidebarNavLabelComponent,
                AppSidebarNavLinkComponent,
                AppSidebarNavLinkContentComponent,
                AppSidebarNavTitleComponent,
                NavDropdownDirective,
                NavDropdownToggleDirective,
                LayoutModule
            ],
            declarations: [
                AppSidebarFooterComponent,
                AppSidebarFormComponent,
                AppSidebarHeaderComponent,
                AppSidebarMinimizerComponent,
                AppSidebarMinimizerComponent,
                AppSidebarComponent,
                AppSidebarNavItemsComponent,
                AppSidebarNavComponent,
                AppSidebarNavDividerComponent,
                AppSidebarNavDropdownComponent,
                AppSidebarNavLinkComponent,
                AppSidebarNavLinkContentComponent,
                AppSidebarNavTitleComponent,
                NavDropdownDirective,
                NavDropdownToggleDirective,
                AppSidebarNavLabelComponent,
                AppSidebarNavIconPipe,
                AppSidebarNavBadgePipe,
                AppSidebarNavLinkPipe,
                AppSidebarNavItemClassPipe
            ],
            providers: [
                SidebarNavHelper,
                AppSidebarService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
    ], AppSidebarModule);
    return AppSidebarModule;
}());
export { AppSidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELHdCQUF3QjtBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCwyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFzRC9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFwRDVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjtnQkFDekIsdUJBQXVCO2dCQUN2Qix5QkFBeUI7Z0JBQ3pCLDRCQUE0QjtnQkFDNUIsbUJBQW1CO2dCQUNuQiwyQkFBMkI7Z0JBQzNCLHNCQUFzQjtnQkFDdEIsNkJBQTZCO2dCQUM3Qiw4QkFBOEI7Z0JBQzlCLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2dCQUMxQixpQ0FBaUM7Z0JBQ2pDLDJCQUEyQjtnQkFDM0Isb0JBQW9CO2dCQUNwQiwwQkFBMEI7Z0JBQzFCLFlBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWix5QkFBeUI7Z0JBQ3pCLHVCQUF1QjtnQkFDdkIseUJBQXlCO2dCQUN6Qiw0QkFBNEI7Z0JBQzVCLDRCQUE0QjtnQkFDNUIsbUJBQW1CO2dCQUNuQiwyQkFBMkI7Z0JBQzNCLHNCQUFzQjtnQkFDdEIsNkJBQTZCO2dCQUM3Qiw4QkFBOEI7Z0JBQzlCLDBCQUEwQjtnQkFDMUIsaUNBQWlDO2dCQUNqQywyQkFBMkI7Z0JBQzNCLG9CQUFvQjtnQkFDcEIsMEJBQTBCO2dCQUMxQiwyQkFBMkI7Z0JBQzNCLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQUN0QixxQkFBcUI7Z0JBQ3JCLDBCQUEwQjthQUMzQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixDQUFDO1NBQ3BELENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XG5pbXBvcnQgeyBBcHBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1taW5pbWl6ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci5zZXJ2aWNlJztcblxuLy8gQXBwIFNpZGViYXJOYXYgQ29tcG9uZW50XG5pbXBvcnQgeyBOYXZEcm9wZG93bkRpcmVjdGl2ZSwgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1kaXZpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsIEFwcFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZIZWxwZXIgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkljb25QaXBlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWljb24ucGlwZSc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2QmFkZ2VQaXBlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkxpbmtQaXBlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWxpbmsucGlwZSc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2SXRlbUNsYXNzUGlwZSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1pdGVtLWNsYXNzLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbnRlbnRDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZJY29uUGlwZSxcbiAgICBBcHBTaWRlYmFyTmF2QmFkZ2VQaXBlLFxuICAgIEFwcFNpZGViYXJOYXZMaW5rUGlwZSxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNsYXNzUGlwZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTaWRlYmFyTmF2SGVscGVyLFxuICAgIEFwcFNpZGViYXJTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTW9kdWxlIHsgfVxuIl19