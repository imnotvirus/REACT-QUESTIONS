import { useState } from "react";
import questions from '../../utils/questions.json'
import React from "react";
import { Container, Label } from "./styles";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <header>
        <strong>Acentuação Gráfica</strong>
        <button>^</button>
      </header>
      <section>
        <header>
          <i>iconsss</i>
          <span>Uso dos Porquês</span>
        </header>
        {
          questions.map((item, index) => (
            <Label>exercício {index + 1}</Label>
          ))
        }
      </section>
    </Container>
  );
}

export default Home;
