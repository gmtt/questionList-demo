export const addFilter = name => ({
    type: 'add_filter',
    name
});

export const removeFilter = name => ({
    type: 'remove_filter',
    name
});

export const addCategory = name => ({
    type: 'add_category',
    name
});

export const removeCategory = name => ({
    type: 'remove_category',
    name
});