import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

  public static setLoading(isLoading: boolean) {
    document.getElementById("preloader")!.style.display = isLoading ? 'flex' : 'none';
  };

}
