import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZaalSessieComponent } from './create-zaal-sessie.component';

describe('CreateZaalSessieComponent', () => {
  let component: CreateZaalSessieComponent;
  let fixture: ComponentFixture<CreateZaalSessieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateZaalSessieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateZaalSessieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
