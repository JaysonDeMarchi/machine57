import * as React from "react";
import $ from "jquery";
import { storiesOf } from "@storybook/react";
import { FilterGroup } from "../component";
import { Story } from "@src/components/dev";

storiesOf("FilterGroup", module).add("Stock Status", () => {
    const items = [
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
            get: () => $("product.soon"),
        },
    ];
    return (
        <Story>
            <FilterGroup
                id="status"
                label="Stock Status"
                items={items}
            />
        </Story>
    );
});
