import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTvShowViewComponent } from './single-tv-show-view.component';

describe('SingleTvShowViewComponent', () => {
  let component: SingleTvShowViewComponent;
  let fixture: ComponentFixture<SingleTvShowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTvShowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTvShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
