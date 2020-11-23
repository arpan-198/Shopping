import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,AppRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './Components/navbars/Mainheader/mainheader.component';
import { MainLayOutComponent } from './Components/Layouts/main-lay-out/main-lay-out.component';
import { SecondaryLayOutComponent } from './Components/Layouts/secondary-lay-out/secondary-lay-out.component';
import { MainsidenavComponent } from './Components/mainsidenav/mainsidenav.component';
import { MainfooterComponent } from './Components/footers/mainfooter/mainfooter.component';
import { TypeComponent } from './Components/type/type.component';
import { SubtypeComponent } from './Components/subtype/subtype.component';
import { AdminfootersComponent } from './Components/footers/adminfooters/adminfooters.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthFooterComponent } from './Components/footers/auth/auth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainsidenavComponent,
    MainHeaderComponent,
    SecondaryLayOutComponent,
    MainfooterComponent,
    AppRoutingComponents,
    TypeComponent,
    SubtypeComponent,
    AdminfootersComponent,
    AuthFooterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
