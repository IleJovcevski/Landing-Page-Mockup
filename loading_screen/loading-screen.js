/**
 * Manages the loading screen
 * @returns loading screen
 */
 var LoadingScreen = function() {
    var loader = {};
    let articleList = document.getElementById('results');

    loader.displayLoader = function() {
        console.log('ENTERING loading screen');
        console.log('class is: ', articleList.className);
        if (articleList.className === 'results-container') {
            articleList.className = 'loading'; 
            console.log('class should be LOADING: ', articleList.className);
        } else {
            console.log('class should be PUSHED: ', articleList.className);
            articleList.className = 'loading pushedResults';
        }
    }

    loader.displayContent = function() {
        console.log('EXITING loading screen');
        console.log('class is: ', articleList.className);
        if (articleList.className === 'loading pushedResults') {
            articleList.className = 'results-container pushedResults';
        } else {
            articleList.className = 'results-container';
        }
    }

    return loader;
}