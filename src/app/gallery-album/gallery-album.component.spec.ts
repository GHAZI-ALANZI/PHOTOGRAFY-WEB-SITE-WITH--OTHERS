import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAlbumComponent } from './gallery-album.component';

describe('GalleryAlbumComponent', () => {
  let component: GalleryAlbumComponent;
  let fixture: ComponentFixture<GalleryAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
