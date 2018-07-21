import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArchiveProjectsListComponent} from "./project/archive-projects-list/archive-projects-list.component";
import {KickedoutProjectsListComponent} from "./project/kickedout-projects-list/kickedout-projects-list.component";
import {EmptyProjectComponent} from "./project/empty-project/empty-project.component";
import {LiveProjectDetailComponent} from "./project/live-projects/live-project-detail/live-project-detail.component";
import {LiveProjectsComponent} from "./project/live-projects/live-projects.component";
import {LiveProjectEditComponent} from "./project/live-projects/live-project-edit/live-project-edit.component";


const appRoutes: Routes = [
  {path: '' , redirectTo: '/live' , pathMatch: 'full'},
  {path: 'live' , component: LiveProjectsComponent, children: [
      {path: '',component: EmptyProjectComponent},
      {path: 'new', component: LiveProjectEditComponent},
      {path: ':id',component: LiveProjectDetailComponent},
      {path: ':id/edit', component: LiveProjectEditComponent}

    ]},
  {path: 'archive' , component: ArchiveProjectsListComponent},
  {path: 'kickedout' , component: KickedoutProjectsListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}