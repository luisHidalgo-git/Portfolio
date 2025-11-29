const components = [
    'components/header.html',
    'components/home.html',
    'components/education.html',
    'components/video.html',
    'components/technologies.html',
    'components/testimonials.html',
    'components/contact.html',
    'components/footer.html'
];

async function loadComponents() {
    const app = document.getElementById('app');

    for (const component of components) {
        try {
            const response = await fetch(component);
            if (!response.ok) throw new Error(`Error loading ${component}`);
            const html = await response.text();
            app.innerHTML += html;
        } catch (error) {
            console.error(error);
        }
    }

    window.dispatchEvent(new Event('componentsLoaded'));
}

document.addEventListener('DOMContentLoaded', loadComponents);
