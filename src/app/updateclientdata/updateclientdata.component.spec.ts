import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclientdataComponent } from './updateclientdata.component';

describe('UpdateclientdataComponent', () => {
  let component: UpdateclientdataComponent;
  let fixture: ComponentFixture<UpdateclientdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateclientdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateclientdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
