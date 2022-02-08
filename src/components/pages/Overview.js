import binImg from "../../assets/bin.png"

export default function Overview(props){
    
    return (
        <ul>
            {props.tasks.map((task) =>{
                return <li key={task.id}>
                    {task.text}
                    <img src={binImg} alt="delete but" className="delete-but" /*onClick={handleDelete()}*/></img> 
                </li>
            })}
        </ul>
    )
}