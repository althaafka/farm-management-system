const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const User = require('../models/user');

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
    await User.deleteOne({ email: 'ppluser@test.com' });
});

// Test case for successful registration
describe('POST /api/auth/register', () => {
  it('should allow PPL to register successfully', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        nama: 'PPL User',
        email: 'ppluser@test.com',
        password: 'password123',
        role: 'PPL',
        no_telp: '08123456789',
        alamat: 'Jl. Test No. 1'
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User registered successfully');
  });

  it('should return 400 if email is already registered', async () => {
    // Register the same user twice
    await request(app).post('/api/auth/register').send({
      nama: 'PPL User',
      email: 'ppluser@test.com',
      password: 'password123',
      role: 'PPL',
      no_telp: '08123456789',
      alamat: 'Jl. Test No. 1'
    });

    const response = await request(app)
      .post('/api/auth/register')
      .send({
        nama: 'PPL User',
        email: 'ppluser@test.com',
        password: 'password123',
        role: 'PPL',
        no_telp: '08123456789',
        alamat: 'Jl. Test No. 1'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Email already registered');
  });

  it('should return 400 if required fields are missing', async () => {
    // Fields missing test
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        nama: 'Incomplete User',
        password: 'password123',
        role: 'PPL'
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeTruthy(); 
  });
});
