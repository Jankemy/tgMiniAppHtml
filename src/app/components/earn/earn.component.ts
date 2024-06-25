import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskTypes } from '../../shared/enums/task.types';
import { addGithubPath } from '../../../environments/environment';
import { ClipboardService } from 'ngx-clipboard';
import { ScoreService } from '../../shared/services/score.service';
import { NotifierService } from 'angular-notifier';
import { AnySoaRecord } from 'dns';


@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.scss']
})
export class EarnComponent implements OnInit, AfterViewInit, OnDestroy {

  evmAddress = '0xd64bd54d1c5e6271c8ea8ebbd12349ad757adc83'
  isAddressCopied = false;
  isLoader: any = {}
  taskList = [
    {
      type: TaskTypes.FollowX,
      icon: 'assets/earn-icons/X_social.svg',
      text: 'Follow X',
      reward: 150,
      isCompleted: false,
      isClaimed: false,
      link: 'https://x.com/?lang=ru',
    },
    {
      type: TaskTypes.FollowDiscord,
      icon: 'assets/earn-icons/Discord_social.svg',
      text: 'Follow Discord',
      reward: 150,
      isCompleted: false,
      isClaimed: false,
      link: 'https://discord.com/login',
    },
    {
      type: TaskTypes.InviteFriends,
      icon: 'assets/earn-icons/Invite_social.svg',
      text: 'Invite 3 friends',
      reward: 150,
      isCompleted: false,
      isClaimed: false,
      // link: `${addGithubPath}invite`,
      link: 'invite',
    },
    {
      type: TaskTypes.FollowTgChat,
      icon: 'assets/earn-icons/Telegram_social.svg',
      text: 'Follow Telegram chat',
      reward: 150,
      isCompleted: false,
      isClaimed: false,
      link: 'https://web.telegram.org/a/',
    },
    {
      type: TaskTypes.FollowInstagram,
      icon: 'assets/earn-icons/Instagram_social.svg',
      text: 'Follow Instagram',
      reward: 150,
      isCompleted: false,
      isClaimed: false,
      link: 'https://www.instagram.com/accounts/login/',
    },
  ]

  constructor(
    private clip: ClipboardService,
    private scoreService: ScoreService,
    private notifier: NotifierService
  ){
  }

  get swipeCounter(){
    return this.scoreService.totalScore
  } 

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
  }

  calcTaskListContainerHeight(){
    let appEarn = document.getElementById('app-earn')!
    let earnHeader = document.getElementById('earnHeader')!
    let earnText = document.getElementById('earnText')!
    let res = appEarn.offsetHeight - earnHeader.offsetHeight - earnText.offsetHeight

    return `${res}px`
  }

  completeTask(type: TaskTypes){
    let t = this;
    let currentTask = t.taskList.find(task => task.type === type)!

    if (!currentTask.isCompleted) {
      let a = document.createElement('a')
      a.href = currentTask.link
  
      if(type !== TaskTypes.InviteFriends) {
        a.target = '_black'
      }
  
      a.click()
      t.isLoader[type] = true

      setTimeout(() => {
        t.isLoader[type] = false
        currentTask.isCompleted = true
      }, 1000 * 60)
    }
    else if (!currentTask.isClaimed){
      t.isLoader[type] = true

      setTimeout(() => {
        t.scoreService.addClaimedSum(currentTask.reward)
        t.isLoader[type] = false
        currentTask.isClaimed = true
      }, 1000 * 10)
    }
  }

  copyEvmAddress(){
    let t = this;

    t.clip.copy(t.evmAddress)
    t.notifier.notify('info', 'Copied')
    // console.log(t.notifier)
    t.isAddressCopied = true;

    setTimeout(() => { t.isAddressCopied = false }, 1000 * 3)
  }

}
