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
                recipe.orgin.toLowerCase().includes(value)
            recipe.element.classList.toggle("hide", !isVisible)
        })
    })

    fetch("https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes")
        .then(res => res.json())
        .then(data => {
            recipes = data.map(recipe => {
                const card = userCardTemplate.content.cloneNode(true).children[0]
                const header = card.querySelector("[data-header]")
                const body = card.querySelector("[data-body]")
                header.textContent = recipe.name
                body.textContent = recipe.origin
                userCardContainer.append(card)
                return { name: recipe.name, origin: recipe.origin, element: card }
            })
        })

})