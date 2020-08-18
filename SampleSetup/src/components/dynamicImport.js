import React, { useState } from 'react';
import Loadable from 'react-loadable';

function Loading(props) {
    console.log("Inside Loading:");
    console.log("Loasing props: ", props);
    if (props.error) {
        return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        console.log("Inside Else:");
        return null;
    }
}

const Loadablehello = Loadable({
    loader: (props) => import('./functionComponent.js'),
    loading: Loading,
    timeout: 10000,   // 10 seconds
    delay: 300, // 0.3 seconds
});

const ButtonCaption = (props) => {
    if (props.showComponent) return (<>Hide the component</>);
    else return (<>Show the Component</>);
}
export default function ToggleHello() {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <>
            <h1>Demo of React-Loadable</h1>
            <button onClick={() => setShowComponent(!showComponent)}>
                <ButtonCaption showComponent={showComponent} />
            </button>
            { showComponent && <Loadablehello message='Wassup?' color="green"/>}
        </>
    );

}
