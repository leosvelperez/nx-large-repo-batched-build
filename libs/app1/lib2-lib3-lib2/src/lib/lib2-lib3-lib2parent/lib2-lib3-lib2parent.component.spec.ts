import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2parentComponent } from './lib2-lib3-lib2parent.component';

describe('Lib2Lib3Lib2parentComponent', () => {
  let component: Lib2Lib3Lib2parentComponent;
  let fixture: ComponentFixture<Lib2Lib3Lib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
