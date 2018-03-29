import { TestBed, inject } from '@angular/core/testing';

import { SplashscreenService } from './splashscreen.service';

describe('SplashscreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplashscreenService]
    });
  });

  it('should be created', inject([SplashscreenService], (service: SplashscreenService) => {
    expect(service).toBeTruthy();
  }));

  it('should show on start', inject([SplashscreenService], (service: SplashscreenService) => {
    expect(service.isDisplayed).toBeTruthy();
  }));
});
