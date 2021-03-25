import './App.css';

type ButtonType = {
    disable:boolean
    onClickHandler: ()=>void
    title:string
}


export const Button:React.FC<ButtonType> = (props) => {

    const {onClickHandler, disable, title } = props

    return (
     
         <div >
             <button onClick={onClickHandler} disabled={disable} >{title}</button>
         </div>
        
        
    
    )
}