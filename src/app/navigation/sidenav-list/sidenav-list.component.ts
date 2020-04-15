import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  toggleSidenav(){
    this.sidenavToggle.emit();
  }
  close(){
    this.closeSidenav.emit();
  }
  logout(){
    this.authService.logout();
    this.close();
  }

}
