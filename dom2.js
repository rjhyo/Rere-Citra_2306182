document.addEventListener("DOMContentLoaded", function() {
    // Buat elemen container
    const container = document.querySelector('.container');

    // Buat elemen form dan konten
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const title = document.createElement('h1');
    title.textContent = "Formulir Pendaftaran Sukarelawan";
    formContainer.appendChild(title);

    const registrationForm = document.createElement('form');
    registrationForm.id = "registrationForm";

    const fields = [
        { label: "Nama:", id: "nama", required: true },
        { label: "NIM:", id: "nim", required: true },
        { label: "Kelas:", id: "kelas", required: true },
        { label: "Jenis Kelamin:", id: "jeniskelamin", required: true }
    ];

    fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        registrationForm.appendChild(label);

        const input = document.createElement('input');
        input.type = "text";
        input.id = field.id;
        input.name = field.id;
        input.required = field.required;
        registrationForm.appendChild(input);
        registrationForm.appendChild(document.createElement('br'));
    });

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Kirim";
    registrationForm.appendChild(submitButton);

    const displayData = document.createElement('div');
    displayData.id = "displayData";
    displayData.classList.add('hidden');
    const displayTitle = document.createElement('h2');
    displayTitle.textContent = "Data yang Anda Masukkan";
    displayData.appendChild(displayTitle);

    const displayFields = [
        { label: "Nama:", id: "displayNama" },
        { label: "NIM:", id: "displayNIM" },
        { label: "Kelas:", id: "displayKelas" },
        { label: "Jenis Kelamin:", id: "displayJenisKelamin" }
    ];

    displayFields.forEach(field => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${field.label}</strong> <span id="${field.id}">-</span>`;
        displayData.appendChild(p);
    });

    formContainer.appendChild(registrationForm);
    formContainer.appendChild(displayData);
    container.appendChild(formContainer);

    // Ambil elemen input dan display area
    const inputs = document.querySelectorAll('input');
    const displayNama = document.getElementById('displayNama');
    const displayNIM = document.getElementById('displayNIM');
    const displayKelas = document.getElementById('displayKelas');
    const displayJenisKelamin = document.getElementById('displayJenisKelamin');

    inputs.forEach(input => {
        // Event untuk menampilkan data secara real-time
        input.addEventListener('input', function() {
            updateDisplay();
        });

        // Event onkeyup
        input.addEventListener('keyup', function() {
            console.log(`Key up on ${input.id}: ${input.value}`);
        });

        // Event onkeydown
        input.addEventListener('keydown', function() {
            console.log(`Key down on ${input.id}`);
        });

        // Event onfocus
        input.addEventListener('focus', function() {
            this.style.borderColor = 'green';  // Ubah warna border saat fokus
            console.log(`${input.id} is focused`);
        });

        // Event onblur
        input.addEventListener('blur', function() {
            this.style.borderColor = '';  // Kembalikan warna border saat blur
            console.log(`${input.id} lost focus`);
        });
    });

    function updateDisplay() {
        displayNama.textContent = document.getElementById('nama').value || "-";
        displayNIM.textContent = document.getElementById('nim').value || "-";
        displayKelas.textContent = document.getElementById('kelas').value || "-";
        displayJenisKelamin.textContent = document.getElementById('jeniskelamin').value || "-";
    }
});
