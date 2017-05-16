import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-p5',
    templateUrl: './p5.component.html',
    styleUrls: ['./p5.component.scss']
})
export class P5Component implements OnInit {
    sel = 0;
    films: Array<any> = [
        {
            img: "/assets/image/p5/1.jpg",
            title: "我是证人",
            texts: [
                "创青春悬疑类电影国内票房纪录",
                "环球时报颁发年度最受社会关注奖"
            ]
        },
        {
            img: "/assets/image/p5/2.jpg",
            title: "滚蛋吧！肿瘤君",
            texts: [
                "独特的励志喜剧类型成为年度黑马",
                "斩获中国电影华表奖优秀青年创作影片奖"
            ]
        },
        {
            img: "/assets/image/p5/3.jpg",
            title: "捉迷藏",
            texts: [
                "开拓性的题材引发关注",
                "首届澳门国际影展主竞赛单元",
                "乌迪内斯远东电影节竞赛单元"
            ]
        },
        {
            img: "/assets/image/p5/4.jpg",
            title: "逆时营救",
            texts: [
                "原创华语科幻动作电影",
                "第50届休斯顿国际电影节雷米大奖",
                "成龙监制，杨幂、霍建华联袂出演",
                "集结国际一流制作班底"
            ]
        },
        {
            img: "/assets/image/p5/5.jpg",
            title: "重生电梯",
            subTitle: "《奇妙物语》主题系列电影，2017年陆续公映",
            texts: [
                "迷幻青春症候群四部曲（《重生电梯》等）",
                "聚焦半熟人群成长焦虑",
                "直面人性欲望残酷抉择"
            ]
        }
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
        $('html').off('click');
        $('*').removeClass('animated');
        setTimeout(() => {
            this.sel = 0;
        }, 0);
    }

    bindViewTap() {
        if (this.sel + 1 >= this.films.length) {
            this.router.navigateByUrl('/p6');
        } else {
            this.sel++;
        }
    }
}
