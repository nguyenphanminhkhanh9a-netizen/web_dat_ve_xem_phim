# Cấu trúc thư mục dự án 3HD2K Cinema

Dưới đây là sơ đồ tổ chức file và thư mục của dự án Frontend 3HD2K. Cấu trúc này được thiết kế để dễ dàng mở rộng và bảo trì.

```text
3HD2K_Fixed_Layout/
│
├── assets/                     # Nơi chứa toàn bộ tài nguyên tĩnh dùng chung
│   ├── css/                    # Các file giao diện (Stylesheets)
│   │   ├── cinemas.css         # Style riêng cho trang Cụm rạp
│   │   ├── dang_nhap.css       # Style gộp cho trang Đăng nhập / Đăng ký
│   │   ├── home.css            # Style riêng cho Trang chủ
│   │   ├── main.css            # Style cốt lõi (Navbar, Footer, Reset) dùng ở mọi trang
│   │   ├── movie-detail.css    # Style riêng cho trang Chi tiết phim
│   │   ├── movies.css          # Style riêng cho trang Danh sách phim
│   │   └── notifications.css   # Style riêng cho trang Quản lý thông báo
│   │
│   ├── images/                 # Chứa tất cả hình ảnh (logo, banner, poster phim...)
│   │
│   └── js/                     # Các file xử lý logic (Scripts)
│       ├── cinemas.js          # Logic trang Cụm rạp
│       ├── data.js             # File chứa dữ liệu giả lập (Mock data) về Phim và Rạp
│       ├── home.js             # Logic Trang chủ
│       ├── main.js             # Logic cốt lõi (Auth, Dropdown Navbar) chạy trên mọi trang
│       ├── movie-detail.js     # Logic trang Chi tiết phim
│       ├── movies.js           # Logic trang Danh sách phim
│       └── notifications.js    # Logic trang Quản lý thông báo
│
├── pages/                      # Nơi chứa các trang phụ trợ của hệ thống
│   ├── Dang_Nhap/              # Module xác thực tài khoản
│   │   ├── login.html          # Trang Đăng nhập
│   │   └── register.html       # Trang Đăng ký
│   │
│   ├── cinemas.html            # Giao diện Hệ thống Rạp
│   ├── movie-detail.html       # Giao diện Chi tiết một bộ phim
│   ├── movies.html             # Giao diện Danh sách tất cả các phim
│   └── notifications.html      # Giao diện Quản lý thông báo toàn màn hình
│
├── index.html                  # TRANG CHỦ - Điểm bắt đầu của ứng dụng
└── Cau_truc_thu_muc.md         # File tài liệu giải thích cấu trúc (chính là file này)
```

### Giải thích nguyên tắc liên kết (Linking Rules)
1. **Từ `index.html`:** Nối đến tài nguyên bằng đường dẫn `assets/...` và nối trang bằng `pages/...`
2. **Từ các trang nằm trong `pages/` (ví dụ `movies.html`):** Phải lùi lại 1 cấp bằng cách thêm `../`. Ví dụ: `../assets/...` hoặc `../index.html`.
3. **Từ các trang nằm trong `pages/Dang_Nhap/`:** Phải lùi lại 2 cấp bằng cách thêm `../../`. Ví dụ: `../../assets/...` hoặc `../../index.html`.
