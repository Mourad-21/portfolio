import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	helpme(){
  var	ok = document.getElementById("hp") as HTMLInputElement;
  if(!ok.checked){
    ok.checked=true
  }else{
  	ok.checked=false
  }
}
}
