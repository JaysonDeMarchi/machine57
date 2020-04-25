import * as React from "react";
import $ from "jquery";
import { storiesOf } from "@storybook/react";
import { FilterItem } from "../component";
import { Story } from "@src/components/dev";

storiesOf("FilterItem", module).add("Out of Stock", () => {
    return (
        <Story>
            <FilterItem
                id="out_of_stock"
                label="Out of Stock"
                get={() => $(".product.sold")}
            />
        </Story>
    );
});
