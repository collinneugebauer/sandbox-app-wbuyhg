import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDropdownModule } from '../assets/components/product-dropdown';
import { fakeBackendProvider } from './app.httpInterceptor';
import { UserProfileModule } from '../assets/components/user-profile';
import { LeftNavigationModule } from '../assets/components/left-navigation';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch, faUserPlus, faUserMd, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LeftNavComponent } from './left-nav.component';
import { HomeComponent } from './home.component';
import { BlankComponent } from './blank.component';
import { SearchComponent } from './search.component';
import { NotificationsModule } from '../assets/components/notifications';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    LeftNavComponent,
    SearchComponent,
    BlankComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    UserProfileModule,
    FontAwesomeModule,
    LeftNavigationModule.forRoot(),
    ProductDropdownModule,
    NotificationsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'left-nav', component: LeftNavComponent },
      { path: 'search', component: SearchComponent },
      { path: 'search/:id', component: SearchComponent },
      { path: 'blank', component: BlankComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [fakeBackendProvider]
})
export class AppModule {
  constructor(fontLibrary: FaIconLibrary) {
    fontLibrary.addIcons(faSearch, faUserPlus, faUserMd, faChevronLeft, faChevronRight);
  }
 }
