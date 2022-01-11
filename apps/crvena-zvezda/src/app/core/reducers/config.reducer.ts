import { createAction, createReducer, on, props } from '@ngrx/store';
import { config } from '../../config/config';

// Init state
export const initialState = config;

// Update action
export const setConfig = createAction(
  '[Config] Set Config',
  props<{ langs: any[] }>()
);


// Reducer
const _configReducer = createReducer(
  initialState,
  on(setConfig, (state, { langs }) => ({
    apiUrl: state.apiUrl,
    mediaUrl: state.mediaUrl,
    mainLogo: '../../../assets/images/main-logo.png',
    sidebarBgImage: '../../../assets/images/sidebar-bg.png',
    sidebarRoutes: state.sidebarRoutes,
    languages: langs,
    static: state.static,
  }))
);


export function configReducer(state: any, action: any) {
  return _configReducer(state, action);
}
