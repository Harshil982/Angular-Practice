import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCompoComponent } from './check-compo.component';

describe('CheckCompoComponent', () => {
  let component: CheckCompoComponent;
  let fixture: ComponentFixture<CheckCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckCompoComponent]
    });
    fixture = TestBed.createComponent(CheckCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
