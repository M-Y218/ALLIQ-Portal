// =====================================
// ALLIQ Portal v4.0
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const URL = {

        shopSearch:
        "search.html",

        customerInfo:
        "https://sites.google.com/view/higashimukouda-my/%E5%BE%97%E6%84%8F%E5%85%88%E6%83%85%E5%A0%B1",

        containerBtn:
        "https://sites.google.com/view/higashimukouda-my/%E7%A9%BA%E5%AE%B9%E5%99%A8",

        recycleBtn:
        "https://sites.google.com/view/higashimukouda-my/%E6%9C%88%E9%A1%8D%E9%9B%91%E7%93%B6%E5%9B%9E%E5%8F%8E%E5%AF%BE%E8%B1%A1%E5%BA%97",

        campaign:
        "https://sites.google.com/view/olliq-sakaya-t/%E3%83%9B%E3%83%BC%E3%83%A0",

        manual:
        "https://drive.google.com/drive/folders/1iseolF4HiXodPN8C0UcpO5RJ1qV7j9Eo"

    };

    Object.keys(URL).forEach(id => {

        const button = document.getElementById(id);

        if (!button) return;

        button.addEventListener("click", () => {

            window.location.href = URL[id];

        });

    });

});