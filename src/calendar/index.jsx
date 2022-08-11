import {useState, useEffect} from "react";
import {
    format,
    subMonths,
    addMonths,
    startOfWeek,
    addDays,
    isSameDay,
    lastDayOfWeek,
    getWeek,
    addWeeks,
    subWeeks
} from "date-fns";
import {
    CalContainer, Footer, Day, DayList, DateList, DateNum, DateCircle,
    ArrowRight, ArrowLeft, ArrowBtn
} from "./styles";

const Calendar = ({setWeekArr, currentMonth, setCurrentMonth, selectedDate, setSelectedDate}) => {

    const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));


    useEffect(() => {
        const startDate = startOfWeek(currentMonth, {weekStartsOn: 1});
        const endDate = lastDayOfWeek(currentMonth, {weekStartsOn: 1});
        const dataArr = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day;
                const dayStr = format(cloneDay, "dd MM yy");
                dataArr.push(dayStr);
                day = addDays(day, 1);
            }
        }
        setWeekArr(dataArr);

    }, [currentMonth])

    const changeWeekHandle = (btnType) => {
        if (btnType === "prev") {
            setCurrentMonth(subWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
        }
        if (btnType === "next") {
            setCurrentMonth(addWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
        }
    };

    const onDateClickHandle = (day, dayStr) => {
        setSelectedDate(day);
    };

    const FooterAct = () => {
        const dateFormat = "MMMMMM yyyy";
        return (
            <Footer>
                <div>
                    <ArrowBtn onClick={() => changeWeekHandle("prev")}>
                        <ArrowLeft/>
                    </ArrowBtn>
                </div>
                <div>
                    <span>{format(currentMonth, dateFormat)}</span>
                </div>
                <ArrowBtn onClick={() => changeWeekHandle("next")}>
                    <ArrowRight/>
                </ArrowBtn>
            </Footer>
        );
    };
    const DaysRow = () => {
        const dateFormat = "EEEEE";
        const days = [];
        let startDate = startOfWeek(currentMonth, {weekStartsOn: 1});
        for (let i = 0; i < 7; i++) {
            days.push(
                <Day key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </Day>
            );
        }
        return <DayList>{days}</DayList>;
    };
    const DateRow = () => {
        const startDate = startOfWeek(currentMonth, {weekStartsOn: 1});
        const endDate = lastDayOfWeek(currentMonth, {weekStartsOn: 1});
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <DateNum key={day}>
                        <DateCircle className={isSameDay(day, selectedDate) ? "highlight" : "blank"}
                                    onClick={() => {
                                        const dayStr = format(cloneDay, "ccc dd MMM yy");
                                        onDateClickHandle(cloneDay, dayStr);
                                    }}>
                            <span>
                               {formattedDate}
                            </span>
                        </DateCircle>
                    </DateNum>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <DateList key={day}>
                    {days}
                </DateList>
            );
            days = [];
        }

        return <div>{rows}</div>;
    };

    return (
        <CalContainer>
            <DaysRow/>
            <DateRow/>
            <FooterAct/>
        </CalContainer>
    );
};

export {Calendar};
