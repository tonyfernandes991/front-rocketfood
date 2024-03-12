import { Container, Content } from "./styles";
import { RxCaretLeft } from "react-icons/rx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
                            
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from '../../components/Tag';
import { Button } from "../../components/Button";
import { Contactor } from "../../components/Contactor";

export function Details() {
    const [product, setProduct] = useState("");
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate()

    const imageDish = `${api.defaults.baseURL}/files/${product.image}`;

    function handleBack() {
        navigate(-1)
    }

    function handleDishEdit() {
        navigate(`/edit/${id}`);
      }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do prato:", error.message);
            }
        }
        fetchDish();
    }, [id]);

    return (
        <Container>
            <Header />

            <main>
                <div>
                    <header>
                        <ButtonText onClick={handleBack}>
                            <RxCaretLeft />
                            voltar
                        </ButtonText>
                    </header>

                    <Content>
                        <img src={imageDish} />

                        <div>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>

                            {product.ingredients && (
                                <section>
                                    {product.ingredients.map((ingredient) => (
                                        <Tag
                                            key={String(ingredient.id)}
                                            title={ingredient.name}
                                        />
                                    ))}
                                </section>
                            )}
                            <div className="buttons">
                                {USER_ROLE.CUSTOMER.includes(user.role) && (
                                    <section className="sectionBtn">
                                        <Contactor />
                                        <Button
                                            title={`incluir ∙ R$${product.price}`}
                                            className="include"
                                        />
                                    </section>
                                )}
                                {USER_ROLE.ADMIN.includes(user.role) && (
                                    <section>
                                        <Button title="Editar Prato" onClick={handleDishEdit}/>
                                    </section>
                                )}
                            </div>
                        </div>
                    </Content>
                </div>
            </main>

            <Footer />
        </Container>
    )
}