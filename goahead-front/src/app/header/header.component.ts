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
  admin(){
    this.router.navigateByUrl('').then();
  }
  signup(){
      this.router.navigateByUrl('').then();
  }
  login(){
    this.router.navigateByUrl('').then();
  }
  logout(){
    this.basicService.logout();
  }

}
