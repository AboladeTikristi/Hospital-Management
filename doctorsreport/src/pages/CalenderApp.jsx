import { dateFnsLocalizer, Calendar } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-datepicker"
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css"

const locales = {
    "en-Us": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 6, 20),
        end: new Date(2022, 6, 20)
    },
    {
        title: "Vacation",
        start: new Date(2022, 6, 22),
        end: new Date(2022, 6, 22)
    },
    {
        title: "Conference",
        start: new Date(2022, 6, 20),
        end: new Date(2022, 6, 24)
    }
]

const CalenderApp = () => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)
    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <>
            <main className="w-100 card my-2 overflow-scroll"  style={{height:"80vh"}}>
                <div className="w-100 my-2">
                    <h5 className="text-center">Calender</h5>
                    <h6 className="text-center">Add New Event</h6>
                    <div className="w-100">
                        <input type="text"
                            style={{ marginRight: "10px" }}
                            placeholder="Add Title"
                            className="form-control w-25 ms-4"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />

                        <DatePicker placeholderText="Start Date"
                            style={{ marginRight: "10px" }}
                            className="form-control w-25 ms-4"
                            selected={newEvent.start}
                            onChange={(start) => setNewEvent({ ...newEvent, start })} />

                        <DatePicker placeholderText="End Date"
                            selected={newEvent.end}
                            className="form-control w-25 ms-4"
                            onChange={(end) => setNewEvent({ ...newEvent, end })} />

                        <button className="btn btn-primary ms-4" onClick={handleAddEvent}>Add Event</button>
                    </div>
                    <Calendar
                        localizer={localizer}
                        events={allEvents}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500, margin: "50px" }} />
                </div>
            </main>

        </>
    )
}
export default CalenderApp