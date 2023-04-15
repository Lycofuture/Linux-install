const simpleGit = require('simple-git');

const git = simpleGit();

// 设置用户名和邮箱

git.addConfig('user.name', 'Your Name');

git.addConfig('user.email', 'your-email@example.com');

// 添加所有更改

git.add('*');

// 提交更改

git.commit('Commit message')

  .then(() => console.log('Changes committed'))

  .catch((err) => console.error('Failed to commit changes:', err));

// 推送到远程仓库

git.push()

  .then(() => console.log('Code pushed to remote repository'))

  .catch((err) => console.error('Failed to push code:', err));

