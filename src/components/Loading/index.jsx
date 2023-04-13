import { Container } from "./style";
import loadingImg from '../../assets/gifs/loading.gif';

export default function Loading({loading}){

    return (

        <>

            { loading && (
                <Container>
                
                    <img src={loadingImg}/>

                </Container>
            )}

        </>

    )

}