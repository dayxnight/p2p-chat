// Hubungkan ke relay public
const gun = Gun({
  peers: ['https://gun-manhattan.herokuapp.com/gun']
});

// Buat node database-nya
const chat = gun.get('kerajaan-rizz-chat');
