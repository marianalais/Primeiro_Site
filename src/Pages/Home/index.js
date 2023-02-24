import Carrousel from "../../components/Carrousel";
import Text from "../../components/Text";
import imageQuarto from "../../assets/quarto.jpg";
import imageSala from "../../assets/sala-estar.jpeg";

function Home() {
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
      <h1>Bem vindo a pagina HOME</h1>
      <Text>Sujeito Programador</Text> <br />
      <hr />
      <div className="container-Carrousel">
        <Carrousel banners={listaBanners} />
      </div>
    </div>
  );
}

export default Home;
