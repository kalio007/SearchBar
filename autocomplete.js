//suggestion functionality
document.addEventListener("DOMContentLoaded", () => {
    //this can serve as cache later on
    let avaliableKeywords = [];
    fetch(
        "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes"
    )
        .then((res) => res.json())
        .then((data) => {
            const newKeywords = data?.message.map(recipe => recipe.name);
            avaliableKeywords.push(...newKeywords);
        })
    const resultBox = document.querySelector(".result-box");

    resultBox.addEventListener("click", ({ target }) => {
        if (target.classList.contains("list-item")) {
            selectInput(target);
        }
    });

    const inputBox = document.getElementById("search");
    inputBox.onkeyup = function () {
        let result = [];
        let input = inputBox.value;
        if (input.length) {
            result = avaliableKeywords.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
        display(result);
        if (!result.length) {
            resultBox.innerHTML = "";
        }
    };
    function display(result) {
        const content = result.map((list) => {
            return "<li class='list-item'>" + list + "</li>";
        });
        resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
    }
    function selectInput(list) {
        inputBox.value = list.innerHTML;
        resultBox.innerHTML = "";
    }
});
