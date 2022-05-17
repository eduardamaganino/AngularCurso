import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyfecycleChildComponent } from './lyfecycle-child.component';

describe('LyfecycleChildComponent', () => {
  let component: LyfecycleChildComponent;
  let fixture: ComponentFixture<LyfecycleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyfecycleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyfecycleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
