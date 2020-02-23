import React, { FunctionComponent } from "react";
import "./styles.scss";

interface FilterGroupProps {
    id: string;
    label: string;
}

export const FilterGroup: FunctionComponent<FilterGroupProps> = ({
    id,
    label,
}) => {
    return (
        <ul id={id}>
            {label}
        </ul>
    );
};
