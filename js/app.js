/**
 * 208 Epoxy - Color Selection Tool
 * Main Application JavaScript
 */

// ===================================
// Color Data Configuration
// ===================================
const colorData = {
    patio: {
        title: "Patio Colors",
        subtitle: "1/8\" Flake Size - Perfect for outdoor spaces",
        colors: [
            {
                id: "nightfall-eighth",
                name: "Nightfall",
                code: "FB-715-1/8\"",
                flakeSize: "1/8\"",
                category: "Patio",
                image: "Images/colors/nightfall/nightfall-eighth.jpg",
                galleryImages: [
                    "Images/colors/nightfall/nightfall-eighth.jpg",
                    "Images/colors/nightfall/nightfall-pile.jpg",
                    "Images/colors/nightfall/nightfall-gallery-1.jpg",
                    "Images/colors/nightfall/nightfall-gallery-2.jpg"
                ]
            },
            {
                id: "coyote-eighth",
                name: "Coyote",
                code: "FB-513-1/8\"",
                flakeSize: "1/8\"",
                category: "Patio",
                image: "Images/colors/coyote/FB-513_COYOTE_1.8.avif",
                galleryImages: [
                    "Images/colors/coyote/FB-513_COYOTE_1.8.avif",
                    "Images/colors/coyote/coyote-pile.jpg",
                    "Images/colors/coyote/coyote-office.jpg"
                ]
            },
            {
                id: "gravel-eighth",
                name: "Gravel",
                code: "FB-414-1/8\"",
                flakeSize: "1/8\"",
                category: "Patio",
                image: "Images/colors/gravel/gravel-eighth.jpg",
                galleryImages: [
                    "Images/colors/gravel/gravel-eighth.jpg"
                ]
            },
            {
                id: "loon-eighth",
                name: "Loon",
                code: "FB-966-1/8\"",
                flakeSize: "1/8\"",
                category: "Patio",
                image: "Images/colors/loon/loon-eighth.jpg",
                galleryImages: [
                    "Images/colors/loon/loon-eighth.jpg",
                    "Images/colors/loon/loon-pile.jpg",
                    "Images/colors/loon/loon-gallery-1.jpg",
                    "Images/colors/loon/loon-gallery-2.jpg"
                ]
            },
            {
                id: "soapstone-eighth",
                name: "Soapstone",
                code: "F9320-1/8\"",
                flakeSize: "1/8\"",
                category: "Patio",
                image: "Images/colors/soapstone/soapstone-eighth.jpg",
                galleryImages: [
                    "Images/colors/soapstone/soapstone-eighth.jpg"
                ]
            },
            {
                id: "basalt-eighth",
                name: "Basalt",
                code: "F9309-1/8\"",
                flakeSize: "1/8\"",
                category: "Patio",
                image: "Images/colors/basalt/basalt-eighth.jpg",
                galleryImages: [
                    "Images/colors/basalt/basalt-eighth.jpg",
                    "Images/colors/basalt/basalt-gallery-1.jpg"
                ]
            }
        ]
    },
    garage: {
        title: "Garage Floor Colors",
        subtitle: "1/4\" Flake Size - Ideal for garage and workshop floors",
        colors: [
            {
                id: "domino-quarter",
                name: "Domino",
                code: "FB-411-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/domino/domino-quarter.jpg",
                galleryImages: [
                    "Images/colors/domino/domino-quarter.jpg",
                    "Images/colors/domino/domino-pile.jpg",
                    "Images/colors/domino/domino-gallery-1.jpg"
                ]
            },
            {
                id: "wombat-quarter",
                name: "Wombat",
                code: "FB-616-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/wombat/wombat-quarter.jpg",
                galleryImages: [
                    "Images/colors/wombat/wombat-quarter.jpg",
                    "Images/colors/wombat/wombat-pile.jpg",
                    "Images/colors/wombat/wombat-gallery-1.jpg"
                ]
            },
            {
                id: "nightfall-quarter",
                name: "Nightfall",
                code: "FB-715-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/nightfall/nightfall-quarter.jpg",
                galleryImages: [
                    "Images/colors/nightfall/nightfall-quarter.jpg",
                    "Images/colors/nightfall/nightfall-pile.jpg",
                    "Images/colors/nightfall/nightfall-gallery-1.jpg",
                    "Images/colors/nightfall/nightfall-gallery-2.jpg"
                ]
            },
            {
                id: "carbon-quarter",
                name: "Carbon",
                code: "F9202-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/carbon/carbon-quarter.jpg",
                galleryImages: [
                    "Images/colors/carbon/carbon-quarter.jpg"
                ]
            },
            {
                id: "coyote-quarter",
                name: "Coyote",
                code: "FB-513-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/coyote/coyote-quarter.jpg",
                galleryImages: [
                    "Images/colors/coyote/coyote-quarter.jpg",
                    "Images/colors/coyote/coyote-pile.jpg",
                    "Images/colors/coyote/coyote-office.jpg"
                ]
            },
            {
                id: "tidal-wave-quarter",
                name: "Tidal Wave",
                code: "FB-807-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/tidal-wave/tidal-wave-quarter.jpg",
                galleryImages: [
                    "Images/colors/tidal-wave/tidal-wave-quarter.jpg",
                    "Images/colors/tidal-wave/tidal-wave-pile.jpg",
                    "Images/colors/tidal-wave/tidal-wave-gallery-1.jpg"
                ]
            },
            {
                id: "smoke-quarter",
                name: "Smoke",
                code: "FB-933-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/smoke/smoke-quarter.jpg",
                galleryImages: [
                    "Images/colors/smoke/smoke-quarter.jpg",
                    "Images/colors/smoke/smoke-pile.jpg"
                ]
            },
            {
                id: "schist-quarter",
                name: "Schist",
                code: "F9307-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/schist/schist-quarter.jpg",
                galleryImages: [
                    "Images/colors/schist/schist-quarter.jpg"
                ]
            },
            {
                id: "loon-quarter",
                name: "Loon",
                code: "FB-966-1/4\"",
                flakeSize: "1/4\"",
                category: "Garage",
                image: "Images/colors/loon/loon-quarter.jpg",
                galleryImages: [
                    "Images/colors/loon/loon-quarter.jpg",
                    "Images/colors/loon/loon-pile.jpg",
                    "Images/colors/loon/loon-gallery-1.jpg",
                    "Images/colors/loon/loon-gallery-2.jpg"
                ]
            }
        ]
    }
};

