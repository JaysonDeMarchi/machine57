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
        <li
            className="filter_item"
            id={id + "-item"}
        >
            <input
                className="filter_item_input"
                id={id}
                type="checkbox"
            />
            <label
                className="filter_item_label"
                htmlFor={id}
            >
                {label}
            </label>
        </li>
    );
};
