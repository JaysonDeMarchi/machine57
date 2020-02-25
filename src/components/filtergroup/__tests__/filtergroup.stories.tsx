import * as React from "react";
import { storiesOf } from "@storybook/react";
import { FilterGroup } from "../component";
import { Story } from "@src/components/dev";

storiesOf("FilterGroup", module).add("Stock Status", () => {
    const items = [
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
