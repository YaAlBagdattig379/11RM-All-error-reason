// error ..1 .... from client side in devtool
/**
 * Uncaught (in promise) SyntaxError: Unexpected token 'u', "user data received"  is not valid JSON
 * 
 *  current code for error -->
 *           app.post('/user',(req,res)=>{
            const newUser = req.body;
            console.log('adding new user',newUser);
            res.send('user data received')
    solved----> in server side 
 *        app.post('/user',(req,res)=>{
            const newUser = req.body;
            console.log('adding new user',newUser);
            res.send({result: 'success'})      
 * 
 * */ 
