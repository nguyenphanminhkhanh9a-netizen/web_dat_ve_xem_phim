const translations = {
    vi: {
        // --- SIDEBAR PROFILE ---
        "menu_info": "Thông tin tài khoản",
        "menu_history": "Lịch sử đặt vé",
        "menu_offers": "Ưu đãi của tôi",
        "menu_settings": "Cài đặt",
        
        // --- THÔNG TIN TÀI KHOẢN ---
        "info_title": "Thông tin tài khoản",
        "info_desc": "Quản lý thông tin cá nhân và bảo mật",
        "info_avatar_change": "Đổi ảnh",
        "info_label_fullname": "Họ và tên",
        "info_label_email": "Email",
        "info_label_phone": "Số điện thoại",
        "info_btn_save": "Lưu thay đổi",
        
        // --- LỊCH SỬ ĐẶT VÉ ---
        "history_title": "Lịch sử đặt vé",
        "history_desc": "Quản lý các vé xem phim bạn đã đặt",
        "history_filter_all": "Tất cả",
        "history_filter_upcoming": "Sắp chiếu",
        "history_filter_watched": "Đã xem",
        
        // --- ƯU ĐÃI CỦA TÔI ---
        "offers_title": "Ưu đãi của tôi",
        "offers_desc": "Các mã giảm giá và thẻ quà tặng bạn đang có",
        "offer_use_btn": "Dùng ngay",
        
        // --- CÀI ĐẶT ---
        "settings_title": "Cài đặt",
        "settings_desc": "Quản lý tùy chọn cá nhân và bảo mật tài khoản",
        "settings_notif_title": "Quản lý Thông báo",
        "settings_notif_email": "Email xác nhận đặt vé",
        "settings_notif_email_desc": "Nhận email biên lai ngay sau khi thanh toán thành công.",
        "settings_notif_reminder": "Nhắc nhở giờ chiếu",
        "settings_notif_reminder_desc": "Nhận thông báo trước giờ chiếu 2 tiếng để không lỡ phim.",
        "settings_notif_promo": "Tin tức & Khuyến mãi",
        "settings_notif_promo_desc": "Nhận thông tin về các chương trình ưu đãi và bom tấn mới.",
        "settings_sec_title": "Bảo mật & Đăng nhập",
        "settings_sec_pwd": "Mật khẩu",
        "settings_sec_pwd_btn": "Đổi mật khẩu",
        "settings_sec_devices": "Thiết bị đang đăng nhập",
        "settings_sec_logout_btn": "Đăng xuất",
        "settings_pay_title": "Phương thức Thanh toán",
        "settings_pay_remove": "Xóa",
        "settings_pay_unlink": "Hủy liên kết",
        "settings_pay_add": "Thêm phương thức thanh toán",
        "settings_lang_title": "Tùy chọn Ngôn ngữ",
        "settings_lang_display": "Ngôn ngữ hiển thị",
        "settings_lang_display_desc": "Chọn ngôn ngữ ưu tiên cho giao diện trang web",

        // --- CỘNG ĐỒNG / STATUS ---
        "status_current_device": "(Thiết bị hiện tại)",
        "status_linked": "Đã liên kết"
    },
    en: {
        // --- SIDEBAR PROFILE ---
        "menu_info": "Account Info",
        "menu_history": "Booking History",
        "menu_offers": "My Offers",
        "menu_settings": "Settings",
        
        // --- THÔNG TIN TÀI KHOẢN ---
        "info_title": "Account Information",
        "info_desc": "Manage your personal information and security",
        "info_avatar_change": "Change Photo",
        "info_label_fullname": "Full Name",
        "info_label_email": "Email Address",
        "info_label_phone": "Phone Number",
        "info_btn_save": "Save Changes",
        
        // --- LỊCH SỬ ĐẶT VÉ ---
        "history_title": "Booking History",
        "history_desc": "Manage the movie tickets you have booked",
        "history_filter_all": "All",
        "history_filter_upcoming": "Upcoming",
        "history_filter_watched": "Watched",
        
        // --- ƯU ĐÃI CỦA TÔI ---
        "offers_title": "My Offers",
        "offers_desc": "Your active discount codes and gift cards",
        "offer_use_btn": "Use Now",
        
        // --- CÀI ĐẶT ---
        "settings_title": "Settings",
        "settings_desc": "Manage personal preferences and account security",
        "settings_notif_title": "Notification Management",
        "settings_notif_email": "Booking Confirmation Email",
        "settings_notif_email_desc": "Receive receipt email immediately after successful payment.",
        "settings_notif_reminder": "Showtime Reminder",
        "settings_notif_reminder_desc": "Get notified 2 hours before showtime.",
        "settings_notif_promo": "News & Promotions",
        "settings_notif_promo_desc": "Receive info about special offers and new blockbusters.",
        "settings_sec_title": "Security & Login",
        "settings_sec_pwd": "Password",
        "settings_sec_pwd_btn": "Change Password",
        "settings_sec_devices": "Logged-in Devices",
        "settings_sec_logout_btn": "Log out",
        "settings_pay_title": "Payment Methods",
        "settings_pay_remove": "Remove",
        "settings_pay_unlink": "Unlink",
        "settings_pay_add": "Add Payment Method",
        "settings_lang_title": "Language Preferences",
        "settings_lang_display": "Display Language",
        "settings_lang_display_desc": "Choose your preferred language for the website interface",

        // --- CỘNG ĐỒNG / STATUS ---
        "status_current_device": "(Current Device)",
        "status_linked": "Linked"
    }
};

window.translations = translations;
window.setLanguage = function(lang) {
    if (!translations[lang]) return;
    
    // Save preference
    localStorage.setItem('userLanguage', lang);
    document.documentElement.lang = lang;

    // Scan DOM for i18n tags
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // innerHTML allows icons to stay if we use spans properly, but typically we want text.
            // Better to wrap text in <span> for icons. We'll use textContent or innerHTML based on tagging.
        }
    });
};

// Initialize Language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('userLanguage') || 'vi';
    
    // Apply lang globally
    window.setLanguage(savedLang);

    // Sync dropdown if exists
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => {
            window.setLanguage(e.target.value);
        });
    }
});
