import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicService} from '../basic.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private basicService: BasicService) { }
  @Input()
  public isLoggedIn;
  @Input()
  public isSuperUser;
  ngOnInit(): void {
  }
  signup(){
      this.router.navigateByUrl('signup').then();
  }
  login(){
      this.router.navigateByUrl('login').then();
  }
  logout(){
      this.basicService.logout().then(res => {
          localStorage.removeItem('token');
          this.basicService.isLoggedIn = false;
          this.basicService.isSuperUser = false;
          this.router.navigateByUrl('').then();
      });
  }

}
