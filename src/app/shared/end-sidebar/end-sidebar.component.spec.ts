import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSidebarComponent } from './end-sidebar.component';

describe('EndSidebarComponent', () => {
  let component: EndSidebarComponent;
  let fixture: ComponentFixture<EndSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