// ===================================
// Application State
// ===================================
const appState = {
    selectedColors: new Set(),
    currentFilter: 'all',
    currentDetailColor: null,
    currentGalleryIndex: 0
};

// ===================================
// DOM Elements
// ===================================
const elements = {
    patioGrid: document.getElementById('patio-grid'),
    garageGrid: document.getElementById('garage-grid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    patioSection: document.querySelector('[data-category="patio"]'),
    garageSection: document.querySelector('[data-category="garage"]'),
    // Selection FAB elements
    selectionFab: document.getElementById('selection-fab'),
    selectionFabToggle: document.getElementById('selection-fab-toggle'),
    selectionPanelClose: document.getElementById('selection-panel-close'),
    selectionList: document.getElementById('selection-list'),
    selectionCount: document.getElementById('selection-count'),
    clearSelectionsBtn: document.getElementById('clear-selections'),
    submitSelectionsBtn: document.getElementById('submit-selections'),
    // Detail modal
    detailModal: document.getElementById('detail-modal'),
    detailImage: document.getElementById('detail-image'),
    detailName: document.getElementById('detail-name'),
    detailCode: document.getElementById('detail-code'),
    detailSize: document.getElementById('detail-size'),
    detailCategory: document.getElementById('detail-category'),
    detailSelectBtn: document.getElementById('detail-select'),
    galleryTrack: document.getElementById('gallery-track'),
    galleryPrev: document.getElementById('gallery-prev'),
    galleryNext: document.getElementById('gallery-next'),
    galleryDots: document.getElementById('gallery-dots'),
    galleryCounter: document.getElementById('gallery-counter'),
    galleryFullscreen: document.getElementById('gallery-fullscreen'),
    submitModal: document.getElementById('submit-modal'),
    selectedColorsDisplay: document.getElementById('selected-colors-display'),
    selectedColorsInput: document.getElementById('selected-colors-input'),
    submissionForm: document.getElementById('submission-form'),
    successModal: document.getElementById('success-modal'),
    successCloseBtn: document.getElementById('success-close')
};

// ===================================
// Utility Functions
// ===================================
function saveToLocalStorage() {
    localStorage.setItem('208epoxy-selections', JSON.stringify([...appState.selectedColors]));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('208epoxy-selections');
    if (saved) {
        const selections = JSON.parse(saved);
        selections.forEach(id => appState.selectedColors.add(id));
    }
}

function findColorById(id) {
    for (const category of Object.values(colorData)) {
        const color = category.colors.find(c => c.id === id);
        if (color) return color;
    }
    return null;
}

// ===================================
// Render Functions
// ===================================
function createColorCard(color) {
    const isSelected = appState.selectedColors.has(color.id);

    const card = document.createElement('div');
    card.className = `color-card${isSelected ? ' color-card--selected' : ''}`;
    card.dataset.colorId = color.id;

    card.innerHTML = `
        <div class="color-card__image-container">
            <img src="${color.image}" alt="${color.name}" class="color-card__image" loading="lazy">
        </div>
        <div class="color-card__info">
            <h3 class="color-card__name">${color.name}</h3>
            <p class="color-card__code">${color.code}</p>
            <span class="color-card__badge">${color.flakeSize}</span>
        </div>
        <button class="color-card__checkbox" aria-label="Select ${color.name}">
            <svg class="color-card__checkbox-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
        </button>
    `;

    // Click handler for image - open detail view
    const imageContainer = card.querySelector('.color-card__image-container');
    imageContainer.addEventListener('click', () => {
        openDetailModal(color);
    });

    // Click handler for checkbox - toggle selection
    const checkbox = card.querySelector('.color-card__checkbox');
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleColorSelection(color.id);
    });

    return card;
}

