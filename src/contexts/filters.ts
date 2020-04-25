import React from "react";

interface IFilters {
    active: string[],
}

const filters: IFilters = {
    active: [],
};

const FilterContext = React.createContext(filters);

export default FilterContext;
