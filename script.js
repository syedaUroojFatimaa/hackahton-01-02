document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsList = document.querySelector('#skills-section .skills-list');
    var isSkillsVisible = true;
    toggleSkillsButton.addEventListener('click', function () {
        if (isSkillsVisible) {
            skillsList.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
        else {
            skillsList.style.display = 'grid'; // Reverts to grid layout
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        isSkillsVisible = !isSkillsVisible;
    });
});
