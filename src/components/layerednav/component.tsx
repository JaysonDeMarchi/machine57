import React, { FunctionComponent } from "react";
import { FilterGroup, FilterGroupProps } from "../filtergroup";
import "./styles.scss";

interface LayeredNavProps {
    filterGroups?: Array<FilterGroupProps>;
}

const defaultProps = {
    filterGroups: [
        {
            id: "stock_status",
            label: "Stock Status",
            items: [
                {
                    id: "out_of_stock",
                    label: "Out of Stock",
                },
                {
                    id: "in_stock",
                    label: "In Stock",
                },
                {
                    id: "coming_soon",
                    label: "Coming Soon",
                },
            ],
        },
        {
            id: "product_category",
            label: "Category",
            items: [
                {
                    id: "jackets",
                    label: "Jackets",
                },
                {
                    id: "shirts",
                    label: "Shirts",
                },
                {
                    id: "pants",
                    label: "Pants",
                },
                {
                    id: "bags",
                    label: "Bags",
                },
                {
                    id: "figurines",
                    label: "Figurines",
                },
                {
                    id: "helmets",
                    label: "Helmets",
                },
                {
                    id: "bats",
                    label: "Bats",
                },
                {
                    id: "fonts",
                    label: "Fonts",
                },
            ],
        },
    ],
};

export const LayeredNav: FunctionComponent<LayeredNavProps> = ({
    filterGroups = defaultProps.filterGroups,
}) => {
    return (
        <>
            {filterGroups.length == 0 ? (
                <div />
            ) : (
                <div className="layered_nav">
                    <p>Layered Nav</p>
                    {filterGroups.map((group: FilterGroupProps) => (
                        <FilterGroup
                            id={group.id}
                            label={group.label}
                            items={group.items}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
