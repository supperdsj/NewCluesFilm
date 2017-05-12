import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-p4',
    templateUrl: './p4.component.html',
    styleUrls: ['./p4.component.scss']
})
export class P4Component implements OnInit {
    canClick = false;

    constructor(private router: Router) {
        this.canClick = false;
        setTimeout(() => {
            this.canClick = true;
        }, 2000);
    }

    ngOnInit() {
        setTimeout(() => {
            $($('.subBox')[0]).attr('class', 'subBox l2 a1');
            $($('.subBox')[1]).attr('class', 'subBox l2 a2');
            $($('.subBox')[2]).attr('class', 'subBox l1 a3');
            setTimeout(() => {
                $('.text').addClass('animated fadeIn');
            }, 500);
            setTimeout(() => {
                $('.inBall').addClass('inBallAnimate');
                setTimeout(() => {
                    $('.catStay').addClass('animated fadeInLeft');
                    $('html').one('click', () => {
                        const arr = [$('.catStay'), $('.catMove1'), $('.catMove2'), $('.catMove3'), $('.catMove4')];
                        const delay = 200;
                        arr[0].removeClass('animated fadeInLeft');
                        setTimeout(() => {
                            $('.inBall').addClass('outBallAnimate');
                            $('.box').removeClass('animated fadeInRight');
                            setTimeout(() => {
                                $('.box').addClass('boxMoveOut');
                                setTimeout(() => {
                                    $('.title').addClass('animated fadeInLeft').css('opacity', 1);
                                }, 500);
                            }, 100);
                        }, delay);
                        for (let i = 0; i < arr.length - 1; i++) {
                            setTimeout(() => {
                                arr[i].css('opacity', 0);
                                arr[i + 1].css('opacity', 1);
                            }, i * delay);
                        }
                        setTimeout(() => {
                            this.router.navigateByUrl('/p5');
                        }, (arr.length) * delay * 3);
                    });
                }, 300);
            }, 1000);
        }, 1300);
    }
}
