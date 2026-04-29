// ===== Dummy Data Pasien =====
const dataPasien = [
  {
    id: 'RM-20260001',
    nama: 'Ahmad Fadillah',
    inisial: 'AF',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Jakarta',
    tanggalLahir: '1990-05-14',
    umur: 36,
    alamat: 'Jl. Merdeka No. 45, Jakarta Selatan',
    telepon: '0812-3456-7890',
    email: 'ahmad.fadillah@email.com',
    golDarah: 'A+',
    jadwal: '2026-04-29 09:00',
    dokter: 'dr. Siti Nurhaliza, Sp.PD',
    spesialis: 'Penyakit Dalam',
    status: 'waiting',
    statusLabel: 'Menunggu',
    alergi: ['Penisilin', 'Sulfonamida'],
    asuransi: { provider: 'BPJS Kesehatan', nomor: '0001-2345-6789-0001', kelas: 'Kelas 1', berlaku: '31 Des 2026' },
    riwayat: [
      { tanggal: '2026-03-15', dokter: 'dr. Siti Nurhaliza, Sp.PD', diagnosis: 'Hipertensi Grade I', tindakan: 'Pemeriksaan tekanan darah, resep obat antihipertensi' },
      { tanggal: '2026-01-20', dokter: 'dr. Budi Santoso, Sp.JP', diagnosis: 'Kontrol Jantung Rutin', tindakan: 'EKG, pemeriksaan fisik, konsultasi pola hidup' },
      { tanggal: '2025-11-05', dokter: 'dr. Siti Nurhaliza, Sp.PD', diagnosis: 'Dispepsia', tindakan: 'Resep omeprazole, edukasi pola makan' }
    ]
  },
  {
    id: 'RM-20260002',
    nama: 'Dewi Sartika',
    inisial: 'DS',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Bandung',
    tanggalLahir: '1985-11-22',
    umur: 40,
    alamat: 'Jl. Asia Afrika No. 12, Bandung',
    telepon: '0813-5678-1234',
    email: 'dewi.sartika@email.com',
    golDarah: 'B+',
    jadwal: '2026-04-29 09:30',
    dokter: 'dr. Andi Wijaya, Sp.OG',
    spesialis: 'Obstetri & Ginekologi',
    status: 'in-progress',
    statusLabel: 'Sedang Diperiksa',
    alergi: ['Aspirin'],
    asuransi: { provider: 'Prudential', nomor: '0002-8765-4321-0002', kelas: 'Premium', berlaku: '15 Jun 2027' },
    riwayat: [
      { tanggal: '2026-03-01', dokter: 'dr. Andi Wijaya, Sp.OG', diagnosis: 'Pemeriksaan Kehamilan Trimester 2', tindakan: 'USG, pemeriksaan darah lengkap' },
      { tanggal: '2026-01-10', dokter: 'dr. Andi Wijaya, Sp.OG', diagnosis: 'Pemeriksaan Kehamilan Trimester 1', tindakan: 'USG awal, konsultasi nutrisi' }
    ]
  },
  {
    id: 'RM-20260003',
    nama: 'Budi Prasetyo',
    inisial: 'BP',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Surabaya',
    tanggalLahir: '1978-03-08',
    umur: 48,
    alamat: 'Jl. Tunjungan No. 78, Surabaya',
    telepon: '0815-9876-5432',
    email: 'budi.prasetyo@email.com',
    golDarah: 'O-',
    jadwal: '2026-04-29 10:00',
    dokter: 'dr. Maya Putri, Sp.M',
    spesialis: 'Mata',
    status: 'done',
    statusLabel: 'Selesai',
    alergi: [],
    asuransi: { provider: 'Allianz', nomor: '0003-1122-3344-0003', kelas: 'Gold', berlaku: '20 Mar 2027' },
    riwayat: [
      { tanggal: '2026-04-29', dokter: 'dr. Maya Putri, Sp.M', diagnosis: 'Miopia Progresif', tindakan: 'Pemeriksaan refraksi, resep kacamata baru' },
      { tanggal: '2025-10-15', dokter: 'dr. Maya Putri, Sp.M', diagnosis: 'Kontrol Mata Rutin', tindakan: 'Pemeriksaan visus, funduskopi' }
    ]
  },
  {
    id: 'RM-20260004',
    nama: 'Rina Wulandari',
    inisial: 'RW',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Yogyakarta',
    tanggalLahir: '1995-07-19',
    umur: 30,
    alamat: 'Jl. Malioboro No. 33, Yogyakarta',
    telepon: '0816-2233-4455',
    email: 'rina.wulandari@email.com',
    golDarah: 'AB+',
    jadwal: '2026-04-29 10:30',
    dokter: 'dr. Hendra Kusuma, Sp.THT',
    spesialis: 'THT',
    status: 'waiting',
    statusLabel: 'Menunggu',
    alergi: ['Ibuprofen', 'Codein', 'Latex'],
    asuransi: { provider: 'BPJS Kesehatan', nomor: '0004-5566-7788-0004', kelas: 'Kelas 2', berlaku: '31 Des 2026' },
    riwayat: [
      { tanggal: '2026-02-28', dokter: 'dr. Hendra Kusuma, Sp.THT', diagnosis: 'Sinusitis Akut', tindakan: 'Endoskopi hidung, resep antibiotik dan dekongestan' }
    ]
  },
  {
    id: 'RM-20260005',
    nama: 'Teguh Firmansyah',
    inisial: 'TF',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Semarang',
    tanggalLahir: '1988-12-03',
    umur: 37,
    alamat: 'Jl. Pandanaran No. 56, Semarang',
    telepon: '0817-6677-8899',
    email: 'teguh.f@email.com',
    golDarah: 'B-',
    jadwal: '2026-04-29 11:00',
    dokter: 'dr. Siti Nurhaliza, Sp.PD',
    spesialis: 'Penyakit Dalam',
    status: 'cancelled',
    statusLabel: 'Dibatalkan',
    alergi: ['Amoxicillin'],
    asuransi: { provider: 'AXA Mandiri', nomor: '0005-9900-1122-0005', kelas: 'Silver', berlaku: '10 Sep 2026' },
    riwayat: [
      { tanggal: '2025-12-20', dokter: 'dr. Siti Nurhaliza, Sp.PD', diagnosis: 'Demam Tifoid', tindakan: 'Pemeriksaan Widal, infus, resep antibiotik' },
      { tanggal: '2025-08-14', dokter: 'dr. Lisa Maharani, Sp.KK', diagnosis: 'Dermatitis Atopik', tindakan: 'Resep salep kortikosteroid, antihistamin oral' }
    ]
  },
  {
    id: 'RM-20260006',
    nama: 'Putri Handayani',
    inisial: 'PH',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Medan',
    tanggalLahir: '1992-09-25',
    umur: 33,
    alamat: 'Jl. Gatot Subroto No. 88, Medan',
    telepon: '0818-1122-3344',
    email: 'putri.handayani@email.com',
    golDarah: 'A-',
    jadwal: '2026-04-29 11:30',
    dokter: 'dr. Budi Santoso, Sp.JP',
    spesialis: 'Jantung & Pembuluh Darah',
    status: 'waiting',
    statusLabel: 'Menunggu',
    alergi: [],
    asuransi: { provider: 'Manulife', nomor: '0006-3344-5566-0006', kelas: 'Platinum', berlaku: '01 Jan 2028' },
    riwayat: [
      { tanggal: '2026-03-20', dokter: 'dr. Budi Santoso, Sp.JP', diagnosis: 'Palpitasi', tindakan: 'EKG, Holter monitor 24 jam' },
      { tanggal: '2025-12-10', dokter: 'dr. Budi Santoso, Sp.JP', diagnosis: 'Kontrol Jantung', tindakan: 'Ekokardiografi, pemeriksaan fisik' },
      { tanggal: '2025-06-15', dokter: 'dr. Siti Nurhaliza, Sp.PD', diagnosis: 'Anemia Defisiensi Besi', tindakan: 'Pemeriksaan darah lengkap, suplementasi zat besi' }
    ]
  },
  {
    id: 'RM-20260007',
    nama: 'Irfan Hakim',
    inisial: 'IH',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Makassar',
    tanggalLahir: '2000-01-30',
    umur: 26,
    alamat: 'Jl. Losari No. 21, Makassar',
    telepon: '0819-5566-7788',
    email: 'irfan.hakim@email.com',
    golDarah: 'O+',
    jadwal: '2026-04-29 13:00',
    dokter: 'dr. Maya Putri, Sp.M',
    spesialis: 'Mata',
    status: 'in-progress',
    statusLabel: 'Sedang Diperiksa',
    alergi: ['Erythromycin'],
    asuransi: { provider: 'BPJS Kesehatan', nomor: '0007-7788-9900-0007', kelas: 'Kelas 1', berlaku: '31 Des 2026' },
    riwayat: [
      { tanggal: '2025-09-12', dokter: 'dr. Maya Putri, Sp.M', diagnosis: 'Konjungtivitis Alergi', tindakan: 'Resep tetes mata antihistamin' }
    ]
  },
  {
    id: 'RM-20260008',
    nama: 'Sari Melati',
    inisial: 'SM',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Denpasar',
    tanggalLahir: '1983-06-11',
    umur: 42,
    alamat: 'Jl. Sunset Road No. 15, Denpasar',
    telepon: '0821-8899-0011',
    email: 'sari.melati@email.com',
    golDarah: 'A+',
    jadwal: '2026-04-29 13:30',
    dokter: 'dr. Hendra Kusuma, Sp.THT',
    spesialis: 'THT',
    status: 'done',
    statusLabel: 'Selesai',
    alergi: ['Seafood'],
    asuransi: { provider: 'AIA', nomor: '0008-0011-2233-0008', kelas: 'Gold', berlaku: '28 Feb 2027' },
    riwayat: [
      { tanggal: '2026-04-29', dokter: 'dr. Hendra Kusuma, Sp.THT', diagnosis: 'Otitis Media Akut', tindakan: 'Otoskopi, resep antibiotik tetes telinga' },
      { tanggal: '2025-11-20', dokter: 'dr. Hendra Kusuma, Sp.THT', diagnosis: 'Vertigo', tindakan: 'Manuver Epley, resep betahistin' }
    ]
  }
];

