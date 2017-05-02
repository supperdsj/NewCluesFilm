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
        this.canClick = false;
        const self = this;
        setTimeout(() => {
            $('.c1').css('opacity', '1');
        }, 0);
        setTimeout(() => {
            $('.c1').css('opacity', '0');
        }, 200);
        setTimeout(() => {
            $('.c2').css('opacity', '1');
        }, 200);
        setTimeout(() => {
            $('.c2').css('opacity', '0');
        }, 400);
        setTimeout(() => {
            $('.c3').css('opacity', '1');
        }, 400);
        // setTimeout($('.c3').css('opacity', '1'), 150);
        // $(".cat").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        // }).attr("class", "cat catOutHole");
        setTimeout(() => {
            $(".ball").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                setTimeout(() => {
                    self.router.navigateByUrl('/p4');
                }, 2000);
            }).attr("class", "ball roll");
        }, 400);
    }
}
