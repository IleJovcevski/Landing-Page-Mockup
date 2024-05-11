/**
 * Sortbar
 * @returns a sortbar
 */
var SortBar = function() {
    var bar = {};
    /**
     * Criteria
     */
    let byPopularity = document.getElementById('popularity');
    let byDate = document.getElementById('date');
 
    /**
    * Handles selection of criteria items
    * @param {criteria item} selection 
    */
    bar.selectCriteria = function(selection) {
        byPopularity.classList.remove('selected-p');
        byDate.classList.remove('selected-p');
        selection.classList.add('selected-p');
    }

    return bar;
}