1. Autentikasi dan Otorisasi
Endpoint: /api/auth/login
Method: POST
Description: Untuk login pengguna dan menghasilkan token autentikasi.
<img width="1702" height="189" alt="Screenshot 2025-11-03 235906" src="https://github.com/user-attachments/assets/28d14c63-08cf-4be0-91c7-fbf59df7fdf1" />

2. Pengelolaan Data Pengguna
- Menambah Pengguna
Endpoint: /api/users
Method: POST
Description: Untuk menambahkan data pengguna baru.
<img width="584" height="327" alt="Screenshot 2025-11-04 000025" src="https://github.com/user-attachments/assets/40fcc06d-7ca8-47cb-8d24-b4e88384b8f4" />

- Mengubah Data Pengguna
Endpoint: /api/users/{id}
Method: PUT
Description: Untuk mengubah data pengguna.
<img width="584" height="331" alt="Screenshot 2025-11-04 000155" src="https://github.com/user-attachments/assets/f6a89de7-d73a-4814-88d4-e78155d746cf" />

- Mengambil Data Pengguna
Endpoint: /api/users/{id}
Method: GET
Description: Mengambil data pengguna berdasarkan ID.
<img width="557" height="286" alt="Screenshot 2025-11-04 000445" src="https://github.com/user-attachments/assets/5c3f4fc7-57e2-4e2a-a0cb-1b6770b328d8" />

3. Pencatatan Presensi
- Melakukan Presensi
Endpoint: /api/attendance
Method: POST
Description: Untuk mencatat kehadiran pengguna pada hari tersebut.
<img width="595" height="309" alt="Screenshot 2025-11-04 000608" src="https://github.com/user-attachments/assets/f95b381a-72c7-4acf-84fd-6a89b6beece7" />

- Melihat Riwayat Presensi Pengguna
Endpoint: /api/attendance/history/{user_id}
Method: GET
Description: Mengambil riwayat presensi pengguna berdasarkan ID pengguna.
<img width="671" height="362" alt="Screenshot 2025-11-04 000652" src="https://github.com/user-attachments/assets/d82a0de6-4829-4209-9adb-49e885a803b6" />

4. Analisis Kehadiran
- Melihat Rekap Kehadiran Bulanan
Endpoint: /api/attendance/summary/{user_id}
Method: GET
Description: Menampilkan rekap kehadiran bulanan pengguna.
<img width="1260" height="739" alt="Screenshot 2025-11-04 000754" src="https://github.com/user-attachments/assets/4863979e-3c40-4509-a4b5-f3b7ef473aa7" />

- Analisis Tingkat Kehadiran Berdasarkan Parameter Tertentu
Manajemen ingin mengetahui persentase kehadiran setiap pengguna berdasarkan parameter yang lebih spesifik, misalnya per periode tertentu. Manajemen juga ingin membandingkan tingkat kehadiran antar-kelompok, misalnya berdasarkan kelas atau jabatan, guna mengidentifikasi tren yang mungkin menunjukkan potensi masalah kedisiplinan.
Endpoint: /api/attendance/analysis
Method: POST
Description: Melakukan analisis tingkat kehadiran pengguna berdasarkan periode waktu dan kategori tertentu.
<img width="712" height="282" alt="Screenshot 2025-11-04 000826" src="https://github.com/user-attachments/assets/1d202c27-059f-4224-87d0-ebc2cd4db61f" />
