// Theme switching functionality
document.getElementById('light-theme-btn').addEventListener('click', () => {
    document.body.classList.remove('dark-theme', 'blue-theme', 'professional-theme');
});

document.getElementById('dark-theme-btn').addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('blue-theme', 'professional-theme');
});

document.getElementById('blue-theme-btn').addEventListener('click', () => {
    document.body.classList.add('blue-theme');
    document.body.classList.remove('dark-theme', 'professional-theme');
});

document.getElementById('professional-theme-btn').addEventListener('click', () => {
    document.body.classList.add('professional-theme');
    document.body.classList.remove('dark-theme', 'blue-theme');
});

// Tab functionality for experience section
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const tabValue = button.getAttribute('data-tab');
        
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `${tabValue}-content`) {
                content.classList.add('active');
            }
        });
    });
});

// Web resume link functionality
document.getElementById('web-resume-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Web resume link will be added here later.');
});

// Print functionality
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});

// Track download clicks
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'download', {
            'event_category': 'resume',
            'event_label': this.getAttribute('download')
        });
    });
});

// Track contact link clicks
document.querySelectorAll('a[href^="mailto"], a[href^="tel"], a[href*="linkedin.com"]').forEach(link => {
    link.addEventListener('click', function() {
        const type = this.href.startsWith('mailto:') ? 'email' : 
                     this.href.startsWith('tel:') ? 'phone' : 'linkedin';
                     
        gtag('event', 'click', {
            'event_category': 'contact',
            'event_label': type
        });
    });
});

// Cookie consent functionality
if (!localStorage.getItem('cookies-accepted')) {
    document.getElementById('cookie-consent').style.display = 'block';
}

document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'true');
    document.getElementById('cookie-consent').style.display = 'none';
});

// Example using a serverless function
function trackEvent(category, action, label) {
    fetch('https://your-tracking-api.vercel.app/api/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            category,
            action,
            label,
            page: window.location.href,
            timestamp: new Date().toISOString()
        })
    });
}