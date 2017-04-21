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
        setTimeout(() => {
            $($('.subBox')[0]).attr('class', 'subBox l2 a1');
            $($('.subBox')[1]).attr('class', 'subBox l2 a2');
            $($('.subBox')[2]).attr('class', 'subBox l1 a3');
            setTimeout(() => {
                $('.bline').attr('class', 'bline blinea');
            }, 200);
            setTimeout(() => {
                $('.cat').css({
                    'bottom': '0',
                    'left': '-0.64rem'
                });
            }, 500);
        }, 1300);
    }

    bindViewTap() {
        this.router.navigateByUrl('/p5');
    }
}
