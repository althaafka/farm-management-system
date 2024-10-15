[Farm Management System.postman_collection.json](https://github.com/user-attachments/files/17382288/Farm.Management.System.postman_collection.json)
# **Farm Management System 🐄🌾**

Farm Management System adalah aplikasi berbasis Node.js dan Express untuk membantu mengelola peternakan, termasuk **registrasi pengguna (PETERNAK dan PPL)**, **manajemen kandang**, **sapi**, **stok produk**, **produksi susu**, dan **laporan harian**. Aplikasi ini mendukung autentikasi JWT untuk menjaga keamanan akses.

## **Fitur**
- **Autentikasi dan Otorisasi**
- **Manajemen User**
- **Manajemen Kandang, Sapi, dan Stok Produk** 
- **Laporan Harian**
- **Manajemen Produksi Susu** 
- **JWT Authentication** 

---

## **Persyaratan**
- **Node.js** v16.x atau lebih baru
- **MongoDB Atlas** atau MongoDB lokal

---

## **Instalasi dan Konfigurasi**

1. **Clone repository:**
   ```bash
   git clone https://github.com/althaafka/farm-management-system.git
   cd farm-management-system
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Buat file `.env`:**
   Tambahkan variabel berikut ke dalam **`.env`**:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   MODE=DEV
   ```

4. **Jalankan server:**
   ```bash
   npm start
   ```
   Aplikasi akan berjalan di [http://localhost:5000](http://localhost:5000).

---

## **Deployment**
Aplikasi ini telah di-deploy dan dapat diakses di:

**[https://farm-management-system-7hd46v5gy-althaafkas-projects.vercel.app](https://farm-management-system-7hd46v5gy-althaafkas-projects.vercel.app)**

---

## **API Documentation dengan Postman**
Terdapat dokumentasi API menggunakan Postman. Anda bisa mengaksesnya dengan link berikut:
[Uploading{
	"info": {
		"_postman_id": "8be2997b-c11a-4df1-aed4-e1be8fa437ec",
		"name": "Farm Management System",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "29126938"
	},
	"item": [
		{
			"name": "Auth",
			"item": [
				{
					"name": "register",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nama\": \"Althaaf Khasyi Atisomya\",\r\n  \"email\": \"althaafka004@gmail.com\",\r\n  \"password\": \"password123\",\r\n  \"role\": \"PPL\",\r\n  \"no_telp\": \"08123456789\",\r\n  \"alamat\": \"Jl. Peternakan No.2\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/auth/register",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"auth",
								"register"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"John Doe\",\r\n  \"email\": \"john@example.com\",\r\n  \"password\": \"password123\",\r\n  \"role\": \"PETERNAK\",\r\n  \"no_telp\": \"08123456789\",\r\n  \"alamat\": \"Jl. Peternakan No.1\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/auth/register",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"auth",
										"register"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "42"
								},
								{
									"key": "ETag",
									"value": "W/\"2a-nMoFx54+czTntmSLXl3mqIsZV4A\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 00:58:29 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"User registered successfully\"\n}"
						},
						{
							"name": "403 Peternak cannot register user",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"Peternak 1\",\r\n  \"email\": \"peternak@gmail.com\",\r\n  \"password\": \"password123\",\r\n  \"role\": \"PETERNAK\",\r\n  \"no_telp\": \"08123456789\",\r\n  \"alamat\": \"Jl. Peternakan No.3\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/auth/register",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"auth",
										"register"
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "44"
								},
								{
									"key": "ETag",
									"value": "W/\"2c-8DjoNiINrlvOwrjv/MECPOsPMqg\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 15:50:20 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Only PPL can register Peternak\"\n}"
						},
						{
							"name": "400 missing fields",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"PPL 4\",\r\n  \"role\": \"PPL\",\r\n  \"no_telp\": \"08123456789\",\r\n  \"alamat\": \"Jl. Peternakan No.10\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/auth/register",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"auth",
										"register"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "48"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 14:20:31 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"30-7NjuhtcELavWhpkmDmt20M6xBLI\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::c8872-1729002029942-8574f7ed6334"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"All required fields must be filled\"\n}"
						},
						{
							"name": "400 email already registered",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"Althaaf Khasyi Atisomya\",\r\n  \"email\": \"althaafka004@gmail.com\",\r\n  \"password\": \"password123\",\r\n  \"role\": \"PPL\",\r\n  \"no_telp\": \"08123456789\",\r\n  \"alamat\": \"Jl. Peternakan No.2\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/auth/register",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"auth",
										"register"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "38"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:02:28 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"26-HI87yRA9+mbI94uq6tXihn+7uok\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::dgjqh-1729004544553-3592bc764261"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Email already registered\"\n}"
						}
					]
				},
				{
					"name": "login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\": \"john@example.com\",\r\n    \"password\": \"password123\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/auth/login",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"email\": \"john@example.com\",\r\n    \"password\": \"password123\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/auth/login",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"auth",
										"login"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "212"
								},
								{
									"key": "ETag",
									"value": "W/\"d4-xi/YGinEKIJSrHLrtaZJGMZLG3o\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 01:00:45 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzBiMWIzNWNlNWRiMWZiOGYyNTQ0NzIiLCJyb2xlIjoiUEVURVJOQUsiLCJpYXQiOjE3Mjg3ODEyNDUsImV4cCI6MTcyODc4NDg0NX0.Xhs1IXWE2frLvELQtXy_UNyJFqp_x_Y8KJtyOmManQI\"\n}"
						},
						{
							"name": "401 invalid credentials",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"email\": \"john@example.com\",\r\n    \"password\": \"password\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/auth/login",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"auth",
										"login"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "33"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:03:40 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"21-dBEoW0UmTF+EGUMaprEp9/8zNNA\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::zdbsj-1729004619858-3136df5b3356"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Invalid credentials\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "Kandang",
			"item": [
				{
					"name": "create kandang",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nama_kandang\": \"Kandang C\",\r\n  \"lokasi\": \"Yogyakarta\",\r\n  \"kapasitas\": 2\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/kandang",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"kandang"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama_kandang\": \"Kandang B\",\r\n  \"lokasi\": \"Surakarta\",\r\n  \"kapasitas\": 1,\r\n  \"peternak_ids\": [\"670b1b35ce5db1fb8f254472\"]\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "295"
								},
								{
									"key": "ETag",
									"value": "W/\"127-0s/ktupIPevhxTxKs0vSlh/DqlE\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:14:02 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Kandang successfully added\",\n    \"kandang\": {\n        \"ppl_id\": \"670b28ba76673f97ec03759f\",\n        \"peternak_ids\": [\n            \"670b1b35ce5db1fb8f254472\"\n        ],\n        \"nama_kandang\": \"Kandang B\",\n        \"lokasi\": \"Surakarta\",\n        \"kapasitas\": 1,\n        \"status\": \"REHAT\",\n        \"_id\": \"670b2cea97294b2edc49e9af\",\n        \"tgl_pembuatan\": \"2024-10-13T02:14:02.250Z\",\n        \"__v\": 0\n    }\n}"
						},
						{
							"name": "400 missing fields",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama_kandang\": \"Kandang C\",\r\n  \"lokasi\": \"Yogyakarta\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "48"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:05:43 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"30-7NjuhtcELavWhpkmDmt20M6xBLI\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::87xlw-1729004743615-7ca476fd58ae"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"All required fields must be filled\"\n}"
						},
						{
							"name": "400 invalid peternak ids",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama_kandang\": \"Kandang C\",\r\n  \"lokasi\": \"Yogyakarta\",\r\n  \"kapasitas\": 12,\r\n  \"peternak_ids\": [\"670b28ba76673f97ec03759e\"]\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "50"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:10:18 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"32-OnKRobC9+JHFm28K0gT7yw+34Gg\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::58rx9-1729005017873-4685fc9a415d"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"One or more peternak IDs are invalid\"\n}"
						}
					]
				},
				{
					"name": "update kandang",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"kapasitas\": 2\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/kandang/670b2cea97294b2edc49e9af",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"kandang",
								"670b2cea97294b2edc49e9af"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"kapasitas\": 2\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2cea97294b2edc49e9af",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2cea97294b2edc49e9af"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "297"
								},
								{
									"key": "ETag",
									"value": "W/\"129-UE6C85j+1SqMW/se8M5a+KKf9JI\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:17:09 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Kandang successfully updated\",\n    \"kandang\": {\n        \"_id\": \"670b2cea97294b2edc49e9af\",\n        \"ppl_id\": \"670b28ba76673f97ec03759f\",\n        \"peternak_ids\": [\n            \"670b1b35ce5db1fb8f254472\"\n        ],\n        \"nama_kandang\": \"Kandang B\",\n        \"lokasi\": \"Surakarta\",\n        \"kapasitas\": 2,\n        \"status\": \"REHAT\",\n        \"tgl_pembuatan\": \"2024-10-13T02:14:02.250Z\",\n        \"__v\": 0\n    }\n}"
						},
						{
							"name": "404 kandang not found",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"kapasitas\": 2\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2cea97294b2edc49e9ae",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2cea97294b2edc49e9ae"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "31"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:11:20 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"1f-0syb5FkU5wFdIPIgQNv94Stfoyc\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::mbzj5-1729005080273-2d41d9a662fe"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Kandang not found\"\n}"
						}
					]
				},
				{
					"name": "delete kandang",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/kandang/670b2d0a97294b2edc49e9b1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"kandang",
								"670b2d0a97294b2edc49e9b1"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2d0a97294b2edc49e9b1",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2d0a97294b2edc49e9b1"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "42"
								},
								{
									"key": "ETag",
									"value": "W/\"2a-MtD006iiCrL5gwB7lAqE/syOuJE\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:18:05 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Kandang successfully deleted\"\n}"
						}
					]
				},
				{
					"name": "add peternak to kandang",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"peternak_id\": \"670b1b35ce5db1fb8f254472\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/kandang/670b2cac97294b2edc49e9ac/add-peternak",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"kandang",
								"670b2cac97294b2edc49e9ac",
								"add-peternak"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"peternak_id\": \"670b1b35ce5db1fb8f254472\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2cac97294b2edc49e9ac/add-peternak",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2cac97294b2edc49e9ac",
										"add-peternak"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "306"
								},
								{
									"key": "ETag",
									"value": "W/\"132-BU6T9IWDLK2XcA1wLgusCkHs83Q\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:20:54 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Peternak successfully added to kandang\",\n    \"kandang\": {\n        \"_id\": \"670b2cac97294b2edc49e9ac\",\n        \"ppl_id\": \"670b28ba76673f97ec03759f\",\n        \"peternak_ids\": [\n            \"670b1b35ce5db1fb8f254472\"\n        ],\n        \"nama_kandang\": \"Kandang A\",\n        \"lokasi\": \"Bandung\",\n        \"kapasitas\": 10,\n        \"status\": \"REHAT\",\n        \"tgl_pembuatan\": \"2024-10-13T02:13:00.845Z\",\n        \"__v\": 1\n    }\n}"
						},
						{
							"name": "400 peternak alraedy assigned",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"peternak_id\": \"670b1b35ce5db1fb8f254472\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2cac97294b2edc49e9ac/add-peternak",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2cac97294b2edc49e9ac",
										"add-peternak"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "58"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:12:34 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"3a-BKRd/V31w1aRMqJuNAEFOCtvT3g\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::rl55m-1729005153890-d3faf7713144"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Peternak is already assigned to this kandang\"\n}"
						},
						{
							"name": "add peternak to kandang",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"peternak_id\": \"670b1b35ce5db1fb8f25447a\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2cac97294b2edc49e9ac/add-peternak",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2cac97294b2edc49e9ac",
										"add-peternak"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "33"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:13:15 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"21-RZ3Q9FPQaFsYDa15IPz1rngarSU\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::6fn6w-1729005194440-45536a6b311f"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Invalid peternak ID\"\n}"
						}
					]
				},
				{
					"name": "remove peternak from kandang",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"peternak_id\": \"670b1b35ce5db1fb8f254472\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/kandang/670b2cac97294b2edc49e9ac/remove-peternak",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"kandang",
								"670b2cac97294b2edc49e9ac",
								"remove-peternak"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"peternak_id\": \"670b1b35ce5db1fb8f254472\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2cac97294b2edc49e9ac/remove-peternak",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2cac97294b2edc49e9ac",
										"remove-peternak"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "284"
								},
								{
									"key": "ETag",
									"value": "W/\"11c-6HZsGB9V2pDsnukSfEjUM6bv8gk\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:22:25 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Peternak successfully removed from kandang\",\n    \"kandang\": {\n        \"_id\": \"670b2cac97294b2edc49e9ac\",\n        \"ppl_id\": \"670b28ba76673f97ec03759f\",\n        \"peternak_ids\": [],\n        \"nama_kandang\": \"Kandang A\",\n        \"lokasi\": \"Bandung\",\n        \"kapasitas\": 10,\n        \"status\": \"REHAT\",\n        \"tgl_pembuatan\": \"2024-10-13T02:13:00.845Z\",\n        \"__v\": 2\n    }\n}"
						},
						{
							"name": "404 kandang not found",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"peternak_id\": \"670b1b35ce5db1fb8f254472\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/kandang/670b2cac97294b2edc49e9aa/remove-peternak",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"kandang",
										"670b2cac97294b2edc49e9aa",
										"remove-peternak"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "31"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:42:30 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"1f-0syb5FkU5wFdIPIgQNv94Stfoyc\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::fmxth-1729006946731-60356ffbb188"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Kandang not found\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "Sapi",
			"item": [
				{
					"name": "create sapi",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"kode_sapi\": \"SAPI003\",\r\n  \"jenis_kelamin\": \"JANTAN\",\r\n  \"berat\": 550,\r\n  \"tgl_pembelian\": \"2024-09-31\",\r\n  \"harga_beli\": 12000000,\r\n  \"kandang_id\": \"670b2cea97294b2edc49e9af\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/sapi",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"sapi"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"kode_sapi\": \"SAPI001\",\r\n  \"jenis_kelamin\": \"BETINA\",\r\n  \"berat\": 500,\r\n  \"tgl_pembelian\": \"2024-10-09\",\r\n  \"harga_beli\": 10000000,\r\n  \"kandang_id\": \"670b2cea97294b2edc49e9af\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/sapi",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"sapi"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "268"
								},
								{
									"key": "ETag",
									"value": "W/\"10c-Mdpm2odF2BzoX9iaiIqa3/8Kg8c\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:37:50 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Sapi successfully added\",\n    \"sapi\": {\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"kode_sapi\": \"SAPI001\",\n        \"jenis_kelamin\": \"BETINA\",\n        \"berat\": 500,\n        \"status\": \"HIDUP\",\n        \"tgl_pembelian\": \"2024-10-09T00:00:00.000Z\",\n        \"harga_beli\": 10000000,\n        \"_id\": \"670b327ee77e843bf268ca94\",\n        \"__v\": 0\n    }\n}"
						},
						{
							"name": "400 full capacity",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"kode_sapi\": \"SAPI003\",\r\n  \"jenis_kelamin\": \"JANTAN\",\r\n  \"berat\": 550,\r\n  \"tgl_pembelian\": \"2024-09-31\",\r\n  \"harga_beli\": 12000000,\r\n  \"kandang_id\": \"670b2cea97294b2edc49e9af\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/sapi",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"sapi"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "41"
								},
								{
									"key": "ETag",
									"value": "W/\"29-Uvc0jJog+92BNbnPvfHcmaddEpI\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:38:42 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Kandang is at full capacity\"\n}"
						}
					]
				},
				{
					"name": "update sapi",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"harga_beli\": 9000000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/sapi/670b327ee77e843bf268ca94",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"sapi",
								"670b327ee77e843bf268ca94"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"harga_beli\": 9000000\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/sapi/670b327ee77e843bf268ca94",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"sapi",
										"670b327ee77e843bf268ca94"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "269"
								},
								{
									"key": "ETag",
									"value": "W/\"10d-bJoPhBhf+W27cLQTnWFae06ToVs\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:40:46 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Sapi successfully updated\",\n    \"sapi\": {\n        \"_id\": \"670b327ee77e843bf268ca94\",\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"kode_sapi\": \"SAPI001\",\n        \"jenis_kelamin\": \"BETINA\",\n        \"berat\": 500,\n        \"status\": \"HIDUP\",\n        \"tgl_pembelian\": \"2024-10-09T00:00:00.000Z\",\n        \"harga_beli\": 9000000,\n        \"__v\": 0\n    }\n}"
						}
					]
				},
				{
					"name": "get all sapi by kandang",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/sapi/670b2cea97294b2edc49e9af",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"sapi",
								"670b2cea97294b2edc49e9af"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/sapi/670b2cea97294b2edc49e9af",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"sapi",
										"670b2cea97294b2edc49e9af"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "457"
								},
								{
									"key": "ETag",
									"value": "W/\"1c9-lm/DtsJNM9Ll2h8NPwPA3JtMtuc\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:41:43 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"sapi\": [\n        {\n            \"_id\": \"670b327ee77e843bf268ca94\",\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"kode_sapi\": \"SAPI001\",\n            \"jenis_kelamin\": \"BETINA\",\n            \"berat\": 500,\n            \"status\": \"HIDUP\",\n            \"tgl_pembelian\": \"2024-10-09T00:00:00.000Z\",\n            \"harga_beli\": 9000000,\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"670b32a1e77e843bf268ca98\",\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"kode_sapi\": \"SAPI002\",\n            \"jenis_kelamin\": \"JANTAN\",\n            \"berat\": 560,\n            \"status\": \"HIDUP\",\n            \"tgl_pembelian\": \"2024-10-01T00:00:00.000Z\",\n            \"harga_beli\": 12000000,\n            \"__v\": 0\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "remove sapi",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/sapi/670b32a1e77e843bf268ca98",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"sapi",
								"670b32a1e77e843bf268ca98"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/sapi/670b32a1e77e843bf268ca98",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"sapi",
										"670b32a1e77e843bf268ca98"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "39"
								},
								{
									"key": "ETag",
									"value": "W/\"27-LcyHq8cS+mk3SvRZD1M8zGa5oRw\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 02:42:47 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Sapi successfully deleted\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "Stok Produk",
			"item": [
				{
					"name": "create stok",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nama\": \"Pakan Sapi 3\",\r\n  \"tipe_produk\": \"PAKAN\",\r\n  \"jumlah\": 25,\r\n  \"satuan\": \"kg\",\r\n  \"harga\": 50000,\r\n  \"tgl_kedaluwarsa\": \"2025-01-01\",\r\n  \"kandang_id\": \"670b2cea97294b2edc49e9af\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/stok-produk",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"stok-produk"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"Pakan Sapi\",\r\n  \"tipe_produk\": \"PAKAN\",\r\n  \"jumlah\": 100,\r\n  \"satuan\": \"kg\",\r\n  \"harga\": 50000,\r\n  \"tgl_kedaluwarsa\": \"2025-01-01\",\r\n  \"kandang_id\": \"670b2cea97294b2edc49e9af\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/stok-produk",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"stok-produk"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "309"
								},
								{
									"key": "ETag",
									"value": "W/\"135-cbv+eyKYZr3WPqhAk0vC89JzSXE\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 05:56:08 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Product stock successfully added\",\n    \"stokProduk\": {\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"nama\": \"Pakan Sapi\",\n        \"tipe_produk\": \"PAKAN\",\n        \"jumlah\": 100,\n        \"satuan\": \"kg\",\n        \"harga\": 50000,\n        \"tgl_masuk\": \"2024-10-13T05:56:08.776Z\",\n        \"tgl_kedaluwarsa\": \"2025-01-01T00:00:00.000Z\",\n        \"_id\": \"670b60f83048ee0aa5306778\",\n        \"__v\": 0\n    }\n}"
						},
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"Pakan Sapi 2\",\r\n  \"tipe_produk\": \"PAKAN\",\r\n  \"jumlah\": 50,\r\n  \"satuan\": \"kg\",\r\n  \"harga\": 100000,\r\n  \"tgl_kedaluwarsa\": \"2025-01-01\",\r\n  \"tgl_masuk\": \"2024-10-12\",\r\n  \"kandang_id\": \"670b2cea97294b2edc49e9af\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/stok-produk",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"stok-produk"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "311"
								},
								{
									"key": "ETag",
									"value": "W/\"137-tC5t9lkIOwl1qYvZkP00ifkwBkM\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 05:57:22 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Product stock successfully added\",\n    \"stokProduk\": {\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"nama\": \"Pakan Sapi 2\",\n        \"tipe_produk\": \"PAKAN\",\n        \"jumlah\": 50,\n        \"satuan\": \"kg\",\n        \"harga\": 100000,\n        \"tgl_masuk\": \"2024-10-12T00:00:00.000Z\",\n        \"tgl_kedaluwarsa\": \"2025-01-01T00:00:00.000Z\",\n        \"_id\": \"670b61423048ee0aa530677b\",\n        \"__v\": 0\n    }\n}"
						},
						{
							"name": "400 kandang not in production",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"Obat Sapi 3\",\r\n  \"tipe_produk\": \"OBAT\",\r\n  \"jumlah\": 25,\r\n  \"satuan\": \"kg\",\r\n  \"harga\": 50000,\r\n  \"tgl_kedaluwarsa\": \"2025-01-01\",\r\n  \"kandang_id\": \"670b2cac97294b2edc49e9ac\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/stok-produk",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"stok-produk"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "60"
								},
								{
									"key": "ETag",
									"value": "W/\"3c-6qY7i9PR7hXC3a352NsKtwMtCyA\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 06:01:23 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Cannot add stock. Kandang is not in production\"\n}"
						}
					]
				},
				{
					"name": "Get Stok by Kandang",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/stok-produk/670b2cea97294b2edc49e9af",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"stok-produk",
								"670b2cea97294b2edc49e9af"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/stok-produk/670b2cea97294b2edc49e9af",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"stok-produk",
										"670b2cea97294b2edc49e9af"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "763"
								},
								{
									"key": "ETag",
									"value": "W/\"2fb-QGQJKotwRclR4tWj8OdfNcyEfPU\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 06:00:24 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"stok\": [\n        {\n            \"_id\": \"670b60f83048ee0aa5306778\",\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"nama\": \"Pakan Sapi\",\n            \"tipe_produk\": \"PAKAN\",\n            \"jumlah\": 100,\n            \"satuan\": \"kg\",\n            \"harga\": 50000,\n            \"tgl_masuk\": \"2024-10-13T05:56:08.776Z\",\n            \"tgl_kedaluwarsa\": \"2025-01-01T00:00:00.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"670b61423048ee0aa530677b\",\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"nama\": \"Pakan Sapi 2\",\n            \"tipe_produk\": \"PAKAN\",\n            \"jumlah\": 50,\n            \"satuan\": \"kg\",\n            \"harga\": 100000,\n            \"tgl_masuk\": \"2024-10-12T00:00:00.000Z\",\n            \"tgl_kedaluwarsa\": \"2025-01-01T00:00:00.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"670b619d3048ee0aa530677e\",\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"nama\": \"Pakan Sapi 3\",\n            \"tipe_produk\": \"PAKAN\",\n            \"jumlah\": 25,\n            \"satuan\": \"kg\",\n            \"harga\": 50000,\n            \"tgl_masuk\": \"2024-10-13T05:58:53.235Z\",\n            \"tgl_kedaluwarsa\": \"2025-01-01T00:00:00.000Z\",\n            \"__v\": 0\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "Update stok",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nama\": \"Pakan Sapi Premium\",\r\n  \"tipe_produk\": \"PAKAN\",\r\n  \"jumlah\": 70,\r\n  \"satuan\": \"kg\",\r\n  \"harga\": 50000,\r\n  \"tgl_kedaluwarsa\": \"2025-01-03\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/stok-produk/670b619d3048ee0aa530677e",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"stok-produk",
								"670b619d3048ee0aa530677e"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"nama\": \"Pakan Sapi Premium\",\r\n  \"tipe_produk\": \"PAKAN\",\r\n  \"jumlah\": 70,\r\n  \"satuan\": \"kg\",\r\n  \"harga\": 50000,\r\n  \"tgl_kedaluwarsa\": \"2025-01-03\"\r\n}\r\n",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/stok-produk/670b619d3048ee0aa530677e",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"stok-produk",
										"670b619d3048ee0aa530677e"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "318"
								},
								{
									"key": "ETag",
									"value": "W/\"13e-stKK74wYfVjTaspXRo5919CtA+s\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 06:04:16 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Product stock successfully updated\",\n    \"stokProduk\": {\n        \"_id\": \"670b619d3048ee0aa530677e\",\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"nama\": \"Pakan Sapi Premium\",\n        \"tipe_produk\": \"PAKAN\",\n        \"jumlah\": 70,\n        \"satuan\": \"kg\",\n        \"harga\": 50000,\n        \"tgl_masuk\": \"2024-10-13T05:58:53.235Z\",\n        \"tgl_kedaluwarsa\": \"2025-01-03T00:00:00.000Z\",\n        \"__v\": 0\n    }\n}"
						}
					]
				},
				{
					"name": "remove stok produk",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/stok-produk/670b61423048ee0aa530677b",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"stok-produk",
								"670b61423048ee0aa530677b"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/stok-produk/670b61423048ee0aa530677b",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"stok-produk",
										"670b61423048ee0aa530677b"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "48"
								},
								{
									"key": "ETag",
									"value": "W/\"30-r+LZh8hfR4l2J6hQKbh8hL/6IKM\""
								},
								{
									"key": "Date",
									"value": "Sun, 13 Oct 2024 06:05:48 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Product stock successfully deleted\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "Laporan Harian",
			"item": [
				{
					"name": "create laporan",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_produk\": \"670b60f83048ee0aa5306778\",\r\n  \"tanggal\": \"2024-10-14\",\r\n  \"pakan_terpakai\": 3,\r\n  \"obat_terpakai\": 0,\r\n  \"deplesi\": 0\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/laporan-harian",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"laporan-harian"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"id_produk\": \"670b60f83048ee0aa5306778\",\r\n  \"kandang_id\": \"670b2cea97294b2edc49e9af\",\r\n  \"pakan_terpakai\": 1,\r\n  \"obat_terpakai\": 0,\r\n  \"deplesi\": 0\r\n}\r\n",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/laporan-harian",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"laporan-harian"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "315"
								},
								{
									"key": "ETag",
									"value": "W/\"13b-8VUgdIwo40G6h2zoUyTfdgAGz8c\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 03:30:44 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Daily report created successfully\",\n    \"laporan\": {\n        \"peternak_id\": \"670b1b35ce5db1fb8f254472\",\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"id_produk\": \"670b60f83048ee0aa5306778\",\n        \"tanggal\": \"2024-10-14T03:30:44.056Z\",\n        \"pakan_terpakai\": 1,\n        \"obat_terpakai\": 0,\n        \"deplesi\": 0,\n        \"_id\": \"670c9064585501e410f93ae5\",\n        \"umur\": 0,\n        \"__v\": 0\n    }\n}"
						},
						{
							"name": "400 future date",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"id_produk\": \"670b60f83048ee0aa5306778\",\r\n  \"tanggal\": \"2024-11-11\",\r\n  \"pakan_terpakai\": 2,\r\n  \"obat_terpakai\": 0,\r\n  \"deplesi\": 0\r\n}\r\n",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/laporan-harian",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"laporan-harian"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "47"
								},
								{
									"key": "ETag",
									"value": "W/\"2f-6zg2XfnzRQpOFWyjf6VOFUXXusQ\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 03:38:58 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"Report date cannot be in the future\"\n}"
						},
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"id_produk\": \"670b60f83048ee0aa5306778\",\r\n  \"tanggal\": \"2024-10-14\",\r\n  \"pakan_terpakai\": 3,\r\n  \"obat_terpakai\": 0,\r\n  \"deplesi\": 0\r\n}\r\n",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/laporan-harian",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"laporan-harian"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "315"
								},
								{
									"key": "ETag",
									"value": "W/\"13b-ZQY+Dt8f03njIi00G+bHH4XwnVU\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 03:39:20 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Daily report created successfully\",\n    \"laporan\": {\n        \"peternak_id\": \"670b1b35ce5db1fb8f254472\",\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"id_produk\": \"670b60f83048ee0aa5306778\",\n        \"tanggal\": \"2024-10-14T00:00:00.000Z\",\n        \"pakan_terpakai\": 3,\n        \"obat_terpakai\": 0,\n        \"deplesi\": 0,\n        \"_id\": \"670c92680c7cb637f55c20f3\",\n        \"umur\": 0,\n        \"__v\": 0\n    }\n}"
						}
					]
				},
				{
					"name": "get laporan by kandang",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/laporan-harian/670b2cea97294b2edc49e9af",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"laporan-harian",
								"670b2cea97294b2edc49e9af"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/laporan-harian/670b2cea97294b2edc49e9af",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"laporan-harian",
										"670b2cea97294b2edc49e9af"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "990"
								},
								{
									"key": "ETag",
									"value": "W/\"3de-fN4T3VsS2i2e9vkYD7dZXntvNuQ\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 03:42:36 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"laporan\": [\n        {\n            \"_id\": \"670c8fe7585501e410f93adf\",\n            \"peternak_id\": {\n                \"_id\": \"670b1b35ce5db1fb8f254472\",\n                \"nama\": \"John Doe\"\n            },\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"id_produk\": {\n                \"_id\": \"670b60f83048ee0aa5306778\",\n                \"nama\": \"Pakan Sapi\"\n            },\n            \"tanggal\": \"2024-10-14T03:28:39.978Z\",\n            \"pakan_terpakai\": 1,\n            \"obat_terpakai\": 0,\n            \"deplesi\": 1,\n            \"keterangan\": \"Satu sapi meninggal sakit\",\n            \"umur\": 0,\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"670c9064585501e410f93ae5\",\n            \"peternak_id\": {\n                \"_id\": \"670b1b35ce5db1fb8f254472\",\n                \"nama\": \"John Doe\"\n            },\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"id_produk\": {\n                \"_id\": \"670b60f83048ee0aa5306778\",\n                \"nama\": \"Pakan Sapi\"\n            },\n            \"tanggal\": \"2024-10-14T03:30:44.056Z\",\n            \"pakan_terpakai\": 1,\n            \"obat_terpakai\": 0,\n            \"deplesi\": 0,\n            \"umur\": 0,\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"670c92680c7cb637f55c20f3\",\n            \"peternak_id\": {\n                \"_id\": \"670b1b35ce5db1fb8f254472\",\n                \"nama\": \"John Doe\"\n            },\n            \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n            \"id_produk\": {\n                \"_id\": \"670b60f83048ee0aa5306778\",\n                \"nama\": \"Pakan Sapi\"\n            },\n            \"tanggal\": \"2024-10-14T00:00:00.000Z\",\n            \"pakan_terpakai\": 3,\n            \"obat_terpakai\": 0,\n            \"deplesi\": 0,\n            \"umur\": 0,\n            \"__v\": 0\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "update laporan",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"keterangan\": \"Satu sapi menginggal karena sakit keras\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/laporan-harian/670c8fe7585501e410f93adf",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"laporan-harian",
								"670c8fe7585501e410f93adf"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"keterangan\": \"Satu sapi menginggal karena sakit\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/laporan-harian/670c8fe7585501e410f93adf",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"laporan-harian",
										"670c8fe7585501e410f93adf"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "364"
								},
								{
									"key": "ETag",
									"value": "W/\"16c-17SfLHDYcD1AxhljNmqQCotVlPw\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 04:02:58 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Daily report updated successfully\",\n    \"laporan\": {\n        \"_id\": \"670c8fe7585501e410f93adf\",\n        \"peternak_id\": \"670b1b35ce5db1fb8f254472\",\n        \"kandang_id\": \"670b2cea97294b2edc49e9af\",\n        \"id_produk\": \"670b60f83048ee0aa5306778\",\n        \"tanggal\": \"2024-10-14T03:28:39.978Z\",\n        \"pakan_terpakai\": 1,\n        \"obat_terpakai\": 0,\n        \"deplesi\": 1,\n        \"keterangan\": \"Satu sapi menginggal karena sakit\",\n        \"umur\": 0,\n        \"__v\": 0\n    }\n}"
						}
					]
				},
				{
					"name": "delete laporan",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/laporan-harian/670db33b4441e9979ca162aa",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"laporan-harian",
								"670db33b4441e9979ca162aa"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/laporan-harian/670db33b4441e9979ca162aa",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"laporan-harian",
										"670db33b4441e9979ca162aa"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "47"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 15:47:47 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"2f-hDkbxQ01G27C/dJow7ViYn6UqOc\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "MISS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::ssbxp-1729007265928-17c289a26677"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Daily report deleted successfully\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "Produksi Susu",
			"item": [
				{
					"name": "create produksi susu",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"sapi_id\": \"670b33b1e77e843bf268caa2\",\r\n    \"tanggal\": \"2024-10-05\",\r\n    \"jumlah_liter\": 15,\r\n    \"harga_jual\": 500000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/produksi-susu",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"produksi-susu"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"sapi_id\": \"670b33b1e77e843bf268caa2\",\r\n    \"tanggal\": \"2024-10-05\",\r\n    \"jumlah_liter\": 15,\r\n    \"harga_jual\": 500000\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/produksi-susu",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"produksi-susu"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "240"
								},
								{
									"key": "ETag",
									"value": "W/\"f0-4JlNgVsHINJf7SYT9SUY3A57cwY\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:26:32 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Milk production recorded successfully\",\n    \"produksiSusu\": {\n        \"sapi_id\": \"670b33b1e77e843bf268caa2\",\n        \"tanggal\": \"2024-10-05T00:00:00.000Z\",\n        \"jumlah_liter\": 15,\n        \"harga_jual\": 500000,\n        \"populasi_akhir\": 2,\n        \"_id\": \"670d4638459b53af8f9e14cf\",\n        \"__v\": 0\n    }\n}"
						},
						{
							"name": "success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"sapi_id\": \"670b327ee77e843bf268ca94\",\r\n    \"jumlah_liter\": 12,\r\n    \"harga_jual\": 480000\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/produksi-susu",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"produksi-susu"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "240"
								},
								{
									"key": "ETag",
									"value": "W/\"f0-OwdL27N8fux6H0tt+JheRRGqs2c\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:27:03 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Milk production recorded successfully\",\n    \"produksiSusu\": {\n        \"sapi_id\": \"670b327ee77e843bf268ca94\",\n        \"tanggal\": \"2024-10-14T16:27:03.697Z\",\n        \"jumlah_liter\": 12,\n        \"harga_jual\": 480000,\n        \"populasi_akhir\": 2,\n        \"_id\": \"670d4657459b53af8f9e14d6\",\n        \"__v\": 0\n    }\n}"
						}
					]
				},
				{
					"name": "get produksi susu by sapi",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/produksi-susu/sapi/670b327ee77e843bf268ca94",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"produksi-susu",
								"sapi",
								"670b327ee77e843bf268ca94"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/produksi-susu/sapi/670b327ee77e843bf268ca94",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"produksi-susu",
										"sapi",
										"670b327ee77e843bf268ca94"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "196"
								},
								{
									"key": "ETag",
									"value": "W/\"c4-nRbi7sPR6P44cwLR3VeCuMy247U\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:28:19 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"produksi\": [\n        {\n            \"_id\": \"670d4657459b53af8f9e14d6\",\n            \"sapi_id\": {\n                \"_id\": \"670b327ee77e843bf268ca94\"\n            },\n            \"tanggal\": \"2024-10-14T16:27:03.697Z\",\n            \"jumlah_liter\": 12,\n            \"harga_jual\": 480000,\n            \"populasi_akhir\": 2,\n            \"__v\": 0\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "get produksi susu by kandang",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/produksi-susu/kandang/670b2cea97294b2edc49e9af",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"produksi-susu",
								"kandang",
								"670b2cea97294b2edc49e9af"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/produksi-susu/kandang/670b2cea97294b2edc49e9af",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"produksi-susu",
										"kandang",
										"670b2cea97294b2edc49e9af"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "378"
								},
								{
									"key": "ETag",
									"value": "W/\"17a-s3J1iwZ0OSPcy5b+JiQlhJksKBU\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:28:51 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"produksi\": [\n        {\n            \"_id\": \"670d4638459b53af8f9e14cf\",\n            \"sapi_id\": {\n                \"_id\": \"670b33b1e77e843bf268caa2\"\n            },\n            \"tanggal\": \"2024-10-05T00:00:00.000Z\",\n            \"jumlah_liter\": 15,\n            \"harga_jual\": 500000,\n            \"populasi_akhir\": 2,\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"670d4657459b53af8f9e14d6\",\n            \"sapi_id\": {\n                \"_id\": \"670b327ee77e843bf268ca94\"\n            },\n            \"tanggal\": \"2024-10-14T16:27:03.697Z\",\n            \"jumlah_liter\": 12,\n            \"harga_jual\": 480000,\n            \"populasi_akhir\": 2,\n            \"__v\": 0\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "update produksi susu",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"harga_jual\": 470000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/produksi-susu/670d4657459b53af8f9e14d6",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"produksi-susu",
								"670d4657459b53af8f9e14d6"
							]
						}
					},
					"response": [
						{
							"name": "success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"harga_jual\": 470000\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/produksi-susu/670d4657459b53af8f9e14d6",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"produksi-susu",
										"670d4657459b53af8f9e14d6"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "235"
								},
								{
									"key": "ETag",
									"value": "W/\"eb-+JKfnz8U+fxjO8UpMj2+4uWXasQ\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:31:05 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Milk production updated successfully\",\n    \"produksi\": {\n        \"_id\": \"670d4657459b53af8f9e14d6\",\n        \"sapi_id\": \"670b327ee77e843bf268ca94\",\n        \"tanggal\": \"2024-10-14T16:27:03.697Z\",\n        \"jumlah_liter\": 12,\n        \"harga_jual\": 470000,\n        \"populasi_akhir\": 2,\n        \"__v\": 0\n    }\n}"
						}
					]
				},
				{
					"name": "delete produksi susu",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/produksi-susu/670d4657459b53af8f9e14d6",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"produksi-susu",
								"670d4657459b53af8f9e14d6"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "get all user",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/user",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"user"
							]
						}
					},
					"response": [
						{
							"name": "New Request",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/user",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"user"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "648"
								},
								{
									"key": "ETag",
									"value": "W/\"288-ke1O65GkTEgF34Q94i8kWizc9C0\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:39:16 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"users\": [\n        {\n            \"_id\": \"670b1b35ce5db1fb8f254472\",\n            \"nama\": \"John Doe\",\n            \"email\": \"john@example.com\",\n            \"role\": \"PETERNAK\",\n            \"no_telp\": \"08123456789\",\n            \"alamat\": \"Jl. Peternakan No.1\"\n        },\n        {\n            \"_id\": \"670b28ba76673f97ec03759f\",\n            \"nama\": \"Althaaf Khasyi Atisomya\",\n            \"email\": \"althaafka004@gmail.com\",\n            \"role\": \"PPL\",\n            \"no_telp\": \"08123456789\",\n            \"alamat\": \"Jl. Peternakan No.2\"\n        },\n        {\n            \"_id\": \"670bec63def6a16af0af1a0e\",\n            \"nama\": \"Peternak 1\",\n            \"email\": \"peternak@gmail.com\",\n            \"role\": \"PETERNAK\",\n            \"no_telp\": \"08123456789\",\n            \"alamat\": \"Jl. Peternakan No.3\"\n        },\n        {\n            \"_id\": \"670bec78def6a16af0af1a11\",\n            \"nama\": \"Peternak 2\",\n            \"email\": \"peternak2@gmail.com\",\n            \"role\": \"PETERNAK\",\n            \"no_telp\": \"08123456789\",\n            \"alamat\": \"Jl. Peternakan No.4\"\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "get user by id",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_PPL}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/user/670b1b35ce5db1fb8f254472",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"user",
								"670b1b35ce5db1fb8f254472"
							]
						}
					},
					"response": [
						{
							"name": "New Request",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/user/670b1b35ce5db1fb8f254472",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"user",
										"670b1b35ce5db1fb8f254472"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "161"
								},
								{
									"key": "ETag",
									"value": "W/\"a1-MrLnDVh2AzpZMSZOWzlzOPA4Sx4\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:40:00 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"user\": {\n        \"_id\": \"670b1b35ce5db1fb8f254472\",\n        \"nama\": \"John Doe\",\n        \"email\": \"john@example.com\",\n        \"role\": \"PETERNAK\",\n        \"no_telp\": \"08123456789\",\n        \"alamat\": \"Jl. Peternakan No.1\"\n    }\n}"
						},
						{
							"name": "get user by id",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{base_url}}/api/user/670b1b35ce5db1fb8f254471",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"user",
										"670b1b35ce5db1fb8f254471"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Cache-Control",
									"value": "public, max-age=0, must-revalidate"
								},
								{
									"key": "Content-Length",
									"value": "28"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Date",
									"value": "Tue, 15 Oct 2024 14:09:01 GMT"
								},
								{
									"key": "Etag",
									"value": "W/\"1c-ZEVVcvtFhxKX/QUvVKqKxwGbbNA\""
								},
								{
									"key": "Server",
									"value": "Vercel"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=63072000; includeSubDomains; preload"
								},
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "X-Robots-Tag",
									"value": "noindex"
								},
								{
									"key": "X-Vercel-Cache",
									"value": "BYPASS"
								},
								{
									"key": "X-Vercel-Id",
									"value": "sin1::iad1::6c8rv-1729001340623-12ec2e9334c1"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"User not found\"\n}"
						}
					]
				},
				{
					"name": "update",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_Peternak}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"no_telp\": \"082313071343\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/user",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"user"
							]
						}
					},
					"response": [
						{
							"name": "New Request",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"role\": \"PPL\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/user",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"user"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "55"
								},
								{
									"key": "ETag",
									"value": "W/\"37-u9xbzPjqZduQOdmhmvIh8AJsNVI\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:46:10 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"You can not change email, password, or role\"\n}"
						},
						{
							"name": "update",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"no_telp\": \"082313071343\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{base_url}}/api/user",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"api",
										"user"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "155"
								},
								{
									"key": "ETag",
									"value": "W/\"9b-QaKETp8dFjMOzFA1781BjRcFdMA\""
								},
								{
									"key": "Date",
									"value": "Mon, 14 Oct 2024 16:46:42 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"User updated successfully\",\n    \"user\": {\n        \"_id\": \"670b1b35ce5db1fb8f254472\",\n        \"nama\": \"John Doe\",\n        \"no_telp\": \"082313071343\",\n        \"alamat\": \"Jl. Peternakan No.1\"\n    }\n}"
						}
					]
				},
				{
					"name": "New Request",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/user/670bec78def6a16af0af1a11",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"user",
								"670bec78def6a16af0af1a11"
							]
						}
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "base_url",
			"value": "https://farm-management-system-7hd46v5gy-althaafkas-projects.vercel.app",
			"type": "string"
		},
		{
			"key": "token_PPL",
			"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzBlOGY1NGJjNDIxNzRjNGE1MTVkOGEiLCJyb2xlIjoiUFBMIiwiaWF0IjoxNzI5MDA3NDczLCJleHAiOjE3MjkwMzYyNzN9.QwGOt_SIVjw8c3V7v-poqLpBGfA1OMHBTS9WKQKUv4o",
			"type": "string"
		},
		{
			"key": "token_Peternak",
			"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzBlOTIzMmJjNDIxNzRjNGE1MTVkYTIiLCJyb2xlIjoiUEVURVJOQUsiLCJpYXQiOjE3MjkwMTIwMzcsImV4cCI6MTcyOTA0MDgzN30.XNpx9bJNlB4S-HnFVIYc9uHCvyVO2VIdo5NuFT62znA",
			"type": "string"
		}
	]
} Farm Management System.postman_collection.json…]()


