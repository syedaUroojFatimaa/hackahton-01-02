document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsList = document.querySelector('#skills-section .skills-list') as HTMLUListElement;

    let isSkillsVisible = true;

    toggleSkillsButton.addEventListener('click', () => {
        if (isSkillsVisible) {
            skillsList.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        } else {
            skillsList.style.display = 'grid';  // Reverts to grid layout
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        isSkillsVisible = !isSkillsVisible;
    });
});
