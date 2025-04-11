// Handle like button click
document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('like-btn');
    const likeCount = document.getElementById('like-count');
    let likes = parseInt(likeCount.textContent); // Initialize likes from current count
  
    likeButton.addEventListener('click', function () {
      likes += 1;
      likeCount.textContent = likes;
    });
  });
  
  // Handle submitting a new comment
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-comment');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
  
    submitButton.addEventListener('click', function () {
      const commentText = commentInput.value.trim();
  
      if (commentText) {
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText;
        commentList.appendChild(commentElement);
        commentInput.value = ''; // Clear the input field
      } else {
        alert('Please write something before submitting!');
      }
    });
  });
  