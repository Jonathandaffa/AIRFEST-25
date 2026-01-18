//this is javascript for galeri

// Data gallery items dengan multiple images
const galleryItems = [
    { 
        type: 'image', 
        images: [
            'assets/banner1.jpg',
        ],
        caption: 'Banner of Gallery (kangen feed ig square)'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner2.jpg',
        ],
        caption: 'Banner of Gallery (kangen feed ig square)'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner3.jpg',
        ],
        caption: 'Banner of Gallery (kangen feed ig square)'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner4.jpg',
            'assets/opng.jpg',
            'assets/opng1.jpg',
            'assets/opng2.jpg',
            'assets/opng3.jpg'
        ],
        caption: 'Opening ceremony AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner5.jpg',
            'assets/opng4.jpg',
            'assets/opng5.jpg',
            'assets/opng6.jpg',
            'assets/opng7.jpg',
            'assets/opng8.jpg'
        ],
        caption: 'Opening ceremony AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner6.jpg',
            'assets/crew.jpg',
            'assets/crew1.jpg',
            'assets/crew2.jpg',
            'assets/crew3.jpg',
            'assets/crew4.jpg',
            'assets/crew5.jpg',
            'assets/crew6.jpg',
        ],
        caption: 'Ustadz and Crew Participant AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner7.jpg',
            'assets/clsng.jpg',
            'assets/clsng1.jpg',
            'assets/clsng2.jpg',
            'assets/clsng3.jpg',
            'assets/clsng4.jpg',
            'assets/clsng5.jpg',
        ],
        caption: 'Closing and Awarding Ceremony AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner8.jpg',
            'assets/clsng6.jpg',
            'assets/clsng7.jpg',
            'assets/clsng8.jpg',
            'assets/clsng9.jpg',
            'assets/clsng10.jpg',
            'assets/clsng11.jpg'
        ],
        caption: 'Closing and Awarding Ceremony AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner9.jpg',
            'assets/crew7.jpg',
            'assets/crew8.jpg',
            'assets/crew9.jpg',
            'assets/crew10.jpg',
            'assets/crew11.jpg',
            'assets/crew12.jpg',
        ],
        caption: 'Ustadz and Crew Participant AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner10.jpg',
            'assets/ftsl.JPG',
            'assets/ftsl1.JPG',
            'assets/ftsl2.JPG',
            'assets/ftsl3.JPG'
        ],
        caption: 'Pelaksanaan lomba Futsal AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner11.jpg',
            'assets/crew13.JPG',
            'assets/crew14.JPG',
            'assets/crew15.JPG',
            'assets/crew16.jpg',
            'assets/crew17.jpg',
            'assets/crew18.jpg'
        ],
        caption: 'Potret Crew and Ustadz Participant AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner12.jpg',
            'assets/bskt.jpg',
            'assets/bskt1.jpg',
            'assets/bskt2.jpg',
            'assets/bskt3.jpg'
        ],
        caption: 'Pelaksanaan lomba Basketball AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner13.jpg',
            'assets/lbskt.jpg',
            'assets/lbskt1.jpg',
            'assets/lbskt2.jpg',
            'assets/lbskt3.jpg',
            'assets/lbskt4.jpg',
            'assets/lbskt5.jpg'
        ],
        caption: 'Lapangan Basketball AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner14.jpg',
            'assets/lbdmntn.jpg',
            'assets/lbdmntn1.jpg',
            'assets/lbdmntn2.jpg',
            'assets/lbdmntn3.jpg',
            'assets/lbdmntn4.jpg',
            'assets/lbdmntn5.jpg'
        ],
        caption: 'Lapangan Badminton AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner15.jpg',
            'assets/lmnsc.jpg',
            'assets/lmnsc2.jpg',
            'assets/lmnsc3.jpg'
        ],
        caption: 'Lapangan Mini Soccer AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner16.jpg',
            'assets/image (92).jpg',
            'assets/image (93).jpg',
            'assets/image (94).jpg',
            'assets/image (95).jpg',
            'assets/image (96).jpg'
        ],
        caption: 'Caption 16'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner17.jpg',
            'assets/lftsl.jpg',
            'assets/lftsl1.jpg',
            'assets/lftsl2.jpg'
        ],
        caption: 'Lapangan Gor Futsal AIRFEST 2023'
    },
    { 
        type: 'image', 
        images: [
            'assets/banner18.jpg',
            'assets/image (104).jpg',
            'assets/image (105).jpg',
            'assets/image (106).jpg',
            'assets/image (107).jpg',
            'assets/image (108).jpg'
        ],
        caption: 'Caption 18'
    },
    { 
        type: 'image', 
        images: [
            'assets/image (109).jpg',
            'assets/image (110).jpg',
            'assets/image (111).jpg',
            'assets/image (112).jpg',
            'assets/image (113).jpg',
            'assets/image (114).jpg'
        ],
        caption: 'Caption 19'
    },
    { 
        type: 'image', 
        images: [
            'assets/image (115).jpg',
            'assets/image (116).jpg',
            'assets/image (117).jpg',
            'assets/image (118).jpg',
            'assets/image (119).jpg',
            'assets/image (120).jpg'
        ],
        caption: 'Caption 20'
    },
    { 
        type: 'image', 
        images: [
            'assets/image (121).jpg',
            'assets/image (122).jpg',
            'assets/image (123).jpg',
            'assets/image (124).jpg',
            'assets/image (125).jpg',
            'assets/image (126).jpg'
        ],
        caption: 'Caption 21'
    }
];

