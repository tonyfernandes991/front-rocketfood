import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Input } from "../../components/Input";

export function Search({value, onChange, className}) {
  return (
    <Container>
      <Input
        className={className}
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}