import React from 'react';
import DateTimePicker from 'react-datetime-picker';

function EventForm (props)  {
    return(
        <div className="modal" id="eventFormModal">
            <header>New Event</header>
            <section id="eventFormSection">
                <form id="eventForm">
                    <section id="eventTitleSection">
                        <label htmlFor="eventTitle">Title</label>
                        <input type="text" id="eventTitle" name="eventTitle" value={props.eventTitle} onChange={props.handleChange}></input>
                    </section>
                    <section id="startDateTimeSection">
                        <label htmlFor="startDateTime">Start Date and Time</label>
                        <DateTimePicker
                        id="startDateTime"
                        value={props.startDate}
                        onChange={props.startChange}
                        />
                    </section>
                    <section id="startDateTimeSection">
                        <label htmlFor="endDateTime">End Date and Time</label>
                        <DateTimePicker
                        className="dateTimePicker"
                        id="endDateTime"
                        value={props.endDate}
                        onChange={props.endChange}
                        />
                    </section>
                    <section id="eventDescriptionSection">
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea id="eventDescription" name="eventDescription" value={props.campaignInput} onChange={props.handleChange}></textarea>
                    </section>
                    <button id="submitEvent" type="submit" className="modal-close" onClick = {props.handleFormSubmit}>Submit</button>
                </form>
            </section>
        </div>
    );
};

export default EventForm;