// Carousel functionality
let currentSlide = 0;
let totalSlides = 0;

function initializeCarousel(images) {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselDots = document.querySelector('.carousel-dots');
    
    // Clear previous content
    carouselWrapper.innerHTML = '';
    carouselDots.innerHTML = '';
    
    // Add slides
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${src}" alt="Slide ${index + 1}">`;
        carouselWrapper.appendChild(slide);
        
        // Add dot
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });
    
    totalSlides = images.length;
    currentSlide = 0;
    
    // Update carousel controls visibility
    updateCarouselControls();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    updateCarouselControls();
}

function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
}

function prevSlide() {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

function updateCarouselControls() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (totalSlides <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

// Like functionality
function initializeLikeButton(index) {
    const likeBtn = document.querySelector('.like-btn');
    const likeCount = document.querySelector('.like-count');
    
    // Load like status and count from localStorage
    const likes = JSON.parse(localStorage.getItem('likes') || '{}');
    const itemLikes = likes[index] || { count: 0, liked: false };
    
    likeCount.textContent = itemLikes.count;
    if (itemLikes.liked) {
        likeBtn.classList.add('liked');
        likeBtn.querySelector('i').classList.replace('far', 'fas');
    }
    
    likeBtn.addEventListener('click', () => {
        const likes = JSON.parse(localStorage.getItem('likes') || '{}');
        const itemLikes = likes[index] || { count: 0, liked: false };
        
        if (itemLikes.liked) {
            itemLikes.count--;
            itemLikes.liked = false;
            likeBtn.classList.remove('liked');
            likeBtn.querySelector('i').classList.replace('fas', 'far');
        } else {
            itemLikes.count++;
            itemLikes.liked = true;
            likeBtn.classList.add('liked');
            likeBtn.querySelector('i').classList.replace('far', 'fas');
        }
        
        likes[index] = itemLikes;
        localStorage.setItem('likes', JSON.stringify(likes));
        likeCount.textContent = itemLikes.count;
    });
}

// List of random avatars
const randomAvatars = [
    'assets/avatar.jpeg',
    'assets/avatar1.jpeg',
    'assets/avatar2.jpeg',
    'assets/avatar3.jpeg',
    'assets/avatar4.jpeg',
	'assets/avatar5.jpeg',
    'assets/avatar6.jpeg',
    'assets/avatar7.jpeg',
    'assets/avatar8.jpeg',
];

// Get random avatar
function getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * randomAvatars.length);
    return randomAvatars[randomIndex];
}

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX",
    authDomain: "airfest25.firebaseapp.com",
    databaseURL: "https://airfest25-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "airfest25",
    storageBucket: "airfest25.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Comments functionality
let currentItemIndex = null;

function loadComments(index) {
    currentItemIndex = index;
    const commentsList = document.querySelector('.comments-list');
    commentsList.innerHTML = '';
    
    // Load comments from Firebase
    const commentsRef = database.ref(`comments/${index}`);
    commentsRef.on('value', (snapshot) => {
        const comments = [];
        snapshot.forEach((childSnapshot) => {
            comments.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        
        // Sort comments by date (newest first)
        comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Clear and update UI
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = createCommentElement(comment);
                commentsList.appendChild(commentElement);
            });
    });
}

function createCommentElement(comment) {
                    const commentElement = document.createElement('div');
                    commentElement.className = 'comment';
    commentElement.setAttribute('data-comment-id', comment.id);
    
    const date = new Date(comment.date);
    const formattedDate = date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
                    commentElement.innerHTML = `
        <img src="${comment.avatar}" alt="${comment.username}" class="comment-avatar">
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-username">${comment.username}</span>
                <span class="comment-date">${formattedDate}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
            ${comment.image ? `<img src="${comment.image}" alt="Comment image" class="comment-image">` : ''}
        </div>
    `;
    
    return commentElement;
}

