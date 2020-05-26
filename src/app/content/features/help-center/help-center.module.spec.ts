import { HelpCenterModule } from './help-center.module';

describe('HelpCenterModule', () => {
  let helpCenterModule: HelpCenterModule;

  beforeEach(() => {
    helpCenterModule = new HelpCenterModule();
  });

  it('should create an instance', () => {
    expect(helpCenterModule).toBeTruthy();
  });
});
