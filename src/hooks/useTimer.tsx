import  {useEffect, useState} from "react";
import moment, {Moment} from "moment";

interface TimerProps {
    endDate: Moment;
}

export const useTimer = ({endDate}: TimerProps) => {
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

    useEffect(() => {
        if (!endDate) return;

        const calculateTimeRemaining = () => {
            const currentTime = moment().locale('pt-br');

            const timeLeft = endDate.diff(currentTime);
            setTimeRemaining(Math.max(0, timeLeft));
        };

        const timer = setInterval(calculateTimeRemaining, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [endDate]);

    return timeRemaining;
};

