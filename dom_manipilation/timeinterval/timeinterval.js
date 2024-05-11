/**
 * Time interval
 * @returns time interval bar
 */
var TimeInterval = function() {
    var bar = {};
    /**
    * Radios
    */
    let lastDay = document.getElementById('lastDay');
    let lastWeek = document.getElementById('lastWeek');
    let lastMonth = document.getElementById('lastMonth');
    let forever = document.getElementById('forever');
    let radioOptions = [lastDay, lastWeek, lastMonth, forever];
 
    /**
    * Handles selection of radio items
    * @param {radio item*} selection 
    */
    bar.selectRadio = function(selection) {
        removeClassFromElements(radioOptions, 'radio-selected');
        selection.classList.add('radio-selected');
    }

    return bar;
}