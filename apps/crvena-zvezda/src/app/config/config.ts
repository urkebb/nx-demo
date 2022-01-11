/* eslint-disable prefer-const */
import { environment } from '../../environments/environment';
import { StaticResourses } from '../core/static/static-resources';
import { ROUTES } from './sidebar-routes.config';

export let config = {
  apiUrl: environment.apiUrl,
  mediaUrl: environment.mediaUrl,
  sidebarRoutes: ROUTES,
  languages: [20],
  static: StaticResourses,
};

