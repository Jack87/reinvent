import React, {Component} from "react";
import MyCalendar from "../../components/MyCalendar";
import EventForm from "../../components/EventForm";
import API from "../../utils/API";
import "./style.css"

class Calendar extends Component {
    state = {
        eventTitle: "",
        startDate: new Date(),
        endDate: new Date (),
        eventDescription: "",
        events: []
    };

    startChange = date => this.setState({ startDate: date });

    endChange =  date => this.setState({ endDate: date });

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value 
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const eventForm = document.getElementById('eventForm');
        API.createEvent({
            title: this.state.eventTitle,
            start: this.state.startDate,
            end: this.state.endDate,
            description: this.state.eventDescription
        })
        .then(response => {
            (console.log(`You successfully uploaded: ${response.data.title}`));
        });
        this.setState({
            eventTitle: "",
            startDate: new Date(),
            endDate: new Date (),
            eventDescription: ""
        })
        eventForm.reset();
    };

    render = () => (
        <div className="container">
            <EventForm
            eventTitle={this.state.eventTitle}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            eventDescription={this.state.eventDescription}
            startChange={this.startChange}
            endChange={this.endChange}
            handleChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <div id="calendarDisplay">
                <MyCalendar/>
            </div>
        </div>
    );
};

export default Calendar;