import { useState } from "react";
import { Container, LoginGeralContainer, LoginContainerInput } from "./style";
import Input from "../input";
import Button from "../Button";
import { gestorWebAPI } from "../../services/gestor";
import { toast } from "react-toastify";
import md5 from "md5";
import { useContext } from "react";
import { sessionContext } from "../../contexts/Session";
import { useNavigate, Navigate } from "react-router-dom";

import loginImage from '../../assets/images/login.jpg';


export default function Login(){

    const Nav = useNavigate();

    const [ CPF, setCPF ] = useState('');
    
    const [ password, setPassword ] = useState('');

    const { setLogin, session } = useContext(sessionContext);

    const buttonValueHandler = CPF && password;

    async function auth(event){

        event.preventDefault();

        const errors = [];

        if( buttonValueHandler ){

            if( session ){

                return toast.error('Você já se encontra autenticado');

            }

            const promise = gestorWebAPI.post('/api/v1/auth',{
                cpf: CPF,
                senha: password
            });
    
            await toast.promise(promise,{
                success:{
                    render({data:{data}}){
                        
                        localStorage.setItem('userSession',JSON.stringify(data));

                        setLogin(true);

                        Nav('/home');

                        return 'Login realizado com sucesso!'
                    }
                },
                pending:'Realizando Login...',
                error:{
                    render({data:{request:{response}}}){
                        
                        const data = JSON.parse(response);

                        const { error } = data;

                        return error;
 
                    }
                }
            });

            return

        }

        if( !CPF ){

            errors.push('CPF é obrigatório')

        }

        if( !password ){

            errors.push('Senha é obrigatória')

        }

        errors.forEach( error => toast.error(error) );

    }

    function handleCpf(event){

        setCPF(event.target.value);

    }

    function handlePassword(event){

        setPassword(md5(event.target.value));

    }

    if( !session ){

        return (
            <LoginGeralContainer>
    
                <img src={loginImage}/>
    
                <LoginContainerInput>
    
                    <Container onSubmit={auth}>
    
                        <label>
    
                            <p>CPF</p>
    
                            <Input maxLength={11} onChange={handleCpf} placeholder="CPF"/>
    
                        </label>
    
                        <label>
                            
                            <p>SENHA</p>
    
                            <Input onChange={handlePassword} type="password" placeholder="SENHA"/>
    
                        </label>
    
                        <Button colorVerification={buttonValueHandler}>Login</Button>
    
                </Container>
    
                </LoginContainerInput>
    
            </LoginGeralContainer>
        )

    }else{

        return <Navigate to='/home'/>

    }

}