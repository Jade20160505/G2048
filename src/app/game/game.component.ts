import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  arr: Array<any>;

  group: number[][];


  constructor() { 
    
  }

  ngOnInit() {
    
    this.group = [[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]];
   // this.group = null;
    this.group[0][1] = 4;
    // this.group[0][2] = 2;
    // this.group[0][3] = 2;
    // this.group[1][0] = 2;
    // this.group[1][1] = 2;
    // this.group[1][2] = 2;
    // this.group[1][3] = 2;
    // this.group[2][0] = 2;
    // this.group[2][1] = 2;
    // this.group[2][2] = 2;
     this.group[2][3] = 2;
    // this.group[3][0] = 2;
    // this.group[3][1] = 2;
    // this.group[3][2] = 2;
    // this.group[3][3] = 2;
    console.log(this.group);
  }


  // 为空判断
  nullOrNot() {
    this.arr = new Array;
    this.group.forEach((e, i) => {
      e.forEach((e2, j) => {
        if(!e2) {
          this.arr.push([i,j]);
          console.log('arr:', this.arr);
        }
      })
    });
    this.randomNumber();
  }

  // 生成随机数
  randomNumber() {
    const r1 = Math.floor(Math.random()*this.arr.length);
    let r2 = Math.floor(Math.random()*this.arr.length);
    while(r2===r1) {
      r2 = Math.floor(Math.random()*this.arr.length);
    }

    const b = Math.random()<0.5;
    this.group[this.arr[r1][0]][this.arr[r1][1]] = 2;
    if(b) {
      this.group[this.arr[r2][0]][this.arr[r2][1]] = 2;
    } else {
      this.group[this.arr[r2][0]][this.arr[r2][1]] = 4;
    }
  }

  // 向上
  up() {
    for(let i=0; i<3; i++) {
      if(this.group[i][0]===this.group[i][1]){
        this.group[i][0] = this.group[i][0]*2;
        this.group[i][1] =null;
      }
      if(this.group[i][1]===this.group[i][2]){
        this.group[i][1] = this.group[i][1]*2;
        this.group[i][2] =null;
      }
      if(this.group[i][2]===this.group[i][3]){
        this.group[i][2] = this.group[i][2]*2;
        this.group[i][3] =null;
      }
      for(let j=0; j<3; j++) {
        if(!this.group[i][j]) {
          this.group[i][j] = this.group[i][j+1];
          this.group[i][j+1] = null;
        }
      }
    }
  }
}