// Fungsi untuk mengkonversi gambar ke base64
function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

// Fungsi untuk menangani upload gambar
function handleImageUpload(event, form) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
        alert('Kebesaran filenya woe! Maksimal 5MB. Yang penting ga sebesar harapan aku ke kamuuuu... hehe~');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        // Remove existing preview if any
        const existingPreview = form.querySelector('.image-preview');
        if (existingPreview) {
            existingPreview.remove();
        }
        
        const preview = document.createElement('div');
        preview.className = 'image-preview';
        preview.innerHTML = `
            <img src="${e.target.result}" alt="Preview">
            <span class="image-name">${file.name}</span>
            <button class="remove-image">&times;</button>
        `;
        
        form.appendChild(preview);
        
        // Add event listener to remove button
        const removeBtn = preview.querySelector('.remove-image');
        removeBtn.addEventListener('click', () => {
            preview.remove();
            event.target.value = '';
        });
    };
    reader.readAsDataURL(file);
}

// Fungsi untuk menyimpan komentar
async function saveComment(comment) {
    try {
        const commentsRef = database.ref(`comments/${currentItemIndex}`);
        const newCommentRef = commentsRef.push();
        
        await newCommentRef.set({
            username: comment.username,
            avatar: comment.avatar,
            date: comment.date,
            text: comment.text,
            image: comment.image
        });
        
        return true;
    } catch (error) {
        console.error('Error saving comment:', error);
        return false;
    }
}

// Auto resize textarea
const textarea = document.querySelector('.comment-form textarea');
textarea.addEventListener('input', function() {
    // Reset height to auto to get the correct scrollHeight
    this.style.height = 'auto';
    
    // Set new height based on scrollHeight, but limit to 6 lines
    const maxHeight = 144; // 6 lines (24px per line)
    const newHeight = Math.min(this.scrollHeight, maxHeight);
    this.style.height = newHeight + 'px';
    
    // Show/hide scrollbar based on content
    this.style.overflowY = this.scrollHeight > maxHeight ? 'auto' : 'hidden';
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize gallery first
    initializeGallery();
    
    // Close overlay when clicking outside
    document.querySelector('.gallery-overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-overlay')) {
            closeOverlay();
        }
    });
    
    // Close overlay with close button
    document.querySelector('.close-btn').addEventListener('click', closeOverlay);
    
    // Handle comment form submission
    const commentForm = document.querySelector('.comment-form');
    const textarea = commentForm.querySelector('textarea');
    const imageInput = commentForm.querySelector('.image-input');
    const submitBtn = commentForm.querySelector('.submit-btn');
    const imageUploadBtn = commentForm.querySelector('.image-upload');
    
    // Single event listener for image upload
    if (imageUploadBtn && !imageUploadBtn.hasAttribute('data-listener-attached')) {
        imageUploadBtn.setAttribute('data-listener-attached', 'true');
        imageUploadBtn.addEventListener('click', () => {
            imageInput.click();
        });
    }
    
    // Handle image input change
    if (imageInput && !imageInput.hasAttribute('data-listener-attached')) {
        imageInput.setAttribute('data-listener-attached', 'true');
        imageInput.addEventListener('change', (e) => handleImageUpload(e, commentForm));
    }
    
    // Function to submit comment
    async function submitComment() {
        const text = textarea.value.trim();
        let image = null;
        
        // Check if there's an image preview
        const preview = commentForm.querySelector('.image-preview img');
        if (preview) {
            image = preview.src;
        }
        
        // Submit if there's either text or image
        if (!text && !image) return;
        
        const comment = {
            id: Date.now(),
            username: 'User',
            avatar: getRandomAvatar(),
            date: new Date().toISOString(),
            text: text,
            image: image
        };
        
        // Save to localStorage
        const success = await saveComment(comment);
        if (!success) {
            alert('Terjadi kesalahan saat menyimpan komentar');
            return;
        }
        
        // Add to UI
        const commentElement = createCommentElement(comment);
        document.querySelector('.comments-list').prepend(commentElement);
        
        // Reset form
        textarea.value = '';
        imageInput.value = '';
        const previewContainer = commentForm.querySelector('.image-preview');
        if (previewContainer) previewContainer.remove();
        
        // Reset textarea height
        textarea.style.height = 'auto';
    }
    
    // Submit with button click
    if (submitBtn && !submitBtn.hasAttribute('data-listener-attached')) {
        submitBtn.setAttribute('data-listener-attached', 'true');
        submitBtn.addEventListener('click', submitComment);
    }
    
    // Submit with Enter key (Shift+Enter for new line)
    if (textarea && !textarea.hasAttribute('data-listener-attached')) {
        textarea.setAttribute('data-listener-attached', 'true');
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitComment();
            }
        });
    }
    
    // Add carousel navigation
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    if (nextBtn && !nextBtn.hasAttribute('data-listener-attached')) {
        nextBtn.setAttribute('data-listener-attached', 'true');
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn && !prevBtn.hasAttribute('data-listener-attached')) {
        prevBtn.setAttribute('data-listener-attached', 'true');
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!document.querySelector('.gallery-overlay.active')) return;
        
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') closeOverlay();
    });
});

