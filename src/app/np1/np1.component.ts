import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-np1',
    templateUrl: './np1.component.html',
    styleUrls: ['./np1.component.scss']
})
export class Np1Component implements OnInit {

    constructor(private router: Router) {
        setTimeout(() => {
            $('.logoGroup').attr('class', 'logoGroup fadeInUp animated');
        }, 0);
        setTimeout(() => {
            $('.text1').attr('class', 'text1 fadeInUp animated');
        }, 500);
        setTimeout(() => {
            $('.h1').attr('class', 'h1 fadeInLeft animated ');
            $('.h2').attr('class', 'h2 fadeInRight animated');
        }, 1000);
        setTimeout(() => {
            $('.clickArea').css('display', 'block');
        }, 1500);
    }

    bindViewTap() {
        $('.clickArea').css('display', 'none');
        $('.logoShadow,.lb,.sImage,.text1,.text2,.ry .lc').addClass('fadeOut animated');
        setTimeout(() => {
            $('#tc').addClass('lcB');
            $('.hole').addClass('holeShow');
            setTimeout(() => {
                $('#tc').attr('src', '/assets/image/np1/logo_cat_dead.png');
                setTimeout(() => {
                    $('#tc').addClass('catInHole');
                    setTimeout(() => {
                        $('.ball').addClass('ballAnimate');
                        $('.ball .b').addClass('bAnimate');
                        setTimeout(() => {
                            setTimeout(() => {
                                $('.ball').removeClass('ballAnimate');
                                $('.ball .b').removeClass('bAnimate');
                                $('.hole').addClass('holeHide');
                            }, 500);
                            $('#tc').attr('src', '/assets/image/np1/logo_cat_black.png');
                            $('#tc').addClass('catOutHole');
                            setTimeout(() => {
                                this.router.navigateByUrl('/p4');
                            }, 1000);
                        }, 1000);
                    }, 500);
                }, 500);
            }, 1000);
        }, 500);
    }

    ngOnInit() {
        $('*').removeClass('animated');
        $('html').off('click');
    }

}
