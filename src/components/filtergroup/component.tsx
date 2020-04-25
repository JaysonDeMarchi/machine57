import React, { FunctionComponent } from "react";
import { FilterItem, FilterItemProps } from "../filteritem";
import "./styles.scss";

export interface FilterGroupProps {
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
                <ul
                    className="filter_group"
                    id={id}
                >
                    {label}
                    {items.map((item: FilterItemProps) => (
                        <FilterItem
                            id={item.id}
                            label={item.label}
                            get={item.get}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};
