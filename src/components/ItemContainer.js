import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'
import Button from '@mui/material/Button'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <Button variant='contained' onClick={props.buyItem}>Buy Items</Button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispactToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return{
        buyItem: dispatchFunction
    }
}

export default connect(null, mapDispactToProps )(ItemContainer)
