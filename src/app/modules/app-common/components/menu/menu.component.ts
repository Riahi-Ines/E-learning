import { Component, Input } from '@angular/core';
import { MenuItem } from './menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private _items: MenuItem[]=[];

  get items(): MenuItem[] {
    return this._items;
  }

  @Input() //multiple using
  set items(value: MenuItem[]) {
    this._items = value;
  }


}
