import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTvShowViewComponent } from './new-tv-show-view.component';

describe('NewTvShowViewComponent', () => {
  let component: NewTvShowViewComponent;
  let fixture: ComponentFixture<NewTvShowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTvShowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTvShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
