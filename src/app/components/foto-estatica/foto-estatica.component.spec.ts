import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoEstaticaComponent } from './foto-estatica.component';

describe('FotoEstaticaComponent', () => {
  let component: FotoEstaticaComponent;
  let fixture: ComponentFixture<FotoEstaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoEstaticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoEstaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
