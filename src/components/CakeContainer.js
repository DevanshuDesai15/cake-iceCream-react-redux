import React from 'react'
import {connect} from 'react-redux';
import {buyCake} from '../redux'
import Button from '@mui/material/Button'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <Button variant='contained' onClick={props.buyCake}>Buy Cake</Button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispactToProps = dispatch => {
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps, 
    mapDispactToProps
) (CakeContainer)
