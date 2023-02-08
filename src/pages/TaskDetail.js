import { useEffect } from "react";
import {useParams} from "react-router-dom";


function TaskDetail() {
  const {id} = useParams();


  return (
    <div>Coucou, je suis la tâche numéro {id}</div>
  )
}

export default TaskDetail;