import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { NavigationEnd, Router } from '@angular/router';

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
      path: '/swipe', 
      name: 'Swipe', 
      isActive: false, 
      icon: 'assets/menu-icons/candy.svg', 
      activeIcon: 'assets/menu-icons/candy-active.svg' 
    },
    { 
      path: '/invite', 
      name: 'Invite', 
      isActive: false, 
      icon: 'assets/menu-icons/invite.svg', 
      activeIcon: 'assets/menu-icons/invite-active.svg' 
    },
    { 
      path: '/boosts', 
      name: 'Boosts', 
      isActive: false, 
      icon: 'assets/menu-icons/boosts.svg', 
      activeIcon: 'assets/menu-icons/boosts-active.svg' 
    },
    { 
      path: '/earn', 
      name: 'Earn', 
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
    }

    currentItem!.isActive = true;

    t.menuItems.filter(item => item.path !== currentItem!.path).map(item => item.isActive = false)
  }

  // async navigate(url: string) {
  //   let t = this;

  //   switch (url) {
  //     case 'swipe':
  //       t.activeSwipe = true
  //       t.activeInvite = false
  //       t.activeBoosts = false
  //       t.activeEarn = false
  //       break;
  //     case 'invite':
  //       t.activeSwipe = false
  //       t.activeInvite = true
  //       t.activeBoosts = false
  //       t.activeEarn = false
  //       break;
  //     case 'boosts':
  //       t.activeSwipe = false
  //       t.activeInvite = false
  //       t.activeBoosts = true
  //       t.activeEarn = false
  //       break;
  //     case 'earn':
  //       t.activeSwipe = false
  //       t.activeInvite = false
  //       t.activeBoosts = false
  //       t.activeEarn = true
  //       break;
  //   }

  //   console.log(url)
  //   // console.log(t.router)
  //   // console.log(t.router.navigateByUrl)
  //   console.log(await t.router.navigateByUrl(`/${url}`))
  //   // t.router.navigateByUrl(`/${url}`)
  //   // this.router.navigate([`/${url}`]);
  // }

}
