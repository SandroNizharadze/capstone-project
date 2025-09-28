// Navigation functionality
function navigateToPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
}

// Add click event listeners to navigation links
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage(link.dataset.page);
    });
});

// File upload functionality
const fileInput = document.getElementById('file-input');
const uploadZone = document.querySelector('.upload-zone');
const filePreview = document.getElementById('file-preview');
const fileList = document.getElementById('file-list');
const memoryForm = document.getElementById('memory-form');

fileInput.addEventListener('change', handleFiles);

uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    handleFiles({ target: { files } });
});

function handleFiles(event) {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    // Show preview and form
    uploadZone.classList.add('has-files');
    filePreview.style.display = 'block';
    memoryForm.style.display = 'block';

    // Clear previous files
    fileList.innerHTML = '';

    // Display file list
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.style.cssText = 'display: flex; align-items: center; gap: 1rem; padding: 0.5rem; border: 1px solid var(--soft-gray); border-radius: 8px; margin-bottom: 0.5rem;';

        const fileIcon = getFileIcon(file.type);
        fileItem.innerHTML = `
                <span style="font-size: 1.5rem;">${fileIcon}</span>
                <div>
                    <strong>${file.name}</strong>
                    <p style="color: var(--text-light); font-size: 0.9rem;">${formatFileSize(file.size)}</p>
                </div>
            `;
        fileList.appendChild(fileItem);
    });

    // Auto-fill form if single file
    if (files.length === 1) {
        const fileName = files[0].name.replace(/\.[^/.]+$/, ""); // Remove extension
        document.getElementById('memory-title').value = fileName.replace(/[-_]/g, ' ');
    }
}

function getFileIcon(fileType) {
    if (fileType.startsWith('image/')) return 'IMG';
    if (fileType.startsWith('video/')) return 'VID';
    if (fileType.startsWith('audio/')) return 'AUD';
    if (fileType.includes('pdf')) return 'PDF';
    return 'FILE';
}

function formatFileSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

// Form submission
document.getElementById('memory-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Show loading state
    const submitBtn = e.target.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Uploading...';
    submitBtn.disabled = true;

    // Simulate upload delay
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        document.getElementById('upload-success').classList.add('show');

        // Scroll to success message
        document.getElementById('upload-success').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// Calendar functionality
let currentMonth = 11; // December (0-based)
let currentYear = 2024;

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendarHeader();
}

function updateCalendarHeader() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('current-month').textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

// Calendar day selection
document.querySelectorAll('.calendar-day').forEach(day => {
    if (!day.textContent.match(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/)) {
        day.addEventListener('click', () => {
            if (!day.classList.contains('disabled')) {
                document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                day.classList.add('selected');
            }
        });
    }
});

// Schedule delivery
function scheduleDelivery() {
    const memorySelect = document.getElementById('memory-select');
    const selectedDate = document.querySelector('.calendar-day.selected');

    if (!memorySelect.value) {
        alert('Please select a memory to schedule');
        return;
    }

    if (!selectedDate) {
        alert('Please select a delivery date');
        return;
    }

    // Show loading
    const btn = event.target;
    btn.innerHTML = '<span class="loading"></span> Scheduling...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = 'Schedule Delivery';
        btn.disabled = false;
        document.getElementById('schedule-success').classList.add('show');
        document.getElementById('schedule-success').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

// Preview delivery
function previewDelivery() {
    alert('Preview: "Summer Vacation 2024" will be sent to Sarah and Michael on December 25, 2024 at 12:00 PM with your personal message.');
}

// Story functionality
function selectMemoryForStory(element) {
    element.classList.toggle('selected');
    const memoryName = element.querySelector('strong').textContent;

    if (element.classList.contains('selected')) {
        // Add to story (simulate)
        const editor = document.querySelector('.content-editor');
        const newParagraph = document.createElement('p');
        newParagraph.innerHTML = `<br><strong>[${memoryName} added to story]</strong><br>`;
        editor.appendChild(newParagraph);
    }
}

function saveStory() {
    const btn = event.target;
    btn.innerHTML = '<span class="loading"></span> Saving...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = 'Save Story';
        btn.disabled = false;
        alert('Success: Story "Our Summer Adventure" saved successfully!');
    }, 1000);
}

function scheduleStory() {
    saveStory();
    setTimeout(() => {
        navigateToPage('schedule');
        document.getElementById('memory-select').value = 'summer-story';
    }, 1200);
}

// Timeline filtering
function filterTimeline(type) {
    // Update button styles
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.textContent.toLowerCase().includes(type) || type === 'all' && btn.textContent === 'All Memories') {
            btn.style.background = 'var(--primary-blue)';
            btn.style.color = 'white';
        } else if (btn.classList.contains('btn-secondary')) {
            // Keep secondary buttons unchanged
        } else {
            btn.style.background = 'var(--soft-gray)';
            btn.style.color = 'var(--text-dark)';
        }
    });

    // Show/hide timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        if (type === 'all' || item.dataset.type === type) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function openInviteModal() {
    openModal('invite-modal');
}

