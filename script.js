document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const navbar = document.getElementById('navbar')
    const hamburger = document.getElementById('hamburger')
    const navLinks = document.getElementById('navLinks')
    const loadingScreen = document.getElementById('loading-screen')
    const galleryItems = document.querySelectorAll('.gallery-item')
    const lightbox = document.getElementById('lightbox')
    const lightboxImage = document.getElementById('lightboxImage')
    const closeLightbox = document.querySelector('.lightbox .close')
    const contactForm = document.getElementById('contactForm')

    const themeToggle = document.getElementById('themeToggle')

    // --- Theme Switching ---
    const currentTheme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', currentTheme)

    themeToggle.addEventListener('click', () => {
        const newTheme =
            document.documentElement.getAttribute('data-theme') === 'dark'
                ? 'light'
                : 'dark'
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    })

    // --- Loading Screen ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0'
            loadingScreen.style.visibility = 'hidden'
        }, 1500)
    })

    // --- Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    })

    // --- Mobile Menu Toggle ---
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        navLinks.classList.toggle('active')
    })

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active')
            navLinks.classList.remove('active')
        })
    })

    // --- Reveal on Scroll Animation ---
    const revealCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
                // Optional: stop observing after reveal
                // observer.unobserve(entry.target);
            }
        })
    }

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
    })

    document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el)
    })

    // --- Lightbox ---
    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img')
            lightboxImage.src = img.src
            lightbox.style.display = 'flex'
            document.body.style.overflow = 'hidden' // Prevent scroll
        })
    })

    const closeLightboxFunc = () => {
        lightbox.style.display = 'none'
        document.body.style.overflow = 'auto'
    }

    closeLightbox.addEventListener('click', closeLightboxFunc)

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunc()
        }
    })

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightboxFunc()
        }
    })

    // --- Form Handling ---
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const btn = contactForm.querySelector('button')
            const originalText = btn.innerText

            btn.innerText = 'Mengirim...'
            btn.disabled = true

            // Simulate API call
            setTimeout(() => {
                alert('Terima kasih! Pesan Anda telah terkirim.')
                contactForm.reset()
                btn.innerText = originalText
                btn.disabled = false
            }, 2000)
        })
    }

    // --- Smooth Scrolling for all internal links ---
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth',
                })
            }
        })
    })
})
