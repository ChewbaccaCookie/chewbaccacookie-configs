import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import app from '../index.js';

describe('express-server-javascript', () => {
  let server;
  beforeAll(() => {
    process.env.NODE_ENV = 'test';
    server = app.listen(0);
  });
  afterAll(async () => {
    await new Promise((resolve) => server.close(resolve));
  });
  it('GET / returns Hello World!', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello World!');
  });
});
