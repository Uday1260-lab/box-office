import React ,{ useEffect ,useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../Misc/config';

const reducer = (prevState,action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': 
            return {isLoading: false ,error: null,show: action.show}            
            break;
        case 'FETCH_FAILED': 
            return {isLoading: false ,error: action.error ,show: null}            
            break;
    
        default:
            return prevState
            break;
    }
}

const initialState ={
    show:null,
    isLoading:true,
    error:null
}

const Show = () => {
    const {id} = useParams();
    const [state,dispatch] = useReducer(reducer, initialState,);
    console.log(state);
    useEffect( () => {
        let isMounted = true;
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
            setTimeout(() => {
                if (isMounted) {
                    dispatch({type: 'FETCH_SUCCESS' , show: results});
                }
                                
            }, 2000);
                        
        }).catch( err => {
            if (isMounted) {
                dispatch({type: 'FETCH_FAILED' , error: err.message});
            }
        } );
        return() => {
            isMounted=false;
        }
    } , [id] )
    // console.log('show',show);

    // if (isLoading) {
    //     return <div>Data is being loaded...</div>        
    // }

    // if (error) {
    //     return <div>uh-ooh!! Some error occured : {error} </div>        
    // }

    return <div>This is show page.</div>
}

export default Show
