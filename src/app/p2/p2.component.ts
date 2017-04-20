import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-p2',
    templateUrl: './p2.component.html',
    styleUrls: ['./p2.component.scss']
})
export class P2Component implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    bindViewTap() {
        const self = this;
        $(".iHole").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            setTimeout(() => {
                $(".catGroup").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    setTimeout(() => {
                        self.router.navigateByUrl('/p3');
                    }, 100);
                }).attr("class", "catGroup catInHole");
                $(".ce").css("display", "none");
            }, 100);
        }).attr("class", "iHole ho");
    }
}
