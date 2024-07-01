import { NotifierOptions } from "angular-notifier";

export const environment = {
    production: false,
    apiUrl: 'https://api-candy.softdds.com/',
  };

export var addGithubPath = 'tgMiniAppHtml/'

/**
 * Custom angular notifier options
 */
export const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 15
		},
		vertical: {
			position: 'top',
			distance: 15,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 2000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 2
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};