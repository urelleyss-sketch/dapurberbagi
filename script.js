/* --- DATABASE WILAYAH BERJENJANG LENGKAP --- */
const REGION_DATA = {
    "Kab. Trenggalek": {
        "Durenan": ["Kendalrejo", "Baruharjo", "Kamulan", "Malasan", "Pakis", "Semarum", "Sumbergayam", "Pandan", "Malasan"],
        "Gandusari": ["Gandusari", "Sukorejo", "Widoro", "Karanganyar", "Ngrayung", "Jajar", "Melis", "Krandegan"],
        "Panggul": ["Panggul", "Nglebeng", "Depok", "Wonocoyo", "Karangtengah", "Gayam", "Banjar", "Bulus", "Tumpak"],
        "Karangan": ["Karangan", "Sumber", "Kayen", "Jati", "Salamrejo", "Kedunglurah", "Mlinjon", "Buluagung"],
        "Trenggalek": ["Kelutan", "Surodakan", "Ngantru", "Sumbergedong", "Baworan", "Parakan", "Rejowinangun"],
        "Pogalan": ["Pogalan", "Ngetrep", "Ngadirejo", "Bendorejo", "Kedunglor", "Bantengan", "Gembleb"],
        "Watulimo": ["Prigi", "Tasikmadu", "Watulimo", "Watuagung", "Sengupaten", "Dukuh", "Kademangan"],
        "Kampak": ["Kampak", "Bendo", "Sengon", "Bogoran", "Ngadimulyo", "Karangrejo"],
        "Dongko": ["Dongko", "Pandean", "Cering", "Watuagung", "Siki", "Sumberbening"],
        "Munjungan": ["Munjungan", "Bendoroto", "Tawing", "Sobo", "Ngulungwetan", "Ngulungkulon"],
        "Bendungan": ["Sitimur", "Depok", "Sumurup", "Dompyong", "Srabah"],
        "Suruh": ["Suruh", "Nglebo", "Gondang", "Mlinjon", "Pucanganak"],
        "Tugu": ["Tugu", "Nglongsor", "Dermosari", "Gandusari", "Pucangan", "Nglinggis"]
    },
    "Kab. Tulungagung": {
        "Tulungagung": ["Botoran", "Kauman", "Kutoanyar", "Kepatihan", "Kampungdalem"],
        "Boyolangu": ["Beji", "Boyolangu", "Mendiro", "Wajak Kidul", "Pojok"],
        "Kedungwaru": ["Boro", "Lembupeteng", "Kedungwaru", "Tawangsari", "Pringgowicitro"]
    },
    "Kab. Ponorogo": {
        "Ponorogo": ["Kertosari", "Mangkujayan", "Banyudono", "Pologeol", "Brotonegaran"],
        "Babadan": ["Babadan", "Coper", "Demangan", "Kadipaten", "Patihan Wetan"],
        "Jenangan": ["Jenangan", "Nglayang", "Paringan", "Semanding", "Wates"]
    },
    "Kab. Kediri": {
        "Kota Kediri": ["Ngadirejo", "Balowerti", "Petiangan", "Kemasan", "Manisrenggo"],
        "Mojoroto": ["Mojoroto", "Bandar Kidul", "Mojo", "Gilang", "Sukorame"],
        "Pesantren": ["Pesantren", "Banjaran", "Burengan", "Betet", "Ketami"]
    },
    "Kota Surabaya": {
        "Gubeng": ["Kertajaya", "Pucang Sewu", "Mojo", "Barata Jaya", " Airlangga"],
        "Wonokromo": ["Darmo", "Sawunggaling", "Wonokromo", "Ngagel", "Ngagelrejo"],
        "Rungkut": ["Rungkut Kidul", "Medokan Ayu", "Kalirungkut", "Penjaringan Sari", "Rungkut Menanggal"]
    }
};

