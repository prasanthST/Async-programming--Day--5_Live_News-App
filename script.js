const baseUrl = "http://api.mediastack.com/v1/news"
const apikey ="cca6fa08a5e8eb1fb59f5d31e79f03eb" //prabhu

function fetchingDataFromApi() {

    const apiUrl = `${baseUrl}?access_key=${apikey}`;
    return new Promise ((resolve , reject )=> {
        fetch(apiUrl)
        .then(res =>{
            if(!res.ok){
                throw new Error("Network response not OK")
            }
            return res.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error))
    });  
}

function displayNews(newsData) {
     const heading = document.getElementById("title")
     heading.innerHTML = "Today's Live News"

    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = '';

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
}

fetchingDataFromApi()
.then(data => {
    console.log("Fetched data:" , data );
    displayNews(data)
})
.catch(error =>{
    console.log("Error data:" , error);
    
})