function openMemoryDetails(memoryTitle) {
    document.getElementById('memory-modal-title').textContent = memoryTitle;

    // Update modal content based on memory
    const modalContent = document.getElementById('memory-modal-content');
    let description = 'This amazing beach vacation created memories that will last forever. Two weeks of sun, sand, and family bonding time.';
    let details = 'Uploaded: July 30, 2024 • 23 photos';

    switch(memoryTitle) {
        case 'Graduation Photos':
            description = 'Sarah\'s college graduation ceremony. Such a proud moment for our entire family!';
            details = 'Uploaded: May 25, 2024 • 45 photos';
            break;
        case 'Family Recipe Book':
            description = 'Grandma\'s precious recipes collected over decades. These family secrets need to be preserved!';
            details = 'Uploaded: November 10, 2023 • 12 documents';
            break;
    }

    modalContent.innerHTML = `
            <div style="text-align: center; margin: 2rem 0;">
                <div style="font-size: 2rem; margin-bottom: 1rem;">Preview</div>
                <h4>${memoryTitle}</h4>
                <p>${description}</p>
                <p style="color: var(--text-light); margin-top: 1rem;">${details}</p>
            </div>
            <div class="btn-group">
                <button class="btn btn-primary" onclick="navigateToPage('schedule'); closeModal('memory-modal')">Schedule Delivery</button>
                <button class="btn btn-secondary" onclick="navigateToPage('story'); closeModal('memory-modal')">Add to Story</button>
            </div>
        `;

    openModal('memory-modal');
}

function sendInvitation() {
    const email = document.getElementById('invite-email').value;
    const relationship = document.getElementById('invite-relationship').value;

    if (!email || !relationship) {
        alert('Please fill in all required fields');
        return;
    }

    const btn = event.target;
    btn.innerHTML = '<span class="loading"></span> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = 'Send Invitation';
        btn.disabled = false;
        closeModal('invite-modal');
        alert(`Success: Invitation sent successfully to ${email}!`);

        // Clear form
        document.getElementById('invite-email').value = '';
        document.getElementById('invite-relationship').value = '';
        document.getElementById('invite-message').value = 'Hi! I\'d love to share our family memories with you through MemoryVault. Join me in preserving our precious moments together!';
    }, 1500);
}

// Close modals when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active states
    navigateToPage('dashboard');

    // Add some interactive behaviors
    console.log('MemoryVault prototype loaded successfully!');

    // Demo: Auto-select Christmas Day on schedule page
    setTimeout(() => {
        if (document.getElementById('schedule').classList.contains('active')) {
            document.querySelector('.calendar-day:nth-child(32)').classList.add('selected');
        }
    }, 100);
});

// Additional interactive features
function simulateUpload() {
    // This function simulates the basic scenario
    navigateToPage('upload');

    setTimeout(() => {
        // Simulate file selection
        const uploadZone = document.querySelector('.upload-zone');
        uploadZone.classList.add('has-files');
        document.getElementById('file-preview').style.display = 'block';
        document.getElementById('memory-form').style.display = 'block';

        // Auto-fill some demo data
        document.getElementById('memory-title').value = 'Family Christmas Morning';
        document.getElementById('memory-description').value = 'Beautiful Christmas morning with the whole family gathered around the tree.';

        // Show file in list
        document.getElementById('file-list').innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem; padding: 0.5rem; border: 1px solid var(--soft-gray); border-radius: 8px;">
                    <span style="font-size: 1.5rem;">IMG</span>
                    <div>
                        <strong>christmas-morning-2024.jpg</strong>
                        <p style="color: var(--text-light); font-size: 0.9rem;">2.4 MB</p>
                    </div>
                </div>
            `;
    }, 500);
}

// Keyboard shortcuts for better UX
document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                navigateToPage('dashboard');
                break;
            case '2':
                e.preventDefault();
                navigateToPage('upload');
                break;
            case '3':
                e.preventDefault();
                navigateToPage('schedule');
                break;
        }
    }

    // Close modals with Escape key
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Responsive navigation for mobile
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Add mobile menu button if screen is small
if (window.innerWidth <= 768) {
    const nav = document.querySelector('nav');
    const mobileButton = document.createElement('button');
    mobileButton.innerHTML = '☰';
    mobileButton.style.cssText = 'background: none; border: none; font-size: 1.5rem; cursor: pointer;';
    mobileButton.onclick = toggleMobileNav;
    nav.appendChild(mobileButton);
}

// Success message auto-hide
function showSuccessMessage(elementId, message, duration = 5000) {
    const element = document.getElementById(elementId);
    if (message) element.textContent = message;
    element.classList.add('show');

    setTimeout(() => {
        element.classList.remove('show');
    }, duration);
}

// Enhanced file validation
function validateFiles(files) {
    const maxSize = 100 * 1024 * 1024; // 100MB
    const allowedTypes = ['image/', 'video/', 'audio/', 'application/pdf', 'application/msword'];

    for (let file of files) {
        if (file.size > maxSize) {
            alert(`File "${file.name}" is too large. Maximum size is 100MB.`);
            return false;
        }

        if (!allowedTypes.some(type => file.type.startsWith(type))) {
            alert(`File type "${file.type}" is not supported.`);
            return false;
        }
    }
    return true;
}

// Add tooltips for better UX
document.querySelectorAll('[title]').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.textContent = e.target.title;
        tooltip.style.cssText = `
                position: absolute;
                background: var(--text-dark);
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.8rem;
                z-index: 3000;
                pointer-events: none;
            `;
        document.body.appendChild(tooltip);

        const rect = e.target.getBoundingClientRect();
        tooltip.style.top = rect.bottom + 5 + 'px';
        tooltip.style.left = rect.left + 'px';

        e.target._tooltip = tooltip;
    });

    element.addEventListener('mouseleave', (e) => {
        if (e.target._tooltip) {
            document.body.removeChild(e.target._tooltip);
            delete e.target._tooltip;
        }
    });
});
