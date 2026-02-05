const button = document.getElementById('clickMeBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = "You clicked the button! 🎉";
});

// Only run on the search page
if (document.getElementById('recipe-list')) {
  fetch('../../recipes.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('recipe-list');

      data.recipes.forEach(recipe => {
        const li = document.createElement('li');

        li.innerHTML = `
          <a href="recipe.html?id=${recipe.id}">
            ${recipe.title}
          </a>
        `;

        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error loading recipes:', error);
    });
}