/* --- DATABASE RESEP (NUSANTARA & INTERNASIONAL) DENGAN BAHAN UTAMA --- */
const RECIPES_DATABASE = [
    {
        id: "r1",
        title: "Classic Creamy Mashed Potato",
        mainIngredient: "Kentang",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Kentang", "Susu Cair", "Mentega", "Garam", "Lada Hitam"],
        steps: [
            "Kupas dan potong kentang, lalu rebus hingga empuk (mudah ditusuk garpu).",
            "Tiriskan kentang, lalu haluskan menggunakan tumbukan kentang atau garpu.",
            "Panaskan susu cair dan mentega secara perlahan, lalu campurkan ke dalam kentang yang sudah dihaluskan.",
            "Bumbui dengan garam dan lada hitam secukupnya, aduk rata hingga lembut dan sajikan hangat."
        ]
    },
    {
        id: "r2",
        title: "Homemade Pan Margherita Pizza",
        mainIngredient: "Tepung Terigu",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Tepung Terigu", "Ragi Instan", "Air Hangat", "Saus Tomat", "Keju Mozzarella", "Daun Basil"],
        steps: [
            "Campurkan tepung terigu, ragi instan, dan air hangat, lalu uleni hingga kalis dan diamkan 30 menit.",
            "Pipihkan adonan di atas teflon atau pan anti lengket.",
            "Oleskan saus tomat di atas permukaan adonan, lalu taburi keju mozzarella dan daun basil.",
            "Panggang di atas kompor dengan api kecil tertutup selama 15 menit hingga keju meleleh dan matang."
        ]
    },
    {
        id: "r3",
        title: "Spaghetti Aglio e Olio",
        mainIngredient: "Pasta",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Pasta / Spageti", "Bawang Putih", "Cabai Rawit", "Minyak Zaitun / Minyak Goreng", "Garam & Keju Parmesan"],
        steps: [
            "Rebus pasta hingga al dente, tiriskan dan sisakan sedikit air rebusannya.",
            "Tumis cincangan bawang putih dan cabai rawit dengan minyak zaitun hingga harum kekuningan.",
            "Masukkan pasta ke dalam tumisan, beri sedikit air rebusan pasta, garam, dan lada.",
            "Aduk cepat hingga merata dan sajikan dengan taburan keju parmesan."
        ]
    },
    {
        id: "r4",
        title: "Chicken Teriyaki Donburi",
        mainIngredient: "Ayam",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1604908176997-125f2596f37c?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Ayam", "Kecap Manis", "Saus Teriyaki", "Bawang Bombay", "Bawang Putih"],
        steps: [
            "Potong daging ayam menjadi dadu kecil, lalu marinasi sebentar dengan kecap manis.",
            "Tumis bawang putih dan bawang bombay hingga harum.",
            "Masukkan potongan ayam, masak hingga berubah warna, lalu tuangkan saus teriyaki.",
            "Masak hingga kuah mengental dan meresap sempurna, sajikan di atas nasi hangat."
        ]
    },
    {
        id: "r5",
        title: "Sambal Goreng Kentang Ati",
        mainIngredient: "Kentang",
        category: "Nusantara",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Kentang", "Hati Ayam", "Bawang Merah", "Bawang Putih", "Cabai Merah", "Santan"],
        steps: [
            "Potong dadu kentang lalu goreng hingga kering; rebus dan potong dadu hati ayam.",
            "Haluskan bumbu (bawang merah, bawang putih, cabai merah) lalu tumis hingga harum.",
            "Masukkan santan, lengkuas, dan daun salam, aduk hingga mendidih.",
            "Masukkan kentang dan hati ayam goreng, aduk rata hingga bumbu meresap."
        ]
    },
    {
        id: "r6",
        title: "Sayur Bayam Segar Kuah Bening",
        mainIngredient: "Sayuran",
        category: "Nusantara",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Sayuran", "Bawang Merah", "Temu Kunci", "Garam", "Gula Pasir"],
        steps: [
            "Petik daun bayam segar dan cuci bersih.",
            "Didihkan air di panci, masukkan irisan bawang merah dan temu kunci yang telah di memarkan.",
            "Masukkan daun bayam, tambahkan garam dan sedikit gula pasir.",
            "Masak sebentar (jangan terlalu lama agar nutrisi bayam tetap terjaga), lalu sajikan."
        ]
    },
    {
        id: "r7",
        title: "Omelette Keju Ala Hotel",
        mainIngredient: "Lauk Pauk",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Lauk Pauk", "Susu Cair", "Keju Cheddar", "Mentega", "Garam & Lada"],
        steps: [
            "Pecahkan telur ke dalam mangkuk, tambahkan sedikit susu cair, garam, dan lada, lalu kocok lepas.",
            "Panaskan mentega di atas teflon dengan api kecil.",
            "Tuang kocokan telur, biarkan setengah matang lalu taburkan keju parut di atasnya.",
            "Gulung perlahan telur dan angkat saat matang sempurna."
        ]
    },
    {
        id: "r8",
        title: "French Toast Susu Kayu Manis",
        mainIngredient: "Roti Tawar",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Roti Tawar", "Susu Cair", "Telur", "Bubuk Kayu Manis", "Mentega"],
        steps: [
            "Kocok lepas telur bersama susu cair dan sejumput bubuk kayu manis di piring datar.",
            "Celupkan selembar roti tawar ke dalam adonan hingga meresap di kedua sisinya.",
            "Panggang di atas pan beroles mentega dengan api sedang hingga kecokelatan di kedua sisi.",
            "Sajikan selagi hangat dengan madu atau kental manis."
        ]
    }
];

