import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlazyComponent } from './firstlazy.component';

describe('FirstlazyComponent', () => {
  let component: FirstlazyComponent;
  let fixture: ComponentFixture<FirstlazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstlazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
