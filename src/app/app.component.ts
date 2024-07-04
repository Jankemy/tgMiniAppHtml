import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { addGithubPath } from '../environments';
import { LoginComponent } from './shared/sub-components/login/login.component';
import { EventService } from './shared/services/event.service';
import { NotifierService } from 'angular-notifier';
import { EnergyHelpComponent } from './shared/sub-components/energy-help/energy-help.component';
import { ProfileService } from './shared/services/profile.service';
import { BaseComponent } from './shared/base/base.component';
import { TechPlugComponent } from './shared/sub-components/tech-plug/tech-plug.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {

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
    private eventService: EventService,
    private profileService: ProfileService,
    private notifier: NotifierService
  ) {
    super()
    let t = this;

    t.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        t.updateActiveMenuItem(event);
      }
    })
  }

  ngOnInit() {
    (<any>window).Telegram?.WebApp?.enableClosingConfirmation();

    let t = this;

    t.eventService.TechnicalWorksEvent.subscribe(() => {
      TechPlugComponent.enableTechPlug(true)
    })

    t.eventService.NeedLoginEvent.subscribe((resp) => {
      LoginComponent.enableLogin(resp)
    })

    t.eventService.LoginEvent.subscribe(login => {
      t.profileService.updateUsername(login)
      .then(resp => {
        t.notifier.notify('success', `Logged in successfuly: ${login}`)
      })
      .catch(er => {
        console.log(er)
        t.notifier.notify('error', t.errorMessage(er))
      })
      .finally(() => {
        LoginComponent.enableLogin(false)
      })
    })
  }

  ngOnDestroy(): void {
    this.eventService.LoginEvent.unsubscribe()
    this.eventService.NeedLoginEvent.unsubscribe()
  }

  updateActiveMenuItem(event:any) {
    var t = this;
    
    // console.log(event.url)
    var currentItem = t.menuItems.find(x => x.path == event.url);
    // console.log(currentItem)
    
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
