import { Component } from '@angular/core';
import { MenuItem } from 'src/app/modules/app-common/components/menu/menu-items';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      url: ''
    },
    {
      label: 'Subjects',
      url: 'subjects'
    },
    {
      label: 'My subscription',
      url: 'subscriptions'
    }
  ];
}
