import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresspinerComponent } from './progresspiner.component';

describe('ProgresspinerComponent', () => {
  let component: ProgresspinerComponent;
  let fixture: ComponentFixture<ProgresspinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresspinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresspinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
