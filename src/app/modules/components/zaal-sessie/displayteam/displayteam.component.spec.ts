import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayteamComponent } from './displayteam.component';

describe('DisplayteamComponent', () => {
  let component: DisplayteamComponent;
  let fixture: ComponentFixture<DisplayteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
