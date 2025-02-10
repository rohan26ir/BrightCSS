import React from 'react';

const GitHub = () => {
  const gitCommands = [
    { id: 1, command: 'git init', description: 'Initialize a new Git repository' },
    { id: 2, command: 'git clone <repo_url>', description: 'Clone an existing repository' },
    { id: 3, command: 'git status', description: 'Check the status of the working directory' },
    { id: 4, command: 'git add <file>', description: 'Stage a specific file for commit' },
    { id: 5, command: 'git add .', description: 'Stage all changes for commit' },
    { id: 6, command: 'git commit -m "message"', description: 'Commit staged changes with a message' },
    { id: 7, command: 'git push origin <branch>', description: 'Push changes to the remote repository' },
    { id: 8, command: 'git pull origin <branch>', description: 'Pull latest changes from the remote repository' },
    { id: 9, command: 'git branch', description: 'List all branches' },
    { id: 10, command: 'git branch <branch_name>', description: 'Create a new branch' },
    { id: 11, command: 'git checkout <branch_name>', description: 'Switch to a different branch' },
    { id: 12, command: 'git checkout -b <branch_name>', description: 'Create and switch to a new branch' },
    { id: 13, command: 'git merge <branch_name>', description: 'Merge a branch into the current branch' },
    { id: 14, command: 'git log', description: 'View commit history' },
    { id: 15, command: 'git remote -v', description: 'View remote repository URLs' },
    { id: 16, command: 'git reset --hard HEAD', description: 'Reset working directory to last commit' },
    { id: 17, command: 'git stash', description: 'Temporarily save changes' },
    { id: 18, command: 'git stash pop', description: 'Reapply saved changes' },
    { id: 19, command: 'git rebase <branch>', description: 'Reapply commits on top of another branch' },
    { id: 20, command: 'git cherry-pick <commit_hash>', description: 'Apply a specific commit from another branch' },
    { id: 21, command: 'git fetch', description: 'Download objects and refs from another repository' },
    { id: 22, command: 'git diff', description: 'Show changes between commits, branches, or working directory' },
    { id: 23, command: 'git tag', description: 'List all tags in the repository' },
    { id: 24, command: 'git tag <tag_name>', description: 'Create a new tag' },
    { id: 25, command: 'git rm <file>', description: 'Remove a file from the working tree and index' },
    { id: 26, command: 'git restore <file>', description: 'Restore a file from the last commit' },
    { id: 27, command: 'git revert <commit_hash>', description: 'Revert a previous commit' },
    { id: 28, command: 'git blame <file>', description: 'Show commit history for a file line by line' },
    { id: 29, command: 'git show <commit_hash>', description: 'Show details of a specific commit' },
    { id: 30, command: 'git config --global user.name "Your Name"', description: 'Set global username for Git' },
    { id: 31, command: 'git config --global user.email "you@example.com"', description: 'Set global email for Git' },
    { id: 32, command: 'git config --list', description: 'List all configured Git settings' },
    { id: 33, command: 'git mv <old_name> <new_name>', description: 'Rename a file and stage the change' },
    { id: 34, command: 'git clean -f', description: 'Remove untracked files from the working directory' },
  ];

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-2xl font-bold my-4'>Git & GitHub Commands</h1>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 px-4 py-2'>S/N</th>
              <th className='border border-gray-300 px-4 py-2'>Command</th>
              <th className='border border-gray-300 px-4 py-2'>Description</th>
            </tr>
          </thead>
          <tbody>
            {gitCommands.map((cmd, index) => (
              <tr key={index} className='bg-gray-500 hover:bg-gray-s300'>
                <td className='border border-gray-300 px-4 py-2'>{cmd.id}</td>
                <td className='border border-gray-300 px-4 py-2'><code>{cmd.command}</code></td>
                <td className='border border-gray-300 px-4 py-2'>{cmd.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GitHub;
