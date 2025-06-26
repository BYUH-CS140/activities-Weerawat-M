const form = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const feedback = document.getElementById('feedback').value.trim();

  if (feedback) {
    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'content';

    const feedbackHTML = `
      <p><strong>${name ? name : 'Anonymous'} says:</strong></p>
      <p>${feedback}</p>
    `;

    feedbackItem.innerHTML = feedbackHTML;
    feedbackList.appendChild(feedbackItem);

    form.reset();
  }
});
