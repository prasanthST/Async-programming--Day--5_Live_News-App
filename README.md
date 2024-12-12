# Live News App
=====================

## API Documentation
-------------------

The application uses the MediaStack API to fetch news data. The API endpoint is http://api.mediastack.com/v1/news, and the API key is cca6fa08a5e8eb1fb59f5d31e79f03eb. it has limited request access.

### API Parameters

* `access_key`: The API key used to authenticate the request.
* `limit`: The number of news articles to return (default is 100).

### API Response

The API returns a JSON object containing an array of news articles. Each article has the following properties:

* `title`: The title of the news article.
* `description`: A brief summary of the news article.
* `image`: The URL of the news article's image.
* `author`: The author of the news article.
* `published_at`: The date and time the news article was published.
* `url`: The URL of the news article.

## Code Structure
-----------------

The application consists of the following files:

* `index.html`: The main HTML file that contains the application's layout and structure.
* `style.css`: The CSS file that styles the application's layout and design.
* `script.js`: The JavaScript file that contains the application's logic and functionality.

## Features
------------

The application has the following features:

* Responsive grid layout that adapts to different screen sizes.
* News articles are fetched from the MediaStack API and displayed in a grid layout.
* Each news article has a title, description, image, author, and published date.
* Users can click on a news article to read more.

## Usage
-----

To use the application, follow these steps:

1. Open the `index.html` file in a web browser.
2. The application will fetch news data from the MediaStack API and display it in a responsive grid layout.
3. Click on a news article to read more.

## Using forEach to display the Cards
-------------
```
  newsData.data.forEach(item => {
        const newsitem = document.createElement("div");
        newsitem.classList.add("col-lg-6","col-md-4", "col-sm-6", "col-xs-12", "mb-2" ,"news-item");
        newsitem.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class=" image col-md-4">
                      ${item.image ? `<img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}">` : '<p class="text-center" style="color:red">No valid image</p>'}</div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.title}</h5>
                            <p class="card-text mb-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.description}</p>
                            <p class="card-text mb-1"><small class="text-muted">Author: ${item.author || 'Unknown'}</small></p>
                            <p class="card-text "><small class="text-muted">Published: ${new Date(item.published_at).toLocaleString()}</small></p>
                            <a href="${item.url}" target="_blank" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        newsContainer.appendChild(newsitem);
    });

```
