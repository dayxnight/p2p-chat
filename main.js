// 1. Cek localStorage buat username
let username = localStorage.getItem('username');

if (!username) {
  // 2. Kalau belum ada, minta lewat prompt
  username = prompt('Masukkan username kerajaanmu, bangsawan:');
  localStorage.setItem('username', username);
}

// 3. Ambil elemen-elemen DOM
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');

// 4. Kirim pesan
function send() {
  const msg = messageInput.value;
  if (!msg) return;

  chat.set({
    user: username,
    msg,
    timestamp: Date.now()
  });

  messageInput.value = '';
}

// 5. Dengerin pesan masuk dari peer lain
chat.map().on(data => {
  if (data && data.user && data.msg) {
    const p = document.createElement('p');
    p.textContent = `[${data.user}] ${data.msg}`;
    chatBox.appendChild(p);
  }
});
