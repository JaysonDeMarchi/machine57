import React, { FunctionComponent } from "react";
import { LayeredNav } from "@src/components/layerednav";
import FilterContext from "../contexts/filters";
import "./styles.scss";

export const ContentScript: FunctionComponent = () => {

    return (
        <FilterContext.Provider value={{ active: [] }}>
            <LayeredNav />
        </FilterContext.Provider>
    );
};