/* --- KATEGORI & FALLBACK GAMBAR --- */
const CATEGORY_DEFAULT_IMAGES = {
    "Sayuran": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "Lauk Pauk": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    "Buah": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
    "Makanan Matang": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    "Bumbu": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
};

/* --- STATE APLIKASI --- */
let currentUser = null;
let currentTab = 'sharing';
let currentSharingFilter = 'Semua';

let sharedItems = [
    {
        id: "sh-1",
        name: "Sayur Bayam Segar",
        category: "Sayuran",
        qty: "2 Ikat",
        condition: "Baru dipetik dari kebun pagi ini",
        kab: "Kab. Trenggalek",
        kec: "Durenan",
        desa: "Kendalrejo",
        rtrw: "RT 02 / RW 01",
        user: "Bu Siti Aminah",
        phone: "081234567890",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
        status: "available",
        timestamp: "10 menit lalu"
    },
    {
        id: "sh-2",
        name: "Tempe & Tahu Putih Segar",
        category: "Lauk Pauk",
        qty: "3 Bungkus",
        condition: "Sisa stok warung sore, sangat layak",
        kab: "Kab. Trenggalek",
        kec: "Durenan",
        desa: "Baruharjo",
        rtrw: "RT 01 / RW 03",
        user: "Pak Budi Santoso",
        phone: "081987654321",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        status: "available",
        timestamp: "1 jam lalu"
    }
];

let pantryItems = [
    { id: "p-1", name: "Kentang", category: "Sayuran", qty: "1.5 kg" },
    { id: "p-2", name: "Tepung Terigu", category: "Bumbu", qty: "500 gram" },
    { id: "p-3", name: "Susu Cair", category: "Lauk Pauk", qty: "1 Kotak (250ml)" }
];

let userVouchers = [
    { id: "v-1", title: "Diskon Rp 10.000 Warung Berkah", pts: 30, desc: "Potongan harga di semua menu warung mitra.", code: "DAPURSEHAT10" },
    { id: "v-2", title: "Gratis Es Teh Manis / Minuman", pts: 15, desc: "Klaim di seluruh mitra UMKM DapurBerbagi.", code: "SEGAR15" }
];

