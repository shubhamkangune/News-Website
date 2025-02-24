console.log("creating the news Website");   

// api key
// bf4815d2000f4d17aa40c9e5b4ebc565

// initialize the variables
let apiKey =  'bf4815d2000f4d17aa40c9e5b4ebc565'

// grab the news container
let newsAccordian = document.getElementById('newsAccordian');

// create the get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,true);
xhr.onload = function(){
    if(this.status === 200){
        let response = JSON.parse(this.responseText);
        let articles = response.articles;
        console.log(articles);
        let newsHtml = "";

        articles.forEach(function(element) {
            
            // console.log(articles[news]);
            // news in html
            let news = `
                        <h2 id="accordion-collapse-heading-1">  
                                <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-gray-500 mr-3 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                <span>${element["title"]}</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" class="hidden " aria-labelledby="accordion-collapse-heading-1">
                                <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p class="text-gray-500 dark:text-gray-400">
                                    ${element["content"]}
                                </p>
                                </div>
                            </div> `
            newsHtml += news;
            
        });
        newsAccordian.innerHTML = newsHtml; 
        
    }
    else{
        console.log("some error occurs");
        
    }
}
xhr.send();






// console.log(newsAccordian);
