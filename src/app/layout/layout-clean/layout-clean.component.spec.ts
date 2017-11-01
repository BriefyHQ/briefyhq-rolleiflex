import { TestModule } from '../test.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCleanComponent } from './layout-clean.component';

describe('LayoutCleanComponent', () => {
  let component: LayoutCleanComponent;
  let fixture: ComponentFixture<LayoutCleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ LayoutCleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
