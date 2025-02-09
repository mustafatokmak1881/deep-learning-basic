class Noron {
    constructor(agirlik) {
        this.agirlik = agirlik;
    }

    hesapla(girdi) {
        return girdi * this.agirlik;
    }
}

const noron = new Noron(2); // Başlangıç ağırlığı 2

const veriSeti = [
    { girdi: 1, cikti: 1 },
    { girdi: 2, cikti: 10 },
    { girdi: 4, cikti: 20 },
    { girdi: 8, cikti: 40 },
    { girdi: 10, cikti: 50 },
];

function egit(veriSeti, noron, ogrenmeOrani) {
    for (let i = 0; i < veriSeti.length; i++) {
        const girdi = veriSeti[i].girdi;
        const gercekCikti = veriSeti[i].cikti;
        const tahminEdilenCikti = noron.hesapla(girdi);
        const hata = gercekCikti - tahminEdilenCikti;

        noron.agirlik += hata * ogrenmeOrani;
        console.log({ hata, ogrenmeOrani });
    }
}

const ogrenmeOrani = 0.1;
const donguSayisi = 100;

for (let i = 0; i < donguSayisi; i++) {
    egit(veriSeti, noron, ogrenmeOrani);
}

const yeniGirdi = 5;
const tahminEdilenCikti = noron.hesapla(yeniGirdi);
console.log(`Tahmin edilen çıktı (${yeniGirdi} için):`, tahminEdilenCikti);