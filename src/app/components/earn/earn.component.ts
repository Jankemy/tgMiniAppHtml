import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskTypes } from '../../shared/enums/task.types';
import { addGithubPath } from '../../../environments/environment';
import { ClipboardService } from 'ngx-clipboard';
import { ScoreService } from '../../shared/services/score.service';


@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.scss']
})
export class EarnComponent implements OnInit, AfterViewInit, OnDestroy {

  evmAddress = '0xd64bd54d1c5e6271c8ea8ebbd12349ad757adc83'
  isAddressCopied = false;
  taskList = [
    {
      type: TaskTypes.FollowX,
      icon: 'assets/earn-icons/X_social.svg',
      text: 'Follow X',
      reward: 150,
      isCompleted: false,
      link: 'https://x.com/?lang=ru',
    },
    {
      type: TaskTypes.FollowDiscord,
      icon: 'assets/earn-icons/Discord_social.svg',
      text: 'Follow Discord',
      reward: 150,
      isCompleted: false,
      link: 'https://discord.com/login',
    },
    {
      type: TaskTypes.InviteFriends,
      icon: 'assets/earn-icons/Invite_social.svg',
      text: 'Invite 3 friends',
      reward: 150,
      isCompleted: false,
      // link: `${addGithubPath}invite`,
      link: 'invite',
    },
    {
      type: TaskTypes.FollowTgChat,
      icon: 'assets/earn-icons/Telegram_social.svg',
      text: 'Follow Telegram chat',
      reward: 150,
      isCompleted: false,
      link: 'https://web.telegram.org/a/',
    },
    {
      type: TaskTypes.FollowInstagram,
      icon: 'assets/earn-icons/Instagram_social.svg',
      text: 'Follow Instagram',
      reward: 150,
      isCompleted: false,
      link: 'https://www.instagram.com/accounts/login/',
    },
  ]

  constructor(
    private clip: ClipboardService,
    private scoreService: ScoreService
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
    let a = document.createElement('a')
    a.href = currentTask.link

    if(type !== TaskTypes.InviteFriends) {
      a.target = '_black'
    }

    a.click()
  }

  copyEvmAddress(){
    let t = this;

    t.clip.copy(t.evmAddress)
    t.isAddressCopied = true;

    setTimeout(() => { t.isAddressCopied = false }, 1000 * 3)
  }

}
