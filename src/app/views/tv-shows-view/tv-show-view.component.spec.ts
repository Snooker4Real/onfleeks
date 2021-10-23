import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowViewComponent } from './tv-show-view.component';

describe('TvShowViewComponent', () => {
  let component: TvShowViewComponent;
  let fixture: ComponentFixture<TvShowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
