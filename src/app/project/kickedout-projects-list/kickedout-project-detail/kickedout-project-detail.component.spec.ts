import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickedoutProjectDetailComponent } from './kickedout-project-detail.component';

describe('KickedoutProjectDetailComponent', () => {
  let component: KickedoutProjectDetailComponent;
  let fixture: ComponentFixture<KickedoutProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickedoutProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickedoutProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
