import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.page.html',
  styleUrls: ['./decision.page.scss'],
})
export class DecisionPage implements OnInit {
  public condition = -1;
  public iterator = 0;
  public textts = '...';
  public name: string;
  public card1Text: string;
  public card2Text: string;
  public card1Prop: string;
  public card2Prop: string;
  public c: number;
  constructor() {

  }

  ngOnInit() {
  }

  public getText(){
    if(this.iterator===0){
      this.textts = 'Welcome, engineer. I am chief engineer Parker. Seems like you are one of the best in your field and also NASAs new hire.';
    }
    else if (this.iterator===1){
      this.textts = 'Congrats! Brace yourself for a lifetime of challenges!';
    }
    else if (this.iterator===2){
      this.textts = 'You will help us design our future Solar Probe Parker, that will contribute to reveal the mysteries of our Sun.';
    }
    else if (this.iterator===3){
      this.textts = 'Before we start, what is your name?';
      this.condition=2;
    }
    else if (this.iterator===4){
      const inputName = document.getElementById('input') as HTMLInputElement | null;
      console.log(inputName.value);
      this.name = inputName.value;
      this.textts='It is a pleasure to meet you '+ this.name +'. Let us get to work! Our objective is to design Parkers key components.';
      this.condition=0;
    }
    else if (this.iterator===5){
      this.textts='Since it will be the closest human-built object to the sun, Parker must tolerate a lot of heat.';
    }
    else if (this.iterator===6){
      this.textts='What material should we use to make its thermal shield?';
      this.card1Text = 'Stainless steel';
      this.card2Text = 'Carbon composite';
      this.card1Prop = 'Corrosion resistant, High tensile strength, Very durable, Temperature resistant, Easy formability and fabrication';
      this.card2Prop = 'Physical strength, specific toughness, light weight, Chemical inertness, high corrosion resistance';
      this.condition=1;
    }
    else if (this.iterator===7 && this.c===1){
      this.textts='Interesting idea '+ this.name + ' .There are a few considerations I would like you to make:';
      this.condition = 0;
    }
    else if (this.iterator===8 && this.c===1){
      this.textts='We need a material that can resist the Suns heat and protect our equipment in the probe.';
    }
    else if (this.iterator===7 && this.c===0){
      this.textts='Good pick '+ this.name +' .Carbon composites are great at resisting heat and are lighter than steel,';
    }
    else if (this.iterator===9 && this.c===1){
      this.textts='We also require a light material to be able to send it to space.';
    }
    else if (this.iterator===8 && this.c===0){
      this.textts='So they will help us lift the probe using less energy. Let us go with it then.';
    }
    else if (this.iterator===10 && this.c===1){
      this.textts='Stainless steel is not good at dispersing heat efficiently and it is very heavy to lift to space,';
    }
    else if (this.iterator===11 && this.c===1){
      this.textts='so maybe there are better materials for this specific task...';
      this.condition=3;
    }
    this.iterator+=1;
  }

  public nextEvent(iterator){
    if (this.iterator<3){
      this.iterator = 3;
    }
    else if (this.iterator<6 && this.iterator>3){
      this.iterator = 6;
    }
    else if(this.iterator>6 && this.iterator<11 && this.c===1){
      this.iterator = 11;
    }
    else if(this.iterator>6 && this.iterator<11 && this.c===0){
      this.iterator = 8;
    }
    return this.getText();
  }
}
