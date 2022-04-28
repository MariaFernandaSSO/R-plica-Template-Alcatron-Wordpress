import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueCarrosselComponent } from './destaque-carrossel.component';

describe('DestaqueCarrosselComponent', () => {
  let component: DestaqueCarrosselComponent;
  let fixture: ComponentFixture<DestaqueCarrosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaqueCarrosselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaqueCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
