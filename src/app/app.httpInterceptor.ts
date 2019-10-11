import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { SurescriptsNotifications } from '../assets/components/notifications/lib/notifications.model';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const products: any[] = [
            {
              'text': 'Testing Tools',
              'children': [
                {
                  'text': 'Rx Message Manager',
                  'link': 'https://admin.devint.surescripts-dev.internal/erxmessagemanager'
                },
                {
                  'text': 'Fabr Test Data',
                  'link': 'http://localhost:4200/home'
                }
              ]
            },
            {
              'text': 'Development Accounts',
              'children': [
                {
                  'text': 'Surescripts Developer',
                  'link': 'https://localhost:44311'
                },
                {
                  'text': 'Surescripts Java Developer',
                  'link': 'http://localhost:4200'
                }
              ]
            },
            {
              'text': 'Spotlight',
              'link': 'https://spotlight-devint.surescripts-dev.internal'
            },
            {
              'text': 'PDMP Management',
              'link': 'https://mdl-wsrv0001a:44309'
            },
            {
              'text': 'sdmpnext',
              'link': 'https://revenue-devint.surescripts.internal/sdmpnext'
            },
            {
              'text': 'User Management',
              'link': 'http://localhost:4200/home'
            },
            {
              'text': 'Directory Manager',
              'link': 'https://admin.devint.surescripts-dev.internal/directorymanager'
            }
          ];
        const profile: any = {
            'user': {
                'firstName': 'Surescripts',
                'lastName': 'Developer',
                'id': 1
            },
            'environment': 'localhost',
            'baseUrl': 'https://devint.user.surescripts-dev.internal'
        };
        const now = new Date();
        const notifications: any = {
          'baseUrl': 'https://devint.user.surescripts-dev.internal',
          'total': 500,
          'items': [
            {
              title: 'Notification 1',
              summary: 'This is the first notification',
              id: '1234asdfaserq34afesf1',
              status: 'Unread',
              postedDate: new Date().toISOString()
            },
            {
              title: 'Notification 2',
              summary: 'This is a longer notification with additional information about bla bla bla.',
              id: '1234asdfaserq34afesf2',
              status: 'Unread',
              postedDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 4).toISOString()
            },
            {
              title: 'Notification 3',
              summary: 'This is the first notification',
              id: '1234asdfaserq34afesf3',
              status: 'Unread',
              postedDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 24).toISOString()
            },
            {
              title: 'Notification 4',
              summary: 'This is the first notification',
              id: '1234asdfaserq34afesf4',
              status: 'Unread',
              postedDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 48).toISOString()
            },
            {
              title: 'Notification 5',
              summary: 'This is the first notification',
              id: '1234asdfaserq34afesf5',
              status: 'Unread',
              postedDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 192).toISOString()
            },
            {
              title: 'Notification 6',
              summary: 'This is the first notification',
              id: '1234asdfaserq34afesf6',
              status: 'Unread',
              postedDate:  new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 800).toISOString()
            },
            {
              title: 'Notification 7',
              summary: 'This is the first notification',
              id: '1234asdfaserq34afesf7',
              status: 'Unread',
              postedDate:  new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 1600).toISOString()
            },
            {
              title: 'Notification 8',
              summary: 'This is the first notification',
              id: '1234asdfaserq34afesf7',
              status: 'Unread',
              postedDate:  new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() - 25).toISOString()
            }
          ]
        };
        return of(null).pipe(mergeMap(() => {
            if (request.url.endsWith('/menu')) {
                return of(new HttpResponse({ status: 200, body: products }));
            } else if (request.url.endsWith('/profile')) {
                return of(new HttpResponse({ status: 200, body: profile }));
            } else if (request.url.endsWith('/notifications')) {
              return of(new HttpResponse({ status: 200, body: notifications }));
            } else {
              return of(new HttpResponse({ status: 200}));
            }
        }), materialize(), delay(100), dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
