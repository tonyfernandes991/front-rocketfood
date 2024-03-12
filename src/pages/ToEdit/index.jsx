import { Container, Form, Image, Category } from "./styles";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

import { api } from "../../services/api";

export function ToEdit() {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const { id } = useParams();

    const navigate = useNavigate()

    function handleBack() {
        navigate("/")
    }

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                const { name, image, category, price, description, ingredients } = response.data;

                setName(name);
                setCategory(category);
                setPrice(price);
                setDescription(description);
                setIngredients(ingredients || []);
            } catch (error) {
                console.error("Erro ao buscar detalhes do prato:", error.message);
            }
        };

        fetchDish();
    }, [id]);

    const handleAddIngredient = () => {
        if (newIngredient.trim() !== "") {
            setIngredients((prevIngredients) => [
                ...prevIngredients,
                newIngredient.trim(),
            ]);
            setNewIngredient("");
        }
    };

    const handleRemoveIngredient = (index) => {
        setIngredients((prevIngredients) =>
            prevIngredients.filter((_, i) => i !== index)
        );
    };

    const handleUpdateDish = () => {

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
        formData.append("name", name || "");
        formData.append("price", price || "");
        formData.append("category", category || "");
        formData.append(
            "ingredients",
            JSON.stringify(
                ingredients.map((ingredient) => ingredient.name || ingredient)
            )
        );
        formData.append("description", description || "");

        api
            .put(`/products/${id}`, formData)
            .then(() => {
                alert(`${name} atualizado com sucesso!`);
                navigate("/");
            })
            .catch((error) => {
                console.error("Erro ao atualizar produto:", error.message);
                alert(
                    "Não foi possível atualizar o prato."
                );
            });
    };

    const handleRemoveDish = async () => {
        const confirm = window.confirm(`Deseja remover o prato: ${name}?`);

        if (confirm) {
            try {
                await api.delete(`/products/${id}`);
                alert(`${name} removido(a) com sucesso!`);
                navigate("/");
            } catch (error) {
                console.error("Erro ao remover produto:", error.message);
                alert(
                    "Não foi possível remover o prato. Tente mais tarde."
                );
            }
        }
    };

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

                        <h1>Editar Prato</h1>
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
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                </label>
                            </Image>
                        </Section>

                        <Section title="Nome">
                            <Input className="name"
                                placeholder="Ex.: Salada Ceasar"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"

                            />
                        </Section>

                        <Section title="Categoria">
                            <Category className="category">
                                <label htmlFor="category">
                                    <select
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
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
                                        key={index}
                                        value={ingredient.name || ingredient}
                                        onClick={() => handleRemoveIngredient(index)}
                                    />
                                ))}

                                <FoodItem
                                    isNew
                                    placeholder="Adicionar"
                                    value={newIngredient}
                                    onChange={(e) => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}

                                />
                            </div>
                        </Section>

                        <Section title="Preço">
                            <Input
                                className="price"
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
                            defaultValue={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Section>

                    <div className="buttons">
                        <Button
                            className="delete"
                            title="Excluir prato"
                            onClick={handleRemoveDish}

                        />

                        <Button
                            className="save"
                            title="Salvar alterações"
                            onClick={handleUpdateDish}
                        />
                    </div>
                </Form>
            </main>

            <Footer />
        </Container>
    )
}