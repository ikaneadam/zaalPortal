import { Route, Routes } from '@angular/router';

/**
 * Represents a route in our app.
 *
 * @see {@link Route} for more documentation.
 */
export interface AppRoute extends Route {
  data?: any;
}

/**
 * Represents routes in our app.
 *
 * @see {@link Routes} for more documentation.
 */
export type AppRoutes = AppRoute[];
