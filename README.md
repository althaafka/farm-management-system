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
[Farm Management System.postman_collection.json](https://github.com/user-attachments/files/17382288/Farm.Management.System.postman_collection.json)

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
