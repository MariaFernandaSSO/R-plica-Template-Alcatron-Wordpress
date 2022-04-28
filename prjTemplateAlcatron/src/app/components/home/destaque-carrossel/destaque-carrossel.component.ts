import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaque-carrossel',
  templateUrl: './destaque-carrossel.component.html',
  styleUrls: ['./destaque-carrossel.component.css']
})
export class DestaqueCarrosselComponent implements OnInit {

  public imagem = [
  {
    mostrar:"active",
    imagens: [
      {
        img: '../../../../assets/img/borboleta1.jpg',
        text1 : 'Totalmente sensível',
        text2 : 'Muitas shortcodes',
        text3 : 'Construido na base 4'
      }
    ]
  },
  {
    mostrar: '',
    imagens: 
    [
      {
      img: '../../../../assets/img/borboleta2.webp',
      text1 : 'Um site bonito',
      text2 : 'Admiravel...',
      text3 : 'Apenas imagine'
      }
    ]
  },
  {
    mostrar: '',
    imagens:
    [
      {
      img: '../../../../assets/img/borboleta3.jpg',
      text1 : 'Construa conosco',
      text2 : 'Imenso Brilho',
      text3 : 'Venha explorar'
      }
    ]
  }
]


  constructor() { }

  ngOnInit(): void {
  }

}
