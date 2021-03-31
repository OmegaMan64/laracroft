import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaraComponent } from './lara.component';

describe('LaraComponent', () => {
  let component: LaraComponent;
  let fixture: ComponentFixture<LaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
