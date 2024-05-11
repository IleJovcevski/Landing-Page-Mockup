/**
 * Sortbar
 * @returns a sidebar
 */
var Sidebar = function() {
    var bar = {};
    /**
     * Sidebar
     */
    let entireSidebar = document.getElementById('sidebar');
    let resultbar = document.getElementsByClassName('resultbar');
    let resultsList = document.getElementById('results');
    let allItems = document.getElementById('all');
    let hotItems = document.getElementById('hot');
    let showHnItems = document.getElementById('showHn');
    let askHnItems = document.getElementById('askHn');
    let pollsItems = document.getElementById('polls');
    let jobsItems = document.getElementById('jobs');
    let starredItems = document.getElementById('starred');
    let sidebarOptions = [allItems, hotItems, showHnItems, askHnItems, pollsItems, jobsItems, starredItems];

    /**
     * Handles selection of sidebar items
     * @param {sidebar item} selection 
     */
    bar.selectSidebar = function(selection, fetchParam) {
        removeClassFromElements(sidebarOptions, 'selected-div');
        selection.classList.add('selected-div');
        console.log('fetch parameter: ', fetchParam);
        requestManager.printStories(fetchParam);
    }

    /**
     * Toggles the sidebar on or off in mobile view
     */
    bar.toggleSidebar = function() {
        if (entireSidebar.className === 'sidebar') {
            entireSidebar.className = 'sidebar expanded';
            console.log('resultbar: ', resultbar);
            resultbar[0].className = 'resultbar pushedResultbar';
            console.log('resultlist: ', resultsList);
            resultsList.className = 'results-container pushedResults';
        } else {
            entireSidebar.className = 'sidebar';
            resultbar[0].className = 'resultbar';
            resultsList.className = 'results-container';
        }
    }

    return bar;
}