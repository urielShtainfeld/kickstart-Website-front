import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectsListComponent } from './live-projects-list.component';

describe('LiveProjectsListComponent', () => {
  let component: LiveProjectsListComponent;
  let fixture: ComponentFixture<LiveProjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveProjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
