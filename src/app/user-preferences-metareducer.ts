import { UserPreferncesService } from './user-prefernces.service';
import { ActionReducer } from '@ngrx/store';
import { merge, pick } from 'lodash/fp';
import { AppActions } from './app.actions';
import { State } from './reducers';

export function userPreferncesMetaReducer(userPService: UserPreferncesService,
  keys: string[]) {
  return function
    (reducer: ActionReducer<{ app: State }, AppActions>)
    : ActionReducer<{ app: State }, AppActions> {

    let firstRun = true;
    return function (state, action) {
      let nextState = reducer(state, action);

      if (firstRun) {
        firstRun = false;
        const savedState = userPService.getFromStorage();
        nextState = merge(nextState, savedState);
      }

      userPService.saveToStorage(pick(keys, nextState));


      return nextState;
    };
  };
}
