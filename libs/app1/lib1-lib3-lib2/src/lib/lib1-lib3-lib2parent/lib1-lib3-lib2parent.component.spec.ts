import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib2parentComponent } from './lib1-lib3-lib2parent.component';

describe('Lib1Lib3Lib2parentComponent', () => {
  let component: Lib1Lib3Lib2parentComponent;
  let fixture: ComponentFixture<Lib1Lib3Lib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
