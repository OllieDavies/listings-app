
import React from "react";
import { Holiday } from "../types";
import { HolidaysListItem } from "./HolidaysListItem"
import styles from "./HolidaysList.module.css"

interface Props {
    items: Holiday[]
}

const HolidaysList: React.FC<Props> = ({ items }) => {
    return (
        <div>
            {items.map(option => (
                <div key={option.id} className={styles.item}>
                    <HolidaysListItem holiday={option} />
                </div>
            ))}
        </div>
    )
}

export { HolidaysList }