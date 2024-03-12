import { Alert, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container>
      <div>
        <h2>Benvenuto nel nostro negozio!</h2>
        <Alert variant="info">
          <p>
            Grazie per aver scelto il nostro negozio online. Scopri le offerte
            speciali!
          </p>
        </Alert>
      </div>
    </Container>
  );
};

export default Welcome;
