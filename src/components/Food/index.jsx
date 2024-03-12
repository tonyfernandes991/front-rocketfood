import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Contactor } from "../../components/Contactor"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";

import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function Food({ products, category }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length === 0) {

    return <Container></Container>;

  }

  return (
    <Container>
        <main>
        <h2 className="section-name">{category}</h2>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={ 16}
          slidesPerView={ 1 }
          navigation
          loop={true}
          
          breakpoints={{
            440: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 27,
            },
          }}

        >
          {filteredProducts.map((product, index) => (
            <SwiperSlide className="swiperSlide" key={index}>
              <section>

                {user.role === USER_ROLE.ADMIN && (

                  <BiPencil className="btn-svg" size={20} onClick={() => navigate(`/edit/${product.id}`)} />

                )}
                {user.role === USER_ROLE.CUSTOMER && (

                  <FiHeart className="btn-svg" size={20} />

                )}

                <img
                  src={`${api.defaults.baseURL}/files/${product.image}`}
                  alt="foto do produto"
                />
                <h2
                  onClick={() => navigate(`/dish/${product.id}`)}
                  style={{ cursor: "pointer" }}
                >{`${product.name} >`}</h2>
                <span className="descriptionContent">{product.description}</span>
                <p>{`R$ ${product.price}`}</p>
                
                { user.role === USER_ROLE.CUSTOMER && (
                <section className="contactorAndButton">
                  <Contactor/>
                  <Button title="Incluir" />
                </section>
                )}
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        </main>
    </Container>
  );
}
