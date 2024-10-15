
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

**[https://farm-management-system-nu1idyrw6-althaafkas-projects.vercel.app](https://farm-management-system-nu1idyrw6-althaafkas-projects.vercel.app)**

---

## **API Documentation dengan Postman**
Terdapat dokumentasi API menggunakan Postman. Anda bisa mengaksesnya dengan link berikut:

**[Postman Documentation](https://api.postman.com/collections/29126938-8be2997b-c11a-4df1-aed4-e1be8fa437ec?access_key=PMAT-01JA8B2ZZDY5175HV93SJND0W1)**

---

## **API Endpoints**

### **Auth Routes**
| Method | Endpoint             | Deskripsi                        | Authorization |
|--------|----------------------|----------------------------------|---------------|
| POST   | `/api/auth/register` | Register PPL atau PETERNAK       | Bearer `<token>` (opsional untuk PPL) |
| POST   | `/api/auth/login`    | Login untuk PPL atau PETERNAK    | -             |

### **User Routes**
| Method | Endpoint             | Deskripsi                        | Authorization |
|--------|----------------------|----------------------------------|---------------|
| GET    | `/api/users`         | Mendapatkan daftar pengguna     | PPL           |
| GET    | `/api/users/:id`     | Mendapatkan detail pengguna     | PPL/User itu sendiri |
| PUT    | `/api/users/:id`     | Update informasi pengguna       | User itu sendiri |
| DELETE | `/api/users/:id`     | Menghapus pengguna              | PPL           |

### **Kandang Routes**
| Method | Endpoint                        | Deskripsi                        | Authorization |
|--------|---------------------------------|----------------------------------|---------------|
| POST   | `/api/kandang`                  | Tambah kandang baru              | Bearer `<token>` |
| GET    | `/api/kandang/:id`              | Mendapatkan detail kandang       | Bearer `<token>` |
| PUT    | `/api/kandang/:id`              | Update kandang                   | Bearer `<token>` |
| DELETE | `/api/kandang/:id`              | Hapus kandang                    | Bearer `<token>` |

### **Produksi Susu Routes**
| Method | Endpoint                       | Deskripsi                         | Authorization |
|--------|--------------------------------|-----------------------------------|---------------|
| POST   | `/api/produksi-susu`           | Catat produksi susu               | Bearer `<token>` |
| GET    | `/api/produksi-susu/sapi/:id`  | Mendapatkan produksi susu per sapi | Bearer `<token>` |
| GET    | `/api/produksi-susu/kandang/:id` | Mendapatkan produksi susu per kandang | Bearer `<token>` |
| PUT    | `/api/produksi-susu/:id`       | Update data produksi susu         | Bearer `<token>` |
| DELETE | `/api/produksi-susu/:id`       | Hapus produksi susu               | Bearer `<token>` |

### **Sapi Routes**
| Method | Endpoint                    | Deskripsi                   | Authorization |
|--------|-----------------------------|-----------------------------|---------------|
| POST   | `/api/sapi`                 | Tambah sapi baru            | Bearer `<token>` |
| GET    | `/api/sapi/:id`             | Mendapatkan detail sapi     | Bearer `<token>` |
| PUT    | `/api/sapi/:id`             | Update data sapi            | Bearer `<token>` |
| DELETE | `/api/sapi/:id`             | Hapus sapi                  | Bearer `<token>` |

### **Stok Produk Routes**
| Method | Endpoint                    | Deskripsi                      | Authorization |
|--------|-----------------------------|--------------------------------|---------------|
| POST   | `/api/stok-produk`          | Tambah stok produk baru        | Bearer `<token>` |
| GET    | `/api/stok-produk/:id`      | Mendapatkan detail stok produk | Bearer `<token>` |
| PUT    | `/api/stok-produk/:id`      | Update stok produk             | Bearer `<token>` |
| DELETE | `/api/stok-produk/:id`      | Hapus stok produk              | Bearer `<token>` |

### **Laporan Harian Routes**
| Method | Endpoint                    | Deskripsi                          | Authorization |
|--------|-----------------------------|------------------------------------|---------------|
| POST   | `/api/laporan-harian`       | Tambah laporan harian baru         | Bearer `<token>` |
| GET    | `/api/laporan-harian/:id`   | Mendapatkan detail laporan harian | Bearer `<token>` |
| PUT    | `/api/laporan-harian/:id`   | Update laporan harian              | Bearer `<token>` |
| DELETE | `/api/laporan-harian/:id`   | Hapus laporan harian               | Bearer `<token>` |

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
