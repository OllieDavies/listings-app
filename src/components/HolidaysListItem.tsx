
import React, { useState } from "react";
import { Holiday, Party } from "../types";
import styles from "./HolidaysListItem.module.css"
import { StarRating } from "./StarRating";

interface Props {
    holiday: Holiday
}

const HolidaysListItem: React.FC<Props> = ({ holiday }) => {
    const [isOverviewVisible, setOverflowVisible] = useState<boolean>(false);

    const toggleOverflow = () => setOverflowVisible(!isOverviewVisible)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${holiday.imageUrl})` }}>
                    <button onClick={toggleOverflow}>
                        <strong>Read {isOverviewVisible ? "less" : "more"}</strong> about this hotel
                    </button>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.textContainer__title}>{holiday.hotelName}</h2>
                    <p className={styles.textContainer__location}>{holiday.location}</p>
                    <StarRating rating={holiday.rating} />
                    <HolidayDetails {...holiday} />
                    <a className={styles.button} href={`./${holiday.id}`}>
                        Book now
                        <p className={styles.button__price}>£{holiday.price.toFixed(2)}</p>
                    </a>
                </div>
            </div>
            {isOverviewVisible === true &&
                <div className={`${styles.overviewContainer} ${styles.copy}`}>
                    <h4>Overview</h4>
                    <p>{holiday.overview}</p>
                </div>
            }
        </div>
    )
}

type DetailsProps = Pick<Holiday, "departureAirport" | "duration" | "departureDate" | "party">

const HolidayDetails: React.FC<DetailsProps> = (props) => (
    <div className={`${styles.copy} ${styles.textContainer__details}`}>
        <p><strong>{props.departureDate}</strong> for <strong>{props.duration}</strong></p>
        <p>{composePartyBreakdown(props.party)}</p>
        <p>departing from <strong>{props.departureAirport}</strong></p>
    </div>
)

const composePartyBreakdown = (party: Party) => {
    const entries = Object.entries(party)
    return entries
        .map<React.ReactNode>(item => (
            <React.Fragment key={item[0]}>
                <strong>{item[1]}</strong> {item[0]}
            </React.Fragment>
        ))
        .reduce((acc, current) => [acc, ", ", current])
}

export { HolidaysListItem, composePartyBreakdown }