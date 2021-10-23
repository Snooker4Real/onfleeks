import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowFormComponent } from './tv-show-form.component';

describe('TvShowFormComponent', () => {
  let component: TvShowFormComponent;
  let fixture: ComponentFixture<TvShowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