function renderColorGrids() {
    // Render patio colors
    elements.patioGrid.innerHTML = '';
    colorData.patio.colors.forEach(color => {
        elements.patioGrid.appendChild(createColorCard(color));
    });

    // Render garage colors
    elements.garageGrid.innerHTML = '';
    colorData.garage.colors.forEach(color => {
        elements.garageGrid.appendChild(createColorCard(color));
    });
}

function updateColorCardState(colorId) {
    const card = document.querySelector(`[data-color-id="${colorId}"]`);
    if (card) {
        if (appState.selectedColors.has(colorId)) {
            card.classList.add('color-card--selected');
        } else {
            card.classList.remove('color-card--selected');
        }
    }
}

function updateSelectionFab() {
    const count = appState.selectedColors.size;
    elements.selectionCount.textContent = count;

    if (count > 0) {
        elements.selectionFab.classList.add('selection-fab--visible');
    } else {
        elements.selectionFab.classList.remove('selection-fab--visible');
        elements.selectionFab.classList.remove('selection-fab--open');
    }

    // Update the selection list in the panel
    updateSelectionList();
}

function updateSelectionList() {
    elements.selectionList.innerHTML = '';

    if (appState.selectedColors.size === 0) {
        elements.selectionList.innerHTML = '<div class="selection-fab__empty">No colors selected</div>';
        return;
    }

    appState.selectedColors.forEach(id => {
        const color = findColorById(id);
        if (color) {
            const item = document.createElement('div');
            item.className = 'selection-fab__item';
            item.innerHTML = `
                <img src="${color.image}" alt="${color.name}" class="selection-fab__item-image">
                <div class="selection-fab__item-info">
                    <div class="selection-fab__item-name">${color.name}</div>
                    <div class="selection-fab__item-size">${color.flakeSize} - ${color.category}</div>
                </div>
                <button class="selection-fab__item-remove" data-color-id="${color.id}" aria-label="Remove ${color.name}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
            `;
            elements.selectionList.appendChild(item);
        }
    });

    // Add event listeners to remove buttons
    elements.selectionList.querySelectorAll('.selection-fab__item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const colorId = btn.dataset.colorId;
            toggleColorSelection(colorId);
        });
    });
}

function toggleSelectionPanel() {
    elements.selectionFab.classList.toggle('selection-fab--open');
}

function closeSelectionPanel() {
    elements.selectionFab.classList.remove('selection-fab--open');
}

function updateDetailSelectButton() {
    if (!appState.currentDetailColor) return;

    const isSelected = appState.selectedColors.has(appState.currentDetailColor.id);
    elements.detailSelectBtn.innerHTML = isSelected
        ? '<span class="btn__icon">✓</span> Selected'
        : '<span class="btn__icon">+</span> Add to Selection';
}

// ===================================
// Selection Functions
// ===================================
function toggleColorSelection(colorId) {
    if (appState.selectedColors.has(colorId)) {
        appState.selectedColors.delete(colorId);
    } else {
        appState.selectedColors.add(colorId);
    }

    updateColorCardState(colorId);
    updateSelectionFab();
    updateDetailSelectButton();
    saveToLocalStorage();
}

