import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenersComponent } from './geners.component';

describe('GenersComponent', () => {
  let component: GenersComponent;
  let fixture: ComponentFixture<GenersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenersComponent]
    });
    fixture = TestBed.createComponent(GenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
