import binImg from "../../assets/bin.png"
import editImg from "../../assets/editar.png"

export default function Overview(props){
    
    return (
        <ul>
            {props.tasks.map((task) =>{
                return  <li key={task.id} id={task.id}>
                            {task.text}
                            <img src={binImg} alt="delete but" className="task-but" onClick={props.deleteFunction}></img> 
                        </li>
            })}
        </ul>
    )
}