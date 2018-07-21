import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectItemComponent } from './live-project-item.component';

describe('LiveProjectItemComponent', () => {
  let component: LiveProjectItemComponent;
  let fixture: ComponentFixture<LiveProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
