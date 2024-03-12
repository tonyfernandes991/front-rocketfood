import { Container, Form, Image, Category } from "./styles";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';
import { Textarea } from '../../components/Textarea';

export function New() {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
        setFileName(file.name);
      }

    function handleAddIngredient() {
        if (newIngredient.trim() === "") return;

        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(removedIngredient) {
        setIngredients((prevIngredients) =>
            prevIngredients.filter((ingredient) => ingredient !== removedIngredient)
        );
    }

    async function handleNewProduct() {
        if (!image) {
            return alert("Selecione a imagem");
          }
      
          if (!name) {
            return alert("Digite o nome do prato.");
          }
      
          if (!category) {
            return alert("Selecione a categoria.");
          }
      
          if (ingredients.length === 0) {
            return alert("Informe pelo menos um ingrediente.");
          }
      
          if (newIngredient) {
            return alert(
              "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
            );
          }
      
          if (!price) {
            return alert("Digite o preço!");
          }
      
          if (!description) {
            return alert("Digite a descrição!");
          }


        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("ingredients", JSON.stringify(ingredients));
        formData.append("description", description);

        api
            .post("/products", formData)
            .then(() => {
                alert(`${name} cadastrado com sucesso!`);
                navigate("/");
            })
            .catch((error) => {
                if (error.response) {
                    alert(`Erro ao cadastrar produto: ${error.response.data.message}`);
                } else {
                    alert(
                        "Não foi possível cadastrar o produto. Tente mais tarde."
                    );
                }
            });
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <ButtonText onClick={handleBack}>
                            <RxCaretLeft />
                            voltar
                        </ButtonText>

                        <h1>Adicionar prato</h1>
                    </header>

                    <div>
                        <Section title="Imagem do prato">
                            <Image className="image">
                                <label htmlFor="image">
                                    <FiUpload size={"2.4rem"} />
                                    <span>"Selecione imagem"</span>

                                    <input
                                        id="image" 
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </Image>
                        </Section>

                        <Section title="Nome">
                            <Input className="name"
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                                onChange={e => setName(e.target.value)}
                            />
                        </Section>

                        <Section title="Categoria">
                            <Category className="category">
                                <label htmlFor="category">
                                    
                                    <select
                                        defaultValue=""
                                        onChange={e => setCategory(e.target.value)}
                                    >
                                        <option value="">Selecionar</option>
                                        <option value="Refeições">Refeições</option>
                                        <option value="Sobremesas">Sobremesas</option>
                                        <option value="Bebidas">Bebidas</option>
                                    </select>

                                    <RiArrowDownSLine size={"2.4rem"} />
                                </label>
                            </Category>
                        </Section>
                    </div>

                    <div>
                        <Section title="Ingredientes">
                            <div className="tags">
                                {ingredients.map((ingredient, index) => (
                                    <FoodItem
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />
                                ))}

                                <FoodItem
                                    isNew
                                    placeholder="Adicionar"
                                    onChange={(e) => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}

                                />
                            </div>
                        </Section>

                        <Section title="Preço">
                            <Input className="price"
                                placeholder="R$ 00,00"
                                value={price}
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Section>
                    </div>

                    <Section title="Descrição">
                        <Textarea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Section>

                    <div className="save">
                        <Button 
                            title="Salvar alterações"
                            onClick={handleNewProduct}
                        />
                    </div>
                </Form>
            </main>

            <Footer />

        </Container>
    )
}