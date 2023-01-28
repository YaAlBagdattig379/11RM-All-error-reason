/** 
 * error 1).
 *    git commit -m"added" error :>   
 *          fatal: cannot lock ref 'HEAD': unable to resolve reference 
 *                                     'refs/mheads/main': reference broken 
 *    git push error :>
 *          fatal: You are not currently on a branch.To push the history          leading to the current (detached HEAD) state now, use git push origin HEAD:<name-of-remote-branch>
 *  Solved:->  run>   rm -rf .git   
 *         push with > git push -f origin main
 * 
 *
 * 
 * error 2). 
*/