// ===== Utility Functions =====
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' +
         d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function getStatusBadge(status, label) {
  return `<span class="badge-status ${status}"><span class="dot"></span>${label}</span>`;
}

// ===== Render Table (index.html) =====
function renderTable(data) {
  const tbody = document.getElementById('patientTableBody');
  if (!tbody) return;

  tbody.innerHTML = data.map((p, i) => `
    <tr>
      <td style="font-weight:600;color:var(--gray-600)">${i + 1}</td>
      <td><span class="patient-id">${p.id}</span></td>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="user-avatar" style="width:34px;height:34px;font-size:0.72rem">${p.inisial}</div>
          <div>
            <div class="patient-name">${p.nama}</div>
            <div class="patient-id">${p.jenisKelamin} • ${p.umur} thn</div>
          </div>
        </div>
      </td>
      <td>${formatDateTime(p.jadwal)}</td>
      <td>
        <div style="font-weight:500">${p.dokter}</div>
        <div class="patient-id">${p.spesialis}</div>
      </td>
      <td>${getStatusBadge(p.status, p.statusLabel)}</td>
      <td>
        <div style="display:flex;gap:6px">
          <a href="detail.html?id=${p.id}" class="btn-action view" title="Detail"><i class="bi bi-eye"></i></a>
          <button class="btn-action edit" title="Edit" onclick="openEditModal('${p.id}')"><i class="bi bi-pencil"></i></button>
          <button class="btn-action delete" title="Hapus" onclick="confirmDelete('${p.id}')"><i class="bi bi-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ===== Filter & Search =====
function filterData() {
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const statusFilter = document.getElementById('filterStatus')?.value || '';
  const dokterFilter = document.getElementById('filterDokter')?.value || '';

  let filtered = dataPasien.filter(p => {
    const matchSearch = p.nama.toLowerCase().includes(search) || p.id.toLowerCase().includes(search);
    const matchStatus = !statusFilter || p.status === statusFilter;
    const matchDokter = !dokterFilter || p.dokter === dokterFilter;
    return matchSearch && matchStatus && matchDokter;
  });

  renderTable(filtered);
  updateStats(filtered);
}

function updateStats(data) {
  const total = document.getElementById('statTotal');
  const waiting = document.getElementById('statWaiting');
  const inProgress = document.getElementById('statInProgress');
  const done = document.getElementById('statDone');
  if (total) total.textContent = data.length;
  if (waiting) waiting.textContent = data.filter(p => p.status === 'waiting').length;
  if (inProgress) inProgress.textContent = data.filter(p => p.status === 'in-progress').length;
  if (done) done.textContent = data.filter(p => p.status === 'done').length;
}

// ===== Detail Page =====
function renderDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const patient = dataPasien.find(p => p.id === id);

  if (!patient) {
    document.querySelector('.page-content').innerHTML = `
      <div style="text-align:center;padding:60px">
        <i class="bi bi-exclamation-circle" style="font-size:3rem;color:var(--gray-300)"></i>
        <h4 style="margin-top:16px;color:var(--gray-600)">Pasien tidak ditemukan</h4>
        <a href="index.html" class="btn-primary-custom" style="margin-top:16px;text-decoration:none">
          <i class="bi bi-arrow-left"></i> Kembali ke Daftar
        </a>
      </div>`;
    return;
  }

  // Header
  document.getElementById('detailAvatar').textContent = patient.inisial;
  document.getElementById('detailNama').textContent = patient.nama;
  document.getElementById('detailId').innerHTML = `<i class="bi bi-hash"></i> ${patient.id}`;
  document.getElementById('detailGender').innerHTML = `<i class="bi bi-gender-ambiguous"></i> ${patient.jenisKelamin}`;
  document.getElementById('detailAge').innerHTML = `<i class="bi bi-calendar3"></i> ${patient.umur} tahun`;
  document.getElementById('detailStatusBadge').innerHTML = getStatusBadge(patient.status, patient.statusLabel);

  // Biodata
  document.getElementById('bioNamaLengkap').textContent = patient.nama;
  document.getElementById('bioJenisKelamin').textContent = patient.jenisKelamin;
  document.getElementById('bioTempatLahir').textContent = `${patient.tempatLahir}, ${formatDate(patient.tanggalLahir)}`;
  document.getElementById('bioGolDarah').textContent = patient.golDarah;
  document.getElementById('bioAlamat').textContent = patient.alamat;
  document.getElementById('bioTelepon').textContent = patient.telepon;
  document.getElementById('bioEmail').textContent = patient.email;
  document.getElementById('bioJadwal').textContent = formatDateTime(patient.jadwal);
  document.getElementById('bioDokter').textContent = patient.dokter;
  document.getElementById('bioSpesialis').textContent = patient.spesialis;

  // Alergi
  const alergiContainer = document.getElementById('alergiContainer');
  if (patient.alergi.length === 0) {
    alergiContainer.innerHTML = '<span style="color:var(--gray-600);font-size:0.85rem">Tidak ada riwayat alergi</span>';
  } else {
    alergiContainer.innerHTML = patient.alergi.map(a => `<span class="allergy-tag"><i class="bi bi-exclamation-triangle-fill"></i> ${a}</span>`).join('');
  }

  // Asuransi
  document.getElementById('insProvider').textContent = patient.asuransi.provider;
  document.getElementById('insNomor').textContent = patient.asuransi.nomor;
  document.getElementById('insKelas').innerHTML = `<span>Kelas</span><strong>${patient.asuransi.kelas}</strong>`;
  document.getElementById('insBerlaku').innerHTML = `<span>Berlaku Hingga</span><strong>${patient.asuransi.berlaku}</strong>`;

  // Riwayat Kunjungan
  const riwayatContainer = document.getElementById('riwayatContainer');
  riwayatContainer.innerHTML = patient.riwayat.map(r => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="time-label">${formatDate(r.tanggal)}</span>
        <h6>${r.diagnosis}</h6>
        <p><strong>Dokter:</strong> ${r.dokter}</p>
        <p>${r.tindakan}</p>
      </div>
    </div>
  `).join('');
}

