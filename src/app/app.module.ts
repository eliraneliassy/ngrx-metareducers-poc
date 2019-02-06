import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, META_REDUCERS, MetaReducer } from '@ngrx/store';
import { reducer } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
  MatToolbarModule, MatSidenavModule, MatListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

import { UserPreferncesService } from './user-prefernces.service';
import { userPreferncesMetaReducer } from './user-preferences-metareducer';

export function getMetaReducers(userPreferncesService: UserPreferncesService,
  keys: string[]): MetaReducer<any>[] {
  return [userPreferncesMetaReducer(userPreferncesService, keys)];
}

export const userPreferncesKeys = new InjectionToken<string[]>('user P keys');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    {
      provide: META_REDUCERS,
      deps: [UserPreferncesService],
      useFactory: getMetaReducers,
    },
    {
      provide: userPreferncesKeys,
      useValue: ['app.activeTheme'],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