function clearAllSelections() {
    const selectedIds = [...appState.selectedColors];
    appState.selectedColors.clear();

    selectedIds.forEach(id => updateColorCardState(id));
    updateSelectionFab();
    saveToLocalStorage();
}

// ===================================
// Filter Functions
// ===================================
function setFilter(filter) {
    appState.currentFilter = filter;

    // Update filter buttons
    elements.filterButtons.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('filter-btn--active');
        } else {
            btn.classList.remove('filter-btn--active');
        }
    });

    // Show/hide sections
    switch (filter) {
        case 'all':
            elements.patioSection.classList.remove('hidden');
            elements.garageSection.classList.remove('hidden');
            break;
        case 'patio':
            elements.patioSection.classList.remove('hidden');
            elements.garageSection.classList.add('hidden');
            break;
        case 'garage':
            elements.patioSection.classList.add('hidden');
            elements.garageSection.classList.remove('hidden');
            break;
    }
}

// ===================================
// Modal Functions
// ===================================
function openModal(modalElement) {
    modalElement.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalElement) {
    modalElement.classList.remove('modal--open');
    document.body.style.overflow = '';
    // Exit fullscreen mode when closing detail modal
    if (modalElement === elements.detailModal) {
        exitGalleryFullscreen();
    }
}

function openDetailModal(color) {
    appState.currentDetailColor = color;
    appState.currentGalleryIndex = 0;

    elements.detailName.textContent = color.name;
    elements.detailCode.textContent = color.code;
    elements.detailSize.textContent = `Flake Size: ${color.flakeSize}`;
    elements.detailCategory.textContent = `Category: ${color.category}`;

    // Build gallery
    buildGallery(color);
    updateDetailSelectButton();
    openModal(elements.detailModal);
}

function buildGallery(color) {
    const images = color.galleryImages || [color.image];

    // Clear existing gallery
    elements.galleryTrack.innerHTML = '';
    elements.galleryDots.innerHTML = '';

    // Preload all images
    images.forEach(imgSrc => {
        const preloadImg = new Image();
        preloadImg.src = imgSrc;
    });

    // Create gallery slides
    images.forEach((imgSrc, index) => {
        const slide = document.createElement('div');
        slide.className = 'gallery__slide';

        const img = document.createElement('img');
        img.className = 'gallery__image';
        img.alt = `${color.name} - Image ${index + 1}`;
        img.draggable = false;

        // Add loading state
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.2s ease';

        img.onload = () => {
            img.style.opacity = '1';
        };

        img.src = imgSrc;
        slide.appendChild(img);
        elements.galleryTrack.appendChild(slide);

        // Create dot
        const dot = document.createElement('button');
        dot.className = `gallery__dot${index === 0 ? ' gallery__dot--active' : ''}`;
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        elements.galleryDots.appendChild(dot);
    });

    // Update counter
    updateGalleryCounter();

    // Show/hide navigation based on image count
    const hasMultipleImages = images.length > 1;
    elements.galleryPrev.style.display = hasMultipleImages ? 'flex' : 'none';
    elements.galleryNext.style.display = hasMultipleImages ? 'flex' : 'none';
    elements.galleryDots.style.display = hasMultipleImages ? 'flex' : 'none';
    elements.galleryCounter.style.display = hasMultipleImages ? 'block' : 'none';

    // Reset position immediately without transition
    elements.galleryTrack.style.transition = 'none';
    elements.galleryTrack.style.transform = 'translateX(0%)';

    // Re-enable transition after a frame
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            elements.galleryTrack.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });
}

function goToSlide(index) {
    const images = appState.currentDetailColor.galleryImages || [appState.currentDetailColor.image];
    appState.currentGalleryIndex = Math.max(0, Math.min(index, images.length - 1));
    updateGalleryPosition();
    updateGalleryDots();
    updateGalleryCounter();
}

function nextSlide() {
    const images = appState.currentDetailColor.galleryImages || [appState.currentDetailColor.image];
    appState.currentGalleryIndex = (appState.currentGalleryIndex + 1) % images.length;
    updateGalleryPosition();
    updateGalleryDots();
    updateGalleryCounter();
}

