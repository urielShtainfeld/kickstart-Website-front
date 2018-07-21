import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectEditComponent } from './live-project-edit.component';

describe('LiveProjectEditComponent', () => {
  let component: LiveProjectEditComponent;
  let fixture: ComponentFixture<LiveProjectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveProjectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
