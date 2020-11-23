import { ActionReducerMap } from "@ngrx/store";
import { AdminState, reducer } from "./reducers/admin.reducer";

   
  export interface AppState {
    admin: AdminState;
  }

  export const reducers : ActionReducerMap<AppState> = {
    admin : reducer
  }