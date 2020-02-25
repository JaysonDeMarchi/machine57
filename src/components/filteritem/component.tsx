import React, { FunctionComponent } from "react";
import "./styles.scss";

export interface FilterItemProps {
    id: string;
    label: string;
}

export const FilterItem: FunctionComponent<FilterItemProps> = ({
    id,
    label,
}) => {
    return (
        <li id={id + "-item"}>
            <input
                id={id}
                type="checkbox"
            />
            <label htmlFor={id}>
                {label}
            </label>
        </li>
    );
};
