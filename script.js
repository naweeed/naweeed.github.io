// ===== THEME SWITCHING =====
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

// ===== DYNAMIC BANNER SYSTEM =====
function initializeDynamicBanner() {
    const bannerConfigs = [
        {
            imageClass: 'banner-software',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-agile',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-cloud',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-ai',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-devops',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-team',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        // Excluded banner 7 (IT Project Management Specialist)
        {
            imageClass: 'banner-data',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-security',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-mobile',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-digital',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-enterprise',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-product',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-quality',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-innovation',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-stakeholder',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        // Excluded banner 16 (Risk Management Specialist)
        {
            imageClass: 'banner-budget',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-strategic',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        },
        {
            imageClass: 'banner-improvement',
            title: 'Project & Product Leadership',
            subtitle: 'Driving digital transformation through innovative IT solutions and AI-powered cutting-edge technology.'
        }
    ];

    // Select random banner
    const randomIndex = Math.floor(Math.random() * bannerConfigs.length);
    const selectedBanner = bannerConfigs[randomIndex];
    
    // Apply selected banner
    const bannerElement = document.getElementById('dynamic-banner');
    const titleElement = document.getElementById('banner-title');
    const subtitleElement = document.getElementById('banner-subtitle');
    
    // Remove any existing banner classes
    bannerElement.className = 'hero-banner';
    
    // Add selected banner class and update content
    bannerElement.classList.add(selectedBanner.imageClass);
    titleElement.textContent = selectedBanner.title;
    subtitleElement.textContent = selectedBanner.subtitle;
    
    console.log(`Banner ${randomIndex + 1} loaded: ${selectedBanner.title}`);
}

// ===== TAB FUNCTIONALITY =====
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
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

// ===== DOWNLOAD PROTECTION SYSTEM =====
function setupDownloadProtection() {
    // Prevent right-click on protected content
    document.addEventListener('contextmenu', function(e) {
        const protectedElements = e.target.closest('.gallery-item, .protected-content, .profile-image-container');
        if (protectedElements || e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
            e.preventDefault();
            showProtectionMessage('Right-click is disabled to protect content.');
            return false;
        }
    });

    // Prevent drag and drop
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
            e.preventDefault();
            return false;
        }
    });

    // Prevent keyboard shortcuts for saving images
    document.addEventListener('keydown', function(e) {
        // Ctrl+S or Cmd+S
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            const activeElement = document.activeElement;
            if (activeElement.closest('.gallery') || activeElement.tagName === 'IMG') {
                e.preventDefault();
                showProtectionMessage('Image downloading is restricted. Contact for authorized access.');
                return false;
            }
        }
        
        // Prevent F12 and other developer shortcuts
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C'))) {
            e.preventDefault();
            showProtectionMessage('Developer tools are restricted.');
            return false;
        }
    });

    // Add protection overlay to all protected content
    document.querySelectorAll('.protected-content').forEach(element => {
        element.style.position = 'relative';
        if (!element.querySelector('.protection-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'protection-overlay';
            overlay.style.cssText = `
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: transparent;
                z-index: 10;
                pointer-events: none;
            `;
            element.appendChild(overlay);
        }
    });
}

// Protection message function
function showProtectionMessage(message) {
    const existingMessage = document.getElementById('protection-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.id = 'protection-message';
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        z-index: 10000;
        font-family: Arial, sans-serif;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
}

// ===== ALLOW RESUME DOWNLOADS =====
function allowResumeDownloads() {
    document.querySelectorAll('a[download]').forEach(link => {
        // Remove any protection from resume links
        link.style.pointerEvents = 'auto';
        link.style.userSelect = 'auto';
        link.style.cursor = 'pointer';
        
        // Add explicit permission attribute
        link.setAttribute('data-download-allowed', 'true');
        
        // Ensure resume downloads are tracked but not blocked
        link.addEventListener('click', function(e) {
            // Allow the download to proceed normally
            gtag('event', 'download', {
                'event_category': 'resume',
                'event_label': this.getAttribute('download') || this.getAttribute('href')
            });
        });
    });
}

// ===== COOKIE CONSENT =====
if (!localStorage.getItem('cookies-accepted')) {
    document.getElementById('cookie-consent').style.display = 'block';
}

document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'true');
    document.getElementById('cookie-consent').style.display = 'none';
});

// ===== PRINT FUNCTIONALITY =====
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});

// ===== TRACKING =====
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

// ===== WEB RESUME LINK FUNCTIONALITY =====
document.getElementById('web-resume-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Web resume link will be added here later.');
});

// ===== INITIALIZE EVERYTHING WHEN PAGE LOADS =====
document.addEventListener('DOMContentLoaded', function() {
    setupDownloadProtection();
    allowResumeDownloads();
    initializeDynamicBanner();
    
    console.log('Dynamic banner system activated. Resume downloads are allowed.');
});