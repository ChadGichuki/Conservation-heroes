import React from "react";

function Dashboard() {
    return (
        <div id="dashbackground">
        <div className="dashboard">
        <div class="card text-bg-success">
            <h5 class="card-header">My Profile</h5>
            <div class="card-body">
                <h5 class="card-title">Current Ranking: #1,567</h5>
                <p class="card-text">Instagram: plants.durant</p>
                <p class="card-text">Twitter: @theDurant</p>
                <p class="card-text">Facebook: Durant</p>
                <a href="#" class="btn btn-dark">Update Profile</a>
            </div>
        </div>
        <br/>
        <div class="card mb-3">
            <img src="events.jpg" class="card-img-top" alt="Events"/>
                <div class="card-body">
                    <h5 class="card-title">Events</h5>
                    <p class="card-text">View details of the latest upcoming events and meet fellow conservation heroes...</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
        </div>
        <div class="card mb-3">
            <img src="news.jpg" class="card-img-top" alt="News"/>
                <div class="card-body">
                    <h5 class="card-title">News</h5>
                    <p class="card-text">Read stories from conservation heroes around the world...</p>
                    <p class="card-text"><small class="text-muted">Last updated 30 mins ago</small></p>
                </div>
        </div>
       
    </div>
    </div>
    )
    
}

export default Dashboard