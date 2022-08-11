import {Container, CellRow, SCell, Selected} from "./styles";
import {format, getHours} from "date-fns";


const Events = ({
                    dateArr, selected, setSelected, events, setEventSelected,
                    eventSelected
                }) => {

    const timesArr = ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
        "00:00", "1:00", "2:00", "3:00", "4:00", "5:00"]


    function handleSelect(info, isEvent) {

        if (selected[0] === info[0] && selected[1] === info[1]) {

            setSelected('');
            setEventSelected(false);
        } else {
            if (isEvent && !eventSelected) {
                setEventSelected(true);
            }
            if (!isEvent) {
                setEventSelected(false);
            }
            setSelected(info);
        }

    }

    const Cell = ({date, time, position}) => {


        if (date && time) {
            let isEvent = false;

            const isSelected = date === selected[0] && time === selected[1];
            const intel = [date, time];

            events.map(item => {
                const formDate = format(item, "dd MM yy");
                const formHour = getHours(item).toString();
                const cellHour = time.split(':')[0];

                if (date === formDate) {
                    if (formHour === cellHour) {
                        isEvent = true;
                    }
                }
            });

            if (isEvent) {
                return (
                    <SCell className={position} onClick={e => handleSelect(intel, isEvent)}>
                        <Selected className={`event ${isSelected ? 'selected' : null}`}/>
                    </SCell>
                );
            } else {
                return (
                    <SCell className={position} onClick={e => handleSelect(intel, isEvent)}>
                        <Selected className={isSelected ? 'selected' : null}/>
                    </SCell>
                );
            }
        }
        if (time && !date) {
            return (
                <SCell className={position}>
                    <span>
                         {time}
                    </span>
                </SCell>
            );
        }
        if (!time && !date) {
            return (
                <SCell className={position}/>
            );
        }
    }

    const Row = ({dateArr, time}) => {
        const rowArr = [];
        rowArr.push(
            <Cell position='firstCell' time={time} key={time}/>
        );

        dateArr.map((item, i, {length}) => {
            if (i + 1 === length) {
                rowArr.push(
                    <Cell position="lastCell" date={item} key={item} time={time}/>
                );
            } else {
                rowArr.push(
                    <Cell position={i === 0 ? 'secCel' : null} date={item} key={item} time={time}/>
                );
            }
        })
        return (
            <CellRow>
                {rowArr}
            </CellRow>
        );
    }

    const topperRow = () => {
        const rowArr = [];

        rowArr.push(
            <Cell position="firstCell dummy" key="firstCellDummy"/>
        );
        dateArr.map((item, i, {length}) => {
            if (i + 1 === length) {
                rowArr.push(
                    <Cell position="lastCell dummy" key={item}/>
                );
            } else {
                rowArr.push(
                    <Cell key={item} position="dummy"/>
                );
            }
        })
        return <CellRow className='topper' key='topperRow'>
            {rowArr}
        </CellRow>;
    }

    const layRows = () => {
        const rows = []
        rows.push(
            topperRow()
        );
        timesArr.map(item => {
            rows.push(
                <Row dateArr={dateArr} time={item} key={item + 'rowCont'}/>
            );
        })
        return (rows);
    }

    return (
        <Container>
            <div style={{minHeight: '2rem', backgroundColor: "white"}}/>
            {layRows()}
            <div style={{minHeight: '2rem', backgroundColor: "white"}}/>
        </Container>
    );
}

export {Events}
