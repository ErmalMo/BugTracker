import React from 'react'

export default function ProjectProblem(props) {
    
    const {id, projectProblem , projectProgress, email } = props;

    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{id}</td>
                    <td> {projectProblem} </td>
                    <td> {projectProgress} </td>
                    <td> {email} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
ProjectProblem.defaultProps={
     id:0,
    projectProblem:"",
    projectProgress:0,
     email:""

}