import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

// Components Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FromEventComponent } from './pages/rxjs/from-event/from-event.component';
import { MapFilterComponent } from './pages/rxjs/map-filter/map-filter.component';
import { TapComponent } from './pages/rxjs/tap/tap.component';
import { ShareComponent } from './pages/rxjs/share/share.component';
import { ConcatComponent } from './pages/rxjs/concat/concat.component';
import { NextErrorComplComponent } from './pages/rxjs/next-error-compl/next-error-compl.component';
import { BufferTimeComponent } from './pages/rxjs/buffer-time/buffer-time.component';
import { SwitchMapComponent } from './pages/rxjs/switch-map/switch-map.component';
import { ForkJoinComponent } from './pages/rxjs/fork-join/fork-join.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    RxjsComponent,
    FromEventComponent,
    MapFilterComponent,
    TapComponent,
    ShareComponent,
    ConcatComponent,
    NextErrorComplComponent,
    BufferTimeComponent,
    SwitchMapComponent,
    ForkJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
