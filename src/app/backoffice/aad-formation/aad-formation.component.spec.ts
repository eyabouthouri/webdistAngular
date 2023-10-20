import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadFormationComponent } from './aad-formation.component';

describe('AadFormationComponent', () => {
  let component: AadFormationComponent;
  let fixture: ComponentFixture<AadFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
