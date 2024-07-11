import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaskIds } from '../../shared/enums/task.ids';
import { ClipboardService } from 'ngx-clipboard';
import { ScoreService } from '../../shared/services/score.service';
import { NotifierService } from 'angular-notifier';
import { TaskService } from '../../shared/services/task.service';
import { BaseComponent } from '../../shared/base/base.component';
import { Overflow } from '../../../environments';
import { ProfileService } from '../../shared/services/profile.service';


@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.scss']
})
export class EarnComponent extends BaseComponent implements OnInit, AfterViewInit {

  evmAddress = 'Generating...'
  isAddressCopied = false;
  isLoader: any = {}

  constructor(
    private clip: ClipboardService,
    private profileService: ProfileService,
    private scoreService: ScoreService,
    private taskService: TaskService,
    private notifier: NotifierService
  ){
    super()
  }

  get swipeCounter(){
    return this.scoreService.totalScore
  } 

  get taskList(){
    return this.taskService.taskList
  }

  get dailyTask(){
    return this.taskService.dailyTask
  }

  ngOnInit() {
    let t = this
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${Overflow}px`
    // document.body.style.marginBottom = `${Overflow}px`
    window.scrollTo(0, Overflow);

    t.setLoading(true)
    Promise.all([
      t.profileService.initProfileService()
      .then(resp => {
        t.evmAddress = resp.walletAddress.length > 0 
          ? resp.walletAddress
          : t.evmAddress
      }),
      t.scoreService.initScoreService(),
      t.taskService.initTaskService()
    ])
    .finally(() => {
      t.setLoading(false)
    })
  }

  ngAfterViewInit(): void {
    let app = document.getElementById('app-earn')!;

    (<any>window).Telegram?.WebApp?.expand()
    app.addEventListener("touchmove", (e) => {
      if (e.view!.scrollY === 0) {
        e.view!.scrollTo(0, Overflow)
      }
    });
  }

  completeTask(type: TaskIds){
    let t = this;
    let currentTask = t.taskList.find(task => task.type === type)!

    
    t.isLoader[type] = true

    if (type == TaskIds.daily_sign_in) {
      t.taskService.claimTaskReward(type)
      .then(resp => {
        t.notifier.notify('success', 'Claimed successfully');
        (<any>window).Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')
      })
      .catch(er => {
        t.notifier.notify('error', t.errorMessage(er))
      })
      .finally(() => {
        t.scoreService.initScoreService()
        .catch(er => {
          t.notifier.notify('error', t.errorMessage(er))
        })
        .finally(() => {
          t.isLoader[type] = false
        })
      })

      return 
    }

    if (!currentTask.isCompleted) {
      let a = document.createElement('a')
      a.href = currentTask.link
  
      if(type !== TaskIds.invite_3_friends) {
        a.target = '_black'
      }
  
      a.click()

      setTimeout(() => {
        t.isLoader[type] = false
        currentTask.isCompleted = true
      }, 1000 * 5)
    }
    else if (!currentTask.isClaimed){
      t.isLoader[type] = true

      t.taskService.claimTaskReward(currentTask.type)
      .then(resp => {
        t.notifier.notify('success', 'Claimed successfully');
        (<any>window).Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')
      })
      .catch(er => {
        t.notifier.notify('error', t.errorMessage(er))
      })
      .finally(() => {
        t.scoreService.initScoreService()
        .catch(er => {
          t.notifier.notify('error', t.errorMessage(er))
        })
        .finally(() => {
          t.isLoader[type] = false
          currentTask.isClaimed = true
        })
      })
    }
  }

  copyEvmAddress(){
    let t = this;

    t.clip.copy(t.evmAddress)
    t.notifier.notify('info', 'Copied successfully');
    (<any>window).Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')
    // console.log(t.notifier)
    t.isAddressCopied = true;

    setTimeout(() => { t.isAddressCopied = false }, 1000 * 3)
  }

}
