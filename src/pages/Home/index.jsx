import { useState, useEffect } from "react";
import { Container, SessionUserContainer } from "./style";
import { useContext } from "react";
import { sessionContext } from "../../contexts/Session";
import Input from "../../components/input";
import { gestorWebAPI } from "../../services/gestor";
import Loading from '../../components/Loading';
import useLoading from '../../hooks/useLoading';
import requestManager from "../../utils/requestManager";
import UserCard from "../../components/UserCard";
import Button from '.././../components/Button';
import isvalidCpf from '../../utils/validCpf';
import validarRG from "../../utils/validRg";
import Select from "../../components/Select";
import { Fragment } from "react";
import Form from "../../components/Form";

export default function Home(){

    const { loading, setLoading } = useLoading();

    const { session } = useContext(sessionContext);

    const [ users, setUsers ] = useState([]);

    const [ clickedOnButton, setClickedOnButton ] = useState(false);

    const [ search, setSearch ] = useState('');

    const [ page, setPage ] = useState(0);

    const [ searchType, setSearchType ] = useState('nome');

    const [ sessions, setSessions ] = useState(['DGEC','DGP','CPC-I','CPC-II','CPRM','1º BPM','2º BPM','20º BPM','27º BPM','28º BPM','37º BPM','10º BPM','24º BPM','25º BPM','26º BPM','6º BPM','21º BPM','29º BPM','30º BPM','39º BPM','43º BPM','3º BPM','18º BPM','35º BPM','41º BPM','26ª CIPM','26ª CIPM','27ª CIPM','28ª CIPM','29ª CIPM','4º BPM','34º BPM','11ª CIPM','24ª CIPM','5º BPM','12º BPM','42º BPM','48º BPM','3ª CIPM','13º BPM','45º BPM','50º BPM','23ª CIPM','7º BPM','22º BPM','30ª CIPM','19º BPM','51º BPM','11º BPM','33º BPM','44º BPM','10ª CIPM','15ª CIPM','19ª CIPM','16º BPM','49º BPM','52º BPM','16ª CIPM','14º BPM','31º BPM','32º BPM','47º BPM','2ª CIPM','4ª CIPM','5ª CIPM','15º BPM','46º BPM','17ª CIPM','1ª CIPM','8º BPM','20ª CIPM','9º BPM','22ª CIPM','32ª CIPM','17º BPM','36º BPM','31ª CIPM','23º BPM','40º BPM','25ª CIPM','BPRV','BPOP','BPEV','CIEPAS','CIPOI','1º BPR','2º BPR','CIPTUR','BPCHOQ','RPMONT','BPROTAM','BEP','BAQ','BPA','CIPFLU']);

    const [ selectedSession, setSelectedSession ] = useState('PESQUISA POR SESSÃO');

    const [ noHasResult, setNoHasResult ] = useState(false);

    const [ error, setError ] = useState(false);

    async function handleSearch(event){

        setSearch(event.target.value);

        if( isvalidCpf(event.target.value ) ){

            return setSearchType('cpf');

        }

        if( validarRG(event.target.value) ){

            return setSearchType('rg');

        }

        setSearchType('nome');

    }

    async function makeSearch(){

        setClickedOnButton(true);

        setLoading(true)

        setUsers([]);

        const newSearch = searchType === 'nome' ? search.replace(/\s+/g, "+") : search;

        const model = ['cpf','rg','nome'].includes(searchType) ? 'pessoa' : 'unidade';

        const result = gestorWebAPI.get(`/searchpersonglobal?limit=300&page=${page.toString()}&types=${searchType}&search=${newSearch}&model=${model}&myPermitions[]=8&myPermitions[]=16&myPermitions[]=17&idunidade=8`,{
            headers:{
                'Authorization':`Bearer ${session.token}`
            }
        });

        requestManager(result,{
            sucess(response){

                const { data: { data } } = response;

                if( data.length === 0 ){

                    return setNoHasResult(true);

                }

                const users = data.map( user => {
        
                    const idPerson = user.pessoa.idpessoa.toString().split('').reduce((a,b) => a + '/' + b);
        
                    const sigpolImg = `https://sigpol.pm.pa.gov.br/upload/pessoa/${idPerson}/foto.jpg`;

                    return {
                        ...user,
                        img: sigpolImg
                    }

                });

                setUsers(users);

                setNoHasResult(false);

                setError(false);

            },
            error(error){

                setError(true);

            },
            any(){

                setLoading(false);

                setClickedOnButton(false);

            }
        })
    }

    function handleSelect(event){

        setSearch(event.target.value.toLowerCase());

        setSelectedSession(event.target.value);

        setSearchType('unidade');

    }


    return (
        <Container>

            <SessionUserContainer>

                <img src={session.img}/>

                <div className="informations">

                    <p>NOME: {session.nome + " - " + session.graduacao}</p>

                    <br/>

                    <p>UNIDADE: {session.user}</p>

                </div>

            </SessionUserContainer>
            
            <Form execute={makeSearch}>

                <Input placeholder="PESQUISE POR NOME, CPF, RG, SESSÃO" value={search} onChange={handleSearch} />

                <Button colorVerification>Pesquisar</Button>

            </Form>


            <br/>

        
            <div>

                <Select onChange={handleSelect}>

                        <option>SESSÕES</option>

                        { sessions.map( session => (
                            <option key={Math.random()}>{session}</option>
                        ))}

                </Select>

            </div>

            <br/> <br/>

            {/* { search.length == 0 && (
               <>

                    <img src={searchIcon}/>

               </>
            )} */}

            { users.length > 0 && (
                 <p style={{fontWeight:'bold'}}>{users.length} RESULTADOS REFERENTES</p>
            )}

            { noHasResult && (
                <p style={{fontWeight:'bold'}}>NENHUM RESULTADO ENCONTRADO PARA {search}</p>
            )}

            { error && (
                <h4 style={{color:'red',textAlign:'center'}}>OCORREU UM ERRO DURANTE A PESQUISA. <br/> TENTE NOVAMENTE MAIS TARDE</h4>
            )}


            { clickedOnButton && (
                <Loading loading={loading}/>
            )}

            { users.length > 0 && users.map( user => (
                    <Fragment key={Math.random()}>

                        <UserCard user={user}/>

                    </Fragment>
                ))}
        </Container>
    )

}