let umkmList = [
    { id: "u-1", name: "Warung Berkah Ibu Siti", address: "Jl. Raya Durenan No. 12, Kendalrejo", category: "Kuliner Nusantara", status: "Mitra Aktif" },
    { id: "u-2", name: "Toko Sembako Barokah", address: "Pusat Pasar Tradisional Durenan", category: "Bahan Pokok", status: "Mitra Aktif" }
];

let userStats = {
    points: 45,
    savedFoodKg: 2.5,
    sharedCount: 3
};

/* --- INISIALISASI SAAT HALAMAN DIMUAT --- */
window.onload = function() {
    initRegionDropdowns();
    checkSavedUser();
    renderCommonIngredientsDatalist();
    renderRecipesList();
};

/* --- SETUP DROPDOWN KABUPATEN, KECAMATAN, DESA --- */
function initRegionDropdowns() {
    const kabSelects = [document.getElementById('login-kab'), document.getElementById('profile-kab')];
    kabSelects.forEach(select => {
        if (!select) return;
        select.innerHTML = '<option value="">-- Pilih Kabupaten / Kota --</option>';
        Object.keys(REGION_DATA).forEach(kab => {
            const opt = document.createElement('option');
            opt.value = kab;
            opt.textContent = kab;
            select.appendChild(opt);
        });
    });
}

function updateKecamatanDropdown() {
    const kab = document.getElementById('login-kab').value;
    const kecSelect = document.getElementById('login-kec');
    const desaSelect = document.getElementById('login-desa');
    
    kecSelect.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
    desaSelect.innerHTML = '<option value="">-- Pilih Desa/Kelurahan --</option>';
    
    if (kab && REGION_DATA[kab]) {
        Object.keys(REGION_DATA[kab]).forEach(kec => {
            const opt = document.createElement('option');
            opt.value = kec;
            opt.textContent = kec;
            kecSelect.appendChild(opt);
        });
    }
}

function updateDesaDropdown() {
    const kab = document.getElementById('login-kab').value;
    const kec = document.getElementById('login-kec').value;
    const desaSelect = document.getElementById('login-desa');
    
    desaSelect.innerHTML = '<option value="">-- Pilih Desa/Kelurahan --</option>';
    
    if (kab && kec && REGION_DATA[kab][kec]) {
        REGION_DATA[kab][kec].forEach(desa => {
            const opt = document.createElement('option');
            opt.value = desa;
            opt.textContent = desa;
            desaSelect.appendChild(opt);
        });
    }
}

function updateProfileKecamatan() {
    const kab = document.getElementById('profile-kab').value;
    const kecSelect = document.getElementById('profile-kec');
    const desaSelect = document.getElementById('profile-desa');
    
    kecSelect.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
    desaSelect.innerHTML = '<option value="">-- Pilih Desa/Kelurahan --</option>';
    
    if (kab && REGION_DATA[kab]) {
        Object.keys(REGION_DATA[kab]).forEach(kec => {
            const opt = document.createElement('option');
            opt.value = kec;
            opt.textContent = kec;
            kecSelect.appendChild(opt);
        });
    }
}

function updateProfileDesa() {
    const kab = document.getElementById('profile-kab').value;
    const kec = document.getElementById('profile-kec').value;
    const desaSelect = document.getElementById('profile-desa');
    
    desaSelect.innerHTML = '<option value="">-- Pilih Desa/Kelurahan --</option>';
    
    if (kab && kec && REGION_DATA[kab][kec]) {
        REGION_DATA[kab][kec].forEach(desa => {
            const opt = document.createElement('option');
            opt.value = desa;
            opt.textContent = desa;
            desaSelect.appendChild(opt);
        });
    }
}

