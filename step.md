<!-- Terminal   -->

npm i express-session
npm install passport-local
npm i passport

<!-- middleware page -->

make a middleware
local require ('passport-local').Strategy

      make a function localAuthentication(passport){

passport.use( new local( async(username, password,done) => {

<!-- req model -->

findOne({username})

  <!-- store userdata -->

<!-- if user not exists -->
<!-- return done(null,false) -->

<!--if user exists but password wrong  -->   (user.password!==password)
<!-- return done(null,false) -->

return done(null,userdata)
}))

<!-- session -->

passport.serializeUser((user,done)=>{
return done(null ,user.id)
})

passport.deserializeUser(async(id,done)=>{

    <!-- find by id  and store user-->
    return done(null,user)

})

      }

       export localAuthentication

<!-- index.js page -->

require express-session
require passport

     requier localAuthentication
     localAuthentication(passport)

     app.use(session())
     app.use(passport.intialize())
     app.use(passport.session())

<!-- Routes -->

require passport

routes.post('/login" passport.authentication("local"),(req,res)=>{
res.send("")
})
