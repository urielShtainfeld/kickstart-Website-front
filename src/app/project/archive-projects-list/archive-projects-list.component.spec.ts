import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProjectsListComponent } from './archive-projects-list.component';

describe('ArchiveProjectsListComponent', () => {
  let component: ArchiveProjectsListComponent;
  let fixture: ComponentFixture<ArchiveProjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveProjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
