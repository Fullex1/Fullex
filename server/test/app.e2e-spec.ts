import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import * as pactum from 'pactum';

describe('AppController (e2e)', () => {
  let app: INestApplication;
    let accessToken: string;

  const user = {
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'TestPassword@123',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    jest.setTimeout(30000);

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
    await app.listen(3001);
    pactum.request.setBaseUrl('http://localhost:3001');
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Auth', () => {
    it('should register a user', async () => {
      await pactum
        .spec()
        .post('/auth/register')
        .withBody(user)
        .expectStatus(201)
        .expectBodyContains(user.username)
        .expectBodyContains(user.email)
        .expectJsonLike({
          username: user.username,
          email: user.email,
        })
        .inspect()
        .stores('userId', '_id');
    });

    it('should not register a duplicate user', async () => {
      await pactum
        .spec()
        .post('/auth/register')
        .withBody(user)
        .expectStatus(400);
    });
  });
});
