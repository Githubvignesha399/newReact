import React from 'react';
import House from './House';

class Garage extends React.Component{

    componentWillUnmount(){
        let unmount = <House/>
        alert(unmount.key)
    }
    render(){
        return (
            <>component has unmounted</>
        )
    }
}

export default Garage;