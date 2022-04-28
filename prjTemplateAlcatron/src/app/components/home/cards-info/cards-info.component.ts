import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-info',
  templateUrl: './cards-info.component.html',
  styleUrls: ['./cards-info.component.css']
})
export class CardsInfoComponent implements OnInit {

  cards = [
    {
      icon : '../../../../assets/svgs/emoji-laughing-fill.svg',
      text : 'Excepcional Serviço'
    },
    {
      icon : '../../../../assets/svgs/lightbulb-fill.svg',
      text : 'Incrível Design'
    },
    {
      icon : '../../../../assets/svgs/display (1).svg',
      text : 'Totalmente Responsive'
    },
    {
      icon : '../../../../assets/svgs/gear-fill.svg',
      text : 'Fácil Personalização'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
