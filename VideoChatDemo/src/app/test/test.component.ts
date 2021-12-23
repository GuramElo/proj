import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public test:number[]=[12,
-2,-90,123,90-1,-829-123
];
//crypto.quote.USD.percent_change_24h
public crypto:any=[
  {
  prop:1,
  tort:"B"
  },
  {
    prop:-1231,
    tort:"a"
    },
    {
      prop:1231312,
      tort:"R"
      },
      {
        prop:-123123123591,
        tort:"b"
        },

]
// sor():void{
// this.crypto.sort((a:any,b:any)=>{
// return a.prop-b.prop;
// })
//
//}
public customSort(val:string):void{

  this.crypto.sort((a:any,b:any)=>{

   if(eval(`a${val}`)>eval(`b${val}`)) return -1;
   else return 1;
  })

  }




constructor() {


}

  ngOnInit(): void {




  }

}