---

## **API Endpoints**

### **Auth Routes**
| Method | Endpoint             | Deskripsi                        | Authorization |
|--------|----------------------|----------------------------------|---------------|
| POST   | `/api/auth/register` | Register PPL atau PETERNAK       | opsional untuk PPL |
| POST   | `/api/auth/login`    | Login untuk PPL atau PETERNAK    | -             |

### **User Routes**
| Method | Endpoint             | Deskripsi                        | Authorization |
|--------|----------------------|----------------------------------|---------------|
| GET    | `/api/users`         | Mendapatkan daftar pengguna     | Bearer `<token>`           |
| GET    | `/api/users/:id`     | Mendapatkan detail pengguna     | Bearer `<token>` |
| PUT    | `/api/users`         | Update informasi pengguna       | User itu sendiri |
| DELETE | `/api/users/:id`     | Menghapus pengguna              | Bearer `<token>`   |

### **Kandang Routes**
| Method | Endpoint                        | Deskripsi                        | Authorization |
|--------|---------------------------------|----------------------------------|---------------|
| POST   | `/api/kandang`                  | Tambah kandang baru              | PPL |
| PUT    | `/api/kandang/:id`              | Update kandang                   | PPL |
| PUT    | `/api/kandang/:id/add-peternak` | Add peternak                     | PPL |
| PUT    | `/api/kandang/:id/remove-peternak` | Remove peternak                     | PPL |
| DELETE | `/api/kandang/:id`              | Hapus kandang                    | PPL |