/* --- AUTENTIKASI / LOGIN --- */
function handleUserLogin(event) {
    event.preventDefault();
    const name = document.getElementById('login-name').value.trim();
    const phone = document.getElementById('login-phone').value.trim();
    const kab = document.getElementById('login-kab').value;
    const kec = document.getElementById('login-kec').value;
    const desa = document.getElementById('login-desa').value;
    const rtrw = document.getElementById('login-rt').value.trim();

    currentUser = { name, phone, kab, kec, desa, rtrw };
    localStorage.setItem('dapur_user', JSON.stringify(currentUser));

    document.getElementById('login-screen').classList.add('hidden');
    updateAppUI();
}

function checkSavedUser() {
    const saved = localStorage.getItem('dapur_user');
    if (saved) {
        currentUser = JSON.parse(saved);
        document.getElementById('login-screen').classList.add('hidden');
        updateAppUI();
    }
}

function updateAppUI() {
    if (!currentUser) return;
    
    document.getElementById('user-location-badge').textContent = `${currentUser.desa}, ${currentUser.rtrw}`;
    document.getElementById('feed-location-subtitle').textContent = `Wilayah aktif: ${currentUser.desa} (${currentUser.rtrw})`;
    
    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-phone').textContent = currentUser.phone;
    document.getElementById('profile-address').textContent = `${currentUser.kab} > Kec. ${currentUser.kec} > ${currentUser.desa}, ${currentUser.rtrw}`;
    document.getElementById('profile-initials').textContent = currentUser.name.charAt(0).toUpperCase();

    renderSharingFeed();
    renderPantryItems();
    renderVouchers();
    renderUmkmList();
    renderStats();
}

/* --- NAVIGASI TAB --- */
function switchTab(tabId) {
    currentTab = tabId;
    const tabs = ['sharing', 'pantry', 'voucher', 'umkm', 'profile'];
    
    tabs.forEach(t => {
        const sec = document.getElementById(`tab-${t}`);
        const btn = document.getElementById(`nav-btn-${t}`);
        if (t === tabId) {
            sec.classList.remove('hidden');
            btn.className = "nav-btn flex flex-col items-center text-emerald-600 space-y-0.5";
        } else {
            sec.classList.add('hidden');
            btn.className = "nav-btn flex flex-col items-center text-slate-400 space-y-0.5";
        }
    });
}

/* --- BERBAGI TETANGGA (SHARING FEED) --- */
function filterSharingCategory(cat) {
    currentSharingFilter = cat;
    document.querySelectorAll('.sharing-cat-btn').forEach(btn => {
        if (btn.textContent.trim() === cat) {
            btn.className = "sharing-cat-btn active px-3.5 py-1.5 rounded-full font-semibold bg-emerald-600 text-white whitespace-nowrap shadow-sm";
        } else {
            btn.className = "sharing-cat-btn px-3.5 py-1.5 rounded-full font-medium bg-white text-slate-600 border border-slate-200 whitespace-nowrap";
        }
    });
    renderSharingFeed();
}

