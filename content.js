function replaceTextContent(node) {
  const regex = /Midnight\s?Nyx/gi; // Matches 'MidnightNyx', 'Midnight Nyx', 'midnightnyx', 'Midnightnyx', etc.
  if (node.nodeType === Node.TEXT_NODE && regex.test(node.nodeValue)) {
    node.nodeValue = node.nodeValue.replace(regex, 'MidnightMami');
  } else {
    node.childNodes.forEach(replaceTextContent);
  }
}
function replaceDocumentTitle() {
  const regex = /Midnight\s?Nyx/gi; // Matches 'MidnightNyx', 'Midnight Nyx', 'midnightnyx', 'Midnightnyx', etc.
  if (regex.test(document.title)) {
    document.title = document.title.replace(regex, 'MidnightMami');
  }
}
function replaceUsername() {
  replaceTextContent(document.body);
  replaceDocumentTitle();
}
replaceUsername();
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        replaceTextContent(node);
      } else {
        node.childNodes.forEach(replaceTextContent);
      }
    });
    replaceDocumentTitle();
  });
});
observer.observe(document.body, { childList: true, subtree: true });
const titleObserver = new MutationObserver(replaceDocumentTitle);
titleObserver.observe(document.querySelector('title'), { childList: true });
function replaceProfilePictures() {
  //Twitch
  setTimeout(() => {
    document.querySelectorAll('.tw-image-avatar').forEach((element) => {
      if (element.src.startsWith('https://static-cdn.jtvnw.net/jtv_user_pictures/f4d8b9fd-f95a-49a5-b0dc-9ddf2e927015-profile_image-70x70.png')) {
        element.src = 'https://i.imgur.com/odKNoQd.jpeg';
      }
    });
  }, 2000);


  //YouTube
  setTimeout(() => {
    document.querySelectorAll('.yt-core-image').forEach((element) => {
      if (element.src.startsWith('https://yt3.googleusercontent.com/ruujly9nrK-NhRJilKxvyw7nxrC8SbvroI5OmMlWA0SOkY3gwuvksb4PdHQ0CcoQv7ftmSo0BA=s160-c-k-c0x00ffffff-no-rj')) {
        element.src = 'https://i.imgur.com/odKNoQd.jpeg';
      }
    });
  }, 2000);
	
//Tiktok
setTimeout(() => {
  document.querySelectorAll('.e1vl87hj2 img').forEach((element) => {
    const src = element.getAttribute('src');
    const regex = /^https:\/\/p16-sign-useast2a\.tiktokcdn\.com\/.+/;
    if (src && regex.test(src)) {
      element.src = 'https://i.imgur.com/odKNoQd.jpeg';
    }
  });
}, 2000);



  //Kick
  setTimeout(() => {
    document.querySelectorAll('[data-v-13c7eb45]').forEach((element) => {
      if (element.tagName === 'IMG' && element.classList.contains('h-full') && element.classList.contains('w-full') && element.classList.contains('object-cover') && element.src && element.src.startsWith('https://files.kick.com/images/user/30440020/profile_image/conversion/2a3cfa05-5ceb-403b-929a-e30998435e70-fullsize.webp')) {
        element.src = 'https://i.imgur.com/odKNoQd.jpeg';
      }
    });
  }, 2000);
}


// Call the function to replace profile pictures when the page loads
replaceProfilePictures();


