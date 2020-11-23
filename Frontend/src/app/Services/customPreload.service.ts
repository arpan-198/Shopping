import { Observable , of } from 'rxjs';
import { Injectable } from "@angular/core";
import { PreloadingStrategy } from '@angular/router';
import { Route } from '@angular/router';


@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy{
   preload(route:Route,load: () => Observable<any>):Observable<any>{
        if(route.data && route.data['preload']){
            return load();
        }
        else{
            return of(null);
        }
    }
}