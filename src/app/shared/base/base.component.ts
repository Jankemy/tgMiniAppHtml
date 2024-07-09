import { PreloaderComponent } from "../sub-components/preloader/preloader.component";

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

    errorMessage(er: any){
        return er.error?.errors[0]?.message ?? this.validatorErrorMessage(er)
    }

    validatorErrorMessage(er: any){
        return Object.values(er.error.errors as object)[0]
    }

}
