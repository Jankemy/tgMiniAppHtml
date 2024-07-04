import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-plug',
  templateUrl: './tech-plug.component.html',
  styleUrls: ['./tech-plug.component.scss']
})
export class TechPlugComponent {

  constructor(
  ) {

  }

  public static enableTechPlug(isTechWorks: boolean) {
    document.getElementById("techPlugContainer")!.style.display = isTechWorks ? 'flex' : 'none';
  };

  refresh(){
    window.location.reload();
  }
}
