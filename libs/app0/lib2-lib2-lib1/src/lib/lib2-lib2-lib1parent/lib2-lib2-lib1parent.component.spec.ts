import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib1parentComponent } from './lib2-lib2-lib1parent.component';

describe('Lib2Lib2Lib1parentComponent', () => {
  let component: Lib2Lib2Lib1parentComponent;
  let fixture: ComponentFixture<Lib2Lib2Lib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
