document.addEventListener('DOMContentLoaded', () => {
    const userCardTemplate = document.querySelector("[data-user-template]")
    const userCardContainer = document.querySelector("[data-user-cards-container]")
    const searchInput = document.querySelector("[data-search]")

    let recipes = []

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        recipes.forEach(recipe => {
            const isVisible =
                recipe.name.toLowerCase().includes(value) ||
                recipe.origin.toLowerCase().includes(value)
            recipe.element.classList.toggle("hide", !isVisible)
        })
    })
    fetch(
        "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes"
    )
        .then((res) => res.json())
        .then((data) => {
            recipes = data?.message.map((recipe) => {
                const card = userCardTemplate.content.cloneNode(true).children[0];
                const header = card.querySelector("[data-header]");
                const body = card.querySelector("[data-body]");
                const description = card.querySelector("[data-description]");
                const difficulty = card.querySelector("[data-difficulty]");
                const protein = card.querySelector("[data-protein]");
                const produce = card.querySelector("[data-produce]");
                const spice = card.querySelector("[data-spice]");
                const cookingoil = card.querySelector("[data-cookingoil]");
                const volume = card.querySelector("[data-volume]");
                const serves = card.querySelector("[data-serves]");
                const authenticity = card.querySelector("[data-auth]");
                const stock = card.querySelector("[data-stock]");

                header.textContent = recipe.name;
                body.textContent = recipe.origin;
                description.textContent = recipe.description;
                difficulty.textContent = recipe.difficulty;
                protein.textContent = recipe.protein;
                produce.textContent = recipe.produce;
                spice.textContent = recipe.spice;
                cookingoil.textContent = recipe.cookingoil;
                volume.textContent = recipe.volume;
                serves.textContent = recipe.serves;
                authenticity.textContent = recipe.authenticity;
                stock.textContent = recipe.stock;
                userCardContainer.append(card);
                return { name: recipe.name, origin: recipe.origin, element: card };
            });
        });
})

// to fecth with  ID
const recipeId = 123;

fetch(`https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes/${recipeId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        recipes = data?.message.map((recipe) => {
            return recipeName = recipe.name
        })
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
