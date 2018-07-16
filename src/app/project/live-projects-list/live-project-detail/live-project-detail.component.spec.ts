import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectDetailComponent } from './live-project-detail.component';

describe('LiveProjectDetailComponent', () => {
  let component: LiveProjectDetailComponent;
  let fixture: ComponentFixture<LiveProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
