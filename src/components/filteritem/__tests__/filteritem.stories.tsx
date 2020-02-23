import * as React from "react";
import { storiesOf } from "@storybook/react";
import { FilterItem } from "../component";
import { Story } from "@src/components/dev";

storiesOf("FilterItem", module).add("default", () => {
    return (
        <Story>
            <FilterItem />
        </Story>
    );
});
