/**
 * Manages requests
 * @returns a request manager
 */
 var RequestManager = function() {
    var manager = {};
    const url = 'https://hacker-news.firebaseio.com/v0/';
    const storiesString = 'stories.json';
    let completedRequests = 0;

    let itemsArray = [];
    let timesArray = [];
    let storyArray = [];
    
    let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:5500');
    
    let fullParam = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors', 
        cache: 'default',
    }
    
    /**
     * Gets all the stories of a desired keyword
     * @param {a fetch request} request 
     */
    manager.getStories = function(request) {
        completedRequests = 0;
        timesArray = [];
        storyArray = [];
        promisedElements = [];
        var myResults = document.getElementById('results');
        myResults.innerHTML = '';
        fetch(request)
            .then(response => response.json())
            .then(response => {
                let myArray = Array.from(response);

                console.log('My array is: ', myArray);
                
                for (let i = 0; i < 8; i++) {
                    promisedElements.push(myResults.appendChild(manager.getSingleStory(myArray[i])));
                }
                Promise.all(promisedElements).then(loadingScreen.displayContent());
            })
    }

    /**
     * Gets a single story based on provided ID
     * @param {the ID of the item we want to fetch} storyId 
     * @returns an article ready to be appended to the story list
     */
    manager.getSingleStory = function(storyId) {
        let aRequest = new Request(url + 'item/' + storyId + '.json', fullParam);
        let requestedItem = {
            title: '',
            score: 0,
            url: '',
            user: '',
            time: 0
        }
        
        let anArticle = document.createElement('div');
        anArticle.className = 'article';
        
        fetch(aRequest)
            .then(response => response.json())
            .then(response => {
                if(response.title) requestedItem.title = response.title;
                if(response.score) requestedItem.score = response.score;
                if(response.url) requestedItem.url = response.url;
                if(response.by) requestedItem.user = response.by;
                if(response.time) requestedItem.time = Math.floor((new Date().getTime() / 1000 - response.time) / 60);
                timesArray.push(requestedItem.time);
            })
            .then(()=> {
                let aGenerator = new ElementGenerator(requestedItem.title, requestedItem.score, requestedItem.url, requestedItem.user, requestedItem.time)
                anArticle = aGenerator.generateElement(anArticle);
                console.log('our article to render: ', anArticle)
            })
            .then(completedRequests++)
            .then(console.log('completed requests: ', completedRequests))
        return anArticle;    
    }

    /**
     * Fetches all the stories based on keyword
     * @param {story keyword} typeOfStory 
     */
    manager.printStories = function(typeOfStory) {
        loadingScreen.displayLoader();
        let myRequest = manager.buildRequest(url, typeOfStory, storiesString, fullParam);
        console.log(typeOfStory+'stories:');
        manager.getStories(myRequest);
    }

    /**
     * Builds the request
     * @param {API url} url 
     * @param {type of story} typeOfStory 
     * @param {stories json} storiesString 
     * @param {reequest parameters} requestParameters 
     * @returns 
     */
    manager.buildRequest = function(url, typeOfStory, storiesString, requestParameters) {
        let myRequest = new Request(url + typeOfStory + storiesString, requestParameters);
        return myRequest;
    }

    return manager;
}
