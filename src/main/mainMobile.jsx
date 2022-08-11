import {
    Container, LayOut, HeaderContainer, HeaderText, HeaderBtn,
    StyledAdd
} from "./styles";
import {useState} from "react";
import {Calendar} from "../calendar/index"
import {Events} from "../events";
import {ActionContainer} from "../actionBlock";
import {format, getHours, isSameDay, isSameHour} from "date-fns";

const Header = ({header, addAction}) => {
    return (
        <HeaderContainer>
            <HeaderText>
                {header}
            </HeaderText>

            <HeaderBtn onClick={e => addAction()}>
                <StyledAdd/>
            </HeaderBtn>
        </HeaderContainer>
    );
}

const MainMobile = () => {

    const [dateArr, setDateArr] = useState([]);
    const [selected, setSelected] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [eventSelected, setEventSelected] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    function addAction() {
        const testExp = /20[2-6][2-9]-[0-1][0-9]-[0-3][0-9] [0-2][0-9]:[0-5][0-9]:[0-5][0-9]/
        const newEventData = prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss');
        if (newEventData.match(testExp)) {
            const arr = newEventData.split(' ');
            const date = arr[0].split('-');
            const time = arr[1].split(':');

            const newDate = new Date(parseInt(date[0]), date[1] - 1, parseInt(date[2]),
                parseInt(time[0]), parseInt(time[1]), parseInt(time[2]));
            let alreadyScheduled = false;
            events.map((item) => {
                const sameDay = isSameDay(item, newDate);
                const sameHour = isSameHour(item, newDate);
                if (sameDay && sameHour) {
                    alreadyScheduled = true;
                }
            });
            if (alreadyScheduled) {
                alert('Event for this time already scheduled!')
            } else {
                setEvents([...events, newDate]);
            }
        }
        else{
            alert('Invalid input format: ' + newEventData + '!\nTry again with YYYY-MM-DD HH:mm:ss')
        }
    }

    function deleteEvent() {
        let found = false;
        let iFound = 0;
        events.map((item, index) => {
            const formDate = format(item, "dd MM yy");
            const hour = getHours(item);

            if (formDate === selected[0] && hour.toString() === selected[1].split(':')[0]) {
                found = true;
                iFound = index;
            }
        });
        if (found) {
            let arr = events;
            arr.splice(iFound, 1);
            setEvents(arr);
            setEventSelected(false);
        }
    }

    return (
        <Container>
            <LayOut>
                <Header header='Responsive Calendar' addAction={addAction}/>
                <Calendar setWeekArr={setDateArr} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}
                          selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                <Events dateArr={dateArr} selected={selected} setSelected={setSelected} events={events}
                        setEventSelected={setEventSelected} eventSelected={eventSelected}/>
                <ActionContainer todayAction={() => {
                    setCurrentMonth(new Date());
                    setSelectedDate(new Date());
                }} showDelete={eventSelected}
                                 deleteAction={deleteEvent}/>
            </LayOut>
        </Container>
    );

}

export {MainMobile}
