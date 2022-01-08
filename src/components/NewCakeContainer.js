import React, {useState} from 'react'
import {connect} from 'react-redux';
import {buyCake} from '../redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewCakeContainer(props) {

    const [number, setnumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <TextField variant='filled' type='text' value={number} onChange={e => setnumber(e.target.value)} />
            <Button variant='outlined' onClick={()=>props.buyCake(number)}>Buy {number} cakes...</Button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps, 
    mapDispactToProps
) (NewCakeContainer)
