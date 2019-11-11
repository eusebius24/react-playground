import React from 'react';
import ReactDOM from 'react-dom';

function LeapYear (year) {
    if (year<1582) {
        throw new Error("Please enter a year that is later than 1581");
    }
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

export default LeapYear;