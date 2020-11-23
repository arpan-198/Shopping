import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../index';
import { AdminState , adminFeatureKey } from "../reducers/admin.reducer";

// export const selectAdminState = createFeatureSelector<AppState["admin"]>(
//   adminFeatureKey
// );



export const selectAdmin = (state: AppState) => state.admin;
 
// export const selectAdminAuth = createSelector(
//   selectAdmin,
//   (state: AdminState) => state.User
// );

// export const getId= createSelector(
//   selectAdmin,
//   (state : AdminState) => state.User.id
// );

export const isAuthenticate = createSelector(
  selectAdmin,
  (state : AdminState)=> state.isAuthenticated
)