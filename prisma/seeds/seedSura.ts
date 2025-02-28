import { PrismaClient } from '@prisma/client';

export async function seedSura(prisma: PrismaClient) {
  const countSura = await prisma.sura.count();

    if (countSura === 0) {
        await prisma.sura.createMany({
        data: [
                {
                    "id": 1,
                    "name": "Al-Fatihah",
                    "translation": "Pembuka"
                },
                {
                    "id": 2,
                    "name": "Al-Baqarah",
                    "translation": "Sapi"
                },
                {
                    "id": 3,
                    "name": "Ali ‘Imran",
                    "translation": "Keluarga Imran"
                },
                {
                    "id": 4,
                    "name": "An-Nisa'",
                    "translation": "Perempuan"
                },
                {
                    "id": 5,
                    "name": "Al-Ma'idah",
                    "translation": "Hidangan"
                },
                {
                    "id": 6,
                    "name": "Al-An‘am",
                    "translation": "Binatang Ternak"
                },
                {
                    "id": 7,
                    "name": "Al-A‘raf",
                    "translation": "Tempat Tertinggi"
                },
                {
                    "id": 8,
                    "name": "Al-Anfal",
                    "translation": "Rampasan Perang"
                },
                {
                    "id": 9,
                    "name": "At-Taubah",
                    "translation": "Pengampunan"
                },
                {
                    "id": 10,
                    "name": "Yunus",
                    "translation": "Yunus"
                },
                {
                    "id": 11,
                    "name": "Hud",
                    "translation": "Hud"
                },
                {
                    "id": 12,
                    "name": "Yusuf",
                    "translation": "Yusuf"
                },
                {
                    "id": 13,
                    "name": "Ar-Ra‘d",
                    "translation": "Guruh"
                },
                {
                    "id": 14,
                    "name": "Ibrahim",
                    "translation": "Ibrahim"
                },
                {
                    "id": 15,
                    "name": "Al-Hijr",
                    "translation": "Hijr"
                },
                {
                    "id": 16,
                    "name": "An-Nahl",
                    "translation": "Lebah"
                },
                {
                    "id": 17,
                    "name": "Al-Isra'",
                    "translation": "Memperjalankan di Malam Hari"
                },
                {
                    "id": 18,
                    "name": "Al-Kahf",
                    "translation": "Gua"
                },
                {
                    "id": 19,
                    "name": "Maryam",
                    "translation": "Maryam"
                },
                {
                    "id": 20,
                    "name": "Taha",
                    "translation": "Taha"
                },
                {
                    "id": 21,
                    "name": "Al-Anbiya'",
                    "translation": "Para Nabi"
                },
                {
                    "id": 22,
                    "name": "Al-Hajj",
                    "translation": "Haji"
                },
                {
                    "id": 23,
                    "name": "Al-Mu'minun",
                    "translation": "Orang-Orang Mukmin"
                },
                {
                    "id": 24,
                    "name": "An-Nur",
                    "translation": "Cahaya"
                },
                {
                    "id": 25,
                    "name": "Al-Furqan",
                    "translation": "Pembeda"
                },
                {
                    "id": 26,
                    "name": "Asy-Syu‘ara'",
                    "translation": "Para Penyair"
                },
                {
                    "id": 27,
                    "name": "An-Naml",
                    "translation": "Semut"
                },
                {
                    "id": 28,
                    "name": "Al-Qasas",
                    "translation": "Kisah-Kisah"
                },
                {
                    "id": 29,
                    "name": "Al-‘Ankabut",
                    "translation": "Laba-Laba"
                },
                {
                    "id": 30,
                    "name": "Ar-Rum",
                    "translation": "Romawi"
                },
                {
                    "id": 31,
                    "name": "Luqman",
                    "translation": "Luqman"
                },
                {
                    "id": 32,
                    "name": "As-Sajdah",
                    "translation": "Sajdah"
                },
                {
                    "id": 33,
                    "name": "Al-Ahzab",
                    "translation": "Golongan Yang Bersekutu"
                },
                {
                    "id": 34,
                    "name": "Saba'",
                    "translation": "Saba'"
                },
                {
                    "id": 35,
                    "name": "Fatir",
                    "translation": "Pencipta"
                },
                {
                    "id": 36,
                    "name": "Yasin",
                    "translation": "Yasin"
                },
                {
                    "id": 37,
                    "name": "As-Saffat",
                    "translation": "Barisan-Barisan"
                },
                {
                    "id": 38,
                    "name": "Sad",
                    "translation": "Ṣād"
                },
                {
                    "id": 39,
                    "name": "Az-Zumar",
                    "translation": "Rombongan"
                },
                {
                    "id": 40,
                    "name": "Gafir",
                    "translation": "Maha Pengampun"
                },
                {
                    "id": 41,
                    "name": "Fussilat",
                    "translation": "Dijelaskan"
                },
                {
                    "id": 42,
                    "name": "Asy-Syura",
                    "translation": "Musyawarah"
                },
                {
                    "id": 43,
                    "name": "Az-Zukhruf",
                    "translation": "Perhiasan dari Emas"
                },
                {
                    "id": 44,
                    "name": "Ad-Dukhan",
                    "translation": "Kabut Asap"
                },
                {
                    "id": 45,
                    "name": "Al-Jasiyah",
                    "translation": "Berlutut"
                },
                {
                    "id": 46,
                    "name": "Al-Ahqaf",
                    "translation": "Ahqaf"
                },
                {
                    "id": 47,
                    "name": "Muhammad",
                    "translation": "Nabi Muhammad"
                },
                {
                    "id": 48,
                    "name": "Al-Fath",
                    "translation": "Kemenangan"
                },
                {
                    "id": 49,
                    "name": "Al-Hujurat",
                    "translation": "Kamar-Kamar"
                },
                {
                    "id": 50,
                    "name": "Qaf",
                    "translation": "Qaf"
                },
                {
                    "id": 51,
                    "name": "Az-Zariyat",
                    "translation": "Yang Menerbangkan"
                },
                {
                    "id": 52,
                    "name": "At-Tur",
                    "translation": "Gunung"
                },
                {
                    "id": 53,
                    "name": "An-Najm",
                    "translation": "Bintang"
                },
                {
                    "id": 54,
                    "name": "Al-Qamar",
                    "translation": "Bulan"
                },
                {
                    "id": 55,
                    "name": "Ar-Rahman",
                    "translation": "Yang Maha Pengasih"
                },
                {
                    "id": 56,
                    "name": "Al-Waqi‘ah",
                    "translation": "Hari Kiamat Yang Pasti Terjadi"
                },
                {
                    "id": 57,
                    "name": "Al-Hadid",
                    "translation": "Besi"
                },
                {
                    "id": 58,
                    "name": "Al-Mujadalah",
                    "translation": "Gugatan"
                },
                {
                    "id": 59,
                    "name": "Al-Hasyr",
                    "translation": "Pengusiran"
                },
                {
                    "id": 60,
                    "name": "Al-Mumtahanah",
                    "translation": "Wanita Yang Diuji"
                },
                {
                    "id": 61,
                    "name": "As-Saff",
                    "translation": "Barisan"
                },
                {
                    "id": 62,
                    "name": "Al-Jumu‘ah",
                    "translation": "Jumat"
                },
                {
                    "id": 63,
                    "name": "Al-Munafiqun",
                    "translation": "Orang-Orang Munafik"
                },
                {
                    "id": 64,
                    "name": "At-Tagabun",
                    "translation": "Pengungkapan Kesalahan"
                },
                {
                    "id": 65,
                    "name": "At-Talaq",
                    "translation": "Talak"
                },
                {
                    "id": 66,
                    "name": "At-tahrim",
                    "translation": "Pengharaman"
                },
                {
                    "id": 67,
                    "name": "Al-Mulk",
                    "translation": "Kerajaan"
                },
                {
                    "id": 68,
                    "name": "Al-Qalam",
                    "translation": "Pena"
                },
                {
                    "id": 69,
                    "name": "Al-Haqqah",
                    "translation": "Hari Kiamat Yang Pasti Terjadi"
                },
                {
                    "id": 70,
                    "name": "Al-Ma‘arij",
                    "translation": "Tempat-Tempat Naik"
                },
                {
                    "id": 71,
                    "name": "Nuh",
                    "translation": "Nuh"
                },
                {
                    "id": 72,
                    "name": "Al-Jinn",
                    "translation": "Jin"
                },
                {
                    "id": 73,
                    "name": "Al-Muzzammil",
                    "translation": "Orang Berkelumun"
                },
                {
                    "id": 74,
                    "name": "Al-Muddassir",
                    "translation": "Orang Berselimut"
                },
                {
                    "id": 75,
                    "name": "Al-Qiyamah",
                    "translation": "Hari Kiamat"
                },
                {
                    "id": 76,
                    "name": "Al-Insan",
                    "translation": "Manusia"
                },
                {
                    "id": 77,
                    "name": "Al-Mursalat",
                    "translation": "Malaikat Yang Diutus"
                },
                {
                    "id": 78,
                    "name": "An-Naba'",
                    "translation": "Berita"
                },
                {
                    "id": 79,
                    "name": "An-Nazi‘at",
                    "translation": "Yang Mencabut Dengan Keras"
                },
                {
                    "id": 80,
                    "name": "‘Abasa",
                    "translation": "Berwajah Masam"
                },
                {
                    "id": 81,
                    "name": "At-Takwir",
                    "translation": "Penggulungan"
                },
                {
                    "id": 82,
                    "name": "Al-Infitar",
                    "translation": "Terbelah"
                },
                {
                    "id": 83,
                    "name": "Al-Mutaffifin",
                    "translation": "Orang-Orang Yang Curang"
                },
                {
                    "id": 84,
                    "name": "Al-Insyiqaq",
                    "translation": "Terbelah"
                },
                {
                    "id": 85,
                    "name": "Al-Buruj",
                    "translation": "Gugusan Bintang"
                },
                {
                    "id": 86,
                    "name": "At-Tariq",
                    "translation": "Yang Datang Pada Malam Hari"
                },
                {
                    "id": 87,
                    "name": "Al-A‘la",
                    "translation": "Yang Maha Tinggi"
                },
                {
                    "id": 88,
                    "name": "Al-Gasyiyah",
                    "translation": "Hari Kiamat Yang Menghilangkan Kesadaran"
                },
                {
                    "id": 89,
                    "name": "Al-Fajr",
                    "translation": "Fajar"
                },
                {
                    "id": 90,
                    "name": "Al-Balad",
                    "translation": "Negeri"
                },
                {
                    "id": 91,
                    "name": "Asy-Syams",
                    "translation": "Matahari"
                },
                {
                    "id": 92,
                    "name": "Al-Lail",
                    "translation": "Malam"
                },
                {
                    "id": 93,
                    "name": "Ad-Duha",
                    "translation": "Duha"
                },
                {
                    "id": 94,
                    "name": "Asy-Syarh",
                    "translation": "Pelapangan"
                },
                {
                    "id": 95,
                    "name": "At-Tin",
                    "translation": "Buah Tin"
                },
                {
                    "id": 96,
                    "name": "Al-‘Alaq",
                    "translation": "Segumpal Darah"
                },
                {
                    "id": 97,
                    "name": "Al-Qadr",
                    "translation": "Al-Qadar"
                },
                {
                    "id": 98,
                    "name": "Al-Bayyinah",
                    "translation": "Bukti Nyata"
                },
                {
                    "id": 99,
                    "name": "Az-Zalzalah",
                    "translation": "Guncangan"
                },
                {
                    "id": 100,
                    "name": "Al-‘Adiyat",
                    "translation": "Kuda Perang Yang Berlari Kencang"
                },
                {
                    "id": 101,
                    "name": "Al-Qari‘ah",
                    "translation": "Al-Qāri‘ah"
                },
                {
                    "id": 102,
                    "name": "At-Takasur",
                    "translation": "Berbangga-Bangga Dalam Memperbanyak Dunia"
                },
                {
                    "id": 103,
                    "name": "Al-‘Asr",
                    "translation": "Masa"
                },
                {
                    "id": 104,
                    "name": "Al-Humazah",
                    "translation": "Pengumpat"
                },
                {
                    "id": 105,
                    "name": "Al-Fil",
                    "translation": "Gajah"
                },
                {
                    "id": 106,
                    "name": "Quraisy",
                    "translation": "Orang Quraisy"
                },
                {
                    "id": 107,
                    "name": "Al-Ma‘un",
                    "translation": "Bantuan"
                },
                {
                    "id": 108,
                    "name": "Al-Kausar",
                    "translation": "Nikmat Yang Banyak"
                },
                {
                    "id": 109,
                    "name": "Al-Kafirun",
                    "translation": "Orang-Orang kafir"
                },
                {
                    "id": 110,
                    "name": "An-Nasr",
                    "translation": "Pertolongan"
                },
                {
                    "id": 111,
                    "name": "Al-Lahab",
                    "translation": "Gejolak Api"
                },
                {
                    "id": 112,
                    "name": "Al-Ikhlas",
                    "translation": "Ikhlas"
                },
                {
                    "id": 113,
                    "name": "Al-Falaq",
                    "translation": "Fajar"
                },
                {
                    "id": 114,
                    "name": "An-Nas",
                    "translation": "Manusia"
                }
            ]
        });
        console.log("Sura data seeded successfully");
    } else {
        console.log("Sura data already exists");
    }
}