// ===== Modal Tambah/Edit =====
function openAddModal() {
  const modal = new bootstrap.Modal(document.getElementById('patientModal'));
  document.getElementById('modalTitle').textContent = 'Tambah Pasien Baru';
  document.getElementById('patientForm').reset();
  modal.show();
}

function openEditModal(id) {
  const patient = dataPasien.find(p => p.id === id);
  if (!patient) return;
  const modal = new bootstrap.Modal(document.getElementById('patientModal'));
  document.getElementById('modalTitle').textContent = 'Edit Data Pasien';
  document.getElementById('inputNama').value = patient.nama;
  document.getElementById('inputGender').value = patient.jenisKelamin;
  document.getElementById('inputTempatLahir').value = patient.tempatLahir;
  document.getElementById('inputTanggalLahir').value = patient.tanggalLahir;
  document.getElementById('inputAlamat').value = patient.alamat;
  document.getElementById('inputTelepon').value = patient.telepon;
  document.getElementById('inputEmail').value = patient.email;
  document.getElementById('inputGolDarah').value = patient.golDarah;
  document.getElementById('inputDokter').value = patient.dokter;
  document.getElementById('inputJadwal').value = patient.jadwal.replace(' ', 'T');
  modal.show();
}

function confirmDelete(id) {
  if (confirm(`Apakah Anda yakin ingin menghapus data pasien ${id}?`)) {
    alert('Data akan dihapus setelah terhubung dengan database.');
  }
}

function savePatient() {
  alert('Data akan disimpan setelah terhubung dengan database MySQL.');
  bootstrap.Modal.getInstance(document.getElementById('patientModal')).hide();
}

// ===== Sidebar Toggle =====
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('show');
  document.querySelector('.sidebar-overlay').classList.toggle('show');
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // List page
  if (document.getElementById('patientTableBody')) {
    renderTable(dataPasien);
    updateStats(dataPasien);

    document.getElementById('searchInput')?.addEventListener('input', filterData);
    document.getElementById('filterStatus')?.addEventListener('change', filterData);
    document.getElementById('filterDokter')?.addEventListener('change', filterData);
  }

  // Detail page
  if (document.getElementById('detailAvatar')) {
    renderDetail();
  }

  // Sidebar overlay close
  document.querySelector('.sidebar-overlay')?.addEventListener('click', toggleSidebar);
});
