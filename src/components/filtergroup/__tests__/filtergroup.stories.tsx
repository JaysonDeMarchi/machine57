import * as React from "react";
import { storiesOf } from "@storybook/react";
import { FilterGroup } from "../component";
import { Story } from "@src/components/dev";

storiesOf("FilterGroup", module).add("Stock Status", () => {
    return (
        <Story>
            <FilterGroup
                id="status"
                label="Stock Status"
            />
        </Story>
    );
});
