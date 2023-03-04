// error ..1 .... from client side in devtool
/**
 * Uncaught (in promise) SyntaxError: Unexpected token 'u', "user data received"  is not valid JSON
 * 
 *  current code for error -->
 *          app.post('/user',(req,res)=>{
            const newUser = req.body;
            console.log('adding new user',newUser);
            res.send('user data received')
    solved----> in server side 
 *          app.post('/user',(req,res)=>{
            const newUser = req.body;
            console.log('adding new user',newUser);
            res.send({result: 'success'})      
 * 
 * */ 





// error...2.....from client side 
/**
 * Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component
 * 
 * 
 * to solve this error ---> follow below
 * 
 *      const [user,setUser] = useState({
         name: 'mui robul',
         email: 'muir@bul.com',
         phone: '10333333333',
         address: 'taz mahal',

     const handleAddresChange = event =>{
       const {address, ...rest} = user;
       const newAddress = event.target.value;
       const newUser = {address: newAddress, ...rest}
       setUser(newUser)
   
            <input value={user.name} type="text"className='mb-2 w-100'name="name"placeholder='name' required id=""/><br />
            <input value={user.email} type="text"className='mb-2 w-100'name="email"
                 placeholder='email'required id=""/><br />
            <input value={user.address} type="text"className='mb-2 w-100'  name="service"placeholder='service' required id=""/><br />
            <input onChange={handleAddresChange} value={user.address} type="text"className='mb-2 w-100' name="address"placeholder='address' required id=""/><br />
            <input className='btn btn-primary w-100'type="submit" value="Please Submit"required/>
    );
 *  
 */



