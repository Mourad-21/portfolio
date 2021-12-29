import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  
  }
  active=()=>{
    let box = document.querySelector("#chek") as HTMLInputElement;
    if(box.checked==false)
    box.checked = true;
    else
    box.checked = false;
  }
  show=()=>{
    let box = document.querySelector("#chek") as HTMLInputElement;
    let ul = document.querySelector("#ul") as HTMLUListElement; 
      if(box.checked)
    ul.style.transform="translateX(0px)";
    else
    ul.style.transform="translateX(-630px)";
  }
  delshow(){
    let ul = document.querySelector("#ul") as HTMLUListElement; 
    let box = document.querySelector("#chek") as HTMLInputElement;
    if(window.matchMedia("(max-width:630px)").matches){
    ul.style.transform="translateX(-630px)";
    box.checked=false;
     }
  }
  scrolleventh(){
    var sc = document.getElementById("about")
    sc?.scrollIntoView();
  }
  scrolleventw(){
    var sc = document.getElementById("works")
    sc?.scrollIntoView();
  }
  scrollevents(){
    var sc = document.getElementById("skills")
    sc?.scrollIntoView();
  }
  scrolleventc(){
    var sc = document.getElementById("contact")
    sc?.scrollIntoView();
  }
topp(){
  document.documentElement.scrollTop = 0;
}
  choise(){
    var y = document.getElementById("yes") as HTMLInputElement
      var n = document.getElementById("no") as HTMLInputElement
        var p = document.getElementById("play") as HTMLButtonElement
      if (y.checked){
           p.style.display = "inline-block";
         }
         else if (n.checked){
            p.style.display = "none";

         }
  }
}
