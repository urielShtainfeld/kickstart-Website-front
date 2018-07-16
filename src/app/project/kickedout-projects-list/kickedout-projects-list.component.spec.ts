import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickedoutProjectsListComponent } from './kickedout-projects-list.component';

describe('KickedoutProjectsListComponent', () => {
  let component: KickedoutProjectsListComponent;
  let fixture: ComponentFixture<KickedoutProjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickedoutProjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickedoutProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
