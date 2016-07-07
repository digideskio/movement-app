import {Component} from '@angular/core'

import {VenueListPage} from '../venue-list/venue-list';
import {WelcomePage} from '../welcome/welcome'; 
import {SettingsPage} from '../settings/settings';
import {ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = VenueListPage;
    this.tab2Root = VenueListPage;
    this.tab3Root = ProfilePage;
    this.tab4Root = SettingsPage;
  }
}
