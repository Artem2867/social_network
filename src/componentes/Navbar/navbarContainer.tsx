import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/redux-store';
import Navbar from './navbar';

type NavbarPropsType = {
    myId: number | null
}


const NavbarContainer: React.FC<NavbarPropsType> = ({myId}) => {
    return (
            <Navbar myId={myId}/>
    )
}


const mapStateToProps = (state: AppState) => {
    return {
        myId: state.authMe.data.id
    }
}





export default connect(mapStateToProps, {})(NavbarContainer)