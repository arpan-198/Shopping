import { createAction, props } from '@ngrx/store';

import { IAdminAuth } from '../../Model/admin.model';

export const adminLoginRequest = createAction(
  '[Admin Login Effect] Login Request',
  props<{ user: IAdminAuth }>()
);

export const adminLoginSuccess = createAction(
  '[Admin Login Effect] Login Success',
  props<{ user: IAdminAuth }>()
);

export const adminLoginFail = createAction(
  '[Admin Login Effect] Login Failed',
  props<{ user: any }>()
);

export const adminLogout = createAction(
  '[Admin Logout Effect] Logout Success'
);


