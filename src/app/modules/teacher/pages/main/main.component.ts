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
      label: 'MENU.TEACHER.HOME',
      url: 'home'
    },
    {
      label: 'MENU.TEACHER.SUBJECTS',
      url: 'subjects'
    },
    {
      label: 'MENU.TEACHER.STUDENTS',
      url: 'my-students'
    }
  ];
}
