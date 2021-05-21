import React from 'react';
import "./team.scss";
import team1 from "../img/team_1.jpg";
import team2 from "../img/team_2.jpg";
import team3 from "../img/team_3.jpg";
import team4 from "../img/team_4.jpg";

const Team = () => 
{
    return (
        <section class="team">
            <div class="container">
                <h1>meet the team</h1>
                <div class="line_blue"></div>
                <p class="meet">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                <div class="grid_team">
                    <div class="members">
                        <img src={team1} alt="team member"></img>
                        <h3>John Doe</h3>
                        <p>Director</p>
                    </div>
                    <div class="members">
                        <img src={team2} alt="team member"></img>
                        <h3>Mike Doe</h3>
                        <p>Senior Designer</p>
                    </div>
                    <div class="members">
                        <img src={team3} alt="team member"></img>
                        <h3>Jane Doe</h3>
                        <p>Senior Designer</p>
                    </div>
                    <div class="members">
                        <img src={team4} alt="team member"></img>
                        <h3>Karen Doe</h3>
                        <p>Project Manager</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
