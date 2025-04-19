// Ambil elemen DOM
const chatBox = document.getElementById('chat-box');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

function send() {
  const user = usernameInput.value;
  const msg = messageInput.value;

  if (!user || !msg) return;

  chat.set({
    user,
    msg,
    timestamp: Date.now()
  });

  messageInput.value = '';
}

chat.map().on(data => {
  if (data && data.user && data.msg) {
    const p = document.createElement('p');
    p.textContent = `[${data.user}] ${data.msg}`;
    chatBox.appendChild(p);
  }
});
