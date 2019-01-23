import {createSelector} from '@ngrx/store';
import * as fromActions from '../app.actions';

export interface AppTheme {
  class: string;
  name: string;
}

export interface State {
  themes: AppTheme[];
  activeTheme: AppTheme;
}

const initialState: State = {
  themes: [
    {class: 'pink-theme', name: 'pink theme'},
    {class: 'purple-theme', name: 'purple theme'},
    {class: 'dark-theme', name: 'dark theme'},
  ],
  activeTheme: {class: 'pink-theme', name: 'pink theme'}
};

export const app = ((state): State => state.app);

export const getThemes = createSelector(app, (state): AppTheme[] => state.themes);
export const getActiveTheme = createSelector(app, (state): AppTheme => state.activeTheme);

export function reducer(state = initialState, action: fromActions.AppActions): State {
  switch (action.type) {
    case fromActions.AppActionTypes.SetTheme:
      return {...state, activeTheme: action.payload};
    default:
      return state;
  }
}
