const MessageCode = new Map([
  ['auth/user-not-found', 'Пользователя с таким email не существует!'],
  ['auth/wrong-password', 'Неверный пароль!'],
  ['auth/email-already-in-use', 'Пользователь с таким email уже существует!'],
  ['auth/invalid-email', 'Неверныый email!'],
  ['auth/weak-password', 'Слабый пароль!'],
]);

export default MessageCode;
