import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0CoreComponentComponent } from './lib0-core-component.component';

describe('Lib0CoreComponentComponent', () => {
  let component: Lib0CoreComponentComponent;
  let fixture: ComponentFixture<Lib0CoreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0CoreComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0CoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
