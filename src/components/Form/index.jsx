import { useState } from "react";

export default function Form({execute,children}){


    function onSubmit(event){

        event.preventDefault();

        execute();

    }

    return(
        <form onSubmit={onSubmit}>

            { children }

        </form>
    )

}