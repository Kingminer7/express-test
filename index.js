const fs = require("fs")
const express = require("express")

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  $.ajax({
    url: 'localhost',
    beforeSend: function(xhr) {
         
    }, success: function(data){
        
    }
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})