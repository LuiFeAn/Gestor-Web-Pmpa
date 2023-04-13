import { Container } from "./style";

import brasaoImg from '../../assets/images/brasao.png';

export default function Header(){

    return (
        <Container>

            <img src={brasaoImg}/>

            <div>
                <h2>PMPA <br/> GESTOR WEB DGEC</h2>
            </div>

        </Container>
    )

}