function renderSharingFeed() {
    const listEl = document.getElementById('sharing-feed-list');
    listEl.innerHTML = '';

    let filtered = sharedItems;
    if (currentSharingFilter !== 'Semua') {
        filtered = sharedItems.filter(i => i.category === currentSharingFilter);
    }

    if (filtered.length === 0) {
        listEl.innerHTML = `
            <div class="bg-white p-8 rounded-2xl text-center border border-slate-100 shadow-sm">
                <i class="fa-solid fa-basket-shopping text-3xl text-slate-300 mb-2"></i>
                <p class="text-xs text-slate-500 font-medium">Belum ada makanan dibagikan untuk kategori ini di wilayahmu.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const isMyItem = currentUser && item.user === currentUser.name;
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden fade-in";
        card.innerHTML = `
            <div class="relative h-44 bg-slate-100">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" referrerpolicy="no-referrer" onerror="this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'">
                <span class="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    ${item.category}
                </span>
                <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
                    <i class="fa-solid fa-location-dot text-emerald-600 mr-1"></i> ${item.desa} (${item.rtrw})
                </span>
            </div>
            <div class="p-4 space-y-2">
                <div class="flex justify-between items-start">
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">${item.name}</h4>
                        <p class="text-xs text-emerald-600 font-medium">Jumlah: ${item.qty}</p>
                    </div>
                    <span class="text-[11px] text-slate-400">${item.timestamp}</span>
                </div>
                <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-600">
                    <span class="font-bold text-slate-700">Kondisi:</span> ${item.condition}
                </div>
                <div class="flex items-center justify-between pt-1">
                    <div class="flex items-center space-x-2">
                        <div class="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xs">
                            ${item.user.charAt(0)}
                        </div>
                        <div>
                            <p class="text-xs font-bold text-slate-800 leading-tight">${item.user}</p>
                            <p class="text-[10px] text-slate-400">Warga Setempat</p>
                        </div>
                    </div>
                    ${item.status === 'available' ? `
                        <button onclick="claimItem('${item.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md shadow-emerald-600/20 transition">
                            Ambil Makanan
                        </button>
                    ` : `
                        <span class="px-3 py-1.5 bg-slate-100 text-slate-400 font-bold rounded-xl text-xs">
                            Sudah Diambil
                        </span>
                    `}
                </div>
            </div>
        `;
        listEl.appendChild(card);
    });
}

function openShareModal() {
    document.getElementById('modal-share').classList.remove('hidden');
    document.getElementById('modal-share').classList.add('flex');
}

function closeShareModal() {
    document.getElementById('modal-share').classList.add('hidden');
    document.getElementById('modal-share').classList.remove('flex');
}

function handleShareSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('share-item-name').value.trim();
    const category = document.getElementById('share-item-category').value;
    const qty = document.getElementById('share-item-qty').value.trim();
    const condition = document.getElementById('share-item-condition').value.trim();
    const photoInput = document.getElementById('share-item-photo');

    let imageUrl = CATEGORY_DEFAULT_IMAGES[category] || CATEGORY_DEFAULT_IMAGES["Sayuran"];

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            saveNewSharedItem(name, category, qty, condition, e.target.result);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        saveNewSharedItem(name, category, qty, condition, imageUrl);
    }
}

function saveNewSharedItem(name, category, qty, condition, imageUrl) {
    const newItem = {
        id: "sh-" + Date.now(),
        name,
        category,
        qty,
        condition,
        kab: currentUser.kab,
        kec: currentUser.kec,
        desa: currentUser.desa,
        rtrw: currentUser.rtrw,
        user: currentUser.name,
        phone: currentUser.phone,
        image: imageUrl,
        status: "available",
        timestamp: "Baru saja"
    };

    sharedItems.unshift(newItem);
    userStats.points += 15;
    userStats.sharedCount += 1;
    userStats.savedFoodKg += 0.8;

    updateStatsDisplay();
    closeShareModal();
    renderSharingFeed();
    document.getElementById('onboarding-form')?.reset(); // or share form reset
}

function claimItem(id) {
    const item = sharedItems.find(i => i.id === id);
    if (!item) return;

    if (confirm(`Konfirmasi pengambilan makanan "${item.name}" dari ${item.user}?\nSilakan hubungi WhatsApp pemilik di: ${item.phone} untuk koordinasi jemput.`)) {
        item.status = "claimed";
        userStats.points += 10;
        userStats.savedFoodKg += 0.5;
        updateStatsDisplay();
        renderSharingFeed();
        alert("Berhasil mengklaim makanan! Silakan koordinasikan pengambilan dengan tetangga pemrakarsa.");
    }
}

/* --- PELACAK KULKAS & RESEP CERDAS --- */
function renderPantryItems() {
    const listEl = document.getElementById('pantry-items-list');
    listEl.innerHTML = '';

    if (pantryItems.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-slate-400 col-span-2 text-center py-4">Kulkas masih kosong. Tambahkan stok bahan makananmu.</p>`;
        return;
    }

    pantryItems.forEach(item => {
        const div = document.createElement('div');
        div.className = "bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between";
        div.innerHTML = `
            <div>
                <h5 class="font-bold text-slate-800 text-xs">${item.name}</h5>
                <p class="text-[10px] text-emerald-600 font-medium">${item.qty} • ${item.category}</p>
            </div>
            <button onclick="removePantryItem('${item.id}')" class="text-slate-400 hover:text-rose-500 text-xs">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        listEl.appendChild(div);
    });
}

function openAddPantryModal() {
    document.getElementById('modal-pantry').classList.remove('hidden');
    document.getElementById('modal-pantry').classList.add('flex');
}

function closeAddPantryModal() {
    document.getElementById('modal-pantry').classList.add('hidden');
    document.getElementById('modal-pantry').classList.remove('flex');
}

function handlePantrySubmit(event) {
    event.preventDefault();
    const name = document.getElementById('pantry-name').value.trim();
    const category = document.getElementById('pantry-category').value;
    const qty = document.getElementById('pantry-qty').value.trim();

    pantryItems.push({
        id: "p-" + Date.now(),
        name,
        category,
        qty
    });

    closeAddPantryModal();
    renderPantryItems();
    renderCommonIngredientsDatalist();
    renderRecipesList();
}

function removePantryItem(id) {
    pantryItems = pantryItems.filter(i => i.id !== id);
    renderPantryItems();
    renderRecipesList();
}

function renderCommonIngredientsDatalist() {
    const datalist = document.getElementById('common-ingredients-list');
    datalist.innerHTML = '';
    
    // Ambil semua bahan unik dari resep & kulkas
    const allIngs = new Set();
    RECIPES_DATABASE.forEach(r => allIngs.add(r.mainIngredient));
    pantryItems.forEach(p => allIngs.add(p.name));

    allIngs.forEach(ing => {
        const opt = document.createElement('option');
        opt.value = ing;
        datalist.appendChild(opt);
    });
}

function filterRecipesByMainIngredient() {
    renderRecipesList();
}

function resetRecipeFilter() {
    document.getElementById('recipe-main-ingredient-search').value = '';
    renderRecipesList();
}

function renderRecipesList() {
    const listEl = document.getElementById('recipes-list');
    listEl.innerHTML = '';

    const query = document.getElementById('recipe-main-ingredient-search')?.value.toLowerCase().trim() || '';

    let recipes = RECIPES_DATABASE;
    if (query) {
        recipes = RECIPES_DATABASE.filter(r => r.mainIngredient.toLowerCase().includes(query) || r.title.toLowerCase().includes(query));
    }

    if (recipes.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">Tidak ada resep yang cocok dengan bahan utama tersebut.</p>`;
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = "bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-center space-x-3 cursor-pointer hover:border-emerald-200 transition";
        card.onclick = () => openRecipeDetail(recipe.id);
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="w-16 h-16 object-cover rounded-xl shrink-0" referrerpolicy="no-referrer">
            <div class="flex-1 min-w-0">
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">${recipe.category}</span>
                <h4 class="font-bold text-slate-900 text-xs mt-1 truncate">${recipe.title}</h4>
                <p class="text-[10px] text-slate-500 mt-0.5">Bahan Utama: <span class="font-semibold text-slate-700">${recipe.mainIngredient}</span></p>
            </div>
            <div class="text-slate-400 text-xs pr-1">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;
        listEl.appendChild(card);
    });
}

