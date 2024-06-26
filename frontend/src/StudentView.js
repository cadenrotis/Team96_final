import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const StudentView = ({
    switchToTimelineView,
    switchToRiseofRomeView,
    switchToPunicWarsView,
    switchToFallofRomeView,
    switchToStudentView,
    switchToInventoryView
}) => {
    return (
        <div>
            {/* The navigational bar */}
            <div style={{ backgroundColor: "rgb(0, 128, 255)", display: "flex", justifyContent: "center", height: "80px" }}>
                <button
                    className="text-black text-sm p-1 focus:outline-none"
                    style={{ height: "35px", marginTop: "20px", background: "none", border: "none", fontSize: "20px" }}
                    onClick={switchToTimelineView}
                >
                    Timeline
                </button>
                <button
                    className="text-black text-sm p-1 focus:outline-none"
                    style={{ marginLeft: "90px", height: "35px", marginTop: "20px", background: "none", border: "none", fontSize: "20px" }}
                    onClick={switchToRiseofRomeView}
                >
                    Rise Of Rome
                </button>
                <button
                    className="text-black text-sm p-1 focus:outline-none"
                    style={{ marginLeft: "90px", height: "35px", marginTop: "20px", background: "none", border: "none", fontSize: "20px" }}
                    onClick={switchToPunicWarsView}
                >
                    Punic Wars
                </button>
                <button
                    className="text-black text-sm p-1 focus:outline-none"
                    style={{ marginLeft: "90px", height: "35px", marginTop: "20px", background: "none", border: "none", fontSize: "20px" }}
                    onClick={switchToFallofRomeView}
                >
                    Fall of Rome
                </button>
                <button
                    className="text-white text-sm p-1 focus:outline-none"
                    style={{ marginLeft: "90px", height: "35px", marginTop: "20px", background: "none", border: "none", fontSize: "20px" }}
                    onClick={switchToStudentView}
                >
                    Information about the Students
                </button>
                <button
                    className="text-black text-sm p-1 focus:outline-none"
                    style={{ marginLeft: "90px", height: "35px", marginTop: "20px", background: "none", border: "none", fontSize: "20px" }}
                    onClick={switchToInventoryView}
                >
                    Learn More
                </button>
            </div>

            <br></br>

            {/* The header and description of the view */}
            <div className="header" style={{ padding: "20px" }}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                    <font size="+20"><u>Information about the Students</u></font>
                </h1>
                <br></br>
                <h2 className="lead" style={{ fontSize: "30px", maxWidth: "1000px", margin: "0 auto" }}>
                    Here, you can learn more about the students who designed and developed this website.
                </h2>
            </div>

            <br></br>

            {/* Descripion of student 1 with name and email included */}
            <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h1 className="featurette-heading fw-normal lh-1"><u>Caden Otis</u></h1>
                        <h2 style={{ textAlign: "center" }}>
                            <a href="https://outlook.office.com/mail/" target="_blank">crotis@iastate.edu</a>
                        </h2>
                        <p style={{ fontSize: "20px" }}>
                            Hello, I'm Caden Otis. I am currently a junior studying Electrical Engineering and Computer Science at Iowa State University.
                            As part of the midterm project for COM S 319, I worked with Brandon to develop this website, a timeline of events of the Roman Empire,
                            to help others learn about some of the important events that took place during the existence Roman Empire. Through the use of
                            HTML, CSS, JavaScript, DOM, JSON, ReactJS, NodeJS, MongoDB, and Bootstrap, Brandon and I were able to create a single-page website
                            that consists of a nice design, with images and text to easily convey information to others about some of the stuff that happened
                            in the Roman Empire. I hope this website has helped you learn a little bit more about the Roman Empire. Thank you for taking the
                            time to visit our website!
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src="./myotherimages/cadenotis.jpg" style={{ marginTop: "40px", marginLeft: "30px" }} alt="Picture of Caden Otis" width="400" />
                    </div>
                </div>

                <br></br>
                <br></br>

                {/* Descripion of student 2 with name and email included */}
                <div className="row featurette">
                    <div className="col-md-7">
                        <h1 className="featurette-heading fw-normal lh-1"><u>Brandon Rau</u></h1>
                        <h2 style={{ textAlign: "center" }}>
                            <a href="https://outlook.office.com/mail/" target="_blank">brau13@iastate.edu</a>
                        </h2>
                        <p style={{ fontSize: "20px" }}>
                            Hi, I am Brandon Rau. I am a sophmore learning Computer Science at Iowa State.
                            For my final project in COM S 319, I worked with Caden Otis to help develop this website, which is a
                            timeline of events throughout the Roman Empire. In order to help others learn more about important events
                            throughout the Roman Empire.
                            We used HTML, CSS, JavaScript, DOM, JSON, ReactJS, NodeJS, MongoDB, and Bootstrap in order to make this webstie. Through this single-page
                            website I hope you were able to learn more about the Roman Empire and some of its important events.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src="./myotherimages/brandonrau.jpg" style={{ marginTop: "40px", marginLeft: "30px" }} alt="Picture of Brandon Rau" width="400" />
                    </div>
                </div>

                {/* Descripion of course name and number */}
                <div>
                    <h1 class="featurette-heading fw-normal lh-1"><u>Course:</u></h1>
                    <p style={{ fontSize: "30px" }}>
                        <a href="https://catalog.iastate.edu/search/?search=COMS+3190&search-submit=Submit" target="_blank">
                            SE/ComS319 Construction of User Interfaces, Spring 2024.
                        </a>
                    </p>
                </div>

                <br></br>
                <br></br>

                {/* Descripion of professors with their name and email included */}
                <div>
                    <h1 class="featurette-heading fw-normal lh-1"><u>Professors:</u></h1>
                    <p style={{ fontSize: "30px" }}>
                        The professors of the students is <b>Dr. Abraham N. Aldaco Gastelum</b> <a href="https://outlook.office.com/mail/" target="_blank">aaldaco@iastate.edu</a><br></br>
                        and <b>Dr. Ali Jannesari</b> <a href="https://outlook.office.com/mail/" target="_blank">jannesar@iastate.edu</a>.
                    </p>
                </div>

                <br></br>
                <br></br>

                {/* The date that the webpage/project was completed*/}
                <div>
                    <h1 class="featurette-heading fw-normal lh-1">
                        <u>Date:</u> <b id="date">May 4th, 2024</b>
                    </h1>
                </div>
            </div>

            <br></br>
            <br></br>

            {/* The footer */}
            <footer class="b-footer">
                <div>
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "20px",
                            backgroundColor: "rgb(224, 224, 224)"
                        }}
                    >
                        &copy; Caden Otis and Brandon Rau 2024
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default StudentView;