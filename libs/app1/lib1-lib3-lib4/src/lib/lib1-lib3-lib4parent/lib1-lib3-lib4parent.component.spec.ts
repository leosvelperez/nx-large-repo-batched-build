import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4parentComponent } from './lib1-lib3-lib4parent.component';

describe('Lib1Lib3Lib4parentComponent', () => {
  let component: Lib1Lib3Lib4parentComponent;
  let fixture: ComponentFixture<Lib1Lib3Lib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
