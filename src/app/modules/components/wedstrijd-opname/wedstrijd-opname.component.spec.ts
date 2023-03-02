import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedstrijdOpnameComponent } from './wedstrijd-opname.component';

describe('WedstrijdOpnameComponent', () => {
  let component: WedstrijdOpnameComponent;
  let fixture: ComponentFixture<WedstrijdOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedstrijdOpnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WedstrijdOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
