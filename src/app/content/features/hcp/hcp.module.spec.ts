import { HcpModule } from './hcp.module';

describe('HcpModule', () => {
  let hcpModule: HcpModule;

  beforeEach(() => {
    hcpModule = new HcpModule();
  });

  it('should create an instance', () => {
    expect(hcpModule).toBeTruthy();
  });
});
