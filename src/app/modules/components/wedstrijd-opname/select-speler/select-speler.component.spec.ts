import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpelerComponent } from './select-speler.component';

describe('SelectSpelerComponent', () => {
  let component: SelectSpelerComponent;
  let fixture: ComponentFixture<SelectSpelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpelerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSpelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
