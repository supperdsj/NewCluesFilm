import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ROOT_ROUTING} from "./app.routing";
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { P5Component } from './p5/p5.component';
import { P6Component } from './p6/p6.component';
import { P7Component } from './p7/p7.component';
import { P0Component } from './p0/p0.component';

@NgModule({
    declarations: [
        AppComponent,
        P1Component,
        P2Component,
        P3Component,
        P4Component,
        P5Component,
        P6Component,
        P7Component,
        P0Component
    ],
    imports: [
        ROOT_ROUTING,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
