const bcrypt = require('bcrypt');

// const hashThePassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hashedPw = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hashedPw);
// };

const hashThePassword = async (pw) => {
  const salt = await bcrypt.hash(pw, 12);
  const hashedPw = await bcrypt.hash(pw, salt);
  console.log(hashedPw);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log('Logged you in! Successful Match!');
  } else {
    console.log('Incorrect Password');
  }
};

// hashThePassword('monkey');
login('monkey', '$2b$12$z1EXbNeTAF5OdWWiimNZj.tdaLAllD6EC/R.1ctwUtncAPr.1knam');
