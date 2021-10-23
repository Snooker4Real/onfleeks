import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsViewComponent } from './tv-shows-view.component';

describe('TvShowViewComponent', () => {
  let component: TvShowsViewComponent;
  let fixture: ComponentFixture<TvShowsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
