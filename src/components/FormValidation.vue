<template>
  <div class="form-container">
    <h2>Formulir Penerima Bantuan</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nama</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          class="form-control"
        />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="idCard">NIK</label>
        <input
          v-model="formData.idCard"
          type="text"
          id="idCard"
          class="form-control"
        />
        <span v-if="errors.idCard">{{ errors.idCard }}</span>
      </div>

      <div class="form-group">
        <label for="kk">Nomor Kartu Keluarga</label>
        <input v-model="formData.kk" type="text" id="kk" class="form-control" />
        <span v-if="errors.kk">{{ errors.kk }}</span>
      </div>

      <div class="form-group">
        <label for="idCardImage">Foto KTP</label>
        <input
          type="file"
          id="idCardImage"
          @change="handleImageUpload"
          accept="image/jpeg, image/png, image/bmp"
          class="form-control"
        />
        <span v-if="errors.idCardImage">{{ errors.idCardImage }}</span>
      </div>

      <div
        v-if="formData.idCardImagePreview"
        class="form-group image-preview-container"
      >
        <img
          :src="formData.idCardImagePreview"
          alt="ID Card Preview"
          class="image-preview"
        />
      </div>

      <div class="form-group">
        <label for="kkImage">Foto Kartu Keluarga</label>
        <input
          type="file"
          id="kkImage"
          @change="handleImage"
          accept="image/jpeg, image/png, image/bmp"
          class="form-control"
        />
        <span v-if="errors.kkImage">{{ errors.kkImage }}</span>
      </div>

      <div
        v-if="formData.kkImagePreview"
        class="form-group image-preview-container"
      >
        <img
          :src="formData.kkImagePreview"
          alt="KK Preview"
          class="image-preview"
        />
      </div>

      <div class="form-group">
        <label for="age">Umur</label>
        <input
          v-model="formData.age"
          type="number"
          id="age"
          class="form-control"
        />
        <span v-if="errors.age">{{ errors.age }}</span>
      </div>

      <div class="form-group">
        <label for="gender">Jenis Kelamin</label>
        <select v-model="formData.gender" id="gender" class="form-control">
          <option disabled value="">Pilih Jenis Kelamin</option>
          <option value="Laki-Laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <span v-if="errors.gender">{{ errors.gender }}</span>
      </div>

      <div class="form-group">
        <label for="province">Provinsi</label>
        <select
          v-model="formData.province"
          @change="fetchCities"
          class="form-control"
        >
          <option value="" disabled>Pilih Provinsi</option>
          <option
            v-for="province in provinces"
            :key="province.id"
            :value="province.id"
          >
            {{ province.name }}
          </option>
        </select>
        <span v-if="errors.province">{{ errors.province }}</span>
      </div>

      <div class="form-group">
        <label for="city">Kota</label>
        <select
          v-model="formData.city"
          @change="fetchDistricts"
          :disabled="!cities.length"
          class="form-control"
        >
          <option value="" disabled>Pilih Kabupaten/Kota</option>
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
        <span v-if="errors.city">{{ errors.city }}</span>
      </div>

      <div class="form-group">
        <label for="district">Kecamatan</label>
        <select
          v-model="formData.district"
          @change="fetchVillages"
          :disabled="!districts.length"
          class="form-control"
        >
          <option value="" disabled>Pilih Kecamatan</option>
          <option
            v-for="district in districts"
            :key="district.id"
            :value="district.id"
          >
            {{ district.name }}
          </option>
        </select>
        <span v-if="errors.district">{{ errors.district }}</span>
      </div>

      <div class="form-group">
        <label for="village">Kelurahan</label>
        <select
          v-model="formData.village"
          :disabled="!villages.length"
          class="form-control"
        >
          <option value="" disabled>Pilih Kelurahan</option>
          <option
            v-for="village in villages"
            :key="village.id"
            :value="village.id"
          >
            {{ village.name }}
          </option>
        </select>
        <span v-if="errors.village">{{ errors.village }}</span>
      </div>

      <div class="form-group">
        <label for="address">Alamat</label>
        <input
          v-model="formData.address"
          type="text"
          id="address"
          placeholder="Masukkan Alamat"
          class="form-control"
        />
        <span v-if="errors.address">{{ errors.address }}</span>
      </div>

      <div class="form-group">
        <label for="rt">RT</label>
        <input
          v-model="formData.rt"
          type="number"
          id="rt"
          placeholder="Masukkan RT"
          class="form-control"
        />
        <span v-if="errors.rt">{{ errors.rt }}</span>
      </div>

      <div class="form-group">
        <label for="rw">RW</label>
        <input
          v-model="formData.rw"
          type="number"
          id="rw"
          placeholder="Masukkan RT"
          class="form-control"
        />
        <span v-if="errors.rw">{{ errors.rw }}</span>
      </div>

      <div class="form-group">
        <label for="incomeBefore">Pendapatan Sebelum Pandemi</label>
        <input
          v-model="formData.incomeBefore"
          type="number"
          id="incomeBefore"
          placeholder="Pendapatan Sebelum Pandemi"
          class="form-control"
        />
        <span v-if="errors.incomeBefore">{{ errors.incomeBefore }}</span>
      </div>

      <div class="form-group">
        <label for="incomeAfter">Pendapatan Setelah Pandemi</label>
        <input
          v-model="formData.incomeAfter"
          type="number"
          id="incomeAfter"
          placeholder="Pendapatan Setelah Pandemi"
          class="form-control"
        />
        <span v-if="errors.incomeAfter">{{ errors.incomeAfter }}</span>
      </div>

      <div class="form-group">
        <label for="reason">Alasan Membutuhkan Bantuan</label>
        <select v-model="formData.reason" id="reason" class="form-control">
          <option disabled value="">Alasan mengapa butuh bantuan?</option>
          <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
          <option value="Kepala keluarga">Kepala keluarga</option>
          <option value="Tergolong fakir/miskin">Tergolong fakir/miskin</option>
          <option value="Tertimpa musibah">Tertimpa musibah</option>
        </select>
        <span v-if="errors.reason">{{ errors.reason }}</span>
      </div>

      <div class="form-group">
        <label>
          <input v-model="formData.confirmation" type="checkbox" />
          “Saya menyatakan bahwa data yang diisikan adalah benar dan siap
          mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data
          tersebut.”
        </label>
        <span v-if="errors.confirmation">{{ errors.confirmation }}</span>
      </div>

      <div v-if="isLoading" class="loading">Loading...</div>

      <div v-if="serverError" class="error">{{ serverError }}</div>

      <button type="submit" class="submit-button" :disabled="isLoading">
        Kirim
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        idCard: "",
        kk: "",
        idCardImage: null,
        idCardImagePreview: null,
        kkImage: null,
        kkImagePreview: null,
        age: "",
        gender: "",
        province: "",
        city: "",
        district: "",
        village: "",
        address: "",
        rt: null,
        rw: null,
        incomeBefore: null,
        incomeAfter: null,
        reason: "",
        confirmation: false,
      },
      provinces: [],
      cities: [],
      districts: [],
      villages: [],
      errors: {},
      isLoading: false,
      serverError: "",
    };
  },
  mounted() {
    this.fetchProvinces();
  },
  methods: {
    async fetchProvinces() {
      try {
        const response = await axios.get(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );
        this.provinces = response.data;
      } catch (error) {
        console.error("Failed to fetch provinces", error);
      }
    },

    async fetchCities() {
      if (this.formData.province) {
        try {
          const response = await axios.get(
            `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${this.formData.province}.json`
          );
          this.cities = response.data;
          this.districts = [];
          this.villages = [];
          this.formData.city = "";
          this.formData.district = "";
          this.formData.village = "";
        } catch (error) {
          console.error("Failed to fetch cities", error);
        }
      }
    },

    async fetchDistricts() {
      if (this.formData.city) {
        try {
          const response = await axios.get(
            `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${this.formData.city}.json`
          );
          this.districts = response.data;
          this.villages = [];
          this.formData.district = "";
          this.formData.village = "";
        } catch (error) {
          console.error("Failed to fetch districts", error);
        }
      }
    },

    async fetchVillages() {
      if (this.formData.district) {
        try {
          const response = await axios.get(
            `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${this.formData.district}.json`
          );
          this.villages = response.data;
        } catch (error) {
          console.error("Failed to fetch villages", error);
        }
      }
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && this.validate(file)) {
        this.formData.idCardImage = file;
        this.formData.idCardImagePreview = URL.createObjectURL(file);
      } else {
        this.formData.idCardImage = null;
        this.formData.idCardImagePreview = null;
      }
    },

    handleImage(event) {
      const file = event.target.files[0];
      if (file && this.validate(file)) {
        this.formData.kkImage = file;
        this.formData.kkImagePreview = URL.createObjectURL(file);
      } else {
        this.formData.kkImage = null;
        this.formData.kkImagePreview = null;
      }
    },

    validate(file) {
      const maxSizeMB = 2;
      const validFormats = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/bmp",
      ];
      const fileSizeMB = file.size / 1024 / 1024;

      if (fileSizeMB > maxSizeMB || !validFormats.includes(file.type)) {
        this.errors.idCardImage =
          "Foto KTP harus diisi (Max: 2MB, format JPG/JPEG/PNG/BMP)";
        this.errors.kkImage =
          "Foto KK harus diisi (Max: 2MB, format JPG/JPEG/PNG/BMP)";
        return false;
      }
      this.errors.idCardImage = false;
      this.errors.kkmage = false;
      return true;
    },

    async validateForm() {
      this.errors = {};
      if (!this.formData.name) {
        this.errors.name = "Nama harus diisi";
      }

      if (!this.formData.idCard) {
        this.errors.idCard = "NIK harus diisi";
      } else if (!/^\d{16}$/.test(this.formData.idCard)) {
        this.errors.idCard = "NIK harus terdiri dari 16 digit";
      }

      if (!this.formData.kk) {
        this.errors.kk = "KK is required.";
      } else if (!/^\d{8,16}$/.test(this.formData.kk)) {
        this.errors.kk = "KK harus terdiri dari 16 digit";
      }

      if (!this.formData.idCardImage) {
        this.errors.idCardImage = "Silahkan upload gambar KTP yang benar";
      }

      if (!this.formData.kkImage) {
        this.errors.kkImage = "Silahkan upload gambar KK yang benar";
      }

      if (!this.formData.age || this.formData.age < 24) {
        this.errors.age = "Berumur lebih dari atau sama dengan 25 tahun";
      }
      if (!this.formData.gender) {
        this.errors.gender = "Jenis kelamin harus diisi";
      }

      if (!this.formData.province) {
        this.errors.province = "Provinsi harus diisi";
      }
      if (!this.formData.city) {
        this.errors.city = "Kabupaten/Kota harus diisi";
      }
      if (!this.formData.district) {
        this.errors.district = "Kecamatan harus diisi";
      }
      if (!this.formData.village) {
        this.errors.village = "Kelurahan harus diisi";
      }

      if (!this.formData.address) {
        this.errors.address = "Alamat harus diisi";
      } else if (this.formData.address.length > 255) {
        this.errors.address = "No longer than 255 characters";
      }

      if (!this.formData.income || this.formData.income < 0) {
        this.errors.income = "Tidak lebih panjang dari 255 karakter";
      }

      if (!this.formData.rt) {
        this.errors.rt = "RT harus diisi";
      }
      if (!this.formData.rw) {
        this.errors.rw = "RW harus diisi";
      }
      if (!this.formData.incomeBefore) {
        this.errors.incomeBefore = "Income before pandemi harus diisi";
      }
      if (!this.formData.incomeAfter) {
        this.errors.incomeAfter = "Income after harus diisi";
      }

      if (!this.formData.reason) {
        this.errors.reason = "Alasan butuh bantuan harus diisi";
      }

      if (!this.formData.confirmation) {
        this.errors.confirmation =
          "Sebelum data di-submit, staf Kepala Daerah harus mencentang kolom ini";
      }
      return Object.keys(this.errors).length === 0;
    },

    async submitForm() {
      try {
        if (this.validateForm()) {
          this.isLoading = true;
          this.serverError = "";
          setTimeout(() => {
            const serverSuccess = Math.random() > 0.7;

            if (serverSuccess) {
              alert("Formulir berhasil dikirim");
              this.isLoading = false;
              this.$router.push({
                path: "/preview",
                query: {
                  name: this.formData.name,
                  idCard: this.formData.idCard,
                  kk: this.formData.kk,
                  idCardImage: this.formData.idCardImage,
                  idCardImagePreview: this.formData.idCardImagePreview,
                  kkImage: this.formData.kkImage,
                  kkImagePreview: this.formData.kkImagePreview,
                  age: this.formData.age,
                  gender: this.formData.gender,
                  province: this.formData.province,
                  city: this.formData.city,
                  district: this.formData.district,
                  village: this.formData.village,
                  address: this.formData.address,
                  rt: this.formData.rt,
                  rw: this.formData.rw,
                  incomeBefore: this.formData.incomeBefore,
                  incomeAfter: this.formData.incomeAfter,
                  reason: this.formData.reason,
                },
              });
              // resetForm();
            } else {
              this.isLoading = false;
              this.serverError =
                "Terjadi Interval Server Error akibat server load yang terlalu tinggi. Silahkan coba lagi";
            }
          }, 1500);
        }
        // const resetForm = () => {
        //   this.formData.name = "";
        //   this.formData.idCard = "";
        //   this.formData.kk = "";
        //   this.formData.idCardImage = null;
        //   this.formData.idCardImagePreview = null;
        //   this.formData.kkImage = null;
        //   this.formData.age = "";
        //   this.formData.gender = "";
        //   this.formData.province = "";
        //   this.formData.city = "";
        //   this.formData.district = "";
        //   this.formData.village = "";
        //   this.formData.address = "";
        //   this.formData.rt = null;
        //   this.formData.rw = null;
        //   this.formData.incomeBefore = null;
        //   this.formData.incomeAfter = null;
        //   this.formData.reason = "";
        //   this.formData.confirmation = false;
        // };
        console.log("Formulir terkirim", this.formData);
      } catch (error) {
        console.error("Error ketika megirim formulir", error);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: #f8f9fa;
  padding: 6px 50px;
  max-width: 600px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 50px;
}
.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}
span {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}
.loading {
  color: blue;
  margin-top: 10px;
  font-style: italic;
}
.image-preview-container {
  margin-top: 15px;
}
.image-preview {
  width: 100px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-control:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

.submit-button {
  width: 100%;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-container {
    padding: 20px;
    margin: 20px auto;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .submit-button {
    font-size: 16px;
    padding: 10px 15px;
  }
}
</style>
