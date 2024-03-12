import { Container, Content } from "./styles.js";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Food } from "../../components/Food/index.jsx";
import { Menu } from "../../components/Menu/index.jsx";

import homeBanner from "../../assets/home-banner.png";

import { api } from "../../services/api";

export function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  useEffect(() => {
    async function fetchProduct() {
      try {
        const url = search ? `/products?name=${search}` : "/products";
        const response = await api.get(url);

        setProducts(response.data.products);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error.message);
      }
    }

    fetchProduct();
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container>
        <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      
      <Header
        value={search}
        onChange={handleSearchChange}
        onOpenMenu={() => setMenuIsOpen(true)}
      />
      
      <main>
        <div>
          <header>
            <img
              src={homeBanner}
              alt="imagem de comida"
            />

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </header>
          <Content>
        
            <Food products={products} category="Refeições" />
            <Food products={products} category="Sobremesas" />
            <Food products={products} category="Bebidas" />

          </Content>
 
        </div>
      </main>

      <Footer />

    </Container>

  )
}