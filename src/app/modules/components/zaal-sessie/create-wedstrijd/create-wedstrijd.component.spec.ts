import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWedstrijdComponent } from './create-wedstrijd.component';

describe('CreateWedstrijdComponent', () => {
  let component: CreateWedstrijdComponent;
  let fixture: ComponentFixture<CreateWedstrijdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWedstrijdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWedstrijdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
