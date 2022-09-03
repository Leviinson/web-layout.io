function switch_news_content_by_news_header(news_order = 1) {
    let current_news_header = document.getElementById("active_news_header");
    let choosed_news_header = document.querySelectorAll(".news_header")[news_order];

    if (current_news_header !== choosed_news_header) {
        let current_news_content = document.getElementById("active_news_content");
        let choosed_news_content = document.querySelectorAll(".news_content_block")[news_order];

        choosed_news_header.setAttribute("id", "active_news_header");
        choosed_news_content.setAttribute("id", "active_news_content");
        current_news_header.removeAttribute("id");
        current_news_content.removeAttribute("id");
    }

    else {
        return console.log("Current news was already choosed...")
    }
    
};