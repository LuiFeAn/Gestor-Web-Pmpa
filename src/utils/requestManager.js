

export default async function requestManager(promise,{sucess,error,any}){

    try{

        const response = await promise;

        sucess(response)

    }catch(err){

        error(err)

    }finally{

        any();

    }

}