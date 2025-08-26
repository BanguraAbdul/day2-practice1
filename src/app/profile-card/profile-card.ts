import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  userName = 'Sallamatu Bangura';
  projectTitle = 'Angular Project';
  salImageUrl: string = 'assets/sisSal.png';
  isDisabled: boolean = true;
  toggleButtonState(){
    this.isDisabled = !this.isDisabled;
  }

  welMessage(){
    return `Hello ${this.userName}, welcom to ${this.projectTitle}`;
  }
}
