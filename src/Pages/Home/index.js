import Carrousel from "../../components/Carrousel";
import Text from "../../components/Text";

function Home() {
  const listaBanners = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-uGM1iLQj-bVv16YPv32B_yQoFatOjvw89owS_KawCmZwRSaIkTUx6RtOEgdQTejeYU&usqp=CAU",
      titulo: "Ar",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-uGM1iLQj-bVv16YPv32B_yQoFatOjvw89owS_KawCmZwRSaIkTUx6RtOEgdQTejeYU&usqp=CAU",
      titulo: "Ar 2",
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
