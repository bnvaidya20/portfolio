function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    if (category === 'all') {
        for (let card of cards) {
            card.style.display = 'block';
        }
    } else {
        for (let card of cards) {
            card.style.display = card.classList.contains(category) ? 'block' : 'none';
        }
    }
    
    const activeButton = document.querySelector(`.filter-btn[onclick="filterProjects('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
