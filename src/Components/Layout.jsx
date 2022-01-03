import React from 'react'
import SpaceBar from '../Components/Pages/spaceBar';

function Layout(props){
    //const children = props.children
    return (
        <div>
            <SpaceBar />
            {props.children}
        </div>
    );
}

export default Layout;