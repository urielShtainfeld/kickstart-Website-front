import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { LiveProjectsListComponent } from './project/live-projects-list/live-projects-list.component';
import { KickedoutProjectsListComponent } from './project/kickedout-projects-list/kickedout-projects-list.component';
import { ArchiveProjectsListComponent } from './project/archive-projects-list/archive-projects-list.component';
import { ProjectEditComponent } from './project/live-projects-list/project-edit/project-edit.component';
import { LiveProjectDetailComponent } from './project/live-projects-list/live-project-detail/live-project-detail.component';
import { ArchiveProjectDetailComponent } from './project/archive-projects-list/archive-project-detail/archive-project-detail.component';
import { KickedoutProjectDetailComponent } from './project/kickedout-projects-list/kickedout-project-detail/kickedout-project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    ProjectComponent,
    LiveProjectsListComponent,
    KickedoutProjectsListComponent,
    ArchiveProjectsListComponent,
    ProjectEditComponent,
    LiveProjectDetailComponent,
    ArchiveProjectDetailComponent,
    KickedoutProjectDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
