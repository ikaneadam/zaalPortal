import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaalsessiesComponent } from './zaalsessies.component';

describe('ZaalsessiesComponent', () => {
  let component: ZaalsessiesComponent;
  let fixture: ComponentFixture<ZaalsessiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaalsessiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaalsessiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
