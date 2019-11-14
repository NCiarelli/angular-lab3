import { Injectable } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: UserProfile = {
    name: "Nick Ciarelli",
    contact: "myname@gmail.com",
    bio: "I like computers."
  };

  constructor() { }

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  setUserProfile(newProfile: UserProfile): void {
    this.userProfile = { name: newProfile.name, contact: newProfile.contact, bio: newProfile.bio };
  }
}
