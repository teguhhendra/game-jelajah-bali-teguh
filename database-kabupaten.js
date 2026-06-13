/**
 * DATABASE-KABUPATEN.JS
 * Data minimal agar tombol Sidebar berfungsi.
 */

const databaseKabupaten = {
    "badung": {
        nama: "Kabupaten Badung",
        profil: "Kabupaten Badung terletak di selatan Pulau Bali dengan ibu kota Mangupura. Wilayah ini merupakan pusat pariwisata internasional dengan sejarah panjang Kerajaan Badung yang dikenal melalui peristiwa heroik Puputan Badung 1906.",
        fotoProfil: "badung-profil.png",
        captionProfil: "Kantor Pemerintahan Kabupaten Badung",

        "bentang-alam": { 
            "Pantai Selatan": { teks: "Kawasan Kuta, Jimbaran, dan Nusa Dua yang menjadi pusat pariwisata dunia.", foto: "badung-pantai-kuta.png", caption: "Keindahan Pantai di Badung Selatan" }, 
            "Tebing Uluwatu": { teks: "Tebing kapur tinggi menghadap Samudra Hindia, pusat wisata budaya dan religi.", foto: "badung-uluwatu.png", caption: "Tebing Uluwatu yang Megah" }, 
            "Pegunungan Petang": { teks: "Wilayah utara yang berhawa sejuk, sentra pertanian dan perkebunan hortikultura.", foto: "badung-petang.png", caption: "Perkebunan di Petang" } 
        },
        "budaya": { 
            "Tradisi Mekotek": { teks: "Tradisi unik di Desa Munggu menggunakan tongkat kayu untuk memohon keselamatan.", foto: "badung-mekotek.png", caption: "Tradisi Mekotek di Desa Munggu" }, 
            "Tradisi Nguerebeg": { teks: "Arak-arakan sakral untuk menetralisir kekuatan negatif di Kesiman.", foto: "badung-nguerebeg.png", caption: "Arak-arakan Nguerebeg" }, 
            "Tari Baris Gede": { teks: "Tari sakral khas Desa Munggu sebagai simbol penghormatan kepada leluhur.", foto: "badung-tari-baris.png", caption: "Tari Baris Gede Munggu" } 
        },
        "wisata": { 
            "Wisata Alam": { teks: "Pantai Kuta dan Pantai Pandawa.", foto: "badung-pandawa.png", caption: "Pantai Pandawa" }, 
            "Wisata Budaya": { teks: "Patung Garuda Wisnu Kencana (GWK).", foto: "badung-gwk.png", caption: "Patung GWK" }, 
            "Wisata Religi": { teks: "Pura Luhur Uluwatu dan Pura Taman Ayun (UNESCO).", foto: "badung-uluwatu-pura.png", caption: "Pura Luhur Uluwatu" } 
        },
        "kuliner": { 
            "Ayam Betutu Mengwi": { teks: "Ayam dengan bumbu lengkap yang dimasak perlahan.", foto: "badung-betutu.png", caption: "Ayam Betutu Mengwi" }, 
            "Sate Lilit": { teks: "Daging cincang rempah yang dililitkan pada batang serai.", foto: "badung-sate-lilit.png", caption: "Sate Lilit Khas Bali" }, 
            "Rujak Bulung": { teks: "Rumput laut segar dengan bumbu rujak khas Bali.", foto: "badung-rujak.png", caption: "Rujak Bulung Segar" } 
        },
        "potensi": { 
            "Ekonomi Kreatif": { teks: "Pengembangan kuliner dan produk budaya.", foto: "badung-ekonomi.png", caption: "Industri Kreatif Badung" }, 
            "Agrowisata": { teks: "Pemanfaatan lahan pertanian di Petang.", foto: "badung-agrowisata.png", caption: "Agrowisata Petang" }, 
            "Pariwisata": { teks: "Wisata religi Uluwatu dan edukasi sejarah.", foto: "badung-pariwisata.png", caption: "Pariwisata Internasional" } 
        },
    "quiz": [
        { soal: "Ibu kota Kabupaten Badung adalah ....", pilihan: ["Denpasar", "Singaraja", "Mangupura", "Gianyar"], kunci: 2 },
        { soal: "Tradisi Mekotek dilaksanakan di Desa ....", pilihan: ["Munggu", "Petang", "Jimbaran", "Kuta"], kunci: 0 },
        { soal: "Salah satu kuliner khas Kabupaten Badung adalah ....", pilihan: ["Siobak Singaraja", "Ayam Betutu Mengwi", "Blayag", "Sudang Lepet"], kunci: 1 },
        { soal: "Pantai Kuta memiliki peran penting bagi masyarakat Badung karena ....", pilihan: ["pusat pertambangan", "sumber hasil hutan", "mendukung pariwisata", "pusat industri berat"], kunci: 2 },
        { soal: "Pura Luhur Uluwatu menjadi tujuan wisata religi karena ....", pilihan: ["berada di tengah kota", "salah satu pura penting", "memiliki pusat belanja", "tempat olahraga"], kunci: 1 },
        { soal: "Tradisi Mekotek mencerminkan nilai ....", pilihan: ["persatuan", "persaingan ekonomi", "perdagangan", "teknologi modern"], kunci: 0 },
        { soal: "Objek yang tepat untuk mengenalkan budaya khas Badung adalah ....", pilihan: ["Tradisi Mekotek", "Danau Batur", "Tari Kecak Ubud", "Pantai Lovina"], kunci: 0 },
        { soal: "Untuk meningkatkan pendapatan, kuliner Badung dapat dikembangkan melalui ....", pilihan: ["pengurangan produksi", "promosi ke wisatawan", "penutupan usaha", "pembatasan kunjungan"], kunci: 1 },
        { soal: "Kesimpulan hubungan bentang alam Badung dengan mata pencaharian adalah ....", pilihan: ["tidak memengaruhi", "dipengaruhi kondisi wilayah", "hanya bidang pariwisata", "hanya pertanian"], kunci: 1 },
        { soal: "Jika Tradisi Mekotek tidak dilaksanakan, dampak yang mungkin terjadi adalah ....", pilihan: ["budaya semakin dikenal", "identitas budaya berkurang", "pantai bertambah", "pertanian meningkat"], kunci: 1 }
    ]
},

    "bangli": {
    nama: "Kabupaten Bangli",
    profil: "Kabupaten Bangli merupakan satu-satunya kabupaten di Bali yang tidak memiliki wilayah pantai. Terletak di dataran tinggi, Bangli berkembang sebagai pusat pertanian, perkebunan, dan pelestarian budaya Bali Aga yang terjaga sejak masa kerajaan.",
    fotoProfil: "bangli-profil.png",
    captionProfil: "Pemandangan Kawasan Kaldera Kintamani",

    "bentang-alam": { 
        "Gunung Batur": { teks: "Gunung berapi aktif yang menjadi ikon Bangli, dengan tanah vulkanik subur yang mendukung pertanian.", foto: "bangli-gunung-batur.png", caption: "Gunung Batur di pagi hari" }, 
        "Danau Batur": { teks: "Danau terbesar di Bali yang menjadi sumber air penting bagi pertanian dan perikanan air tawar.", foto: "bangli-danau-batur.png", caption: "Keindahan Danau Batur" }, 
        "Kaldera Kintamani": { teks: "Salah satu kaldera vulkanik terbesar di dunia, sentra perkebunan jeruk dan kopi.", foto: "bangli-kintamani.png", caption: "Kebun Jeruk Kintamani" } 
    },
    "budaya": { 
        "Tradisi Ngusaba Kadasa": { teks: "Upacara syukur atas hasil bumi dan kesejahteraan masyarakat di Desa Adat Batur.", foto: "bangli-ngusaba.png", caption: "Upacara Ngusaba Kadasa" }, 
        "Desa Penglipuran": { teks: "Desa yang mempertahankan tata ruang tradisional Bali dengan kebersihan luar biasa.", foto: "bangli-penglipuran.png", caption: "Suasana Desa Penglipuran" }, 
        "Desa Trunyan": { teks: "Desa Bali Aga dengan tradisi pemakaman unik di bawah pohon Taru Menyan.", foto: "bangli-trunyan.png", caption: "Area pemakaman Desa Trunyan" } 
    },
    "wisata": { 
        "Wisata Alam": { teks: "Kawasan Gunung dan Danau Batur dengan udara sejuk pegunungan.", foto: "bangli-wisata-alam.png", caption: "Spot Wisata Kintamani" }, 
        "Wisata Religi": { teks: "Pura Ulun Danu Batur dan Pura Kehen yang memiliki arsitektur kuno dan nilai sejarah.", foto: "bangli-pura-kehen.png", caption: "Pura Kehen" } 
    },
    "kuliner": { 
        "Mujair Nyat-Nyat": { teks: "Ikan mujair dari Danau Batur dimasak dengan bumbu Bali hingga meresap.", foto: "bangli-mujair.png", caption: "Mujair Nyat-nyat" }, 
        "Jeruk Kintamani": { teks: "Jeruk dengan rasa manis segar yang telah diakui secara geografis.", foto: "bangli-jeruk.png", caption: "Jeruk Kintamani" }, 
        "Kopi Kintamani": { teks: "Kopi dengan cita rasa ringan dan aroma buah yang khas.", foto: "bangli-kopi.png", caption: "Kopi Kintamani" } 
    },
    "potensi": { 
        "Wisata Geopark": { teks: "Pengembangan wisata berbasis geopark Gunung dan Danau Batur.", foto: "bangli-geopark.png", caption: "Kawasan UNESCO Global Geopark" }, 
        "Wisata Budaya": { teks: "Pengembangan edukasi budaya di Desa Penglipuran dan Trunyan.", foto: "bangli-budaya.png", caption: "Edukasi Budaya Bali Aga" }, 
        "Industri Olahan": { teks: "Pengembangan produk olahan jeruk dan kopi untuk pasar internasional.", foto: "bangli-industri.png", caption: "Produk Unggulan Bangli" } 
    },
    "quiz": [
        { soal: "Apa ibu kota Kabupaten Bangli?", pilihan: ["Gianyar", "Kintamani", "Bangli", "Klungkung"], kunci: 2 },
        { soal: "Danau terbesar di Bali yang berada di Kabupaten Bangli adalah ....", pilihan: ["Danau Buyan", "Danau Beratan", "Danau Tamblingan", "Danau Batur"], kunci: 3 },
        { soal: "Salah satu makanan khas Kabupaten Bangli adalah ....", pilihan: ["Mujair Nyat-Nyat", "Siobak", "Blayag", "Rujak Bulung"], kunci: 0 },
        { soal: "Gunung Batur memberikan manfaat bagi masyarakat karena ....", pilihan: ["menghasilkan garam", "menyediakan tanah subur", "pusat industri", "menjadi pelabuhan"], kunci: 1 },
        { soal: "Desa Penglipuran terkenal karena ....", pilihan: ["pelabuhan besar", "pusat perdagangan", "tata ruang tradisional dan kebersihan", "bandara internasional"], kunci: 2 },
        { soal: "Danau Batur penting bagi masyarakat karena ....", pilihan: ["sumber minyak bumi", "sumber air dan perikanan", "pertambangan emas", "kawasan industri"], kunci: 1 },
        { soal: "Tempat yang paling tepat untuk memperkenalkan masyarakat Bali Aga adalah ....", pilihan: ["Pantai Kuta", "Desa Trunyan", "Tanah Lot", "Lovina"], kunci: 1 },
        { soal: "Produk yang dapat dipromosikan sebagai oleh-oleh khas Bangli adalah ....", pilihan: ["Jeruk Kintamani", "Garam Kusamba", "Siobak Singaraja", "Rujak Bulung"], kunci: 0 },
        { soal: "Kesimpulan hubungan bentang alam dengan mata pencaharian di Bangli adalah ....", pilihan: ["dipengaruhi kondisi alam", "semua pedagang", "hanya wisata", "tidak berpengaruh"], kunci: 0 },
        { soal: "Mengapa Bangli memiliki potensi besar untuk wisata edukasi?", pilihan: ["Banyak mall", "Memiliki gunung, danau, dan budaya unik", "Pelabuhan besar", "Seluruhnya pantai"], kunci: 1 }
    ]
},

    "buleleng": {
        nama: "Kabupaten Buleleng",
        profil: `Kabupaten Buleleng terletak di bagian utara Pulau Bali dan memiliki ibu kota di Singaraja. Nama "Buleleng" berasal dari kisah Kerajaan Buleleng yang dipimpin oleh Ki Barak Panji Sakti pada abad ke-17. 
                Pada masa lalu, wilayah ini dikenal sebagai Den Bukit karena berada di sebelah utara pegunungan Bali. Berkat letaknya yang strategis di pesisir utara, Buleleng berkembang menjadi pusat perdagangan dan pelabuhan penting di Bali. 
                Sebelum Denpasar berkembang menjadi pusat pemerintahan dan ekonomi, Singaraja pernah menjadi pusat administrasi utama Bali pada masa kolonial Belanda.

                <b>Fakta Unik:</b>
                1. Kabupaten terluas di Provinsi Bali.
                2. Memiliki garis pantai terpanjang di Bali.
                3. Singaraja pernah menjadi pusat pemerintahan Bali pada masa kolonial.
                4. Memiliki dialek Bahasa Bali yang khas dan berbeda dari Bali Selatan.
                5. Menjadi pintu gerbang perdagangan Bali Utara sejak masa kerajaan hingga kolonial.`,
        
        fotoProfil: "buleleng-profil.png",
        captionProfil: "Tugu Singa Ambara Raja - Ikon Kota Singaraja",

        "bentang-alam": { 
            "Pantai Lovina": { teks: "Pantai Lovina merupakan ikon wisata bahari Buleleng yang terkenal dengan atraksi lumba-lumba liar. Laut yang tenang menjadikan wilayah ini cocok untuk kegiatan perikanan tangkap dan pariwisata. Banyak masyarakat pesisir bekerja sebagai nelayan, pemandu wisata, maupun pelaku usaha wisata. sumber foto: https://forevervacation.com/bali-lovina-dolphin-watching-snorkeling-adventure.", foto: "buleleng-lovina.png", caption: "Atraksi Lumba-lumba di Pantai Lovina" }, 
            "Danau Buyan": { teks: "Danau Buyan merupakan salah satu danau terbesar di Bali yang berada di kawasan pegunungan Bali Utara. Danau ini berfungsi sebagai sumber air bagi pertanian dan perkebunan masyarakat sekitar. Kawasan ini juga mendukung budidaya sayuran, buah-buahan, dan perikanan air tawar. sumber foto: https://www.traveloka.com/id-id/explore/destination/mengenal-danau-buyan-acc/535555", 
                foto: "buleleng-buyan.png", caption: "Keasrian Danau Buyan" }, 
            "Pegunungan Munduk–Wanagiri": { teks: "Kawasan ini memiliki udara sejuk dan tanah yang subur sehingga cocok untuk perkebunan kopi, cengkeh, kakao, dan berbagai tanaman hortikultura. Sebagian besar penduduk di daerah ini bekerja pada sektor pertanian dan perkebunan. Sumber Foto: https://paradiso.co.id/wisata-ke-negeri-diatas-awan-munduk-nginapnya-di-bali-jegeg-munduk-villa/", foto: "buleleng-munduk.png", caption: "Kawasan Agrowisata Munduk" } 
        },
        "budaya": { 
            "Tradisi Megoak-Goakan": { teks: "Tradisi ini berasal dari Desa Panji dan hanya ditemukan di Kabupaten Buleleng. Megoak-Goakan berarti -bermain seperti burung gagak-. Tradisi ini mengenang strategi perang Ki Barak Panji Sakti saat memperluas wilayah Kerajaan Buleleng. Kegiatan ini dilaksanakan setiap Ngembak Geni, sehari setelah Hari Raya Nyepi. Sumber Foto: https://www.sejarahbali.com/read/permainan-tradisional-megoak-goakan", foto: "buleleng-megoak.png", caption: "Tradisi Megoak-goakan" }, 
            "Kesenian Genjek": { teks: "Genjek merupakan kesenian vokal khas Bali Utara yang mengandalkan suara manusia sebagai irama utama. Pertunjukan ini dilakukan secara berkelompok dan sering digunakan sebagai sarana hiburan sekaligus mempererat hubungan sosial masyarakat. Sumber Foto: https://bali.antaranews.com/berita/169808/seniman-buleleng-kolaborasikan-genjek-genggong-untuk-gasebu-sukasada", foto: "buleleng-genjek.png", caption: "Pertunjukan Genjek Buleleng" }, 
            "Tari Truna Jaya": { teks: "Tari Truna Jaya lahir dan berkembang di Bali Utara, khususnya Buleleng. Tarian ini menggambarkan karakter pemuda yang energik, berani, dan penuh semangat. Tari Truna Jaya menjadi salah satu identitas budaya masyarakat Buleleng. Tari ini diciptakan oleh Gde Manik, Maestro tari bali asal Desa Jagaraga. Saat ini nama beliau diabadikan sebagai nama gedung, yaitu Gedung Kesenian Gde Manik di Kota Singaraja. Sumber Foto: https://www.instagram.com/p/CaKXmvLP9QV/ ", foto: "buleleng-trunajaya.png", caption: "Penari Truna Jaya" } 
        },
        "wisata": { 
            "Wisata Alam": { teks: "Pantai Lovina dan keindahan Air Terjun Gitgit yang asri. <br>Air Terjun Gitgit terletak di Desa Gitgit, Kecamatan Sukasada, Kabupaten Buleleng, Bali, dan menjadi salah satu destinasi wisata alam paling ikonik di Bali Utara. Air terjun ini memiliki ketinggian sekitar 35 meter dan dikelilingi oleh hutan hujan tropis yang lebat serta perkebunan cengkih dan kopi milik warga setempat. Akses menuju lokasi ini sangat mudah dijangkau karena berada tepat di pinggir jalan raya utama yang menghubungkan Denpasar dan Singaraja. Perjalanan dari tempat parkir menuju air terjun memakan waktu sekitar 15 hingga 20 menit berjalan kaki melewati jalan setapak yang tertata rapi.<br><br> Air yang mengalir di Gitgit bersumber dari mata air pegunungan yang jernih dan segar sepanjang tahun, bahkan saat musim kemarau. Suasana di sekitar air terjun sangat tenang dan sejuk, menjadikannya tempat yang ideal untuk melepas penat dan menikmati udara pegunungan yang bersih. Di kawasan ini, wisatawan tidak hanya bisa menikmati satu titik air terjun saja, melainkan terdapat beberapa tingkatan air terjun lain yang tak kalah mempesona. Fasilitas penunjang di sekitar objek wisata, seperti warung makan, kios suvenir, dan tempat ganti pakaian, sudah tersedia cukup lengkap bagi para pengunjung. Pengunjung sering memanfaatkan kolam alami di bawah air terjun untuk sekadar berenang atau membasuh diri setelah lelah berjalan. Air Terjun Gitgit merupakan perpaduan sempurna antara keindahan alam yang memukau dengan kemudahan akses yang ramah bagi wisatawan domestik maupun mancanegara. Sumber Foto: https://gitgitwaterfall.com/ <br>", foto: "buleleng-gitgit.png", caption: "Air Terjun Gitgit" }, 
            "Wisata Religi": { teks: "Pura Pulaki dan Pura Beji dengan ukiran khas Bali Utara yang sangat mendetail. <br>Pura Pulaki terletak di kawasan perbukitan berbatu yang menghadap langsung ke laut lepas, menciptakan lanskap spiritual yang megah dan magis. Keunikan utama pura ini terletak pada keberadaan ratusan kera liar yang dianggap sebagai penjaga suci dan hidup berdampingan secara damai dengan para pemedek. Arsitektur pura didominasi oleh perpaduan batu karang hitam yang selaras dengan lingkungan alam sekitarnya, memberikan kesan yang kokoh dan sakral. Pura ini merupakan bagian dari rangkaian pura Dang Kahyangan yang erat kaitannya dengan perjalanan suci Dang Hyang Nirartha saat menyebarkan ajaran agama di Bali. Selain itu, suasana hening yang dipadukan dengan hembusan angin laut yang konstan memberikan pengalaman spiritual yang mendalam bagi siapa pun yang datang untuk bersembahyang.<br><br> Di sisi lain, Pura Beji merupakan salah satu pura subak paling terkenal di Bali yang diakui sebagai mahakarya seni ukir khas Bali Utara. Dinding pura ini dipenuhi dengan ukiran bunga, sulur-suluran, dan figur mitologi yang sangat detail serta artistik, yang menunjukkan ciri khas gaya Buleleng klasik dengan lekukan yang dalam dan rumit pada batu padasnya. Secara fungsional, pura ini menjadi tempat pemujaan Dewi Sri untuk memohon kesuburan dan keberkahan bagi lahan pertanian masyarakat di sekitarnya. Kehadiran Pura Beji menjadi bukti sejarah penting bahwa seni ukir Bali Utara telah mencapai tingkat estetika yang sangat tinggi sejak ratusan tahun yang lalu. Keseluruhan elemen arsitekturnya menjadikan pura ini bukan sekadar tempat ibadah, melainkan sebuah museum seni terbuka yang memperlihatkan keagungan budaya agraris masyarakat Bali Utara.<br><br>Foto-sumber: https://www.rumah123.com/explore/buleleng/pura-beji-sangsit/<br> ", foto: "buleleng-pura-beji.png", caption: "Keindahan Ukiran Pura Beji" } 
        },
        "kuliner": { 
            "Blayag": { teks: "Makanan berbahan dasar beras dibungkus daun aren dengan kuah rempah.<br>Blayag Buleleng merupakan kuliner khas yang keunikannya terletak pada penggunaan blayag, yaitu lontong yang dibungkus lilitan daun kelapa muda dengan tekstur lebih kenyal dan gurih daripada lontong biasa. Sajian ini dipadukan dengan kuah bumbu nyat-nyat yang kaya rempah, berpadu sempurna dengan serundeng kelapa, ayam suwir, dan sayur urap yang menggugah selera. Berbeda dengan tipat cantok, cita rasa blayag cenderung lebih tajam karena bumbu base genep yang dimasak hingga meresap ke dalam lontongnya. Kesenian meracik bumbu ini telah menjadi warisan turun-temurun masyarakat Buleleng, menjadikannya bukan sekadar makanan pengganjal lapar, melainkan identitas budaya kuliner utara Bali. Kelezatannya yang autentik sering kali menjadi menu wajib dalam upacara adat maupun santapan harian yang dinikmati bersama oleh masyarakat setempat.<br><br>sumber foto: https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/314c7de8-f2ed-4aa9-8cef-0fb4fc4ffcfb_Go-Biz_20210525_094613.jpeg<br>", foto: "buleleng-blayag.png", caption: "Blayag Buleleng" }, 
            "Siobak Singaraja": { teks: "Irisan daging dengan kuah rempah khas Bali Utara yang gurih.<br>Siobak Singaraja merupakan kuliner akulturasi yang unik, di mana potongan daging babi diolah dengan teknik rebus dan goreng, lalu disiram saus kental kecap manis berempah yang kaya akan aroma kayu manis dan pekak. Keistimewaannya terletak pada tekstur daging yang kontras antara bagian yang kenyal dan garing, yang kemudian berpadu dengan acar timun segar untuk menetralkan rasa rempah yang kuat. Hidangan ini telah menjadi ikon kuliner peranakan di Singaraja yang sulit ditemukan keasliannya di wilayah lain di Bali.<br><br>https://image.idn.media/post/20220908/siobak4-c7c8a956c08d5240d23a9803c984bd4e-2c9725f890d0cd7e4cbbbb78d4d29cf2.jpg<br>", foto: "buleleng-siobak.png", caption: "Siobak Singaraja" }, 
            "Sudang Lepet Jukut Undis": { teks: "Perpaduan unik hasil laut (sudang) dan hasil pertanian (undis/kacang hitam).<br>Sudang Lepet Jukut Undis adalah kuliner tradisional Buleleng yang menawarkan cita rasa autentik melalui kombinasi ikan kering yang dipanggang (sudang lepet) dengan sayuran khas yakni jukut undis (kacang gude). Sudang lepet memberikan rasa gurih dan asin yang tajam, sementara jukut undis memberikan tekstur unik yang berserat serta rasa segar yang menyeimbangkan dominasi rasa ikan. Kuliner ini merupakan cerminan kearifan lokal masyarakat pesisir Bali Utara dalam mengolah bahan pangan sederhana menjadi hidangan yang kaya akan cita rasa tradisional. Perpaduan antara teknik pengawetan ikan tradisional dan pemilihan kacang-kacangan lokal menjadikan hidangan ini sebagai bagian integral dari warisan kuliner yang menjaga kelestarian tradisi makan masyarakat Buleleng.<br><br>sumber foto: https://www.instagram.com/p/CUUDpTlh3PA/<br> ", foto: "buleleng-sudang.png", caption: "Sudang Lepet Jukut Undis" } 
        },
        "potensi": { 
            "Agrowisata": { teks: "Pengembangan kopi, cengkeh, dan hortikultura di wilayah pegunungan.<br>Perkebunan kopi di Buleleng, khususnya di kawasan pegunungan seperti Desa Munduk dan Wanagiri, merupakan warisan agraris yang mendunia berkat kualitas kopi robusta dan arabika yang luar biasa. Keunikan perkebunan ini terletak pada metode penanamannya yang masih menerapkan sistem tumpang sari dan organik, sehingga biji kopi yang dihasilkan memiliki karakteristik rasa yang sangat bersih serta aroma yang pekat. Proses pengolahan pascapanen yang dilakukan oleh petani lokal secara tradisional, seperti metode honey process atau natural process, semakin menonjolkan profil rasa unik yang sulit ditemukan di daerah lain. Kawasan perkebunan ini juga berfungsi sebagai ekosistem pendukung yang menjaga kelestarian hutan lindung di Bali Utara sekaligus menjadi destinasi wisata edukasi kopi yang sangat menenangkan. Keberadaan kebun-kebun kopi ini bukan sekadar lahan produksi ekonomi, melainkan fondasi bagi ketahanan budaya agraris yang telah mengharumkan nama Buleleng di kancah kopi spesialis internasional.<br><br>https://bulelengkab.go.id/uploads/konten/10_perjalanan-kopi-organik-wayan-inwan-terkenal-hingga-benua-eropa-dan-amerika.jpg<br>", foto: "buleleng-kopi.png", caption: "Perkebunan Kopi Buleleng" }, 
            "Wisata Sejarah": { teks: "Pengembangan situs sejarah Kerajaan Buleleng dan jejak kolonial.<br>Gedong Kirtya merupakan satu-satunya perpustakaan lontar di dunia yang menjadi pusat pelestarian naskah kuno serta saksi bisu perkembangan sejarah dan jejak kolonial di Bali Utara. Didirikan oleh Belanda pada tahun 1928 dengan nama Kirtya Liefrinck-van der Tuuk, lembaga ini awalnya difungsikan sebagai pusat penelitian kebudayaan untuk mengumpulkan, menyalin, dan melestarikan naskah-naskah lontar yang tersebar di seluruh pelosok Bali. Koleksi yang tersimpan di sini mencakup beragam bidang, mulai dari sastra, agama, sejarah, hingga pengobatan tradisional, yang semuanya ditulis dengan aksara Bali di atas daun lontar.  Selain sebagai pusat naskah, arsitektur dan keberadaan lembaga ini merefleksikan upaya kolonial dalam mengkodifikasi pengetahuan lokal untuk kepentingan administrasi dan studi etnografi pada masa itu. Hingga saat ini, Gedong Kirtya tetap menjadi garda terdepan dalam menjaga identitas intelektual Bali dari gerusan zaman sekaligus menjadi jendela bagi dunia untuk memahami kedalaman peradaban Nusantara masa lampau.<br><br>Sumber Foto: https://media-cdn.tripadvisor.com/media/photo-s/07/f2/9e/a2/gedong-kertya-museum.jpg<br>", foto: "buleleng-kirtya.png", caption: "Museum Gedong Kirtya" }, 
            "Wisata Bahari": { teks: "Konservasi lumba-lumba dan pengembangan ekonomi nelayan.<br>Nelayan Buleleng memiliki peran krusial sebagai penjaga ekosistem pesisir utara Bali yang kaya akan keanekaragaman hayati laut. Mereka tidak hanya fokus menangkap ikan konsumsi seperti tuna, cakalang, dan tongkol untuk kebutuhan pasar lokal, tetapi juga memiliki keterampilan khusus dalam menangkap ikan hias laut secara berkelanjutan. Praktik penangkapan ikan hias di wilayah ini dilakukan dengan teknik ramah lingkungan untuk menjaga kelestarian terumbu karang yang menjadi habitat alami bagi spesies eksotis seperti ikan badut dan ikan dori. Harmoni antara pemanfaatan sumber daya laut untuk ekonomi konsumsi dan perdagangan ikan hias mencerminkan kearifan lokal dalam menjaga keseimbangan ekosistem laut. Dengan tetap mengedepankan metode tradisional, nelayan Buleleng terus berupaya mempertahankan warisan laut yang menjadi tumpuan hidup sekaligus kebanggaan masyarakat pesisir utara.<br><br>https://www.balipost.com/wp-content/uploads/2019/06/balipostcom_cuaca-buruk-sejak-seminggu-nelayan-di-buleleng-tak-melaut_01.jpg<br>", foto: "buleleng-nelayan.png", caption: "Aktivitas Nelayan Buleleng" } 
        },
        "quiz": [
            { soal: "Apa ibu kota Kabupaten Buleleng?", pilihan: ["Singaraja", "Denpasar", "Ubud", "Tabanan"], kunci: 0 },
            { soal: "Tokoh yang memimpin Kerajaan Buleleng pada abad ke-17 adalah...", pilihan: ["I Gusti Ngurah Rai", "Ki Barak Panji Sakti", "Jayapangus", "Anak Wungsu"], kunci: 1 },
            { soal: "Nama lain Buleleng karena letaknya di utara pegunungan adalah...", pilihan: ["Den Bukit", "Bali Dwipa", "Sunda Kecil", "Dwipa Jaya"], kunci: 0 },
            { soal: "Tradisi Megoak-goakan berasal dari desa...", pilihan: ["Desa Munduk", "Desa Penglipuran", "Desa Panji", "Desa Gitgit"], kunci: 2 },
            { soal: "Ikon wisata bahari Buleleng yang terkenal dengan lumba-lumba adalah...", pilihan: ["Pantai Kuta", "Pantai Lovina", "Pantai Amed", "Pantai Sanur"], kunci: 1 },
            { soal: "Kesenian vokal khas Buleleng yang mengandalkan suara manusia disebut...", pilihan: ["Kecak", "Genjek", "Jegog", "Barong"], kunci: 1 },
            { soal: "Tari Truna Jaya menggambarkan karakter pemuda yang...", pilihan: ["Sedih", "Lemah Lembut", "Energik dan Berani", "Pendiam"], kunci: 2 },
            { soal: "Kuliner Siobak Singaraja menggunakan bumbu khas wilayah...", pilihan: ["Bali Selatan", "Bali Utara", "Lombok", "Jawa"], kunci: 1 },
            { soal: "Kabupaten terluas di Provinsi Bali adalah...", pilihan: ["Badung", "Gianyar", "Buleleng", "Bangli"], kunci: 2 },
            { soal: "Danau di Buleleng yang menjadi sumber air pertanian adalah Danau...", pilihan: ["Batur", "Beratan", "Buyan", "Tamblingan"], kunci: 2 }
        ]
    },

    "denpasar": {
    nama: "Kota Denpasar",
    profil: "Kota Denpasar adalah ibu kota Provinsi Bali sekaligus pusat pemerintahan, pendidikan, perdagangan, dan budaya. Nama Denpasar berasal dari kata 'den' (utara) dan 'pasar', karena wilayah ini berkembang di sebelah utara pasar Kerajaan Badung.",
    fotoProfil: "denpasar-profil.png",
    captionProfil: "Tugu Catur Muka - Jantung Kota Denpasar",

    "bentang-alam": { 
        "Pantai Sanur": { teks: "Ikon wisata Kota Denpasar yang terkenal dengan ombak tenang dan pemandangan matahari terbit.", foto: "denpasar-sanur.png", caption: "Sunrise di Pantai Sanur" }, 
        "Hutan Mangrove": { teks: "Kawasan konservasi mangrove yang berfungsi melindungi pantai dari abrasi sekaligus objek wisata edukasi.", foto: "denpasar-mangrove.png", caption: "Jalur pejalan kaki di hutan mangrove" }, 
        "Sungai Badung": { teks: "Sungai yang membelah kota, kini menjadi ruang publik dan pusat aktivitas masyarakat.", foto: "denpasar-sungai.png", caption: "Revitalisasi Tukad Badung" } 
    },
    "budaya": { 
        "Omed-Omedan": { teks: "Tradisi unik dari Banjar Kaja Sesetan yang melambangkan keharmonisan dan persaudaraan.", foto: "denpasar-omed-omedan.png", caption: "Tradisi Omed-Omedan" }, 
        "Festival Denpasar": { teks: "Kegiatan rutin untuk melestarikan seni, musik, dan kerajinan khas Bali.", foto: "denpasar-festival.png", caption: "Pertunjukan seni di Festival Denpasar" }, 
        "Tradisi Ngerebong": { teks: "Upacara sakral di Pura Petilan Pengerebongan untuk memohon keselamatan.", foto: "denpasar-ngerebong.png", caption: "Upacara sakral Ngerebong" } 
    },
    "wisata": { 
        "Wisata Alam": { teks: "Pantai Sanur dan kawasan konservasi Taman Hutan Raya Ngurah Rai.", foto: "denpasar-tahura.png", caption: "Taman Hutan Raya Ngurah Rai" }, 
        "Wisata Religi": { teks: "Pura Agung Jagatnatha dan Pura Maospahit yang penuh nilai sejarah.", foto: "denpasar-jagatnatha.png", caption: "Pura Agung Jagatnatha" } 
    },
    "kuliner": { 
        "Nasi Jinggo": { teks: "Nasi porsi kecil dibungkus daun pisang dengan lauk ayam suwir dan sambal khas.", foto: "denpasar-nasi-jinggo.png", caption: "Nasi Jinggo" }, 
        "Rujak Kuah Pindang": { teks: "Rujak dengan bumbu kuah ikan pindang yang pedas, manis, dan segar.", foto: "denpasar-rujak.png", caption: "Rujak Kuah Pindang" }, 
        "Sate Plecing": { teks: "Sate yang disajikan dengan sambal plecing khas Bali yang menggugah selera.", foto: "denpasar-sate.png", caption: "Sate Plecing" } 
    },
    "potensi": { 
        "Industri Kreatif": { teks: "Pengembangan seni budaya dan ekonomi kreatif berbasis teknologi.", foto: "denpasar-kreatif.png", caption: "Pusat Ekonomi Kreatif" }, 
        "Wisata Edukasi": { teks: "Pengembangan kawasan mangrove sebagai laboratorium alam lingkungan.", foto: "denpasar-edukasi.png", caption: "Wisata edukasi lingkungan" }, 
        "Ekonomi Jasa": { teks: "Pengembangan pusat aktivitas bisnis dan jasa digital di Bali.", foto: "denpasar-bisnis.png", caption: "Aktivitas ekonomi kota" } 
    },
    "quiz": [
        { soal: "Kota Denpasar merupakan ibu kota dari ....", pilihan: ["Badung", "Provinsi Bali", "Gianyar", "Bangli"], kunci: 1 },
        { soal: "Pantai terkenal yang berada di Kota Denpasar adalah ....", pilihan: ["Lovina", "Pandawa", "Sanur", "Amed"], kunci: 2 },
        { soal: "Salah satu makanan khas Kota Denpasar adalah ....", pilihan: ["Nasi Jinggo", "Mujair Nyat-Nyat", "Blayag", "Siobak"], kunci: 0 },
        { soal: "Hutan Mangrove Ngurah Rai penting bagi lingkungan karena ....", pilihan: ["lokasi tambang", "melindungi dari abrasi", "pusat perdagangan", "bahan bakar"], kunci: 1 },
        { soal: "Tradisi Omed-Omedan dilaksanakan untuk mempererat ....", pilihan: ["persaingan", "perdagangan", "persaudaraan", "olahraga"], kunci: 2 },
        { soal: "Pantai Sanur berperan penting bagi masyarakat karena ....", pilihan: ["sektor pariwisata", "pertambangan", "batu bara", "industri berat"], kunci: 0 },
        { soal: "Jika ingin mengenalkan budaya khas Denpasar kepada wisatawan, yang paling tepat adalah ....", pilihan: ["Omed-Omedan", "Megoak-Goakan", "Mekotek", "Ngusaba"], kunci: 0 },
        { soal: "Untuk meningkatkan pendapatan, kuliner Denpasar dapat dipromosikan melalui ....", pilihan: ["pembatasan", "festival kuliner", "penutupan usaha", "pengurangan produksi"], kunci: 1 },
        { soal: "Kesimpulan hubungan bentang alam dengan mata pencaharian di Denpasar adalah ....", pilihan: ["tidak berpengaruh", "dipengaruhi kondisi wilayah", "semua jadi turis", "hanya perdagangan"], kunci: 1 },
        { soal: "Mengapa Kota Denpasar menjadi pusat ekonomi dan budaya Bali?", pilihan: ["Pertanian terluas", "Pusat pemerintahan dan ekonomi", "Gunung tertinggi", "Wilayah pantai saja"], kunci: 1 }
    ]
},
    "gianyar": {
    nama: "Kabupaten Gianyar",
    profil: "Gianyar terletak di tengah-selatan Pulau Bali dan dikenal sebagai jantung kebudayaan Bali. Wilayah ini menjadi pusat perkembangan seni tari, ukir, lukis, dan pertunjukan, menjadikannya destinasi wisata budaya yang sangat mendunia.",
    fotoProfil: "gianyar-profil.png",
    captionProfil: "Pemandangan indah kawasan Ubud",

    "bentang-alam": { 
        "Sungai Ayung": { teks: "Sungai terpanjang di Bali yang menjadi lokasi populer untuk wisata arung jeram.", foto: "gianyar-ayung.png", caption: "Arung jeram di Sungai Ayung" }, 
        "Sawah Tegalalang": { teks: "Kawasan sawah terasering ikonik yang memadukan sistem pertanian tradisional dengan pariwisata.", foto: "gianyar-tegalalang.png", caption: "Sawah berundak Tegalalang" }, 
        "Pantai Lebih": { teks: "Pantai yang menjadi pusat aktivitas nelayan dan destinasi wisata kuliner hasil laut.", foto: "gianyar-lebih.png", caption: "Suasana di Pantai Lebih" } 
    },
    "budaya": { 
        "Tradisi Ngerebeg": { teks: "Arak-arakan sakral di Tegallalang sebagai simbol penolak bala dan permohonan keselamatan.", foto: "gianyar-ngerebeg.png", caption: "Tradisi Ngerebeg" }, 
        "Seni Ukir Desa Mas": { teks: "Pusat kerajinan ukir kayu Bali yang keterampilannya diwariskan turun-temurun.", foto: "gianyar-ukir.png", caption: "Pengrajin ukir kayu di Desa Mas" }, 
        "Tari Legong": { teks: "Tarian klasik Bali dengan gerakan halus yang membutuhkan keterampilan tinggi.", foto: "gianyar-legong.png", caption: "Penari Tari Legong" } 
    },
    "wisata": { 
        "Wisata Alam": { teks: "Keindahan Sawah Tegalalang dan Hutan Kera Ubud (Monkey Forest).", foto: "gianyar-monkey-forest.png", caption: "Monyet ekor panjang di Ubud" }, 
        "Wisata Religi": { teks: "Pura Tirta Empul untuk penyucian diri dan Pura Gunung Kawi yang artistik.", foto: "gianyar-tirta-empul.png", caption: "Mata air suci di Pura Tirta Empul" } 
    },
    "kuliner": { 
        "Ayam Betutu": { teks: "Ayam dengan bumbu rempah khas Bali yang dimasak hingga meresap sempurna.", foto: "gianyar-betutu.png", caption: "Ayam Betutu Gianyar" }, 
        "Sate Lilit Ikan": { teks: "Daging ikan cincang dengan bumbu Bali yang dililit pada batang serai.", foto: "gianyar-sate-lilit.png", caption: "Sate lilit khas Gianyar" }, 
        "Jaje Bali": { teks: "Aneka kue tradisional seperti klepon dan laklak untuk upacara maupun camilan.", foto: "gianyar-jaje.png", caption: "Aneka Jaje Bali" } 
    },
    "potensi": { 
        "Wisata Budaya": { teks: "Pengembangan seni tari dan festival budaya lokal yang mendunia.", foto: "gianyar-seni.png", caption: "Pertunjukan seni di Gianyar" }, 
        "Industri Kerajinan": { teks: "Pemasaran kerajinan ukir, lukis, dan patung ke pasar internasional.", foto: "gianyar-kerajinan.png", caption: "Galeri seni dan kerajinan" }, 
        "Wisata Edukasi": { teks: "Edukasi pertanian tradisional dan spiritualitas di kawasan wisata.", foto: "gianyar-edukasi.png", caption: "Wisata edukasi pertanian" } 
    },
    "quiz": [
        { soal: "Ibu kota Kabupaten Gianyar adalah ....", pilihan: ["Ubud", "Gianyar", "Sukawati", "Blahbatuh"], kunci: 1 },
        { soal: "Kawasan sawah terasering yang terkenal di Gianyar adalah ....", pilihan: ["Jatiluwih", "Penglipuran", "Tegalalang", "Kintamani"], kunci: 2 },
        { soal: "Salah satu pusat seni ukir kayu di Gianyar adalah Desa ....", pilihan: ["Mas", "Panji", "Munggu", "Trunyan"], kunci: 0 },
        { soal: "Sawah Tegalalang menjadi tujuan wisata karena ....", pilihan: ["tambang emas", "pemandangan sawah berundak", "pusat industri", "pelabuhan"], kunci: 1 },
        { soal: "Pura Tirta Empul terkenal karena ....", pilihan: ["mata air suci untuk melukat", "di tengah laut", "pusat perdagangan", "memiliki bandara"], kunci: 0 },
        { soal: "Sungai Ayung bermanfaat bagi masyarakat karena ....", pilihan: ["sumber minyak", "wisata arung jeram dan pertanian", "pusat tambang", "batu bara"], kunci: 1 },
        { soal: "Jika ingin memperkenalkan kerajinan Gianyar, tempat yang paling tepat dikunjungi adalah ....", pilihan: ["Desa Mas", "Pantai Lovina", "Desa Trunyan", "Desa Munggu"], kunci: 0 },
        { soal: "Untuk meningkatkan pendapatan, hasil kerajinan dapat dipromosikan melalui ....", pilihan: ["pameran seni dan digital", "penutupan galeri", "pengurangan produksi", "pembatasan wisatawan"], kunci: 0 },
        { soal: "Kesimpulan hubungan bentang alam dengan pekerjaan di Gianyar adalah ....", pilihan: ["bentang alam memengaruhi pekerjaan", "semua seniman", "wisata tidak berkaitan", "pertanian tidak berkembang"], kunci: 0 },
        { soal: "Mengapa Gianyar disebut pusat kebudayaan Bali?", pilihan: ["Pelabuhan besar", "Pusat perkembangan seni dan tradisi", "Gunung tertinggi", "Wilayah terluas"], kunci: 1 }
    ]
},
    "jembrana": {
    nama: "Kabupaten Jembrana",
    profil: "Terletak di ujung barat Pulau Bali, Jembrana merupakan pintu gerbang utama jalur darat dari Pulau Jawa melalui Pelabuhan Gilimanuk. Wilayah ini kaya akan kawasan konservasi serta tradisi budaya yang unik seperti Makepung.",
    fotoProfil: "jembrana-profil.png",
    captionProfil: "Pelabuhan Gilimanuk sebagai pintu gerbang Bali",

    "bentang-alam": { 
        "Taman Nasional Bali Barat": { teks: "Kawasan konservasi terbesar di Bali, habitat alami Jalak Bali dan keanekaragaman hayati lainnya.", foto: "jembrana-tnbb.png", caption: "Keasrian Taman Nasional Bali Barat" }, 
        "Selat Bali & Gilimanuk": { teks: "Pusat transportasi laut dan perdagangan yang menghubungkan Bali dengan Pulau Jawa.", foto: "jembrana-gilimanuk.png", caption: "Aktivitas di Pelabuhan Gilimanuk" }, 
        "Perbukitan Pekutatan": { teks: "Kawasan dengan lahan perkebunan luas seperti kakao dan kelapa, pusat agrowisata.", foto: "jembrana-pekutatan.png", caption: "Perkebunan di Pekutatan" } 
    },
    "budaya": { 
        "Makepung": { teks: "Tradisi balapan kerbau khas Jembrana yang dulunya merupakan hiburan bagi para petani.", foto: "jembrana-makepung.png", caption: "Serunya Tradisi Makepung" }, 
        "Musik Jegog": { teks: "Kesenian musik bambu berukuran besar dengan suara yang khas dan kuat.", foto: "jembrana-jegog.png", caption: "Pertunjukan Musik Jegog" }, 
        "Makepung Lampit": { teks: "Perlombaan kerbau menarik papan (lampit) yang menunjukkan hubungan erat dengan pertanian.", foto: "jembrana-lampit.png", caption: "Tradisi Makepung Lampit" } 
    },
    "wisata": { 
        "Wisata Alam": { teks: "Taman Nasional Bali Barat dan ombak surfing kelas dunia di Pantai Medewi.", foto: "jembrana-medewi.png", caption: "Surfing di Pantai Medewi" }, 
        "Wisata Religi": { teks: "Pura Rambut Siwi di atas tebing dan Pura Perancak yang bersejarah.", foto: "jembrana-rambut-siwi.png", caption: "Keindahan Pura Rambut Siwi" } 
    },
    "kuliner": { 
        "Ayam Betutu Gilimanuk": { teks: "Kuliner ayam dengan bumbu rempah Bali yang sangat kuat dan pedas.", foto: "jembrana-betutu.png", caption: "Ayam Betutu khas Gilimanuk" }, 
        "Ikan Bakar Pengambengan": { teks: "Ikan segar hasil tangkapan nelayan Selat Bali yang dibakar dengan sambal tradisional.", foto: "jembrana-ikan-bakar.png", caption: "Ikan bakar Pengambengan" }, 
        "Sate Lilit Ikan": { teks: "Sate dari cincangan ikan laut dengan bumbu Bali, dililit pada batang serai.", foto: "jembrana-sate-lilit.png", caption: "Sate Lilit Ikan" } 
    },
    "potensi": { 
        "Wisata Budaya": { teks: "Pengembangan atraksi budaya Makepung dan musik bambu Jegog.", foto: "jembrana-budaya.png", caption: "Atraksi Budaya Jembrana" }, 
        "Wisata Konservasi": { teks: "Pengelolaan Taman Nasional Bali Barat sebagai pusat penelitian dan edukasi.", foto: "jembrana-konservasi.png", caption: "Konservasi alam" }, 
        "Agrowisata": { teks: "Pemanfaatan lahan perkebunan kakao dan kelapa di wilayah Pekutatan.", foto: "jembrana-agrowisata.png", caption: "Kebun kakao Jembrana" } 
    },
    "quiz": [
        { soal: "Ibu kota Kabupaten Jembrana adalah ....", pilihan: ["Gilimanuk", "Negara", "Mendoyo", "Pekutatan"], kunci: 1 },
        { soal: "Tradisi khas Jembrana yang menggunakan kerbau adalah ....", pilihan: ["Megoak-Goakan", "Mekotek", "Makepung", "Omed-Omedan"], kunci: 2 },
        { soal: "Salah satu kuliner khas Kabupaten Jembrana adalah ....", pilihan: ["Ayam Betutu Gilimanuk", "Siobak Singaraja", "Mujair Nyat-Nyat", "Blayag"], kunci: 0 },
        { soal: "Pelabuhan Gilimanuk memiliki peran penting karena ....", pilihan: ["pusat tambang", "jalur utama Bali-Jawa", "lokasi gunung berapi", "pusat industri"], kunci: 1 },
        { soal: "Taman Nasional Bali Barat penting bagi lingkungan karena ....", pilihan: ["kawasan pelestarian fauna", "pusat perdagangan", "kawasan industri", "pelabuhan"], kunci: 0 },
        { soal: "Musik Jegog dianggap unik karena ....", pilihan: ["alat musik bambu besar", "alat elektronik", "berasal dari luar Bali", "alat musik logam"], kunci: 0 },
        { soal: "Jika ingin memperkenalkan budaya khas Jembrana, yang tepat adalah ....", pilihan: ["Makepung", "Tari Truna Jaya", "Omed-Omedan", "Ngusaba"], kunci: 0 },
        { soal: "Untuk ekonomi masyarakat pesisir, kegiatan yang tepat dikembangkan adalah ....", pilihan: ["wisata bahari", "menutup akses pantai", "mengurangi nelayan", "menghentikan dagang"], kunci: 0 },
        { soal: "Kesimpulan hubungan bentang alam dengan pekerjaan di Jembrana adalah ....", pilihan: ["dipengaruhi kondisi alam", "semua nelayan", "pariwisata tidak berkaitan", "perkebunan tidak berkembang"], kunci: 0 },
        { soal: "Mengapa Jembrana memiliki potensi wisata budaya dan alam yang besar?", pilihan: ["Memiliki bandara", "Memiliki tradisi unik dan konservasi alam", "Ibu kota provinsi", "Gunung tertinggi"], kunci: 1 }
    ]
},
    "karangasem": {
    nama: "Kabupaten Karangasem",
    profil: "Karangasem terletak di ujung timur Pulau Bali dengan ibu kota Amlapura. Wilayah ini kaya akan warisan budaya, sejarah kerajaan, serta bentang alam yang spektakuler mulai dari gunung tertinggi hingga kawasan wisata bahari dunia.",
    fotoProfil: "karangasem-profil.png",
    captionProfil: "Kemegahan Gunung Agung dilihat dari kejauhan",

    "bentang-alam": { 
        "Gunung Agung": { teks: "Gunung tertinggi di Bali dengan tanah vulkanik subur yang mendukung pertanian masyarakat.", foto: "karangasem-gunung-agung.png", caption: "Gunung Agung yang sakral" }, 
        "Pantai Amed & Tulamben": { teks: "Kawasan pesisir terkenal dengan keindahan bawah laut, tempat bangkai kapal USS Liberty berada.", foto: "karangasem-amed.png", caption: "Spot diving Tulamben" }, 
        "Lembah Sidemen": { teks: "Perbukitan hijau dan persawahan luas, pusat wisata pedesaan yang tenang.", foto: "karangasem-sidemen.png", caption: "Pemandangan lembah Sidemen" } 
    },
    "budaya": { 
        "Perang Pandan": { teks: "Tradisi unik dari Desa Tenganan Pegringsingan sebagai penghormatan kepada Dewa Indra.", foto: "karangasem-perang-pandan.png", caption: "Tradisi Perang Pandan" }, 
        "Kain Gringsing": { teks: "Kain tenun ikat ganda langka khas Desa Tenganan yang dikenal hingga mancanegara.", foto: "karangasem-gringsing.png", caption: "Tenun ikat ganda Gringsing" }, 
        "Tradisi Usaba Sambah": { teks: "Upacara adat masyarakat Tenganan untuk menjaga keseimbangan alam dan manusia.", foto: "karangasem-usaba.png", caption: "Upacara Usaba Sambah" } 
    },
    "wisata": { 
        "Wisata Alam": { teks: "Keindahan snorkeling di Amed dan taman bersejarah Taman Ujung Sukasada.", foto: "karangasem-taman-ujung.png", caption: "Taman Ujung Sukasada" }, 
        "Wisata Religi": { teks: "Pura Besakih (Mother Temple of Bali) dan Pura Lempuyang Luhur.", foto: "karangasem-besakih.png", caption: "Kompleks Pura Besakih" } 
    },
    "kuliner": { 
        "Lawar Nyawan": { teks: "Lawar khas Karangasem yang menggunakan bahan dasar unik dan bumbu rempah Bali.", foto: "karangasem-lawar.png", caption: "Lawar Nyawan" }, 
        "Jaje Bendu": { teks: "Jajanan tradisional berbahan tepung beras dan gula merah dengan rasa manis legit.", foto: "karangasem-jaje-bendu.png", caption: "Jaje Bendu" }, 
        "Garam Amed": { teks: "Produk garam tradisional yang dikeringkan dengan sinar matahari, terkenal akan kualitasnya.", foto: "karangasem-garam.png", caption: "Proses pembuatan garam Amed" } 
    },
    "potensi": { 
        "Wisata Religi": { teks: "Pengembangan kawasan Pura Besakih dan Lempuyang sebagai wisata religi dunia.", foto: "karangasem-lempuyang.png", caption: "Gerbang Surga Pura Lempuyang" }, 
        "Wisata Bahari": { teks: "Eksplorasi potensi diving dan snorkeling di Amed serta Tulamben.", foto: "karangasem-bahari.png", caption: "Wisata bawah laut Amed" }, 
        "Industri Budaya": { teks: "Pelestarian tenun Gringsing dan tradisi kuno Desa Tenganan.", foto: "karangasem-industri-budaya.png", caption: "Kerajinan tenun Tenganan" } 
    },
    "quiz": [
        { soal: "Ibu kota Kabupaten Karangasem adalah ....", pilihan: ["Singaraja", "Gianyar", "Amlapura", "Semarapura"], kunci: 2 },
        { soal: "Gunung tertinggi di Bali yang berada di Kabupaten Karangasem adalah ....", pilihan: ["Batukaru", "Batur", "Agung", "Abang"], kunci: 2 },
        { soal: "Tradisi Perang Pandan dilaksanakan di Desa ....", pilihan: ["Penglipuran", "Tenganan Pegringsingan", "Trunyan", "Munggu"], kunci: 1 },
        { soal: "Pantai Amed dan Tulamben berkembang karena ....", pilihan: ["sawah terasering", "keindahan bawah laut", "pusat industri", "danau terbesar"], kunci: 1 },
        { soal: "Kain Gringsing dianggap istimewa karena ....", pilihan: ["dibuat dari emas", "hanya untuk wisatawan", "tenun ikat ganda yang langka", "mesin modern"], kunci: 2 },
        { soal: "Gunung Agung bermanfaat bagi masyarakat karena ....", pilihan: ["tanah subur untuk pertanian", "pelabuhan utama", "menghasilkan garam", "pusat perdagangan"], kunci: 0 },
        { soal: "Budaya unik Karangasem yang tepat untuk wisatawan adalah ....", pilihan: ["Mekotek", "Omed-Omedan", "Perang Pandan", "Megoak-Goakan"], kunci: 2 },
        { soal: "Produk budaya untuk oleh-oleh khas Karangasem adalah ....", pilihan: ["Kain Gringsing", "Jeruk Kintamani", "Siobak", "Blayag"], kunci: 0 },
        { soal: "Kesimpulan hubungan bentang alam dengan mata pencaharian adalah ....", pilihan: ["dipengaruhi kondisi alam", "semua pariwisata", "pertanian tidak berkembang", "tidak ada pengaruh"], kunci: 0 },
        { soal: "Potensi wisata budaya Karangasem mencakup ....", pilihan: ["pusat mall", "tradisi unik, desa adat, dan pura penting", "ibu kota provinsi", "banyak bandara"], kunci: 1 }
    ]
},
    "klungkung": {
    nama: "Kabupaten Klungkung",
    profil: "Klungkung merupakan kabupaten terkecil di Bali yang memiliki sejarah panjang sebagai pusat kerajaan. Wilayah ini unik karena terdiri atas daratan utama dan kawasan kepulauan indah yaitu Nusa Penida, Nusa Lembongan, dan Nusa Ceningan.",
    fotoProfil: "klungkung-profil.png",
    captionProfil: "Kemegahan Kertha Gosa di jantung Semarapura",

    "bentang-alam": { 
        "Nusa Penida": { teks: "Pulau eksotis dengan tebing tinggi dan keanekaragaman hayati bawah laut yang mendunia.", foto: "klungkung-nusa-penida.png", caption: "Keindahan tebing Kelingking Beach" }, 
        "Nusa Lembongan": { teks: "Kawasan dengan perairan jernih yang menjadi pusat budidaya rumput laut dan wisata bahari.", foto: "klungkung-lembongan.png", caption: "Suasana di Nusa Lembongan" }, 
        "Bukit Nusa Penida": { teks: "Perbukitan kapur yang dimanfaatkan masyarakat untuk pertanian lahan kering dan peternakan.", foto: "klungkung-bukit.png", caption: "Perbukitan di Nusa Penida" } 
    },
    "budaya": { 
        "Wayang Kamasan": { teks: "Seni lukis tradisional khas Desa Kamasan dengan tema epik pewayangan.", foto: "klungkung-wayang.png", caption: "Detail seni lukis Wayang Kamasan" }, 
        "Tradisi Dewa Masraman": { teks: "Upacara simbolis di Desa Gelgel sebagai lambang persaudaraan dan kerukunan warga.", foto: "klungkung-masraman.png", caption: "Tradisi Dewa Masraman" }, 
        "Tradisi Ratu Gede Mecaling": { teks: "Tradisi spiritual yang sangat dihormati oleh masyarakat Nusa Penida.", foto: "klungkung-mecaling.png", caption: "Upacara masyarakat Nusa Penida" } 
    },
    "wisata": { 
        "Wisata Alam": { teks: "Kelingking Beach yang ikonik, kolam alami Angel's Billabong, dan Crystal Bay.", foto: "klungkung-kelingking.png", caption: "Kelingking Beach" }, 
        "Wisata Religi": { teks: "Pura Goa Lawah dengan penghuni ribuan kelelawar dan Pura Dalem Ped yang sakral.", foto: "klungkung-goa-lawah.png", caption: "Pura Goa Lawah" } 
    },
    "kuliner": { 
        "Srombotan": { teks: "Hidangan sayuran rebus khas Klungkung dengan bumbu kelapa dan kacang yang gurih.", foto: "klungkung-srombotan.png", caption: "Srombotan ikon kuliner" }, 
        "Jaje Bantal": { teks: "Kue tradisional dari beras ketan yang dibungkus daun kelapa muda.", foto: "klungkung-bantal.png", caption: "Jaje Bantal khas Bali" }, 
        "Ikan Bakar Nusa Penida": { teks: "Olahan ikan segar hasil tangkapan nelayan lokal dengan bumbu sambal tradisional.", foto: "klungkung-ikan.png", caption: "Ikan bakar khas pesisir" } 
    },
    "potensi": { 
        "Wisata Bahari": { teks: "Pemanfaatan keindahan alam Nusa Penida dan Lembongan untuk wisata global.", foto: "klungkung-bahari.png", caption: "Wisata snorkeling Nusa Penida" }, 
        "Wisata Budaya": { teks: "Pengembangan seni lukis Kamasan dan pelestarian sejarah Kerajaan Klungkung.", foto: "klungkung-budaya.png", caption: "Edukasi seni Kamasan" }, 
        "Agro & Perikanan": { teks: "Budidaya rumput laut dan pertanian lahan kering di perbukitan Nusa Penida.", foto: "klungkung-rumput.png", caption: "Budidaya rumput laut" } 
    },
    "quiz": [
        { soal: "Ibu kota Kabupaten Klungkung adalah ....", pilihan: ["Gianyar", "Semarapura", "Negara", "Amlapura"], kunci: 1 },
        { soal: "Salah satu pulau yang termasuk wilayah Kabupaten Klungkung adalah ....", pilihan: ["Serangan", "Menjangan", "Nusa Penida", "Lombok"], kunci: 2 },
        { soal: "Makanan khas Kabupaten Klungkung adalah ....", pilihan: ["Srombotan", "Siobak", "Mujair Nyat-Nyat", "Blayag"], kunci: 0 },
        { soal: "Nusa Lembongan penting bagi masyarakat karena ....", pilihan: ["pusat tambang", "budidaya rumput laut dan wisata", "kawasan industri", "pusat pemerintahan"], kunci: 1 },
        { soal: "Wayang Kamasan merupakan warisan budaya karena ....", pilihan: ["seni lukis tradisional khas Klungkung", "alat musik bambu", "tradisi balapan kerbau", "tarian perang"], kunci: 0 },
        { soal: "Pura Goa Lawah terkenal karena ....", pilihan: ["puncak gunung", "gua dihuni ribuan kelelawar", "tengah danau", "pura terbesar"], kunci: 1 },
        { soal: "Jika ingin mengenalkan budaya khas Klungkung, karya yang tepat adalah ....", pilihan: ["Wayang Kamasan", "Tari Truna Jaya", "Musik Jegog", "Mekotek"], kunci: 0 },
        { soal: "Untuk pendapatan Nusa Lembongan, kegiatan yang tepat dikembangkan adalah ....", pilihan: ["wisata bahari dan rumput laut", "mengurangi wisatawan", "menutup pantai", "menghentikan perikanan"], kunci: 0 },
        { soal: "Kesimpulan hubungan bentang alam dengan pekerjaan di Klungkung adalah ....", pilihan: ["dipengaruhi kondisi alam", "semua nelayan", "wisata tidak berkaitan", "pertanian tidak berkembang"], kunci: 0 },
        { soal: "Mengapa Klungkung potensial untuk wisata bahari?", pilihan: ["Banyak gunung berapi", "Kepulauan dengan keindahan bawah laut", "Pusat pemerintahan", "Wilayah pertanian terluas"], kunci: 1 }
    ]
},
    "tabanan": {
    nama: "Kabupaten Tabanan",
    profil: "Tabanan terletak di bagian barat daya Bali dan dijuluki sebagai 'Lumbung Padi Bali'. Wilayah ini dikenal luas karena sistem irigasi tradisional Subak yang diakui UNESCO serta memiliki ikon wisata religi Pura Tanah Lot.",
    fotoProfil: "tabanan-profil.png",
    captionProfil: "Pemandangan Pura Tanah Lot",

    "bentang-alam": { 
        "Jatiluwih": { teks: "Kawasan persawahan terasering yang menjadi Warisan Budaya Dunia UNESCO.", foto: "tabanan-jatiluwih.png", caption: "Sawah berundak Jatiluwih" }, 
        "Gunung Batukaru": { teks: "Gunung tertinggi kedua di Bali, pusat daerah pertanian dan perkebunan subur.", foto: "tabanan-batukaru.png", caption: "Gunung Batukaru" }, 
        "Danau Beratan": { teks: "Danau yang menjadi sumber air vital bagi pertanian dan pusat wisata alam.", foto: "tabanan-beratan.png", caption: "Keindahan Danau Beratan" } 
    },
    "budaya": { 
        "Sistem Subak": { teks: "Organisasi sosial petani yang mengatur irigasi, kerja sama, dan upacara keagamaan.", foto: "tabanan-subak.png", caption: "Aktivitas masyarakat Subak" }, 
        "Tradisi Mekotekan": { teks: "Tradisi perang-perangan menggunakan tongkat sebagai simbol persatuan masyarakat.", foto: "tabanan-mekotekan.png", caption: "Tradisi Mekotekan Marga" }, 
        "Ngusaba Desa": { teks: "Upacara adat ungkapan syukur atas hasil pertanian dan kesejahteraan desa.", foto: "tabanan-ngusaba.png", caption: "Upacara syukur masyarakat" } 
    },
    "wisata": { 
        "Wisata Alam": { teks: "Kawasan hutan konservasi Alas Kedaton yang dihuni ratusan kera.", foto: "tabanan-alas-kedaton.png", caption: "Suasana Alas Kedaton" }, 
        "Wisata Religi": { teks: "Pura Tanah Lot yang ikonik dan Pura Luhur Batukaru di lereng gunung.", foto: "tabanan-tanah-lot.png", caption: "Pura Tanah Lot saat matahari terbenam" } 
    },
    "kuliner": { 
        "Entil": { teks: "Makanan berbahan singkong yang disajikan dengan parutan kelapa dan bumbu khas.", foto: "tabanan-entil.png", caption: "Entil khas Tabanan" }, 
        "Jukut Ares": { teks: "Sayur khas Bali berbahan batang pisang muda yang segar.", foto: "tabanan-jukut-ares.png", caption: "Jukut Ares" }, 
        "Laklak": { teks: "Kue tradisional dari tepung beras dengan topping kelapa parut dan gula merah.", foto: "tabanan-laklak.png", caption: "Laklak Tabanan" } 
    },
    "potensi": { 
        "Agrowisata": { teks: "Pengembangan wisata berbasis persawahan Jatiluwih dan Subak.", foto: "tabanan-agrowisata.png", caption: "Wisata edukasi pertanian" }, 
        "Wisata Religi": { teks: "Pengelolaan situs ikonik Tanah Lot dan Batukaru sebagai wisata religi dunia.", foto: "tabanan-wisata-religi.png", caption: "Wisata religi Tabanan" }, 
        "Industri Kreatif": { teks: "Pengembangan kuliner tradisional dan kerajinan berbasis hasil bumi.", foto: "tabanan-industri.png", caption: "Produk kuliner tradisional" } 
    },
    "quiz": [
        { soal: "Ibu kota Kabupaten Tabanan adalah ....", pilihan: ["Negara", "Tabanan", "Mengwi", "Gianyar"], kunci: 1 },
        { soal: "Kabupaten Tabanan dikenal dengan julukan ....", pilihan: ["Kota Pendidikan", "Lumbung Padi Bali", "Kota Seribu Pura", "Pulau Dewata"], kunci: 1 },
        { soal: "Salah satu kuliner khas Kabupaten Tabanan adalah ....", pilihan: ["Entil", "Siobak", "Srombotan", "Mujair Nyat-Nyat"], kunci: 0 },
        { soal: "Jatiluwih menjadi terkenal karena ....", pilihan: ["pelabuhan", "persawahan terasering dan sistem Subak", "pusat industri", "tambang emas"], kunci: 1 },
        { soal: "Danau Beratan penting bagi masyarakat karena ....", pilihan: ["sumber air pertanian dan wisata", "perdagangan", "batu bara", "industri"], kunci: 0 },
        { soal: "Sistem Subak dianggap istimewa karena ....", pilihan: ["mengatur perdagangan", "menggabungkan air, sosial, dan agama", "sistem transportasi", "kegiatan perikanan"], kunci: 1 },
        { soal: "Untuk mengenalkan pertanian tradisional, tempat yang paling tepat adalah ....", pilihan: ["Pantai Kuta", "Jatiluwih", "Lovina", "Amed"], kunci: 1 },
        { soal: "Untuk meningkatkan pendapatan masyarakat Tabanan, kegiatan yang tepat adalah ....", pilihan: ["agrowisata berbasis pertanian dan Subak", "menutup wisata", "mengurangi pertanian", "menghentikan Subak"], kunci: 0 },
        { soal: "Kesimpulan hubungan bentang alam dengan pekerjaan di Tabanan adalah ....", pilihan: ["dipengaruhi kondisi alam", "semua petani", "wisata tidak berkaitan", "pertanian tidak berkembang"], kunci: 0 },
        { soal: "Mengapa Tabanan memiliki potensi besar dalam agrowisata?", pilihan: ["Banyak bandara", "Persawahan luas, Subak, dan alam mendukung", "Pusat perdagangan", "Wilayah pantai saja"], kunci: 1 }
    ]
}
};