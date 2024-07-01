import { PreloaderComponent } from "../preloader/preloader.component";

export abstract class BaseComponent{

    async sleepTime(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    setLoading(state: boolean){
        PreloaderComponent.setLoading(state);
    }

    calcContainerHeight(app: string, header: string, text: string){
        let appInvite = document.getElementById(app)!
        let inviteHeader = document.getElementById(header)!
        let inviteText = document.getElementById(text)!
        let res = appInvite.offsetHeight - inviteHeader.offsetHeight - inviteText.offsetHeight
    
        return `${res}px`
      }

}