function deleteComment(commentElement) {
    if (!confirm('Apakah Anda yakin ingin menghapus komentar ini?')) return;
    
    // Remove from localStorage
    const comments = JSON.parse(localStorage.getItem(`comments_${currentItemIndex}`) || '[]');
    const updatedComments = comments.filter(comment => comment.id !== commentElement.getAttribute('data-comment-id'));
    localStorage.setItem(`comments_${currentItemIndex}`, JSON.stringify(updatedComments));
    
    // Remove from UI
    commentElement.remove();
}

// Initialize gallery
function initializeGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return; // Pastikan elemen grid ada
    
    galleryGrid.innerHTML = ''; // Clear existing content
    
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Use the first image as thumbnail
        const img = document.createElement('img');
        img.src = item.images[0];
        img.alt = item.caption;
        galleryItem.appendChild(img);
        
        galleryItem.addEventListener('click', () => openOverlay(index));
        galleryGrid.appendChild(galleryItem);
    });
}

function openOverlay(index) {
    const overlay = document.querySelector('.gallery-overlay');
    const caption = document.querySelector('.caption');
    const item = galleryItems[index];
    
    // Initialize carousel with images
    initializeCarousel(item.images);
    
    caption.textContent = item.caption;
    
    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize reactions
    initializeReactions(index);
    
    // Load comments
    loadComments(index);
    
    // Reset comment form
    const commentForm = document.querySelector('.comment-form');
    const textarea = commentForm.querySelector('textarea');
    const imageInput = commentForm.querySelector('.image-input');
    const previewContainer = commentForm.querySelector('.image-preview');
    
                    textarea.value = '';
    imageInput.value = '';
    if (previewContainer) previewContainer.remove();
    textarea.style.height = 'auto';
}

function closeOverlay() {
    const overlay = document.querySelector('.gallery-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset carousel
    currentSlide = 0;
    totalSlides = 0;
}

// Reaction functionality
function initializeReactions(index) {
    const reactionBtn = document.querySelector('.reaction-btn');
    const countElement = reactionBtn.querySelector('.reaction-count');
    
    // Load reaction status from Firebase
    const reactionRef = database.ref(`reactions/${index}`);
    reactionRef.on('value', (snapshot) => {
        const reaction = snapshot.val() || { count: 0, active: false };
        
        // Set initial state
        countElement.textContent = reaction.count;
        if (reaction.active) {
            reactionBtn.classList.add('active');
            reactionBtn.querySelector('i').classList.replace('far', 'fas');
        } else {
            reactionBtn.classList.remove('active');
            reactionBtn.querySelector('i').classList.replace('fas', 'far');
        }
    });
    
    // Remove old event listener if exists
    const newReactionBtn = reactionBtn.cloneNode(true);
    reactionBtn.parentNode.replaceChild(newReactionBtn, reactionBtn);
    
    // Add click handler
    newReactionBtn.addEventListener('click', () => {
        const reactionRef = database.ref(`reactions/${index}`);
        reactionRef.once('value', (snapshot) => {
            const reaction = snapshot.val() || { count: 0, active: false };
            
            if (reaction.active) {
                // Remove reaction
                reaction.count--;
                reaction.active = false;
                newReactionBtn.classList.remove('active');
                newReactionBtn.querySelector('i').classList.replace('fas', 'far');
            } else {
                // Add reaction
                reaction.count++;
                reaction.active = true;
                newReactionBtn.classList.add('active');
                newReactionBtn.querySelector('i').classList.replace('far', 'fas');
            }
            
            reactionRef.set(reaction);
            newReactionBtn.querySelector('.reaction-count').textContent = reaction.count;
        });
    });
}