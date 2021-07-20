import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib1parentComponent } from './lib0-lib2-lib1parent.component';

describe('Lib0Lib2Lib1parentComponent', () => {
  let component: Lib0Lib2Lib1parentComponent;
  let fixture: ComponentFixture<Lib0Lib2Lib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
