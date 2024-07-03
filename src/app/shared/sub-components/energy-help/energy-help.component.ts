import { Component } from '@angular/core';

@Component({
  selector: 'app-energy-help',
  templateUrl: './energy-help.component.html',
  styleUrls: ['./energy-help.component.scss']
})
export class EnergyHelpComponent {

  public static showEnergyHelp(needHelp: boolean) {
    document.getElementById("energyHelpContainer")!.style.display = needHelp ? 'flex' : 'none'
  };

  public energyHelpContinue(){
    EnergyHelpComponent.showEnergyHelp(false)
  }
}