function prevSlide() {
    const images = appState.currentDetailColor.galleryImages || [appState.currentDetailColor.image];
    appState.currentGalleryIndex = (appState.currentGalleryIndex - 1 + images.length) % images.length;
    updateGalleryPosition();
    updateGalleryDots();
    updateGalleryCounter();
}

function updateGalleryPosition() {
    elements.galleryTrack.style.transform = `translateX(-${appState.currentGalleryIndex * 100}%)`;
}

function updateGalleryDots() {
    const dots = elements.galleryDots.querySelectorAll('.gallery__dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('gallery__dot--active', index === appState.currentGalleryIndex);
    });
}

function updateGalleryCounter() {
    const images = appState.currentDetailColor?.galleryImages || [appState.currentDetailColor?.image];
    if (elements.galleryCounter && images.length > 1) {
        elements.galleryCounter.textContent = `${appState.currentGalleryIndex + 1} / ${images.length}`;
    }
}

function toggleGalleryFullscreen() {
    const gallery = document.querySelector('.gallery');
    const galleryParent = document.querySelector('.detail-view__gallery');

    if (!gallery) return;

    if (gallery.classList.contains('gallery--fullscreen')) {
        // Exit fullscreen - move back to original parent
        gallery.classList.remove('gallery--fullscreen');
        document.body.classList.remove('gallery-fullscreen-active');
        if (galleryParent) {
            galleryParent.insertBefore(gallery, galleryParent.firstChild);
        }
    } else {
        // Enter fullscreen - move to body
        gallery.classList.add('gallery--fullscreen');
        document.body.classList.add('gallery-fullscreen-active');
        document.body.appendChild(gallery);
    }
}

function exitGalleryFullscreen() {
    const gallery = document.querySelector('.gallery--fullscreen');
    const galleryParent = document.querySelector('.detail-view__gallery');

    if (gallery && galleryParent) {
        gallery.classList.remove('gallery--fullscreen');
        document.body.classList.remove('gallery-fullscreen-active');
        galleryParent.insertBefore(gallery, galleryParent.firstChild);
    }
}

function openSubmitModal() {
    if (appState.selectedColors.size === 0) {
        alert('Please select at least one color before submitting.');
        return;
    }

    // Display selected colors
    elements.selectedColorsDisplay.innerHTML = '';
    appState.selectedColors.forEach(id => {
        const color = findColorById(id);
        if (color) {
            const chip = document.createElement('div');
            chip.className = 'selected-color-chip';
            chip.innerHTML = `
                <div class="selected-color-chip__swatch" style="background-image: url('${color.image}')"></div>
                <span>${color.name} (${color.flakeSize})</span>
            `;
            elements.selectedColorsDisplay.appendChild(chip);
        }
    });

    // Populate hidden input with selected colors
    const selectedColorsList = [...appState.selectedColors].map(id => {
        const color = findColorById(id);
        return color ? `${color.name} (${color.code})` : '';
    }).filter(Boolean).join(', ');

    elements.selectedColorsInput.value = selectedColorsList;

    openModal(elements.submitModal);
}

// ===================================
// Form Handling
// ===================================
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Submit to Netlify Forms
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(response => {
        if (response.ok) {
            closeModal(elements.submitModal);
            openModal(elements.successModal);
            clearAllSelections();
            e.target.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your selections. Please try again.');
    });
}

// ===================================
// Event Listeners
// ===================================
function initializeEventListeners() {
    // Filter buttons
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setFilter(btn.dataset.filter);
        });
    });

    // Selection FAB buttons
    elements.selectionFabToggle.addEventListener('click', toggleSelectionPanel);
    elements.selectionPanelClose.addEventListener('click', closeSelectionPanel);
    elements.clearSelectionsBtn.addEventListener('click', () => {
        clearAllSelections();
        closeSelectionPanel();
    });
    elements.submitSelectionsBtn.addEventListener('click', () => {
        closeSelectionPanel();
        openSubmitModal();
    });

    // Close selection panel when clicking outside
    document.addEventListener('click', (e) => {
        if (elements.selectionFab.classList.contains('selection-fab--open')) {
            if (!elements.selectionFab.contains(e.target)) {
                closeSelectionPanel();
            }
        }
    });

    // Detail modal
    elements.detailSelectBtn.addEventListener('click', () => {
        if (appState.currentDetailColor) {
            toggleColorSelection(appState.currentDetailColor.id);
            closeModal(elements.detailModal);
        }
    });

    // Gallery navigation
    if (elements.galleryPrev) {
        elements.galleryPrev.addEventListener('click', prevSlide);
    }
    if (elements.galleryNext) {
        elements.galleryNext.addEventListener('click', nextSlide);
    }
    if (elements.galleryFullscreen) {
        elements.galleryFullscreen.addEventListener('click', toggleGalleryFullscreen);
    }

    // Gallery touch/swipe support
    initializeGallerySwipe();

    // Keyboard navigation for gallery
    document.addEventListener('keydown', (e) => {
        if (elements.detailModal.classList.contains('modal--open')) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });

    // Close modal buttons
    document.querySelectorAll('.modal__close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal on backdrop click
    document.querySelectorAll('.modal__backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', () => {
            const modal = backdrop.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal--open').forEach(modal => {
                closeModal(modal);
            });
        }
    });

    // Form submission
    elements.submissionForm.addEventListener('submit', handleFormSubmit);

    // Success modal close
    elements.successCloseBtn.addEventListener('click', () => {
        closeModal(elements.successModal);
    });
}