function openRecipeDetail(id) {
    const recipe = RECIPES_DATABASE.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('modal-recipe-title').textContent = recipe.title;
    document.getElementById('modal-recipe-img').src = recipe.image;
    
    const ingList = document.getElementById('modal-recipe-ingredients');
    ingList.innerHTML = '';
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        ingList.appendChild(li);
    });

    const stepList = document.getElementById('modal-recipe-steps');
    stepList.innerHTML = '';
    recipe.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepList.appendChild(li);
    });

    document.getElementById('modal-recipe-detail').classList.remove('hidden');
    document.getElementById('modal-recipe-detail').classList.add('flex');
}

function closeRecipeModal() {
    document.getElementById('modal-recipe-detail').classList.add('hidden');
    document.getElementById('modal-recipe-detail').classList.remove('flex');
}

/* --- DOMPET VOUCHER & REWARD --- */
function renderVouchers() {
    const listEl = document.getElementById('voucher-list');
    listEl.innerHTML = '';

    document.getElementById('voucher-points-display').textContent = `${userStats.points} Poin`;
    document.getElementById('header-points').textContent = `${userStats.points} Poin`;

    userVouchers.forEach(v => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between";
        card.innerHTML = `
            <div>
                <span class="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">${v.pts} Poin</span>
                <h4 class="font-bold text-slate-900 text-xs mt-1.5">${v.title}</h4>
                <p class="text-[11px] text-slate-500 mt-0.5">${v.desc}</p>
            </div>
            <button onclick="claimVoucher('${v.pts}', '${v.code}')" class="px-3.5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold rounded-xl text-xs border border-emerald-200 transition shrink-0 ml-2">
                Klaim Kupon
            </button>
        `;
        listEl.appendChild(card);
    });
}

