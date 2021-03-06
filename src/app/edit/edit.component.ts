import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userProfile: UserProfile;

  constructor(private profileService: ProfileService,
    private router: Router) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  updateProfile() {
    this.profileService.setUserProfile(this.userProfile);
    this.router.navigate(["profile"]);
  }

}
