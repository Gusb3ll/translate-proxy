import app from './app'

(async () => {
  app.listen(4000, '0.0.0.0', () => {
    console.log('\n Server started on port 4000 \n')
  })  
})()