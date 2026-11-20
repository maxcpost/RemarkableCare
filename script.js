document.addEventListener('DOMContentLoaded', () => {
    // Close the mobile menu after a link is chosen
    const nav = document.getElementById('siteNav');
    nav.querySelectorAll('.nav-link').forEach(link =>
        link.addEventListener('click', () => bootstrap.Collapse.getInstance(nav)?.hide()));

    // Play the About video only while it is on screen
    const video = document.getElementById('careVideo');
    if (video && matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.controls = true;   // no autoplay for people who ask for less motion
    } else if (video && 'IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) video.play().catch(() => {});   // autoplay may be blocked; the poster stays
            else video.pause();
        }, { threshold: 0.6 }).observe(video);
    }
});
