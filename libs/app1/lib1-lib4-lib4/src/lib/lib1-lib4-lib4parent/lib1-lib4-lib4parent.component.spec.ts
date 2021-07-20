import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib4parentComponent } from './lib1-lib4-lib4parent.component';

describe('Lib1Lib4Lib4parentComponent', () => {
  let component: Lib1Lib4Lib4parentComponent;
  let fixture: ComponentFixture<Lib1Lib4Lib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
