import React, { FunctionComponent, useContext } from "react";
import FilterContext from "../../contexts/filters";
import $ from "jquery";
import "./styles.scss";

export interface FilterItemProps {
    id: string;
    get: () => JQuery;
    label: string;
}

export const FilterItem: FunctionComponent<FilterItemProps> = ({
    id,
    get,
    label,
}) => {
    const toggleFilter = (e: any) => {
        get().toggle();
    };

    return (
        <li
            className="filter_item"
            id={id + "-item"}
        >
            <input
                className="filter_item_input"
                id={id}
                onClick={toggleFilter}
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
