import { Component, OnInit } from '@angular/core';
import { TaskIds } from '../../shared/enums/task.ids';
import { ClipboardService } from 'ngx-clipboard';
import { ScoreService } from '../../shared/services/score.service';
import { NotifierService } from 'angular-notifier';
import { TaskService } from '../../shared/services/task.service';
import { BaseComponent } from '../../shared/base/base.component';


@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.scss']
})
export class EarnComponent extends BaseComponent implements OnInit {

  evmAddress = '0xd64bd54d1c5e6271c8ea8ebbd12349ad757adc83'
  isAddressCopied = false;
  isLoader: any = {}

  constructor(
    private clip: ClipboardService,
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

    t.setLoading(true)
    Promise.all([
      t.scoreService.initScoreService(),
      t.taskService.initTaskService()
    ])
    .finally(() => {
      t.setLoading(false)
    })
  }

  completeTask(type: TaskIds){
    let t = this;
    let currentTask = t.taskList.find(task => task.type === type)!

    
    t.isLoader[type] = true

    if (type == TaskIds.daily_sign_in) {
      t.taskService.claimTaskReward(type)
      .catch(er => {
        t.notifier.notify('error', er.error.errors[0].message)
      })
      .finally(() => {
        t.scoreService.initScoreService()
        .catch(er => {
          t.notifier.notify('error', er.error.errors[0].message)
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
  
      // if(type !== TaskIds.invite_3_friends) {
        a.target = '_black'
      // }
  
      a.click()

      setTimeout(() => {
        t.isLoader[type] = false
        currentTask.isCompleted = true
      }, 1000 * 60)
    }
    else if (!currentTask.isClaimed){
      t.isLoader[type] = true

      t.taskService.claimTaskReward(currentTask.type)
      .catch(er => {
        t.notifier.notify('error', er.error.errors[0].message)
      })
      .finally(() => {
        t.scoreService.initScoreService()
        .catch(er => {
          t.notifier.notify('error', er.error.errors[0].message)
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
    t.notifier.notify('info', 'Copied')
    // console.log(t.notifier)
    t.isAddressCopied = true;

    setTimeout(() => { t.isAddressCopied = false }, 1000 * 3)
  }

}
