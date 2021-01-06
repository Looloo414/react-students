import React from 'react'

const Scores = (props) => {
    return(
    <div>

        {props.students.map((students, idx) =>
            <h2 key={idx}> Date: {students.date} </h2>
            
            )}
    </div>
    )
}

export default Scores;