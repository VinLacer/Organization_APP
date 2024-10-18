import React, {createContext, useContext, useState} from 'react';

export const ScheduleInputContext = createContext();

export const ScheduleInputProvider = ({children}) => {
    const [schedule, setSchedule] = useState({})

    const resetSchedule = () => {
        setSchedule({})
    }
}