import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.page.html',
  styleUrls: ['./decision.page.scss'],
})
export class DecisionPage implements OnInit {
  public textts = 'a';
  constructor() {

  }

  ngOnInit() {
  }

  public getText(iterator: number){
    if(iterator===0){
    }
  }

}
// Welcome engineer, I am chief engineer {CHIEF_NAME} .
// Seems like you are one of the best in your field and also NASA’s new hire.
// Congratulations! Brace yourself for a lifetime of challenges.
// You will help us design our future Solar Probe Parker, that will contribute to reveal the mysteries of our Sun.
// Before we start, what’s your name engineer? {CAIXA DE TEXTO PARA SALVAR O NOME DIGITADO E ATRIBUIR A PLAYER_NAME}

// It’s a pleasure to meet you {PLAYER_NAME}. Let 's get to work!
// Our first objective is to design Parker’s key components.

// Since it will be the closest human-built object to the sun, Parker must tolerate a lot of heat.
// What material should we use to make it’ s thermal shield?
// Stainless steel
// Carbon-composite
// IF A) Interesting idea {PLAYER_NAME}. There’s a few considerations I would like you to make: we need a material that can resist the Sun's heat and protect our equipment in the probe. We also require a light material to be able to send it to space. Stainless steel is not good at dispersing heat efficiently and it is very heavy to lift to space, so maybe there are better materials for this specific task. {MOSTRAR OPÇÃO B PARA CLICAR}
// IF B) Good pick {PLAYER_NAME}. Carbon composites are great at resisting heat and are lighter than steel, so they will help us lift the probe using less energy. Let’s go with it then.

// To power all of Parker’s sensitive sensors and antennas, we will need an energy source.
// How should we do it?
// Solar panels
// Battery
// IF A) Awesome choice {PLAYER_NAME}. Solar panels, also known as photovoltaic arrays, absorb energy directly from the sun. Since our probe will be performing it’s mission close to our star, we will be able to harvest more energy from there than using the same panel on Earth.
// IF B) Interesting idea {PLAYER_NAME}. {FALTA TEXTO} {MOSTRAR OPÇÃO A PARA CLICAR}
