import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTvShowViewComponent } from './edit-tv-show-view.component';

describe('EditTvShowViewComponent', () => {
  let component: EditTvShowViewComponent;
  let fixture: ComponentFixture<EditTvShowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTvShowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTvShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
