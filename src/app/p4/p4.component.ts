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
            }, 1000);
            setTimeout(() => {
                $('.cat').css({
                    'bottom': '0',
                    'left': '-0.64rem'
                });
            }, 500);
        }, 1300);
    }

    bindViewTap() {
        const self = this;
        const step = 300;
        // this.router.navigateByUrl('/p5');
        setTimeout(() => {
            $('.c0').css('opacity', '0');
        }, step * 0 + 50);
        setTimeout(() => {
            $('.c1').css('opacity', '1');
        }, step * 0);
        setTimeout(() => {
            $('.c1').css('opacity', '0');
        }, step * 1 + 50);
        setTimeout(() => {
            $('.c2').css('opacity', '1');
        }, step * 1);
        setTimeout(() => {
            $('.c2').css('opacity', '0');
        }, step * 2 + 50);
        setTimeout(() => {
            $('.c3').css('opacity', '1');
        }, step * 2);
        setTimeout(() => {
            $('.c3').css('opacity', '0');
        }, step * 3 + 50);
        setTimeout(() => {
            $('.c4').css('opacity', '1');
        }, step * 3);
        setTimeout(() => {
            $('.bline').attr('class', 'bline blinea2');
            setTimeout(() => {
                self.router.navigateByUrl('/p5');
            }, 2000);
        }, step * 3);
    }
}
