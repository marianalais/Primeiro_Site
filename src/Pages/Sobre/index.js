import Carrousel from "../../components/Carrousel";
import imageQuarto from "../../assets/quarto.jpg";
import imageSala from "../../assets/sala-estar.jpg";

function Sobre() {
  const listaBanners = [
    {
      src: imageQuarto,
      titulo: "Saiba Mais",
    },
    {
      src: imageSala,
      titulo: "Saiba Mais",
    },
  ];
  return (
    <div>
      <div className="container-Carrousel">
        <Carrousel banners={listaBanners} />
      </div>
    </div>
  );
}

export default Sobre;
