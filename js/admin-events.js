// ==========================================
// ASAM - Admin Events Management System
// ==========================================

// Simple admin authentication
const ADMIN_PASSWORD = 'ASAM2024Admin';  // Change this password!

// Check if user is authenticated
function isAuthenticated() {
    return sessionStorage.getItem('asam_admin_auth') === 'true';
}

// Login function
function adminLogin() {
    const password = prompt('Inserisci la password admin:');
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('asam_admin_auth', 'true');
        return true;
    } else {
        alert('Password errata!');
        return false;
    }
}

// Logout function
function adminLogout() {
    sessionStorage.removeItem('asam_admin_auth');
    window.location.href = 'index.html';
}

// Event class
class Event {
    constructor(id, title, date, description, color, registrationLink = '#') {
        this.id = id || Date.now();
        this.title = title;
        this.date = date;
        this.description = description;
        this.color = color; // green-yellow, yellow-orange, red-green
        this.registrationLink = registrationLink;
        this.createdAt = new Date().toISOString();
    }
}

// Events Manager
class EventsManager {
    constructor() {
        this.storageKey = 'asam_events';
        this.events = this.loadEvents();
    }

    loadEvents() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            return JSON.parse(stored);
        }
        // Return default events if none exist
        return [
            new Event(1, 'Festa di Natale ASAM', '2024-12-15', 'Celebriamo insieme le festività con cibo, musica e danze africane!', 'green-yellow'),
            new Event(2, 'Workshop CV e Carriera', '2025-01-20', 'Impara a creare un CV efficace e prepararti per il mondo del lavoro', 'yellow-orange'),
            new Event(3, 'Giornata Culturale Africana', '2025-02-10', 'Celebriamo la diversità culturale dell\'Africa con arte, musica e cucina', 'red-green')
        ];
    }

    saveEvents() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.events));
    }

    getAllEvents() {
        return this.events.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    getUpcomingEvents(limit = 3) {
        const now = new Date();
        return this.events
            .filter(event => new Date(event.date) >= now)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, limit);
    }

    getEventById(id) {
        return this.events.find(event => event.id == id);
    }

    addEvent(event) {
        this.events.push(event);
        this.saveEvents();
    }

    updateEvent(id, updatedData) {
        const index = this.events.findIndex(event => event.id == id);
        if (index !== -1) {
            this.events[index] = { ...this.events[index], ...updatedData };
            this.saveEvents();
            return true;
        }
        return false;
    }

    deleteEvent(id) {
        const index = this.events.findIndex(event => event.id == id);
        if (index !== -1) {
            this.events.splice(index, 1);
            this.saveEvents();
            return true;
        }
        return false;
    }
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('it-IT', options);
}

// Get gradient for event card
function getEventGradient(color) {
    const gradients = {
        'green-yellow': 'linear-gradient(135deg, var(--african-green), var(--african-yellow))',
        'yellow-orange': 'linear-gradient(135deg, var(--african-yellow), var(--african-orange))',
        'red-green': 'linear-gradient(135deg, var(--african-red), var(--african-green))',
        'orange-red': 'linear-gradient(135deg, var(--african-orange), var(--african-red))'
    };
    return gradients[color] || gradients['green-yellow'];
}

// Initialize events manager
const eventsManager = new EventsManager();

console.log('Admin Events System Loaded! 🎉');
