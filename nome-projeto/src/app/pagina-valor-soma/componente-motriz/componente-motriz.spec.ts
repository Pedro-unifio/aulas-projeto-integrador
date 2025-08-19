import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMotriz } from './componente-motriz';

describe('ComponenteMotriz', () => {
  let component: ComponenteMotriz;
  let fixture: ComponentFixture<ComponenteMotriz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteMotriz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteMotriz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
