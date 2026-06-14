// --- SEARCH EXPAND LOGIC ---
const searchPill = document.getElementById('search-pill');
const searchInput = document.getElementById('search-input');

if (searchPill) {
    searchPill.addEventListener('click', () => {
        searchPill.classList.add('active');
        searchInput.focus();
    });
}

// Close search when clicking outside
document.addEventListener('click', (e) => {
    if (searchPill && !searchPill.contains(e.target)) {
        searchPill.classList.remove('active');
        searchInput.value = ''; // clear input when collapsed
    }
});

// --- NOTIFICATION DROPDOWN LOGIC ---
const notifBtn = document.getElementById('notif-btn');
const notifDropdown = document.getElementById('notif-dropdown');

if (notifBtn) {
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent document click from closing immediately
        notifBtn.classList.toggle('active');
    });
}

if (notifDropdown) {
    notifDropdown.addEventListener('click', (e) => {
        e.stopPropagation(); // keep dropdown open when clicking inside it
    });
}

// --- USER DROPDOWN LOGIC ---
const userBtn = document.getElementById('user-btn');
const userDropdown = document.getElementById('user-dropdown');

if (userBtn) {
    userBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        userBtn.classList.toggle('active');
        // Close notification dropdown if it's open
        if (notifBtn && notifBtn.classList.contains('active')) {
            notifBtn.classList.remove('active');
        }
    });
}

if (userDropdown) {
    userDropdown.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });
}

// Modify the existing close click outside listener to also handle user dropdown
document.addEventListener('click', (e) => {
    // ... search logic (already handled above) ...

    if (notifBtn && notifBtn.classList.contains('active')) {
        notifBtn.classList.remove('active');
    }
    
    if (userBtn && userBtn.classList.contains('active')) {
        userBtn.classList.remove('active');
    }
});

// Mark all as read in dropdown
const markAllBtnNav = document.getElementById('notif-mark-all');
const notifDot = document.getElementById('notif-dot');
const notifItems = document.querySelectorAll('.notif-item');

if (markAllBtnNav) {
    markAllBtnNav.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        
        notifItems.forEach(item => {
            item.classList.remove('unread');
        });
        
        if (notifDot) {
            notifDot.style.display = 'none';
        }
    });
}
