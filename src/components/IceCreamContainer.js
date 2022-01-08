import React from 'react'
import {connect} from 'react-redux';
import {buyIceCream} from '../redux'
import Button from '@mui/material/Button'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice-Creams - {props.numOfIceCreams}</h2>
            <Button variant='contained' color='secondary' onClick={props.buyIceCream}>Buy Icecream</Button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispactToProps = dispatch => {
    return{
        buyIceCream: ()=> dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps, 
    mapDispactToProps
) (IceCreamContainer)
