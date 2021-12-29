import { Component,HostListener } from '@angular/core';
import * as AOS from 'aos';
import * as work from 'src/assets/customf/custom.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mourad';
  ngOnInit(){
    AOS.init();
  }
 @HostListener('window:scroll', []) uptohome(){
 var t = document.getElementById("up") as HTMLDivElement;
   if(document.documentElement.scrollTop>=150){
     t.style.display="block"
   }else if(document.documentElement.scrollTop<150){
    t.style.display="none"
   }
}
topp(){
  document.documentElement.scrollTop = 0;
}
}
