import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'sidebar-md01',
  templateUrl: './siderbar-md01.component.html',
  styleUrls: ['./siderbar-md01.component.scss']
})
export class SiderbarMd01Component implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  // showModulos: string[];
  // showModulosOp: string[];

  pushRightClass: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public router: Router) {
      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
      this.isActive = false;
      this.collapsed = false;
      this.showMenu = '';
      this.pushRightClass = 'push-right';
      // this.showModulos = ['', '', '', '', '', '', '', ''];
      // this.showModulosOp = ['md01','md02','md03', 'md04', 'md05','md06','md07', 'md08'];
  }


  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }

  // addExpandModulos(element: any) {
  //     for(let i = 0; i < this.showModulos.length; i++){
  //         if (element === this.showModulos[i]) {
  //             this.showModulos[i] = '0';
  //         } else {
  //             this.showModulos[i] = element;
  //         }
  //     }
  // }

  toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }
}
