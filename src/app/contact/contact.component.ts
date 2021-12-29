import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  name = ""
  elm(event:any){
   this.name = event.target.value;
  }
  on=()=>{

   var ok:any  = document.getElementById("pag1") as HTMLParagraphElement;
if(!window.matchMedia("(max-width:654px)").matches){
  ok.style["transform"]="translate(100px,-10px)"
  ok.style["background"]="black"
  ok.style["font-size"]="14px"
  ok.style["color"]="aqua"
  ok.style["height"]="18px"
  ok.style["padding"]="0px 6px "
}else{
  ok.style["transform"]="translate(-5px,10px)"
  ok.style["background"]="black"
  ok.style["font-size"]="14px"
  ok.style["color"]="aqua"
  ok.style["width"]="55px"
}
  }
  of=()=>{
    var inp:any = document.getElementById("in1") as HTMLInputElement;
    var ok:any  = document.getElementById("pag1") as HTMLParagraphElement;
    if(inp.value==""){
    if(!window.matchMedia("(max-width:654px)").matches){
    ok.style["transform"]="translate(100px,6px)"
     ok.style["background"]="none"
     ok.style["font-size"]="16px"
     ok.style["color"]="palevioletred"
     ok.style["height"]="none"
     ok.style["width"]="none"
    }else{
      ok.style["transform"]="translate(-6px,30px)"
      ok.style["font-size"]="16px"
      ok.style["color"]="palevioletred"

    }
  }
   }
   /*----------------------------------- */
   ong=()=>{
    var ok:any  = document.getElementById("pag2") as HTMLParagraphElement;
 if(!window.matchMedia("(max-width:654px)").matches){
   ok.style["transform"]="translate(100px,-10px)"
   ok.style["background"]="black"
   ok.style["font-size"]="14px"
   ok.style["color"]="aqua"
   ok.style["height"]="18px"
   ok.style["padding"]="0px 6px "
 }else{
   ok.style["transform"]="translate(-5px,35px)"
   ok.style["background"]="black"
   ok.style["font-size"]="14px"
   ok.style["color"]="aqua"
   ok.style["width"]="55px"
 }
   }
   ofg=()=>{
     var inp:any = document.getElementById("in2") as HTMLInputElement;
     var ok:any  = document.getElementById("pag2") as HTMLParagraphElement;
     if(inp.value==""){
     if(!window.matchMedia("(max-width:654px)").matches){
     ok.style["transform"]="translate(100px,6px)"
      ok.style["background"]="none"
      ok.style["font-size"]="16px"
      ok.style["color"]="palevioletred"
      ok.style["height"]="none"
      ok.style["width"]="none"
     }else{
       ok.style["transform"]="translate(-6px,55px)"
       ok.style["font-size"]="16px"
       ok.style["color"]="palevioletred"
 
     }
   }
    }

}
