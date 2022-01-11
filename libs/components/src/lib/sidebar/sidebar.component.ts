import { AppConfigService } from './../../../../../apps/crvena-zvezda/src/app/core/services/app-config.service';
import { RouteInfo } from '@viber-bot/shared';
import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'viber-bot-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  expand = false;
  mainLogo!: string;
  bgImage!: string;
  menuItems: RouteInfo[] = [];
  subscriptions: Subscription[] = [];
  eventsSubject: Subject<void> = new Subject<void>();
  constructor(
    private router: Router,
    public store: Store<{ config: any }>,
    public appConfig: AppConfigService
  ) {

    this.subscriptions.push(
      this.store.select("config").subscribe((res: any) => {
        this.mainLogo = res.mainLogo;
        this.bgImage = res.sidebarBgImage;
        this.menuItems = JSON.parse(JSON.stringify(res.sidebarRoutes));
      })
    );

    if (window.innerWidth < 500) {
      this.expand = true;
      // On mobile collapse sidebar menu
      this.subscriptions.push(
        this.router.events.subscribe((event: any) => {
          if (event instanceof NavigationEnd) {
            if (window.innerWidth < 500) {
              this.expand = true;
            }
          }
        })
      );
    }
  }
  ngOnInit(): void {
    // this.menuItems = ROUTES.map((menuItem) => {
    //   menuItem.opened = false;
    //   return menuItem;
    // });

    this.menuItems = this.menuItems.map((menuItem, index) => {
      if (menuItem.children) {
        menuItem.children.forEach((menuItemChild) => {
          if (menuItemChild.path) {
            if (this.router.isActive(menuItemChild.path, false)) {
              menuItem.opened = true;
            }
          }
        });
      }
      return menuItem;
    });
  }

  onDropdownClicked(menuItem: RouteInfo) {
    this.menuItems.forEach((currentMenuItem: RouteInfo, index: number) => {
      if (menuItem == currentMenuItem)
        this.menuItems[index].opened = !this.menuItems[index].opened;
      else this.menuItems[index].opened = false;
    });
  }

  onMenuItemClicked(menuItem: RouteInfo) {
    this.menuItems = this.menuItems.map((currentMenuItem) => {
      if (currentMenuItem != menuItem) currentMenuItem.opened = false;
      return currentMenuItem;
    });
  }

  onToggleMenu() {
    this.expand = !this.expand;
  }
}
