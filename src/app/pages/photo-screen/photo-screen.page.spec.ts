import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoScreenPage } from './photo-screen.page';

describe('PhotoScreenPage', () => {
  let component: PhotoScreenPage;
  let fixture: ComponentFixture<PhotoScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
