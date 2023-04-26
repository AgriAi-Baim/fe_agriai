import React from "react";
import { resultPlants } from "../state/hasil";
import { useRecoilValue } from 'recoil';

function CardsResult() {
  const getPlants = useRecoilValue(resultPlants);
  const dataHasil = {
    JAGUNG : "https://static.sehatq.com/content/review/image/1633906995.jpeg",
    "KACANG HIJAU":
      "https://cdn-2.tstatic.net/bangka/foto/bank/images/kacang-hijau-baik-untuk-kesehatan.jpg",
    "KACANG TANAH":
      "https://cdns.klimg.com/bola.net/library/upload/21/2019/11/645x430/sportylife_cfb291a.jpg",
    KEDELAI :
      "https://www.jagapati.com/style/images/News/279/original/Kandungan-Manfaat-dan-Efek-Samping-Kacang-Kedelai.jpg?o=3471",
    PADI: "https://bibitonline.com/wp-content/uploads/padi-2.jpg",
    "UBI JALAR":
      "https://akcdn.detik.net.id/visual/2020/11/23/ilustrasi-ubi-ungu-1_169.jpeg?w=650",
    "UBI KAYU":
      "https://asset.kompas.com/crops/bU7pllbXUFO1f4PwquawkbIgnEw=/0x0:0x0/750x500/data/photo/buku/63bd4881045c0.jpg",
  };

  const urlGambar = getPlants.tanaman in dataHasil ? dataHasil[getPlants.tanaman] : "Gambar tidak ditemukan";
  console.log(urlGambar);

  return (
    <div className="row mt-5">
      <div className="col-3 mx-auto">
        <div className="card mb-3">
          <img src={urlGambar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{getPlants.tanaman}</h5>
            <p className="card-text text-body-secondary">produktivitas: {parseFloat(getPlants.produktivitas).toPrecision(4)}</p>
            <p className="card-text">
              Tanaman tersebut cocok ditanam pada kondisi iklim yang sudah
              diberikan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsResult;
