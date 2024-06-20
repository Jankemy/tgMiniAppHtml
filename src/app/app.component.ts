import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { NavigationEnd, Router } from '@angular/router';
import { addGithubPath } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  activeSwipe = true
  activeInvite = false
  activeBoosts = false
  activeEarn = false

  menuItems = [
    { 
      path: `/${addGithubPath}swipe`, 
      name: 'Swipe', 
      isActive: false, 
      icon: 'assets/menu-icons/candy.svg', 
      activeIcon: 'assets/menu-icons/candy-active.svg' 
    },
    { 
      path: `/${addGithubPath}invite`, 
      name: 'Invite', 
      isActive: false, 
      icon: 'assets/menu-icons/invite.svg', 
      activeIcon: 'assets/menu-icons/invite-active.svg' 
    },
    { 
      path: `/${addGithubPath}boosts`, 
      name: 'Boosts', 
      isActive: false, 
      icon: 'assets/menu-icons/boosts.svg', 
      activeIcon: 'assets/menu-icons/boosts-active.svg' 
    },
    { 
      path: `/${addGithubPath}earn`, 
      name: 'More', 
      isActive: false, 
      icon: 'assets/menu-icons/earn.svg', 
      activeIcon: 'assets/menu-icons/earn-active.svg' 
    },
  ]

  constructor(
    private router: Router,
  ) {
    let t = this;

    t.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        t.updateActiveMenuItem(event);
      }
    })
  }

  ngOnInit() {
    let t = this;
    t.setLoading(true);


    window.onload = () => {
      (<any>window).Telegram?.WebApp?.ready();
      t.setLoading(false);
    }
  }

  setLoading(isLoading: boolean) {
    PreloaderComponent.setLoading(isLoading);
  }

  updateActiveMenuItem(event:any) {
    var t = this;
    
    console.log(event.url)
    var currentItem = t.menuItems.find(x => x.path == event.url);
    console.log(currentItem)
    
    if(!currentItem) {
      t.router.navigateByUrl(t.menuItems[0].path)
      t.menuItems[0].isActive = true
      return
    }

    currentItem!.isActive = true;

    t.menuItems.filter(item => item.path !== currentItem!.path).map(item => item.isActive = false)
  }

  calcAppComponentHeight(){
    // let t = this;

    let appContainer = document.getElementById('app-container')!
    let menuFooter = document.getElementById('menuFooter')!
    // console.log(menuFooter.offsetHeight)

    return `${appContainer.offsetHeight - menuFooter.offsetHeight}px`
  }

}
