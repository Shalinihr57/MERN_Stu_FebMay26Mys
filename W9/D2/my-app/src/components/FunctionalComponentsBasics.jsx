import React from 'react';
function Welcome(props){
    return(
        // child component : reusable UI
        <p>Hello, {props.name}</p>
    );
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functinal Components Basics</h2>
            {/* We are passing 'Shalini' as prop 
            Welcome function recieve is as {name: "Shalini"}*/}
            <Welcome name="Shalini"/>
            {/* We are passing 'Developer' as prop 
            Welcome function recieve is as {name: "Developer"}*/}
            <Welcome name="Developer"/>
        </div>
    )
}