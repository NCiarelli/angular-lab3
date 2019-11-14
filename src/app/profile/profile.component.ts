import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: UserProfile;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

}