### **Sapi Routes**
| Method | Endpoint                    | Deskripsi                   | Authorization |
|--------|-----------------------------|-----------------------------|---------------|
| POST   | `/api/sapi`                 | Tambah sapi baru            | Bearer `<token>` |
| GET    | `/api/sapi/:kandang_id`             | Mendapatkan detail sapi per kandang     | |
| PUT    | `/api/sapi/:id`             | Update data sapi            | Bearer `<token>` |
| DELETE | `/api/sapi/:id`             | Hapus sapi                  | Bearer `<token>` |

### **Stok Produk Routes**
| Method | Endpoint                    | Deskripsi                      | Authorization |
|--------|-----------------------------|--------------------------------|---------------|
| POST   | `/api/stok-produk`          | Tambah stok produk baru        | Bearer `<token>` |
| GET    | `/api/stok-produk/:kandang_id`      | Mendapatkan detail stok produk per kandang |  |
| PUT    | `/api/stok-produk/:id`      | Update stok produk             | Bearer `<token>` |
| DELETE | `/api/stok-produk/:id`      | Hapus stok produk              | Bearer `<token>` |

### **Produksi Susu Routes**
| Method | Endpoint                       | Deskripsi                         | Authorization |
|--------|--------------------------------|-----------------------------------|---------------|
| POST   | `/api/produksi-susu`           | Catat produksi susu               | Bearer `<token>` |
| GET    | `/api/produksi-susu/sapi/:id`  | Mendapatkan produksi susu per sapi | Bearer `<token>` |
| GET    | `/api/produksi-susu/kandang/:id` | Mendapatkan produksi susu per kandang | Bearer `<token>` |
| PUT    | `/api/produksi-susu/:id`       | Update data produksi susu         | Bearer `<token>` |
| DELETE | `/api/produksi-susu/:id`       | Hapus produksi susu               | Bearer `<token>` |


### **Laporan Harian Routes**
| Method | Endpoint                    | Deskripsi                          | Authorization |
|--------|-----------------------------|------------------------------------|---------------|
| POST   | `/api/laporan-harian`       | Tambah laporan harian baru         | PETERNAK |
| GET    | `/api/laporan-harian/:id`   | Mendapatkan detail laporan harian | Bearer `<token>` |
| PUT    | `/api/laporan-harian/:id`   | Update laporan harian              | PETERNAK |
| DELETE | `/api/laporan-harian/:id`   | Hapus laporan harian               | PETERNAK |

---

## **Cara Menjalankan Tes**
1. **Install Jest dan Supertest:**
   ```bash
   npm install --save-dev jest supertest
   ```

2. **Jalankan Tes:**
   ```bash
   npm test
   ```
