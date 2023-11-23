document.addEventListener('DOMContentLoaded', function () {

    const skillsData = [
        { skill: 'Internet Research', level: 80 },
        { skill: 'Networking', level: 70 },
        { skill: 'Technology', level: 85 },
        { skill: 'Time Management', level: 75 },
        { skill: 'Teamwork', level: 80 },
        { skill: 'Continuous learning', level: 90 },
        { skill: 'Adaptability', level: 85 },
    ];

    // Function to dynamically create progress bars for skills
    function createSkillBars() {
        const skillsList = document.getElementById('skills-list');
        skillsData.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <p>${skill.skill}</p>
                <div class="progress-bar" style="width:${skill.level}%"></div>
            `;
            skillsList.appendChild(listItem);
        });
    }

    // Event listener for form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();


        alert('Message sent successfully!');
        // Clear the form after submission
        contactForm.reset();
    });


    createSkillBars();
});
