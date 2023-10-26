// Get all the filter checkboxes
const levelCheckboxes = document.querySelectorAll('input[name="level"]');
const durationCheckboxes = document.querySelectorAll('input[name="duration"]');
const contentCards = document.querySelectorAll('.card');

// Function to check if a card matches the selected filters
function cardMatchesFilters(card, selectedLevel, selectedDuration) {
    const cardLevel = card.getAttribute('data-level');
    const cardDuration = card.getAttribute('data-duration');

    return (
        (!selectedLevel || cardLevel === selectedLevel) &&
        (!selectedDuration || cardDuration === selectedDuration)
    );
}

// Function to handle filtering and display
function filterAndDisplayContent() {
    const selectedLevel = Array.from(levelCheckboxes).find(checkbox => checkbox.checked)?.value;
    const selectedDuration = Array.from(durationCheckboxes).find(checkbox => checkbox.checked)?.value;

    contentCards.forEach(card => {
        const shouldDisplay = cardMatchesFilters(card, selectedLevel, selectedDuration);
        card.style.display = shouldDisplay ? 'block' : 'none';
    });
}

// Add change event listeners to all checkboxes
levelCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterAndDisplayContent);
});

durationCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterAndDisplayContent);
});

// Initially, call the filter function to show content based on default checked filters
filterAndDisplayContent();
