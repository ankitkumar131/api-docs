import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCreateComponent } from './api-create.component';

describe('ApiCreateComponent', () => {
  let component: ApiCreateComponent;
  let fixture: ComponentFixture<ApiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
