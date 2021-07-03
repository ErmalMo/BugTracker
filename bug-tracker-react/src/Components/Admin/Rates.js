import React from 'react'
import RateUsModal from '../RateUs/RateUsModal'
export default function Rates(props) {
    const {id, userRating, email }= props;
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{id}</td>
                    <td> {userRating} </td>
                    <td> {email} </td>
                    <td> {<RateUsModal />} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
Rates.defaultProps={
     id:0,
    userRating:0,
     email:""

}