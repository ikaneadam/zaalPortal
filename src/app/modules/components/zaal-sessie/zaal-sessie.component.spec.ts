import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaalSessieComponent } from './zaal-sessie.component';

describe('ZaalSessieComponent', () => {
  let component: ZaalSessieComponent;
  let fixture: ComponentFixture<ZaalSessieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaalSessieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaalSessieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
