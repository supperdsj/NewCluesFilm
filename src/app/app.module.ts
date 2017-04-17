import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ROOT_ROUTING} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent
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
