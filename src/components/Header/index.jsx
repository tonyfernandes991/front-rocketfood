import { FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { Container, Menu, Brand, Logout} from "./styles";
import { useAuth } from "../../hooks/auth";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

import brand from "../../assets/brand.svg";

export function Header({ value, onChange, onOpenMenu}) {
    const { signOut, user } = useAuth()

    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    return (

        <Container>
            {onOpenMenu &&
            <Menu onClick={onOpenMenu}>
                <IoMenu />
            </Menu>
            }

            {USER_ROLE.ADMIN.includes(user.role) &&
                <Brand>
                    <div className="adminClass">
                        <img src={brand} alt="Logo" />
                        <span>admin</span>
                    </div>
                </Brand>
            }

            {USER_ROLE.CUSTOMER.includes(user.role) &&
                <Brand>
                    <img src={brand} alt="Logo" />
                </Brand>
            }

            <Search
                className="inputSearch"
                type="text"
                placeholder="Busque por pratos ou ingredientes"
                value={value}
                onChange={onChange}
            >

            </Search>

            <>
                {USER_ROLE.ADMIN.includes(user.role) &&
                    <Button
                        className="new"
                        title="Novo prato"
                        onClick={() => navigate("/new")}
                    />}
                {USER_ROLE.CUSTOMER.includes(user.role) &&
                    <Button

                        className="orders"
                        icon={PiReceipt}
                        title="Pedido (0)"
                        onClick={() => navigate("/orders")}
                    />}
            </>
                <>
                {USER_ROLE.CUSTOMER.includes(user.role) &&
                <button className="button-costumer-mobile">
                <PiReceipt className="icon-receipt-customer"/>
               
                </button>
                }
                {USER_ROLE.ADMIN.includes(user.role) &&
                <PiReceipt className="icon-receipt"/>
                }
                </>

            <Logout onClick={handleSignOut}>
                <FiLogOut size={"3.2rem"} />
            </Logout>

        </Container>
    )
}