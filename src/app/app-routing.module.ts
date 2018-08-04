import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmptyProjectComponent} from "./project/empty-project/empty-project.component";
import {LiveProjectDetailComponent} from "./project/live-projects/live-project-detail/live-project-detail.component";
import {LiveProjectsComponent} from "./project/live-projects/live-projects.component";
import {LiveProjectEditComponent} from "./project/live-projects/live-project-edit/live-project-edit.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {DonateProjectComponent} from "./project/live-projects/donate-project/donate-project.component";
import {KickedoutProjectDetailComponent} from "./project/kickedout-projects/kickedout-project-detail/kickedout-project-detail.component";
import {ArchiveProjectDetailComponent} from "./project/archive-projects/archive-project-detail/archive-project-detail.component";
import {ArchiveProjectsComponent} from "./project/archive-projects/archive-projects.component";
import {KickedoutProjectsComponent} from "./project/kickedout-projects/kickedout-projects.component";


const appRoutes: Routes = [
  {path: '' , redirectTo: '/live' , pathMatch: 'full'},
  {path: 'live' , component: LiveProjectsComponent, children: [
      {path: '',component: EmptyProjectComponent},
      {path: 'new', component: LiveProjectEditComponent},
      {path: ':id',component: LiveProjectDetailComponent},
      {path: ':id/edit', component: LiveProjectEditComponent},
      {path: ':id/donate', component: DonateProjectComponent}
    ]},
  {path: 'archive' , component: ArchiveProjectsComponent, children: [
      {path: '',component: EmptyProjectComponent},
      {path: ':id',component: ArchiveProjectDetailComponent}
    ]},
  {path: 'kickedout' , component: KickedoutProjectsComponent, children: [
      {path: '',component: EmptyProjectComponent},
      {path: ':id',component: KickedoutProjectDetailComponent}
    ]},
  {path: 'signup' , component:SignupComponent},
  {path: 'signin' , component:SigninComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
