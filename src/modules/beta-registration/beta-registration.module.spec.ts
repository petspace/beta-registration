import { BetaRegistrationModule } from './beta-registration.module';

describe('BetaRegistrationModule', () => {
  let betaRegistrationModule: BetaRegistrationModule;

  beforeEach(() => {
    betaRegistrationModule = new BetaRegistrationModule();
  });

  it('should create an instance', () => {
    expect(betaRegistrationModule).toBeTruthy();
  });
});
