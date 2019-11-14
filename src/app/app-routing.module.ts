import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "edit-profile", component: EditComponent },
  { path: "", redirectTo: "/profile", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
