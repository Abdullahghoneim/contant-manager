import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetilsComponent } from './client-detils.component';

describe('ClientDetilsComponent', () => {
  let component: ClientDetilsComponent;
  let fixture: ComponentFixture<ClientDetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
