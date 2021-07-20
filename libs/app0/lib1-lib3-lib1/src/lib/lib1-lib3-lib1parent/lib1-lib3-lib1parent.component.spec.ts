import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib1parentComponent } from './lib1-lib3-lib1parent.component';

describe('Lib1Lib3Lib1parentComponent', () => {
  let component: Lib1Lib3Lib1parentComponent;
  let fixture: ComponentFixture<Lib1Lib3Lib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
