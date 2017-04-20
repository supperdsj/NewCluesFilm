import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-p4',
    templateUrl: './p4.component.html',
    styleUrls: ['./p4.component.scss']
})
export class P4Component implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    bindViewTap() {
        this.router.navigateByUrl('/p5');
    }
}
