import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-p3',
    templateUrl: './p3.component.html',
    styleUrls: ['./p3.component.scss']
})
export class P3Component implements OnInit {
    canClick = false;

    constructor(private router: Router) {
        this.canClick = false;
        setTimeout(() => {
            this.canClick = true;
        }, 1500);
    }

    ngOnInit() {
    }

    bindViewTap() {
        if (!this.canClick) {
            return;
        }
        const self = this;
        $(".cat").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        }).attr("class", "cat catOutHole");
        setTimeout(() => {
            $(".ball").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                setTimeout(() => {
                    self.router.navigateByUrl('/p4');
                }, 150);
            }).attr("class", "ball roll");
        }, 100);
    }
}
