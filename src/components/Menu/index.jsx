import { Container, MenuClose } from "./styles";
import { Search } from "../Search";
import { ButtonText } from "../ButtonText";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { IoMdClose } from "react-icons/io";
import { USER_ROLE } from "../../utils/roles";
import { Footer } from "../Footer";

export function Menu({value, onChange, menuIsOpen, onCloseMenu}) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate()

    function handleSignOut() {
      navigate("/");
      signOut();
    }

    return (
        <Container data-menu-is-open={menuIsOpen} >
          
            <header>
            <MenuClose onClick={onCloseMenu}>
                <IoMdClose />
                Menu
            </MenuClose>
            </header>
    
          <main>
            <Search 
              
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              value={value}
              onChange={onChange}
            />

            {USER_ROLE.ADMIN.includes(user.role) &&
            <ButtonText onClick={() => navigate("/new")}>
                Novo prato
            </ButtonText>
            }
         
            <ButtonText onClick={handleSignOut}>
                Sair
            </ButtonText>
          </main>

          <Footer/>
        </Container>        
      );
    }