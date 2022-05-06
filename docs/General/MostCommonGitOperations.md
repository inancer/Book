### **Most common Git Operations** 

1.  **non-interactive rebase:** usually needed to resolve conflicts before creating / merging a PR
    
    1.  Update your current branch and local base branch
        
        `git pull`
        
    2.  If you didn't do step 1, then do the following
        
        `git pull`
        
    3.  Start the non-interactive rebase process
        
        `git rebase origin/base-branch`
        
    4.  In case of conflicts use any visual tool to resolve conflicts e.g. Android Studio or App Code
    5.  After resolving conflicts in a single commit you could either start by
        
        `git rebase --``continue`
        
        or if it complained about not retrieving anything from your own conflicting code but rather using the others' code as is then
        
        `git rebase --skip`
        
    6.  At the very end of the rebase process when everything is done and properly resolved you need to push force using
        
        `git push --force-with-lease`
        
2.  Steps to perform ****interactive rebase (****Interactive rebase to adjust commits / messages / squash .... etc)
    1.  Decide what you need to do and the number of tickets that you'd like to work on, you can do that in your branch/pr on github or locally by viewing the log of your current branch via the IDE or from command-line 
        
        `git log`
        
    2.  When you're ready to start the rebase process do the following
        
        `git rebase -i HEAD~``5`
        
        where **5** here represents the number of commits to be rebased interactively start from and including the HEAD of your current branch.
        
    3.  You'll be taken to visual editor in case of VI/VIM or Nano/Emacs to start editing press on Vi/Vim press **i** to end editing press **esc** to save and exit (while not in editing mode) write **:x**
    4.  When rebasing interactively first you'll be prompted about the commits and what to do with each of them
    5.  Then you'll be asked about the commit messages
    6.  At the very end of any rebase you need to do a push force.
        
        `git push --force-with-lease`
        
    7.  In case something went wrong type the following to stop the proecess
        
        `git rebase --abort`
        
    8.  In case something goes horrible wrong like a wrong force-push for example, you can also revert to a previous state by the following (First check that point in the history of your local changes before force-pushing)
        
        `git reflog`
        
    9.  Pick the correct state's hash / checksum
        
        `git checkout XXXXXXXXXXXX`
        
    10.  Then as always push
        
        `git push --force-with-lease`
        
3.  **Cherry Pick** usually needed to have a specific commit to a branch (Ex: we need a specific feature to be added to a hot fix release OR from a release branch to development)
    1.  find commit hash you want to include from either git log or Github.
    2.  perform cherry pick command 
        
        `git cherry-pick {COMMIT_HASH}`
        
    3.  In case of conflicts use any visual tool to resolve conflicts e.g. Android Studio or App Code
    4.  After resolving conflicts in a single commit you could either start by
        
        `git cherry-pick --``continue`
        
    5.  In case something went wrong type the following to stop the proecess
        
        `git cherry-pick --abort`
        
    6.  Then as always push
        
        `git push --force-with-lease`
