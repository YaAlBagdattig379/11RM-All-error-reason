/**
 * error 1. >>
 *        react_devtools_backend.js:4012 Warning: Cannot update a component     (`BrowserRouter`) while rendering a different component (`SocialLogin`). To locate the bad setState() call inside `SocialLogin`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
 * 
 * Solved:>>
 *   use---> useEffect(()=>{
 *              if (user) {
                   return (
                       navigate('/home')
                    );
                }
 *          })
 * 
 */