import {RouterModule, Routes} from "@angular/router";
import {P1Component} from "./p1/p1.component";
import {P2Component} from "./p2/p2.component";
import {P3Component} from "./p3/p3.component";
import {P4Component} from "./p4/p4.component";
import {P5Component} from "./p5/p5.component";
import {P6Component} from "./p6/p6.component";
const ROUTES: Routes = [
    {path: 'p1', component: P1Component},
    {path: 'p2', component: P2Component},
    {path: 'p3', component: P3Component},
    {path: 'p4', component: P4Component},
    {path: 'p5', component: P5Component},
    {path: 'p6', component: P6Component},
    {path: '**', component: P1Component}
];
export const ROOT_ROUTING = RouterModule.forRoot(ROUTES);