function claimVoucher(pts, code) {
    if (userStats.points >= parseInt(pts)) {
        userStats.points -= parseInt(pts);
        renderVouchers();
        alert(`Berhasil mengklaim voucher!\nKode Kupon Anda: ${code}\nTunjukkan kode ini ke Mitra UMKM terdekat untuk mendapatkan potongan.`);
    } else {
        alert("Poin kontribusimu belum cukup untuk mengklaim voucher ini. Ayo berbagi makanan lebih banyak!");
    }
}

/* --- MITRA UMKM & STATISTIK --- */
function renderUmkmList() {
    const listEl = document.getElementById('umkm-list');
    listEl.innerHTML = '';

    umkmList.forEach(u => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between";
        card.innerHTML = `
            <div>
                <div class="flex items-center space-x-2">
                    <h4 class="font-bold text-slate-900 text-xs">${u.name}</h4>
                    <span class="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">${u.status}</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-1"><i class="fa-solid fa-location-dot text-emerald-600 mr-1"></i> ${u.address}</p>
                <p class="text-[10px] text-slate-400 mt-0.5">Kategori: ${u.category}</p>
            </div>
        `;
        listEl.appendChild(card);
    });
}

function renderStats() {
    document.getElementById('stat-saved-food').textContent = `${userStats.savedFoodKg.toFixed(1)} kg`;
    document.getElementById('stat-shared-count').textContent = `${userStats.sharedCount} Paket`;
}

function updateStatsDisplay() {
    renderStats();
    document.getElementById('header-points').textContent = `${userStats.points} Poin`;
}

/* --- PROFIL & PENGATURAN --- */
function updateUserProfileLocation(event) {
    event.preventDefault();
    const kab = document.getElementById('profile-kab').value;
    const kec = document.getElementById('profile-kec').value;
    const desa = document.getElementById('profile-desa').value;
    const rtrw = document.getElementById('profile-rt').value.trim();

    if (kab && kec && desa && rtrw) {
        currentUser.kab = kab;
        currentUser.kec = kec;
        currentUser.desa = desa;
        currentUser.rtrw = rtrw;
        localStorage.setItem('dapur_user', JSON.stringify(currentUser));
        updateAppUI();
        alert("Alamat wilayah berhasil diperbarui!");
    }
}

function resetAppData() {
    if (confirm("Yakin ingin mereset seluruh data aplikasi dan keluar akun?")) {
        localStorage.clear();
        location.reload();
    }
}

function openGamificationModal() {
    switchTab('voucher');
}
