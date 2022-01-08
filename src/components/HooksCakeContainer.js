import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux'
import Button from '@mui/material/Button'

function HooksCakeContainer() {

    const numofCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes {numofCakes}</h2>
            <Button variant='contained' onClick={() => dispatch(buyCake())}>Buy Cake</Button>
        </div>
    )
}

export default HooksCakeContainer
