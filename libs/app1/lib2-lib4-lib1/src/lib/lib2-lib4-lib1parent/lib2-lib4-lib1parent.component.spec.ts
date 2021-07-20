import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1parentComponent } from './lib2-lib4-lib1parent.component';

describe('Lib2Lib4Lib1parentComponent', () => {
  let component: Lib2Lib4Lib1parentComponent;
  let fixture: ComponentFixture<Lib2Lib4Lib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
