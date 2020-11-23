import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { IAdminAuth } from '../../Model/admin.model';
import * as AdminActions from '../actions/admin.action';

export const adminFeatureKey = 'admin';

export interface AdminState {
  User: IAdminAuth | undefined;
  LoggedIn: boolean | null,
  isLoading: boolean | null,
  isAuthenticated: boolean | null;
  hasError: boolean | null;
  errorMessage: string | null
}


export const initialState: AdminState = {
  User: undefined,
  LoggedIn: null,
  isLoading: null,
  isAuthenticated: null,
  hasError: null,
  errorMessage: null
};

export const AdminReducer = createReducer(
  initialState,
  on(AdminActions.adminLoginRequest,
    (state, action) => {
      return {
        ...state,
        hasError: false,
        errorMessage: null,
        isLoading: true
      }
    }
  ),
  on(AdminActions.adminLoginSuccess,
    (state, action) => {
      return {
        ...state,
        User : action.user,
        LoggedIn : true,
        isAuthenticated : true,
        isLoading : false
      }
    }
  ),
  on(AdminActions.adminLoginFail,
    (state, action) => {
      return {
        ...state,
        hasError: true,
        errorMessage: action.user.message,
        isAuthenticated: false,
        isLoading: false
      }
    }
  ),
    on(AdminActions.adminLogout,
      (state,action) =>{
        return {
          User : undefined,
          LoggedIn: null,
          isLoading: null,
          isAuthenticated: null,
          hasError: null,
          errorMessage: null
        };
      }
      )
    // ),
    // on(UserActions.upsertUsers,
    //   (state, action) => adapter.upsertMany(action.users, state)
    // ),
    // on(UserActions.updateUser,
    //   (state, action) => adapter.updateOne(action.user, state)
    // ),
    // on(UserActions.updateUsers,
    //   (state, action) => adapter.updateMany(action.users, state)
    // ),
    // on(UserActions.deleteUser,
    //   (state, action) => adapter.removeOne(action.id, state)
    // ),
    // on(UserActions.deleteUsers,
    //   (state, action) => adapter.removeMany(action.ids, state)
    // ),
    // on(UserActions.loadUsers,
    //   (state, action) => adapter.setAll(action.users, state)
    // ),
    // on(UserActions.clearUsers,
    //   state => adapter.removeAll(state)
  
);

export function reducer(state: AdminState | undefined, action: Action) {
  return AdminReducer(state, action);
}

