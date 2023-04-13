import { useState } from "react";
import { UserCardContainer } from "./style";;
import noPhoto from '../../assets/images/noPhoto.jpg';
import Button from "../Button";

export default function UserCard({user}){

    const [ image, setImage ] = useState( user.img || noPhoto );

    function errorImageHandler(){

       setImage(noPhoto);

    }

    return (
        <UserCardContainer>

            <img src={image} onError={errorImageHandler}/>

            <div className="informations">

                <p>{user.pessoa.nome}</p>

                <p>{user.pessoa.cpf}</p>

                <p>{user?.pessoa.unidade?.sigla_unidade}</p>
                
                <p>{user?.pessoa?.rg}</p>

            </div>

            <Button colorVerification>Perfil</Button>


        </UserCardContainer>
    )

}