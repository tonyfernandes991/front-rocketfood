import { Container } from "./styles";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

export function Contactor() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container>
      <div>
        <button onClick={handleDecrement}>
          <FaMinus />
        </button>

        <p>{String(quantity).padStart(2, "0")}</p>

        <button onClick={handleIncrement}>
          <FaPlus />
        </button>
      </div>
    </Container>
  );
}
