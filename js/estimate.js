/**
 * 208 Epoxy - Project Estimator
 * Price Calculation Logic
 */

// Pricing tiers (per square foot)
const pricingTiers = [
    { min: 0, max: 199, rate: null }, // Call for pricing
    { min: 200, max: 399, rate: 5.50 },
    { min: 400, max: 799, rate: 5.25 },
    { min: 800, max: 1199, rate: 5.00 },
    { min: 1200, max: 1599, rate: 4.75 },
    { min: 1600, max: Infinity, rate: 4.66 }
];

// Saw cut fill additional cost per sq ft
const SAW_CUT_RATE = 0.95;

// DOM Elements
const elements = {
    sqftInput: document.getElementById('sqft'),
    sawcutCheckbox: document.getElementById('sawcut'),
    resultCall: document.getElementById('result-call'),
    resultDetails: document.getElementById('result-details'),
    resultEmpty: document.getElementById('result-empty'),
    displaySqft: document.getElementById('display-sqft'),
    displayRate: document.getElementById('display-rate'),
    displayTotalRate: document.getElementById('display-total-rate'),
    displayTotal: document.getElementById('display-total'),
    sawcutRow: document.getElementById('sawcut-row'),
    timelineTitle: document.getElementById('timeline-title'),
    timelineText: document.getElementById('timeline-text')
};

/**
 * Get the pricing rate for a given square footage
 */
function getRate(sqft) {
    for (const tier of pricingTiers) {
        if (sqft >= tier.min && sqft <= tier.max) {
            return tier.rate;
        }
    }
    return null;
}

/**
 * Format number as currency
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

/**
 * Format number as currency with cents
 */
function formatCurrencyWithCents(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

/**
 * Format number with commas
 */
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Calculate and display the estimate
 */
function calculateEstimate() {
    const sqft = parseInt(elements.sqftInput.value) || 0;
    const includeSawCut = elements.sawcutCheckbox.checked;

    // Hide all result states
    elements.resultCall.classList.add('estimator__result-row--hidden');
    elements.resultDetails.classList.add('estimator__result-row--hidden');
    elements.resultEmpty.classList.add('estimator__result-row--hidden');

    // No input - show empty state
    if (sqft === 0) {
        elements.resultEmpty.classList.remove('estimator__result-row--hidden');
        return;
    }

    // Under 200 sqft - show call for pricing
    if (sqft < 200) {
        elements.resultCall.classList.remove('estimator__result-row--hidden');
        return;
    }

    // Calculate pricing
    const baseRate = getRate(sqft);
    const totalRate = includeSawCut ? baseRate + SAW_CUT_RATE : baseRate;
    const totalPrice = sqft * totalRate;

    // Update display
    elements.displaySqft.textContent = `${formatNumber(sqft)} sq ft`;
    elements.displayRate.textContent = `${formatCurrencyWithCents(baseRate)}/sq ft`;
    elements.displayTotalRate.textContent = `${formatCurrencyWithCents(totalRate)}/sq ft`;
    elements.displayTotal.textContent = formatCurrency(totalPrice);

    // Show/hide saw cut row
    elements.sawcutRow.style.display = includeSawCut ? 'flex' : 'none';

    // Update timeline based on saw cut
    if (includeSawCut) {
        elements.timelineTitle.textContent = '2.5-3 Day Installation';
        elements.timelineText.textContent = 'Saw cut fill adds half to full day. Walk on surface 24 hours after completion.';
    } else {
        elements.timelineTitle.textContent = '2-Day Installation';
        elements.timelineText.textContent = 'Walk on surface minimum 24 hours after completion';
    }

    // Show results
    elements.resultDetails.classList.remove('estimator__result-row--hidden');
}

/**
 * Initialize event listeners
 */
function init() {
    // Calculate on input change
    elements.sqftInput.addEventListener('input', calculateEstimate);
    elements.sawcutCheckbox.addEventListener('change', calculateEstimate);

    // Initial calculation (in case of cached form values)
    calculateEstimate();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
