import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-help',
  templateUrl: './energy-help.component.html',
  styleUrls: ['./energy-help.component.scss']
})
export class EnergyHelpComponent {

  public static showEnergyHelp(needHelp: boolean) {
    let eh = document.getElementById("energyHelpContainer")!
    eh.style.display = needHelp ? 'flex' : 'none'
  };

  public energyHelpContinue(){
    EnergyHelpComponent.showEnergyHelp(false)
  }
}
