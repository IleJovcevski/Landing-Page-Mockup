
/**
 * Element generator
 */
 var ElementGenerator = function(title, score, url, user, time) {
    var generatedElement = {};
    let articleElement = null;

    /**
     * Generates an article image preview
     * @returns the article image preview
     */
    generatedElement.generateImage = function() {
        let imagePreview = document.createElement('div');
        imagePreview.className = 'image-preview';
        let image = document.createElement('img');
        image.src = "./images/USS_Enterprise-E_in_nebula.jpg";
        imagePreview.appendChild(image);
        return imagePreview;
    }

    /**
     * Generates the content of an article
     * @returns the article content
     */
    generatedElement.generateContent = function() {
        let content = document.createElement('div');
        content.className = 'content';
        let articleTitle = generatedElement.generateTitle();
        let articleSocial = generatedElement.generateSocial();
        content.appendChild(articleTitle);
        content.appendChild(articleSocial);
        return content;
    }

    /**
     * Generates the title element of the article
     * @returns the article title
     */
    generatedElement.generateTitle = function() {
        let articleTitle = document.createElement('div');
        articleTitle.classList = 'title';
        let titleValue = document.createElement('p');
        titleValue.innerText = title;
        articleTitle.appendChild(titleValue);
        return articleTitle;
    }

    /**
     * Generates the social element of the title
     * @returns the social element
     */
    generatedElement.generateSocial = function() {
        let articleSocial = document.createElement('div');
        articleSocial.className = 'social';

        let heart = document.createElement('i');
        heart.className = 'far fa-heart';
        articleSocial.appendChild(heart);
                
        let points = document.createElement('p');
        points.innerText = score + ' points';
        articleSocial.appendChild(points);
                
        let userIcon = document.createElement('i');
        userIcon.className = "far fa-user";
        articleSocial.appendChild(userIcon);
        
        let userName = document.createElement('p');
        userName.innerText = user;
        articleSocial.appendChild(userName);
                
        let timeIcon = document.createElement('i');
        timeIcon.className = "far fa-clock";
        articleSocial.appendChild(timeIcon);
                
        let postTime = document.createElement('p');
        postTime.innerText = time + ' minutes ago';
        articleSocial.appendChild(postTime);
                
        let articleUrl = document.createElement('p');
        articleUrl.innerText = url;
        articleUrl.className = 'url';
        articleSocial.appendChild(articleUrl);

        return articleSocial;
    }

    /**
     * Generates the share element of the tile
     * @returns the share element of the title
     */
    generatedElement.generateShare = function() {
        let articleShare = document.createElement('div');
        articleShare.className = 'share';

        let commentIcon = document.createElement('i');
        commentIcon.className = "far fa-comment-alt";
        articleShare.appendChild(commentIcon);
                
        let comment = document.createElement('p');
        comment.innerText = 'no comment';
        articleShare.appendChild(comment);
                
        let shareIcon = document.createElement('i');
        shareIcon.className = "fas fa-share-alt";
        articleShare.appendChild(shareIcon);
        
        let starIcon = document.createElement('i');
        starIcon.className = "far fa-star";
        articleShare.appendChild(starIcon);

        return articleShare;
    }

    /**
     * Generates the article element
     * @param {an input div element} inputElement 
     * @returns the article element
     */
    generatedElement.generateElement = function(inputElement) {
        articleElement = inputElement;
        articleElement.appendChild(generatedElement.generateImage());
        articleElement.appendChild(generatedElement.generateContent());
        articleElement.appendChild(generatedElement.generateShare());
        return articleElement;
    }

    return generatedElement;
}
