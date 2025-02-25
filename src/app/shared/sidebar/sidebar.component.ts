import { Component } from '@angular/core';
interface IMenu{
  title: string;
  icon: string;
  menuLink: string;
  isActive: boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
menu: IMenu[]=[
{
  title: 'home',
  icon: 'fa-house-user',
  menuLink: '/dashboard',
  isActive: this.isAdmin() || this.isUser()
},
{
  title: 'Users',
  icon: 'fa-users',
  menuLink: '/dashboard',
  isActive: this.isAdmin()
},
{
  title: 'Recipes',
  icon: 'fa-braille',
  menuLink: '/dashboard',
  isActive: this.isAdmin()
},
{
  title: 'User Recipes',
  icon: 'fa-braille',
  menuLink: '/dashboard',
  isActive: this.isUser()
},
{
  title: 'Categories',
  icon: 'fa-list',
  menuLink: '/dashboard',
  isActive: this.isAdmin()
},
{
  title: 'Favorites',
  icon: 'fa-heart',
  menuLink: '/dashboard',
  isActive: this.isUser() 
}
];


  isAdmin(){
    return localStorage.getItem('role') === 'SuperAdmin'? true : false
  }
  isUser(){
    return localStorage.getItem('role') === 'SystemUser'? true : false
  }
}
