fetch('data.csv ')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').slice(2);
    const table = document.getElementById('table-body');

    rows.forEach(row => {
      const cols = row.split(';');
      if (cols.length < 7 || cols[0] === 'NO') return;
      // Skip baris kosong atau tidak lengkap
      const tr = document.createElement('tr');
     tr.innerHTML = `
        <td class="No">${cols[0]}</td>
        <td class="Tanggal">${cols[1]}</td>
        <td style="color:${cols[2]=='In'?'white':'white'}" class="Jenis">
            ${cols[2]}
        </td>
        <td class="QTY">${cols[3]}</td>
        <td class="Keterangan">${cols[4]}</td>
        <td class="Nominal">Rp ${Number(cols[5].replace(/[^0-9]/g,'')).toLocaleString('id-ID')}</td>
        <td class="sisa-saldo">Rp ${Number(cols[6].replace(/[^0-9]/g,'')).toLocaleString('id-ID')}</td>
        `;
      table.appendChild(tr);
    });
    })
    .catch(error => console.error('Error:', error));

/*const form = document.getElementById('form-expense');
const table = document.getElementById('table-body');

let data = [];

function renderTable() {
  table.innerHTML = "";

  let saldo = 0;

  data.forEach((item, index) => {
    if (item.jenis === "In") {
      saldo += item.nominal;
    } else {
      saldo -= item.nominal;
    }

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.tanggal}</td>
      <td>${item.jenis}</td>
      <td>${item.qty}</td>
      <td>${item.keterangan}</td>
      <td>Rp ${item.nominal.toLocaleString('id-ID')}</td>
      <td>Rp ${saldo.toLocaleString('id-ID')}</td>
    `;

    table.appendChild(tr);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const item = {
    tanggal: document.getElementById('tanggal').value,
    jenis: document.getElementById('jenis').value,
    qty: Number(document.getElementById('qty').value),
    keterangan: document.getElementById('keterangan').value,
    nominal: Number(document.getElementById('nominal').value)
  };

  data.push(item);

  renderTable();

  form.reset();
});*/
/*const form = document.getElementById('form-expense');
const table = document.getElementById('table-body');

let data = JSON.parse(localStorage.getItem('data')) || [];

renderTable();

function renderTable() {
  table.innerHTML = "";

  let saldo = 0;

  data.forEach((item, index) => {
    if (item.jenis === "In") {
      saldo += item.nominal;
    } else {
      saldo -= item.nominal;
    }

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.tanggal}</td>
      <td>${item.jenis}</td>
      <td>${item.qty}</td>
      <td>${item.keterangan}</td>
      <td>Rp ${item.nominal.toLocaleString('id-ID')}</td>
      <td>Rp ${saldo.toLocaleString('id-ID')}</td>
    `;

    table.appendChild(tr);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const item = {
    tanggal: document.getElementById('tanggal').value,
    jenis: document.getElementById('jenis').value,
    qty: Number(document.getElementById('qty').value),
    keterangan: document.getElementById('keterangan').value,
    nominal: Number(document.getElementById('nominal').value)
  };

  data.push(item);

  // 🔥 ini yang bikin data tidak hilang
  localStorage.setItem('data', JSON.stringify(data));

  renderTable();

  form.reset();
});*/