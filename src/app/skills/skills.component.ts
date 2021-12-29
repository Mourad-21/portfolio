import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 /*chk1:any;
 chk2:any;
 chk3:any;
 chk4:any;
 final(){
  this.chk1=document.querySelector("#ko1") as HTMLElement
  this.chk2=document.querySelector("#ko2") as HTMLElement
  this.chk3=document.querySelector("#ko3") as HTMLElement
  this.chk4=document.querySelector("#ko4") as HTMLElement
  this.chk1.scrollIntoView()
 }
@HostListener("window:scroll",["$event"])
fixprob(event:any){
    this.final()
 if(window.matchMedia("(max-width:880px)").matches){
    if(document.documentElement.scrollTop>=1700){
      this.chk1.checked=true
      this.chk2.checked=true
      this.chk3.checked=true
       
      }
      if(document.documentElement.scrollTop>=3000){
        this.chk4.checked=true
        }   
  }
}*/
 @HostListener("window:scroll" , ["$reveal"])
 reveal(){
var reveals =  document.querySelectorAll('.reveal')
for(var i=0;i < reveals.length;i++ ){
 var windowheight = window.innerHeight;
  var revealtop = reveals[i].getBoundingClientRect().top;
  var revealpoint = 150;
  if(revealtop < windowheight - revealpoint){
    reveals[i].classList.add('active')
  }else{
    reveals[i].classList.remove('active')
  }
}
 }

}
