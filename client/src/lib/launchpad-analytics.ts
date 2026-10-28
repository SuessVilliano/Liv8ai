// Uses the existing site's GTM container; never include profile, email, sale labels or tokens.
export function trackLaunchpad(action:string,detail?:string){
  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push({event:'liv8_launchpad',launchpad_action:action,...(detail?{launchpad_detail:detail}:{})});
}
