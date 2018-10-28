import _ from "lodash";

export function getKeyboardType(textType) {
    switch (textType) {
        case "email":
            return "email-address";
        case "number":
            return 'numeric';
        default:
            return "default";
    }
}

export function getDefaultValue(field) {
    switch (field.type) {
        case "text":
        case "number":
        case "email":
        case "password":
        case "url":
            return field.defaultValue || '';
        case "picker": {
            if ((field.options).indexOf(field.defaultValue) !== -1) {
                return field.defaultValue;
            }
            return field.options[0];
        }
        case "select": {
            if (Array.isArray(field.defaultValue)) {
                const selected = [];
                if (!field.objectType) {
                    field.defaultValue.forEach((item) => {
                        if ((field.options).indexOf(item) !== -1) {
                            selected.push(item);
                        }
                    });
                } else {
                    field.defaultValue.forEach((item) => {
                        if ((field.options).findIndex(option =>
                            option[field.primaryKey] === item[field.primaryKey]
                        ) !== -1) {
                            selected.push(item);
                        }
                    });
                }
                return selected;
            }
            if (!field.multiple) {
                return field.defaultValue || null;
            }
            return [];
        }
        case "switch":
            if (typeof field.defaultValue === 'boolean') {
                return field.defaultValue;
            }
            return false;
        case "date":
            {
                const dateDefaultValue = field.defaultValue && new Date(field.defaultValue);
                if (dateDefaultValue && !_.isNaN(dateDefaultValue.getTime())) {
                    return dateDefaultValue;
                }
                return null;
            }
        case "group":
            if (field.fields) {
                return field.defaultValue;
            }
            return null;
        default:
            return null;
    }
}

export function getResetValue(field) {
    switch (field.type) {
        case "text":
        case "number":
        case "email":
        case "password":
        case "url":
            return '';
        case "picker":
            return field.options[0];
        case "select":
            return field.multiple ? [] : null;
        case "switch":
            return false;
        case "date":
            return null;
        default:
            return null;
    }
}

export function getInitialState(fields) {
    const state = {};
    _.forEach(fields, (field) => {
        const fieldObj = field;
        fieldObj.error = false;
        fieldObj.errorMsg = '';
        if (!field.hidden && field.type) {
            fieldObj.value = getDefaultValue(field);
            state[field.name] = fieldObj;
        }
    });
    return state;
}