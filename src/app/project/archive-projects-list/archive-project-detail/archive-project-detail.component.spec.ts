import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProjectDetailComponent } from './archive-project-detail.component';

describe('ArchiveProjectDetailComponent', () => {
  let component: ArchiveProjectDetailComponent;
  let fixture: ComponentFixture<ArchiveProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
