document.addEventListener("DOMContentLoaded", function() {
    const timeline = document.querySelector('.timeline');
    const events = [
        { date: "2023-01-01", description: "Event 1 description" },
        { date: "2023-03-15", description: "Event 2 description" },
        { date: "2023-06-30", description: "Event 3 description" },
        // Add more events as needed
    ];

    events.forEach((event, index) => {
        const eventNode = document.createElement('div');
        eventNode.className = 'event';
        eventNode.style.left = `${(index / events.length) * 100}%`;
        eventNode.addEventListener('click', () => showEventDescription(event));
        timeline.appendChild(eventNode);
    });

    function showEventDescription(event) {
        const description = document.createElement('div');
        description.textContent = event.description;
        description.className = 'event-description';
        timeline.appendChild(description);

        // Remove description after 5 seconds
        setTimeout(() => {
            timeline.removeChild(description);
        }, 5000);

        // Remove active class from all events
        document.querySelectorAll('.event').forEach(event => {
            event.classList.remove('active');
        });
    }
});
