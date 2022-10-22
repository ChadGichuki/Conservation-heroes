import React from "react";
import {Link} from "react-router-dom"

function Leaderboard() {
    return (
        <div className="leaderboard">
            <h2>We recognize the valiant efforts of the following conservation heroes:</h2>
            <table class="table table-dark table-striped table-hover">
            <caption>Daily Global Leaderboards</caption>
                <thead>
                    <tr>
                        <th scope="col">Ranking</th>
                        <th scope="col">Hero Alias</th>
                        <th scope="col">@Instagram</th>
                        <th scope="col">@Twitter</th>
                        <th scope="col">Hero Tier</th>
                        <th scope="col">Conservation Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>SelloTseka</td>
                        <td>STseka</td>
                        <td>I_am_Sello</td>
                        <td>Mountain</td>
                        <td>375</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>James.Sindani</td>
                        <td>Sindani</td>
                        <td>Sindani_J</td>
                        <td>Forest</td>
                        <td>229</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>OdipoEric</td>
                        <td>Odipus_complex</td>
                        <td>ErciOdipo</td>
                        <td>Nature</td>
                        <td>104</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Rael</td>
                        <td>Kenyan_Rael</td>
                        <td>Rael</td>
                        <td>-</td>
                        <td>68</td>
                    </tr>
                </tbody>
            </table>
            <p>Your name could also be up here!</p><Link className="homebtn" to="/dashboard">Here's How.</Link>
        </div>
    )
}

export default Leaderboard