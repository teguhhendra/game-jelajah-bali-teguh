
// =====================================================
// DATA PLAYER & STATE
// =====================================================

let playerData = {
    nama: "",
    kelas: ""
};

// =====================================================
// ELEMENT SELECTORS
// =====================================================


    // Anda bisa menambah kabupaten lainnya di sini dengan pola yang sama

const scenes = document.querySelectorAll(".scene");

// Scene Container
const sceneLogin = document.getElementById("scene-login");
const sceneBriefing = document.getElementById("scene-briefing");
const briefingText = document.getElementById("briefing-text");
const sceneKabupaten = document.getElementById("scene-kabupaten");
const sceneBadges = document.getElementById("scene-badges");

// Buttons & UI
const btnMulai = document.getElementById("btn-mulai");
const btnJelajah = document.getElementById("btn-jelajah");
const btnHome = document.getElementById("btn-home");
const btnHelp = document.getElementById("btn-help");
const btnBadges = document.getElementById("btn-badges");

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const overlay = document.getElementById("overlay");
const topNav = document.getElementById("top-nav");
const gameBackground = document.getElementById("game-background");
const welcomeKabupaten = document.getElementById("welcome-kabupaten");
const kabupatenContent = document.getElementById("kabupaten-content");

// =====================================================
// CORE FUNCTIONS
// =====================================================

function showScene(sceneTarget) {
    scenes.forEach(scene => scene.classList.remove("active"));
    sceneTarget.classList.add("active");
}

function setBackground(namaFile) {
    gameBackground.style.backgroundImage = `url('assets/images/${namaFile}')`;
}

// =====================================================
// SIDEBAR LOGIC
// =====================================================

function openSidebar() {
    sidebar.classList.add("open");
    overlay.style.display = "block";
    sidebarToggle.innerHTML = "<";
}

function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
    sidebarToggle.innerHTML = ">";
}

function toggleSidebar() {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
}

// =====================================================
// NAVIGATION LOGIC
// =====================================================

function kembaliKeAwal() {
    showScene(sceneLogin);
    closeSidebar();
    setBackground("index.png");
    // Sembunyikan navigasi di halaman login
    topNav.style.display = "none";
    sidebarToggle.style.display = "none";
}

// =====================================================
// EVENT LISTENERS
// =====================================================

btnMulai.addEventListener("click", () => {
    const nama = document.getElementById("nama").value.trim();
    const kelas = document.getElementById("kelas").value.trim();

    if(nama === "" || kelas === "") {
        alert("Isi nama dan kelas terlebih dahulu.");
        return;
    }

    playerData.nama = nama;
    playerData.kelas = kelas;
    localStorage.setItem("playerData", JSON.stringify(playerData));

    // Isi teks briefing dengan simbol
    briefingText.innerHTML = `
        <div style="font-size: 1.2em; line-height: 1.8;">
            Selamat datang <strong>${playerData.nama}</strong>.<br>
            Aku akan membuatmu menjadi master penjelajah.<br><br>
            <strong>Perhatikan instruksi berikut:</strong><br>
            1. Menu navigasi berada di pojok kanan atas.<br>
            &nbsp;&nbsp;&nbsp;🏠 Tombol untuk kembali ke halaman awal.<br>
            &nbsp;&nbsp;&nbsp;❓ Tombol untuk kembali ke halaman ini.<br>
            &nbsp;&nbsp;&nbsp;🔊 Tombol untuk menyalakan/mematikan musik.<br>
            &nbsp;&nbsp;&nbsp;📋 Tombol untuk ke halaman menu.<br>
            &nbsp;&nbsp;&nbsp;⭐ Tombol untuk keluar dari permainan.<br>
            2. Di sebelah kiri ada tanda <b>></b> untuk menampilkan menu, dan tanda <b><</b> untuk menyembunyikannya. Pilih Kabupaten yang ingin kamu jelajahi.<br>
            3. Setiap Kabupaten akan berisi informasi unik tentang wilayah tersebut, kamu akan menyukainya.<br>
            4. Akan ada quiz untuk mengetahui pemahamanmu tentang kabupaten tersebut. Jika Kamu bisa menyelesaikannya, kamu akan mendapat LENCANA penakluk wisata kabupaten tersebut.
        </div>
    `;
    topNav.style.display = "flex";
    showScene(sceneBriefing);
    setBackground("briefing.png");
});

btnJelajah.addEventListener("click", () => {
    sidebarToggle.style.display = "block";
    showScene(sceneKabupaten);
    
    // Ganti background ke menu.png sesuai permintaan Anda
    setBackground("menu.png"); 

    // Tampilkan elemen Peta/Instruksi (jika ada di HTML), 
    // Sembunyikan Grid Konten
    document.getElementById('kabupaten-container').classList.add('hidden');

    openSidebar(); 
});

sidebarToggle.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

btnHome.addEventListener("click", kembaliKeAwal);
btnHelp.addEventListener("click", () => {
    showScene(sceneBriefing);
    setBackground("briefing.png");
});
btnBadges.addEventListener("click", () => {
    showScene(sceneBadges);
    setBackground("menu.png");
});

