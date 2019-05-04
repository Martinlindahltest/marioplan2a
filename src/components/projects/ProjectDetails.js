import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    console.log(id)
    return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae adipisci sequi at veniam magnam temporibus pariatur esse laborum, velit vel laboriosam, voluptas impedit illo, eligendi animi alias! Dignissimos, at.</p>
            </div>
            <div className="card-action grey lighten-4 text">
                <div>Poste by Mnet mninja</div>
                <div>2 september, 2am</div>
            </div>
        </div>
    </div>
  )
}
