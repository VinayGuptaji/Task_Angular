import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataCtoPComponent } from './pass-data-cto-p.component';

describe('PassDataCtoPComponent', () => {
  let component: PassDataCtoPComponent;
  let fixture: ComponentFixture<PassDataCtoPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassDataCtoPComponent]
    });
    fixture = TestBed.createComponent(PassDataCtoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
