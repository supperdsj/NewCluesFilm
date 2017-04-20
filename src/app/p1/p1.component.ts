import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-p1',
    templateUrl: './p1.component.html',
    styleUrls: ['./p1.component.scss']
})
export class P1Component implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    bindViewTap() {
        this.router.navigateByUrl('/p2');
    }
}
