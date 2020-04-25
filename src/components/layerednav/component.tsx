import React, { FunctionComponent } from "react";
import { FilterGroup, FilterGroupProps } from "../filtergroup";
import $ from "jquery";
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
                    get: () => $(".product.sold"),
                },
                {
                    id: "in_stock",
                    label: "In Stock",
                    get: () =>
                        $('.product').filter((index, product) => {
                            return $(product)?.attr('class')?.trim() === "product";
                        }),
                },
                {
                    id: "coming_soon",
                    label: "Coming Soon",
                    get: () => $(".product.soon"),
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
