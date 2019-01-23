import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SetActiveTheme} from './app.actions';
import {AppTheme} from './reducers';
import * as fromReducer from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public activeTheme$: Observable<AppTheme>;
  public themes$: Observable<AppTheme[]>;

  constructor(private store: Store<fromReducer.State>) {
    this.activeTheme$ = this.store.select(fromReducer.getActiveTheme);
    this.themes$ = this.store.select(fromReducer.getThemes);
  }

  public ngOnInit(): void {

  }

  public themeSelected(theme: AppTheme) {
    this.store.dispatch(new SetActiveTheme(theme));
  }
}
