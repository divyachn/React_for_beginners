import React from 'react';

const HelloWorld = (props) => {

    console.log("Inside HelloWorld function component:");
    console.log("props: ", props);

    return (
        <>
            <h2>Hello World!</h2>
        </>
    );
}

export default HelloWorld;