// =====================================================
// INITIALIZATION
// =====================================================

window.addEventListener("load", () => {
    const savedPlayer = localStorage.getItem("playerData");
    if(savedPlayer) {
        playerData = JSON.parse(savedPlayer);
    }

    // Default state saat aplikasi baru dibuka
    topNav.style.display = "none";
    sidebarToggle.style.display = "none";
    setBackground("index.png");
});

// ... (semua fungsi lainnya seperti showScene, openSidebar, dll) ...

// 1. Fungsi untuk merender menu atas (yang baru kita buat)
function renderMenuKabupaten(idKab) {
    const data = databaseKabupaten[idKab];
    const menuContainer = document.getElementById("menu-atas");
    
    // Keamanan jika ID Kabupaten tidak ada di database
    if (!data) {
        console.error("Data kabupaten tidak ditemukan untuk ID:", idKab);
        return;
    }

    // 1. Judul Nama Daerah
    let html = `<span id="nama-daerah" style="font-weight:bold; align-self:center; margin-right:15px;">${data.nama}</span>`;
    
    // 2. Tombol Profil
    html += `<button class="kategori-btn" onclick="tampilkanKonten('${idKab}', 'profil')">Profil</button>`;

    // 3. Loop otomatis untuk kategori (Bentang Alam, Budaya, Wisata, Kuliner, Potensi)
    const kategoriList = ['bentang-alam', 'budaya', 'wisata', 'kuliner', 'potensi'];
    
    kategoriList.forEach(kat => {
        // Cek apakah kategori ada di data
        if (data[kat]) {
            // Ubah 'bentang-alam' menjadi 'Bentang Alam' untuk tampilan tombol
            const namaTombol = kat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            html += `
            <div class="menu-dropdown">
                <button class="kategori-btn">${namaTombol} ▾</button>
                <div class="dropdown-content">
                    ${Object.keys(data[kat]).map(subKey => `
                        <button class="dropdown-item" onclick="tampilkanKonten('${idKab}', '${kat}', '${subKey}')">
                            ${subKey.split('-')[0].replace(/([A-Z])/g, ' $1')}
                        </button>
                    `).join('')}
                </div>
            </div>`;
        }
    });

    // 4. Tombol Quiz (kecuali nama, profil, dan quiz tidak masuk loop)
    // Baris baru (yang memanggil fungsi kuis kita):
    html += `<button class="kategori-btn" onclick="tampilkanQuiz('${idKab}')">Quiz</button>`;

    // Masukkan semua HTML yang sudah jadi ke dalam menu-atas
    menuContainer.innerHTML = html;
}

// 2. TAMBAHKAN FUNGSI INI DI SINI (Di bagian bawah file)
function tampilkanKonten(idKab, kategori, subMenu = null) {
    const areaInfo = document.getElementById("area-informasi");
    const areaFoto = document.getElementById("area-foto");
    const namaFoto = document.getElementById("nama-foto");
    const data = databaseKabupaten[idKab];

    if (!data) return;

    if (kategori === "profil") {
        areaInfo.innerHTML = `<h3>Profil ${data.nama}</h3><p>${data.profil}</p>`;
        // Tambahkan pengecekan agar tidak error jika fotoProfil kosong
        areaFoto.innerHTML = data.fotoProfil ? `<img src="assets/images/${data.fotoProfil}" alt="Profil">` : "";
        namaFoto.innerText = data.captionProfil || data.nama;
    } else {
        // Tambahkan pengecekan apakah kategori dan subMenu ada
        if (!data[kategori] || !data[kategori][subMenu]) return;

        const item = data[kategori][subMenu];
        const judul = subMenu.replace(/([A-Z])/g, ' $1').trim();
        
        areaInfo.innerHTML = `<h3>${judul}</h3><p>${item.teks || ""}</p>`;
        
        // Menggunakan operator ternary untuk memastikan foto ada
        areaFoto.innerHTML = item.foto ? `<img src="assets/images/${item.foto}" alt="${judul}">` : "";
        namaFoto.innerText = item.caption || ""; 
    }
}

function tampilkanQuiz(idKab) {
    const areaInfo = document.getElementById("area-informasi");
    const data = databaseKabupaten[idKab];
    
    if (!data.quiz) {
        areaInfo.innerHTML = "<p>Quiz belum tersedia untuk kabupaten ini.</p>";
        return;
    }

    let html = `<h3>Quiz ${data.nama}</h3>`;
    data.quiz.forEach((q, i) => {
        html += `
        <div class="quiz-box" style="margin-bottom: 20px;">
            <p><strong>${i+1}. ${q.soal}</strong></p>
            ${q.pilihan.map((pil, idx) => `
                <label style="display:block; margin: 5px 0;">
                    <input type="radio" name="soal-${i}" value="${idx}"> ${pil}
                </label>
            `).join('')}
        </div>`;
    });

    html += `<button class="kategori-btn" onclick="hitungSkor('${idKab}')">KIRIM JAWABAN</button>`;
    areaInfo.innerHTML = html;
}

