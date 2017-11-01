import { TestModule } from '../test.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { LayoutCompleteComponent } from './layout-complete.component';

describe('LayoutCompleteComponent', () => {
  let component: LayoutCompleteComponent;
  let fixture: ComponentFixture<LayoutCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [
        LayoutCompleteComponent,
        NavigationComponent,
        TopbarComponent,
        BreadcrumbComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
