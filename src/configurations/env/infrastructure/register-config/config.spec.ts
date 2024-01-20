import configuration from './config';

describe('Configuration', () => {
  it('should have a database Configuration', async () => {
    // get config factory
    const config = await configuration();

    // validate children
    expect(config).toHaveProperty('project');
    expect(config).toHaveProperty('database');
    expect(config).toHaveProperty('pgAdmin');

    expect(config.project).toHaveProperty('port');
    expect(config.project).toHaveProperty('swaggerVersion');

    expect(config.database).toHaveProperty('host');
    expect(config.database).toHaveProperty('name');
    expect(config.database).toHaveProperty('user');
    expect(config.database).toHaveProperty('password');
    expect(config.database).toHaveProperty('port');

    expect(config.pgAdmin).toHaveProperty('email');
    expect(config.pgAdmin).toHaveProperty('password');
    expect(config.pgAdmin).toHaveProperty('port');
    expect(config.pgAdmin).toHaveProperty('portLocal');
  });
});
