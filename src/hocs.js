import { useNavigate, useParams } from 'react-router-dom'

export function withParams(Component){
    return props => <Component {...props} params={useParams()}/>
}

export function withNavigate(Component){
    return props => <Component {...props} navigate={useNavigate()}/>//changed params to navigate here per Brendan ... and fixed updatePost!
}

