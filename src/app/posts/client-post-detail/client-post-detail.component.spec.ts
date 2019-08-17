import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPostDetailComponent } from './client-post-detail.component';

describe('ClientPostDetailComponent', () => {
  let component: ClientPostDetailComponent;
  let fixture: ComponentFixture<ClientPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