function hitungSkor(idKab) {
    const data = databaseKabupaten[idKab];
    let skor = 0;

    data.quiz.forEach((q, i) => {
        const pilihan = document.querySelector(`input[name="soal-${i}"]:checked`);
        if (pilihan && parseInt(pilihan.value) === q.kunci) {
            skor++;
        }
    });

    // Ambil elemen overlay dan elemen di dalamnya
    const overlay = document.getElementById('quiz-result-overlay');
    const resultTitle = document.getElementById('result-title');
    const resultIcon = document.getElementById('result-icon');
    const resultMessage = document.getElementById('result-message');
    
    // Objek pemetaan ikon untuk hasil kuis
    const ikonBadge = {
        "badung": "🗡️",
        "bangli": "🌳",
        "buleleng": "🦁",
        "denpasar": "🏢",
        "gianyar": "🎨",
        "jembrana": "🐂",
        "karangasem": "🌋",
        "klungkung": "🏰",
        "tabanan": "🌾"
    };

    // Tampilkan overlay
    overlay.style.display = 'flex';
    
    if (skor > 7) {
        resultTitle.innerText = "SELAMAT LULUS!";
        resultIcon.innerText = ikonBadge[idKab] || "⭐";
        resultMessage.innerText = `Skor Anda: ${skor}/10. Lencana ${data.nama} telah ditambahkan ke koleksimu!`;
        beriLencana(idKab); // Fungsi ini akan mengupdate tabel badge
    } else {
        resultTitle.innerText = "COBA LAGI!";
        resultIcon.innerText = "❌";
        resultMessage.innerText = `Skor Anda: ${skor}/10. Belum lulus, ayo pelajari kembali materinya!`;
    }
}

function tutupResult() {
    // 1. Sembunyikan Overlay
    document.getElementById('quiz-result-overlay').style.display = 'none';

    // 2. Hapus/Sembunyikan konten Kuis yang sedang tampil
    // Asumsi: Konten kuis Anda berada di dalam area-informasi
    const areaInformasi = document.getElementById('area-informasi');
    areaInformasi.innerHTML = "Pilih menu di atas untuk menampilkan informasi."; 

    // 3. Reset area foto agar tidak menampilkan gambar kuis yang nyangkut
    document.getElementById('area-foto').innerHTML = '<span>AREA FOTO</span>';
    document.getElementById('nama-foto').innerText = 'NAMA FOTO';

    // 4. Pastikan UI kembali ke kondisi awal (opsional)
    // Jika Anda ingin user memilih kabupaten lagi dari awal:
    // document.getElementById('kabupaten-container').classList.add('hidden');
    // document.getElementById('welcome-message').style.display = 'block';
}

function beriLencana(idKab) {
    let lencanaData = JSON.parse(localStorage.getItem('lencanaSiswa')) || {};
    lencanaData[idKab] = true;
    localStorage.setItem('lencanaSiswa', JSON.stringify(lencanaData));
    updateMenuBadge();
}

document.querySelectorAll('.kabupaten-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const namaKab = e.target.innerText.toLowerCase();
        
        // 1. Sembunyikan Peta, Munculkan Grid
        document.getElementById('peta-bali-container').classList.add('hidden');
        document.getElementById('kabupaten-container').classList.remove('hidden');
        
        // 2. Render isi menu sesuai kabupaten yang diklik
        renderMenuKabupaten(namaKab);
        
        // 3. Tutup sidebar agar tampilan lebih luas
        closeSidebar();
    });
});

// Memuat lencana saat aplikasi pertama kali dibuka
window.onload = function() {
    updateMenuBadge();
};

// Tambahkan fungsi ini di game-engine.js untuk update tabel Badge
function updateMenuBadge() {
    const tbody = document.querySelector("#scene-badges tbody");
    if (!tbody) return;

    // Ambil data lencana dari localStorage
    const lencanaData = JSON.parse(localStorage.getItem('lencanaSiswa')) || {};
    
    // Objek pemetaan ikon untuk setiap kabupaten
    const ikonBadge = {
        "badung": "🗡️",
        "bangli": "🌳",
        "buleleng": "🦁",
        "denpasar": "🏢",
        "gianyar": "🎨",
        "jembrana": "🐂",
        "karangasem": "🌋",
        "klungkung": "🏰",
        "tabanan": "🌾"
    };
    
    // Kita buat daftar kabupaten yang ada di database
    const daftarKab = Object.keys(databaseKabupaten);
    
    tbody.innerHTML = ""; // Bersihkan tabel
    
    daftarKab.forEach(idKab => {
        const sudahLulus = lencanaData[idKab];
        const namaKab = databaseKabupaten[idKab].nama;
        
        // Ambil ikon dari objek ikonBadge, jika tidak ada gunakan bintang sebagai default
        const ikon = ikonBadge[idKab] || "⭐"; 
        
        tbody.innerHTML += `
            <tr>
                <td>${namaKab}</td>
                <td>${sudahLulus ? "LULUS" : "-"}</td>
                <td style="font-size: 24px;">${sudahLulus ? ikon : "🔒"}</td>
            </tr>
        `;
    });
}