/**
 * @path Angular router path
 * @title Menu item title
 * @role What role can visit
 * @icon Menu item icon
 * @opened For dropdown: Is dropdown opened
 * @children For dropdown: All items inside dropdown
 * @type All menu item types. If item don`t have type than its default menu item
 * @progress Show/hide IN PROGRESS badge after menu item title
 */
export interface RouteInfo {
  path?: string;
  title: string;
  role?: string[];
  icon?: string;
  opened?: boolean;
  type?: 'title' | 'dropdown';
  progress?: boolean;
  children?: RouteInfo[];
}
