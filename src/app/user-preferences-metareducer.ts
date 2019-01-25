import {ActionReducer} from '@ngrx/store';
import {merge, pick} from 'lodash/fp';
import {AppActions} from './app.actions';
import {State} from './reducers';

export function userPreferencesMetaReducer(reducer: ActionReducer<{app: State}, AppActions>): ActionReducer<{app: State}, AppActions> {
  let firstRun = true;
  const keys = ['app.activeTheme'];
  const localStorageKey = '__user-preferences__';
  return function (state, action) {
    let nextState = reducer(state, action);

    if (firstRun) {
      firstRun         = false;
      const savedState = JSON.parse((localStorage.getItem(localStorageKey) || '{}'));
      nextState        = merge(nextState, savedState);
    }

    const stateToSave = JSON.stringify(pick(keys, nextState));
    localStorage.setItem(localStorageKey, stateToSave);

    return nextState;
  };
}
