function renderPost(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const headerElement = document.createElement("div");
  headerElement.classList.add("header");

  const avatarElement = document.createElement("div");
  avatarElement.classList.add("avatar");
  avatarElement.style.backgroundImage = `url(${post.avatarUrl})`;

  const authorElement = document.createElement("div");
  authorElement.classList.add("author");
  authorElement.innerText = post.authorName;

  const timestampElement = document.createElement("div");
  timestampElement.classList.add("timestamp");
  timestampElement.innerText = post.timestamp;

  headerElement.appendChild(avatarElement);
  headerElement.appendChild(authorElement);
  headerElement.appendChild(timestampElement);

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerText = post.content;

  const actionsElement = document.createElement("div");
  actionsElement.classList.add("actions");

  const likeButtonElement = document.createElement("button");
  likeButtonElement.classList.add("action");
  likeButtonElement.innerText = "Like";

  const commentButtonElement = document.createElement("button");
  commentButtonElement.classList.add("action");
  commentButtonElement.innerText = "Comment";

  actionsElement.appendChild(likeButtonElement);
  actionsElement.appendChild(commentButtonElement);

  postElement.appendChild(headerElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(actionsElement);

  return postElement;
}
