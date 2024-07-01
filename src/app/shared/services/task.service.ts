import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { TaskModel } from '../models/task.model';
import { TaskIds } from '../enums/task.ids';

@Injectable({
    providedIn: 'root',
})
export class TaskService {

    private tasks = [
        {
          type: TaskIds.follow_twitter,
          icon: 'assets/earn-icons/X_social.svg',
          text: 'Follow X',
          reward: 0,
          isCompleted: false,
          isClaimed: false,
          link: '',
        },
        {
          type: TaskIds.follow_discord,
          icon: 'assets/earn-icons/Discord_social.svg',
          text: 'Follow Discord',
          reward: 0,
          isCompleted: false,
          isClaimed: false,
          link: '',
        },
        {
          type: TaskIds.invite_3_friends,
          icon: 'assets/earn-icons/Invite_social.svg',
          text: 'Invite 3 friends',
          reward: 0,
          isCompleted: false,
          isClaimed: false,
          link: '',
        },
        {
          type: TaskIds.follow_telegram,
          icon: 'assets/earn-icons/Telegram_social.svg',
          text: 'Follow Telegram chat',
          reward: 0,
          isCompleted: false,
          isClaimed: false,
          link: '',
        },
        {
          type: TaskIds.follow_instagram,
          icon: 'assets/earn-icons/Instagram_social.svg',
          text: 'Follow Instagram',
          reward: 0,
          isCompleted: false,
          isClaimed: false,
          link: '',
        },
      ]

    private daily = {
        type: TaskIds.daily_sign_in,
        reward: 0,
        loginStreak: 0,
        isAvailable: false
    }

    constructor(
        private api: ApiService
    ) {
    }

    get taskList(){
        return this.tasks
    }

    get dailyTask(){
        return this.daily
    }

    getTasks(){
        return this.api.get<TaskModel[]>('tasks')
    }

    mapTasks(data: TaskModel[]){
        let t = this

        let d = data.find(task => task.id === TaskIds[TaskIds.daily_sign_in])!
        t.daily.reward = d.reward
        t.daily.loginStreak = ++d.streak!
        t.daily.isAvailable = d.isAvailable

        data.map((item:any) => {
            let task = t.tasks.find(x => x.type === TaskIds[item.id as keyof typeof TaskIds])

            if (!!task) {
                task.link = item.link
                task.reward = item.reward
                task.isClaimed = !item.isAvailable
                task.isCompleted = !item.isAvailable ?? task.isCompleted
            }
        })
    }

    claimTaskReward(type: TaskIds){
        let t = this;
        return t.api.post<TaskModel[]>('tasks', { id: TaskIds[type] })
        .then(resp => {
            t.mapTasks(resp!.data!)
            return resp
        })
    }

    initTaskService(){
        let t = this
        return t.getTasks()
        .then(resp => {
            t.mapTasks(resp!.data!)
            return resp
        })
    }
    
}
