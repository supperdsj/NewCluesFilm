import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-p6',
    templateUrl: './p6.component.html',
    styleUrls: ['./p6.component.scss']
})
export class P6Component implements OnInit {

    sel = -1;
    films: Array<any> = [
        {
            img: "/assets/image/p6/1.jpg",
            title: "我是证人2",
            subTitle2: "2017年前期开发中",
            texts: [
                "《我是证人》悬疑犯罪系列第二部",
                "人气偶像担纲打造高品质犯罪片",
                "极端案件拷问司法伦理"
            ]
        },
        {
            img: "/assets/image/p6/2.jpg",
            title: "日落东瀛",
            subTitle: "2017年电影开发中",
            texts: [
                "鬼才马伯庸原创文学剧本",
                "考据型悬疑动作钜作",
                "古装谍影重重x湄公河行动",
                "锦衣卫潜伏扶桑抗倭"
            ]
        },
        {
            img: "/assets/image/p6/3.jpg",
            title: "有爱我们床上谈",
            subTitle2: "2017年网剧x电影同步开发",
            texts: [
                "摩登都市性喜剧稀缺题材",
                "“约炮”视角毒辣解剖析都市两性心理",
                "改变自豆瓣阅读原创小说榜蝉联冠军"
            ]
        },
        {
            img: "/assets/image/p6/4.jpg",
            title: "宋时归",
            subTitle2: "2017年超量级古装剧集开发中",
            texts: [
                "天使奥斯卡千万级王文首次影视改编",
                "兵人独特视角刻画宋辽战争诡谲政局",
                "新派穿越正剧还原微人义事传奇"
            ]
        },
        {
            img: "/assets/image/p6/5.jpg",
            title: "白蛇疾文录",
            subTitle2: "2017超量级古装剧集开发中",
            texts: [
                "马伯庸新作同步改编",
                "白蛇传奇置身生化危机→超脑洞主线",
                "电影级特效→构筑人妖共存超幻想都市",
                "七年之痒vs异种恋爱→超现代恋爱热点"
            ]
        },
        {
            img: "/assets/image/p6/6.jpg",
            title: "格斗士",
            subTitle2: "2017年精品现代剧集开发中",
            texts: [
                "网剧版《激战》荷尔蒙暴击屏幕",
                "电影级制作团队担纲看齐美剧水准",
                "澳洲综合格斗大赛AFC授权合作项目展示超真实热血格斗"
            ]
        }
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
        $('*').removeClass('animated');
        setTimeout(() => {
            this.sel = 0;
        }, 2000);
        setTimeout(() => {
            $('.river').css('transition', 'all 0.5s');
            $('.star').addClass('animated bounceIn');
        }, 1000);
    }

    bindViewTap() {
        if (this.sel + 1 >= this.films.length) {
            this.router.navigateByUrl('/p7');
        } else {
            this.sel++;
        }
    }
}
