import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-p0',
  templateUrl: './p0.component.html',
  styleUrls: ['./p0.component.scss']
})
export class P0Component implements OnInit {

  constructor(private router: Router) {
    const images = ['bg_dot.png', 'p2_cat.png', 'p2_hole.png', 'p3_c2.png', 'p3_hole.png', 'p4_c1.png', 'p4_c4.png', 'p4_pl.png', 'p5_l1.png', 'p6_line.png', 'p7_p.png', 'p1_cat.png', 'p2_cat_n.png', 'p3_ball.png', 'p3_c3.png', 'p4_box.png', 'p4_c2.png', 'p4_cat.png', 'p5/1.jpg', 'p5/2.jpg', 'p5/3.jpg', 'p5/4.jpg', 'p5/5.jpg', 'p6/1.jpg', 'p6/2.jpg', 'p6/3.jpg', 'p6/4.jpg', 'p6/5.jpg', 'p5_l2.png', 'p6_river.png', 'p1_shadow.png', 'p2_glass.png', 'p3_c1.png', 'p3_cat.png', 'p4_c0.png', 'p4_c3.png', 'p4_line.png', 'p5_bg.png', 'p6_w.png'];
    let i = 0;
    for (const image of images) {
      const img = new Image();
      img.src = '/assets/image/' + image;
      img.onload = img.onerror = () => {
        i++;
        console.log(i);
        if (i >= images.length) {
          $('#loading').remove();
          this.router.navigateByUrl('/p1');
        }
      };
    }
  }

  ngOnInit() {
  }

}
