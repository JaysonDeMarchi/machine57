import * as React from "react";
import { storiesOf } from "@storybook/react";
import { LayeredNav } from "../component";
import { Story } from "@src/components/dev";

storiesOf("LayeredNav", module).add("default", () => {
    return (
        <Story>
            <LayeredNav />
        </Story>
    );
});
