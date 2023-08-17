const ideasList = document.getElementById('ideasList');

function submitIdea() {
    const ideaInput = document.getElementById('ideaInput');
    const ideaText = ideaInput.value.trim();

    if (ideaText !== '') {
        const newIdea = createIdeaElement(ideaText);
        ideasList.appendChild(newIdea);
        ideaInput.value = '';
    }
}

function createIdeaElement(text) {
    const ideaItem = document.createElement('li');
    ideaItem.className = 'idea-item';

    const ideaText = document.createElement('span');
    ideaText.textContent = text;

    const upvoteButton = document.createElement('button');
    upvoteButton.textContent = 'Upvote';
    upvoteButton.onclick = function () {
        upvoteIdea(ideaItem);
    };

    const commentForm = document.createElement('div');
    commentForm.className = 'comment-form';
    const commentInput = document.createElement('input');
    commentInput.placeholder = 'Add a comment';
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.onclick = function () {
        addComment(ideaItem, commentInput.value);
        commentInput.value = '';
    };

    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentButton);

    ideaItem.appendChild(ideaText);
    ideaItem.appendChild(upvoteButton);
    ideaItem.appendChild(commentForm);

    return ideaItem;
}

function upvoteIdea(ideaItem) {
    const upvoteButton = ideaItem.querySelector('button');
    const currentVotes = parseInt(upvoteButton.textContent.match(/\d+/));
    upvoteButton.textContent = `Upvote (${currentVotes + 1})`;
}

function addComment(ideaItem, commentText) {
    const commentList = document.createElement('ul');
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);

    ideaItem.appendChild(commentList);
}
