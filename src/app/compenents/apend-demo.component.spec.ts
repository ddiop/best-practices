import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApendDemoComponent } from './apend-demo.component';

describe('ApendDemoComponent', () => {
  let component: ApendDemoComponent;
  let fixture: ComponentFixture<ApendDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApendDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApendDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
