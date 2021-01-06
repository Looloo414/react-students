import React from "react"
import Scores from '../Score/Score'


const Student = (student) => {
    return(
        <div className="main">
            <h2>{student.name}</h2>,
            <p>{student.bio}</p>
        </div>
    )
}



  
export default Student;