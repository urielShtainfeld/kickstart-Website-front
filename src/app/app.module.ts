import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { LiveProjectsListComponent } from './project/live-projects/live-projects-list/live-projects-list.component';
import { KickedoutProjectsListComponent } from './project/kickedout-projects-list/kickedout-projects-list.component';
import { ArchiveProjectsListComponent } from './project/archive-projects-list/archive-projects-list.component';
import { LiveProjectDetailComponent } from './project/live-projects/live-project-detail/live-project-detail.component';
import { ArchiveProjectDetailComponent } from './project/archive-projects-list/archive-project-detail/archive-project-detail.component';
import { KickedoutProjectDetailComponent } from './project/kickedout-projects-list/kickedout-project-detail/kickedout-project-detail.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {AppRoutingModule} from "./app-routing.module";
import { EmptyProjectComponent } from './project/empty-project/empty-project.component';
import { LiveProjectItemComponent } from './project/live-projects/live-projects-list/live-project-item/live-project-item.component';
import { LiveProjectsComponent } from './project/live-projects/live-projects.component';
import { LiveProjectEditComponent } from './project/live-projects/live-project-edit/live-project-edit.component';
import { DonateProjectComponent } from './project/live-projects/donate-project/donate-project.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    LiveProjectsListComponent,
    KickedoutProjectsListComponent,
    ArchiveProjectsListComponent,
    LiveProjectDetailComponent,
    ArchiveProjectDetailComponent,
    KickedoutProjectDetailComponent,
    DropdownDirective,
    EmptyProjectComponent,
    LiveProjectItemComponent,
    LiveProjectsComponent,
    LiveProjectEditComponent,
    DonateProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
