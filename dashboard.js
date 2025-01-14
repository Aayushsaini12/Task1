
document.getElementById('sidebarCollapse').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});


function showSection(sectionId) {
   
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
  
    document.getElementById(sectionId).classList.add('active');
    

    document.querySelectorAll('#sidebar .components li').forEach(item => {
        item.classList.remove('active');
    });
    
    
    event.target.closest('li').classList.add('active');
}


function editPost(postId) {
   
    showSection('create-post');
  
    alert('Editing post ' + postId);
}

function deletePost(postId) {
    if(confirm('Are you sure you want to delete this post?')) {
       
        alert('Post ' + postId + ' deleted');
    }
}

// Form Submissions
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert('Post submitted successfully!');
});

document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert('Profile updated successfully!');
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});


document.querySelectorAll('.dashboard-section').forEach(section => {
    section.addEventListener('transitionend', function() {
        if(this.classList.contains('active')) {
            this.classList.add('fade-in');
        }
    });
}); 