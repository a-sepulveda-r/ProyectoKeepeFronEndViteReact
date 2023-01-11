import { convertLength } from "@mui/material/styles/cssUtils";
import Card from "react-bootstrap/Card";
import estadio from "../assets/IMG/estadio.jpg";
import basketImage from "../assets/IMG/basket.jpg";

const styles = {
  imagenfull: {
    height: "100%",
    width: "50rem",
  },
};

function Imagen2() {
  return (
    <Card className="bg-dark text-white mb-5">
      <Card.Img src={basketImage} alt="Card image" style={styles.imagenfull} />
      <Card.ImgOverlay>
        <Card.Title>Cancha de Basketball Dragones</Card.Title>
        <Card.Text>Horario: Lunes a Viernes. 8-21hrs</Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Imagen2;
