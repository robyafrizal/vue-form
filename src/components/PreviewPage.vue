<template>
  <div class="preview-page">
    <h2>Data Berhasil Diinput</h2>
    <table class="styled-table">
      <thead>
        <tr>
          <th colspan="2">Data Penerima Bantuan Sosial</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nama</td>
          <td>{{ name }}</td>
        </tr>
        <tr>
          <td>NIK</td>
          <td>{{ idCard }}</td>
        </tr>
        <tr>
          <td>Nomor Kartu Keluarga</td>
          <td>{{ kk }}</td>
        </tr>
        <tr v-if="idCardImagePreview">
          <td>Foto KTP</td>
          <td>
            <img
              :src="idCardImagePreview"
              alt="Submitted ID Card Image"
              class="image-preview"
            />
          </td>
        </tr>
        <tr v-if="kkImagePreview">
          <td>Foto Kartu Keluarga</td>
          <td>
            <img
              :src="kkImagePreview"
              alt="Submitted KK Image"
              class="image-preview"
            />
          </td>
        </tr>
        <tr>
          <td>Umur</td>
          <td>{{ age }}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>{{ gender }}</td>
        </tr>
        <tr>
          <td>Provinsi</td>
          <td>{{ province }}</td>
        </tr>
        <tr>
          <td>Kota</td>
          <td>{{ city }}</td>
        </tr>
        <tr>
          <td>Kecamatan</td>
          <td>{{ district }}</td>
        </tr>
        <tr>
          <td>Kelurahan</td>
          <td>{{ village }}</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>{{ address }}</td>
        </tr>
        <tr>
          <td>RT</td>
          <td>{{ rt }}</td>
        </tr>
        <tr>
          <td>RW</td>
          <td>{{ rw }}</td>
        </tr>
        <tr>
          <td>Pendapatan Sebelum Pandemi</td>
          <td>{{ incomeBefore }}</td>
        </tr>
        <tr>
          <td>Pendapatan Setelah Pandemi</td>
          <td>{{ incomeAfter }}</td>
        </tr>
        <tr>
          <td>Alasan Butuh Bantuan</td>
          <td>{{ reason }}</td>
        </tr>
      </tbody>
    </table>

    <router-link to="/" class="link">Go Back to Form</router-link>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "idCard",
    "kk",
    "idCardImage",
    "idCardImagePreview",
    "kkImage",
    "kkImagePreview",
    "age",
    "gender",
    "province",
    "city",
    "district",
    "village",
    "address",
    "rt",
    "rw",
    "incomeBefore",
    "incomeAfter",
    "reason",
  ],
};
</script>

<style scoped>
.preview-page {
  max-width: 700px;
  margin: 10px auto;
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  margin-top: -5px;
}
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  font-family: "Arial", sans-serif;
  text-align: left;
}

.styled-table thead tr {
  background-color: #007bff;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #007bff;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
  transition: background-color 0.2s ease;
}
.image-preview {
  width: 100px;
  height: auto;
  margin: 10px 30px;
}
.link {
  text-decoration: none;
  color: #007bff;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #f0f0f0;
  color: #0056b3;
}

@media (max-width: 768px) {
  .preview-page {
    padding: 20px;
    margin: 20px auto;
    width: 90%;
  }

  .styled-table {
    font-size: 16px;
  }

  .image-preview {
    width: 80px;
    margin: 10px 0;
  }

  td {
    display: block;
    text-align: center;
  }

  .styled-table tbody tr td:first-child {
    font-weight: bold;
  }

  .link {
    width: 100%;
    padding: 12px;
  }
}
</style>
