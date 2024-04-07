import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeseFromComponent } from './expese-from.component';

describe('ExpeseFromComponent', () => {
  let component: ExpeseFromComponent;
  let fixture: ComponentFixture<ExpeseFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpeseFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpeseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
