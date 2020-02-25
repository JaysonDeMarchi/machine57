import React, { FunctionComponent } from "react";
import { FilterItem, FilterItemProps } from "../filteritem";
import "./styles.scss";

interface FilterGroupProps {
    id: string;
    label: string;
    items: Array<FilterItemProps>;
}

export const FilterGroup: FunctionComponent<FilterGroupProps> = ({
    id,
    label,
    items,
}) => {
    return (
        <>
            {items.length == 0 ? (
                <div />
            ) : (
                <ul id={id}>
                    {label}
                    {items.map((item: FilterItemProps) => (
                        <FilterItem
                            id={item.id}
                            label={item.label}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};
