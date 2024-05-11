import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenermoviesComponent } from './genermovies.component';

describe('GenermoviesComponent', () => {
  let component: GenermoviesComponent;
  let fixture: ComponentFixture<GenermoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenermoviesComponent]
    });
    fixture = TestBed.createComponent(GenermoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
