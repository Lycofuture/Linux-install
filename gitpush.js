const simpleGit = require('simple-git');

const {add, addConfig, commit, push} = simpleGit();

// 设置用户名和邮箱

addConfig('user.name', 'Your Name');

addConfig('user.email', 'your-email@example.com');

// 添加所有更改

add('*');

// 提交更改

commit('Commit message')

  .then(() => console.log('Changes committed'))

  .catch((err) => console.error('Failed to commit changes:', err));

// 推送到远程仓库

push()

  .then(() => console.log('Code pushed to remote repository'))

  .catch((err) => console.error('Failed to push code:', err));
