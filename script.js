// Initialize Lucide icons
lucide.createIcons();

// Always use dark theme
document.body.classList.add('dark');

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    lucide.createIcons();
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
mobileMenuLinks?.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// GitHub Stats Fetcher
async function fetchGitHubStats() {
    const username = 'Bhavik1603';

    try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposResponse.json();

        // Calculate stats
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const estimatedCommits = userData.public_repos * 45;
        const publicRepos = userData.public_repos;

        // Update DOM
        document.getElementById('github-stars').textContent = totalStars;
        document.getElementById('github-commits').textContent = estimatedCommits.toLocaleString() + '+';
        document.getElementById('github-repos').textContent = publicRepos;

        // Calculate top languages
        const languageCount = {};
        reposData.forEach(repo => {
            if (repo.language) {
                languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
            }
        });

        const topLanguages = Object.entries(languageCount)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5);

        // Language colors
        const languageColors = {
            'Python': '#3572A5',
            'TypeScript': '#3178C6',
            'JavaScript': '#F1E05A',
            'Java': '#B07219',
            'Dockerfile': '#384D54',
            'HTML': '#E34C26',
            'Shell': '#89E051',
        };

        // Update languages
        const languagesContainer = document.getElementById('github-languages');
        languagesContainer.innerHTML = '';

        topLanguages.forEach(([lang]) => {
            const badge = document.createElement('span');
            badge.className = 'language-badge';

            const dot = document.createElement('div');
            dot.className = 'language-dot';
            dot.style.backgroundColor = languageColors[lang] || '#gray';

            badge.appendChild(dot);
            badge.appendChild(document.createTextNode(lang));
            languagesContainer.appendChild(badge);
        });

    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Display fallback values
        document.getElementById('github-stars').textContent = '0';
        document.getElementById('github-commits').textContent = '0';
        document.getElementById('github-repos').textContent = '0';
    }
}

// Fetch GitHub stats when page loads
fetchGitHubStats();

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Add animation on scroll for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Re-initialize icons after dynamic content loads
setTimeout(() => {
    lucide.createIcons();
}, 100);
