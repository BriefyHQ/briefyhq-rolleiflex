import { TestBed, inject } from '@angular/core/testing';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from '../../auth/services/auth.service';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        JwtModule.forRoot({config: {}}),
      ],
      providers: [NavigationService, AuthService]
    });
  });

  it('should be created', inject([NavigationService], (service: NavigationService) => {
    expect(service).toBeTruthy();
  }));
});
