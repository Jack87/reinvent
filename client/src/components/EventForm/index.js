import React from 'react';
import './EventForm.css';
// import { PresignedPost } from 'aws-sdk/clients/s3';

function EventForm (props)  {
    return(
        <div className="modal" id="eventFormModal">
            <header className="header">New Event</header>
            <section id="eventFormSection">
                <form id="eventForm">
                    <section id="eventTitleSection">
                        <label htmlFor="eventTitle">Title</label>
                        <input type="text" id="eventTitle" name="eventTitle" value={props.eventTitle} onChange={props.handleChange}></input>
                    </section>
                    <section id="startDateTimeSection">
                        <label htmlFor="startDate">Start Date</label>
                        <input id="startDate" type="text" className="startdatepicker" name="startDate" value={props.startDate} onSelect={props.onSelect} onChange={props.handleChange}></input>
                        <label htmlFor="startTime">Start Time</label>
                        <input type="text" className="starttimepicker" id="startTime" name="startTime" value={props.startTime} onChange={props.handleChange}></input>
                    </section>
                    <section id="endDateTimeSection">
                        <label htmlFor="EndDate">End Date</label>
                        <input id="EndDate" type="text" className="enddatepicker" name="endDate" value={props.endDate} onChange={props.handleChange}></input>
                        <label htmlFor="EndTime">End Time</label>
                        <input type="text" className="endtimepicker" id="endTime" name="endTime" value={props.endTime} onChange={props.handleChange}></input>
                    </section>
                    <section id="eventDescriptionSection">
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea id="eventDescription" name="eventDescription" value={props.campaignInput} onChange={props.handleChange}></textarea>
                    </section>
                    <button id="submitEvent" type="submit" className="btn btn-dark modal-close" onClick = {props.handleFormSubmit}>Submit</button>
                </form>
            </section>
        </div>
    );
};

export default EventForm;