// ===================================
// Touch/Swipe Support
// ===================================
function initializeGallerySwipe() {
    const track = elements.galleryTrack;
    if (!track) return;

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isDragging = false;
    let isHorizontalSwipe = null; // null = undetermined, true/false after first move

    // Get track width helper
    const getTrackWidth = () => track.parentElement?.offsetWidth || track.offsetWidth;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        currentX = startX;
        isDragging = true;
        isHorizontalSwipe = null;
        track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - startX;
        const diffY = currentY - startY;

        // Determine swipe direction on first significant move
        if (isHorizontalSwipe === null && (Math.abs(diffX) > 10 || Math.abs(diffY) > 10)) {
            isHorizontalSwipe = Math.abs(diffX) > Math.abs(diffY);
        }

        // Only handle horizontal swipes
        if (isHorizontalSwipe) {
            e.preventDefault();
            const trackWidth = getTrackWidth();
            const baseTranslate = -appState.currentGalleryIndex * 100;
            const percentMoved = (diffX / trackWidth) * 100;

            // Add resistance at edges
            const images = appState.currentDetailColor?.galleryImages || [appState.currentDetailColor?.image];
            const isAtStart = appState.currentGalleryIndex === 0 && diffX > 0;
            const isAtEnd = appState.currentGalleryIndex === images.length - 1 && diffX < 0;

            const resistance = (isAtStart || isAtEnd) ? 0.3 : 1;
            const finalTranslate = baseTranslate + (percentMoved * resistance);

            track.style.transform = `translateX(${finalTranslate}%)`;
        }
    }, { passive: false });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;

        track.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        const diffX = currentX - startX;
        const trackWidth = getTrackWidth();
        const threshold = trackWidth * 0.15; // 15% threshold for easier swiping
        const velocity = Math.abs(diffX) / trackWidth;

        // Use either threshold or velocity to determine swipe
        if (diffX > threshold || (diffX > 30 && velocity > 0.1)) {
            prevSlide();
        } else if (diffX < -threshold || (diffX < -30 && velocity > 0.1)) {
            nextSlide();
        } else {
            updateGalleryPosition();
        }

        isHorizontalSwipe = null;
    });

    track.addEventListener('touchcancel', () => {
        isDragging = false;
        isHorizontalSwipe = null;
        track.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        updateGalleryPosition();
    });

    // Mouse drag support for desktop
    track.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        currentX = startX;
        isDragging = true;
        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
        e.preventDefault();
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        currentX = e.clientX;
        const diffX = currentX - startX;
        const trackWidth = getTrackWidth();
        const baseTranslate = -appState.currentGalleryIndex * 100;
        const percentMoved = (diffX / trackWidth) * 100;
        track.style.transform = `translateX(${baseTranslate + percentMoved}%)`;
    });

    track.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;

        track.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        track.style.cursor = 'grab';

        const diffX = currentX - startX;
        const trackWidth = getTrackWidth();
        const threshold = trackWidth * 0.15;

        if (diffX > threshold) {
            prevSlide();
        } else if (diffX < -threshold) {
            nextSlide();
        } else {
            updateGalleryPosition();
        }
    });

    track.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            track.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            track.style.cursor = 'grab';
            updateGalleryPosition();
        }
    });
}

// ===================================
// Initialize Application
// ===================================
function init() {
    loadFromLocalStorage();
    renderColorGrids();
    updateSelectionFab();
    initializeEventListeners();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
