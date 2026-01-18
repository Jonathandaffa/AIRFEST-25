// Data grid items
const gridItems = [
    { type: 'image', src: 'asset/image (1).jpg', caption: 'Caption 1' },
    { type: 'image', src: 'asset/image (2).jpg', caption: 'Caption 2' },
    { type: 'image', src: 'asset/image (3).jpg', caption: 'Caption 3' },
    { type: 'image', src: 'asset/image (4).jpg', caption: 'Caption 4' },
    { type: 'image', src: 'asset/image (5).jpg', caption: 'Caption 5' },
    { type: 'image', src: 'asset/image (6).jpg', caption: 'Caption 6' },
    { type: 'image', src: 'asset/image (7).jpg', caption: 'Caption 7' },
    { type: 'image', src: 'asset/image (8).jpg', caption: 'Caption 8' },
    { type: 'image', src: 'asset/image (9).jpg', caption: 'Caption 9' },
    { type: 'image', src: 'asset/image (10).jpg', caption: 'Caption 10' },
    { type: 'image', src: 'asset/image (11).jpg', caption: 'Caption 11' },
    { type: 'image', src: 'asset/image (12).jpg', caption: 'Caption 12' },
    { type: 'image', src: 'asset/image (13).jpg', caption: 'Caption 13' },
    { type: 'image', src: 'asset/image (14).jpg', caption: 'Caption 14' },
    { type: 'image', src: 'asset/image (15).jpg', caption: 'Caption 15' },
    { type: 'image', src: 'asset/image (16).jpg', caption: 'Caption 16' },
    { type: 'image', src: 'asset/image (17).jpg', caption: 'Caption 17' },
    { type: 'image', src: 'asset/image (18).jpg', caption: 'Caption 18' },
    { type: 'image', src: 'asset/image (19).jpg', caption: 'Caption 19' },
    { type: 'image', src: 'asset/image (20).jpg', caption: 'Caption 20' }
];

// Initialize grid
function initializeGrid() {
    const gridContainer = document.querySelector('.grid-container');
    
    gridItems.forEach((item, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.caption;
        gridItem.appendChild(img);
        
        gridItem.addEventListener('click', () => openOverlay(index));
        gridContainer.appendChild(gridItem);
    });
}

// Overlay functionality
function openOverlay(index) {
    const overlay = document.querySelector('.overlay');
    const mediaContainer = document.querySelector('.media-container');
    const caption = document.querySelector('.caption');
    const item = gridItems[index];
    
    // Clear previous content
    mediaContainer.innerHTML = '';
    
    // Add new content
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption;
    mediaContainer.appendChild(img);
    
    caption.textContent = item.caption;
    
    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Load comments
    loadComments(index);
}

function closeOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Comments functionality
let currentItemIndex = null;

function loadComments(index) {
    currentItemIndex = index;
    const commentsList = document.querySelector('.comments-list');
    commentsList.innerHTML = '';
    
    // Load comments from localStorage
    const comments = JSON.parse(localStorage.getItem(`comments_${index}`) || '[]');
    
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

function createCommentElement(comment) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
        <img src="${comment.avatar}" alt="${comment.username}" class="comment-avatar">
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-username">${comment.username}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
            ${comment.image ? `<img src="${comment.image}" alt="Comment image" class="comment-image">` : ''}
            <div class="comment-actions">
                <span class="comment-action delete-comment">
                    <i class="fas fa-trash"></i> Hapus
                </span>
            </div>
        </div>
    `;
    
    // Add delete functionality
    const deleteBtn = commentElement.querySelector('.delete-comment');
    deleteBtn.addEventListener('click', () => deleteComment(commentElement));
    
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
async function handleImageUpload(event, form) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file terlalu besar. Maksimal 5MB.');
        return;
    }
    
    try {
        const base64Image = await convertImageToBase64(file);
        
        // Remove existing preview if any
        const existingPreview = form.querySelector('.image-preview');
        if (existingPreview) {
            existingPreview.remove();
        }
        
        const preview = document.createElement('div');
        preview.className = 'image-preview';
        preview.innerHTML = `
            <img src="${base64Image}" alt="Preview">
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
    } catch (error) {
        console.error('Error converting image:', error);
        alert('Terjadi kesalahan saat memproses gambar');
    }
}

// Fungsi untuk menyimpan komentar
async function saveComment(comment) {
    try {
        const comments = JSON.parse(localStorage.getItem(`comments_${currentItemIndex}`) || '[]');
        comments.push(comment);
        localStorage.setItem(`comments_${currentItemIndex}`, JSON.stringify(comments));
        return true;
    } catch (error) {
        console.error('Error saving comment:', error);
        return false;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeGrid();
    
    // Close overlay when clicking outside
    document.querySelector('.overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
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
    const imageUploadBtn = commentForm.querySelector('.image-upload-btn');
    
    // Handle image upload in main comment form
    imageUploadBtn.addEventListener('click', () => {
        imageInput.click();
    });
    
    imageInput.addEventListener('change', (e) => handleImageUpload(e, commentForm));
    
    submitBtn.addEventListener('click', async () => {
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
            avatar: 'path/to/default-avatar.jpg',
            date: new Date().toLocaleDateString(),
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
        document.querySelector('.comments-list').appendChild(commentElement);
        
        // Reset form
        textarea.value = '';
        imageInput.value = '';
        const previewContainer = commentForm.querySelector('.image-preview');
        if (previewContainer) previewContainer.remove();
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