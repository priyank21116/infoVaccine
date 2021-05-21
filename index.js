const express= require("express");
const https= require("https");
const bodyParser= require("body-parser");
var nodemailer = require('nodemailer');

const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("."));


app.get("/",function(req,res){
      res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
      const dist_id = req.body.district_id;
      const pinCo = req.body.pincode;
      const emaill = req.body.email;
      const datee = req.body.date;
      
      // const url_city_id ="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+ dist_id +"&date="+ datee +"#"
       const url_pincode="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+ pinCo +"&date=" +datee
      
      
      https.get(url_pincode,function(response){
            response.on("data",function(data){
                  const avail=JSON.parse(data)
                  arr=avail.sessions;
                  // console.log(avail)


                  // var len = arr.length 
                  // for (var i=0;i<len;i++){
                  //       if(arr[i].name==="Medical Nursing Collage JBP 18"){
                  //             var MH= arr[i];
                  //       }
                  // }
                  console.log("Priyank1");

                   var MH =arr.filter(x => x.name === "Medical Nursing Collage JBP 18");
                  // var Gyan =arr.filter(x => x.center_id === 699280);
                  // var Global =arr.filter(x => x.center_id === 699280);



                  console.log("Priyank2");
                  
                  // const MH = arr.find((x) => x.name === "Medical Nursing Collage JBP 18" );
                  // const Gyan = avail.sessions.find( ({ center_id }) => center_id === 699280 );
                  // const Global = avail.sessions.find( ({ center_id }) => center_id === 698740 );
                  // var obj = arr.filter(function (val) {
                  //       return val.name === "Medical Nursing Collage JBP 18";
                  //   });
                  // console.log(Global[0].center_id);
                   console.log("Priyank3");
                   console.log(MH);
                  //  console.log("Priyank4");
                  //  console.log(Gyan[0].name);
                   // console.log(Global[0].name);

                   console.log("Priyank5");

                   console.log(MH[0].available_capacity_dose1);
                 

                  //  console.log(Gyan)
                  // res.write("<div><h1> theres"+ MH[0].available_capacity_dose1+"vaccine</h1><h4>"+ MH[0].name+"</h4></div>")
                  // res.write("<div><h1> theres"+ Gyan[0].available_capacity_dose1+"vaccine</h1><h4>"+ Gyan[0].name+"</h4></div>")
                  // res.write("<div><h1> theres"+ Global[0].available_capacity_dose1+"vaccine</h1><h4>"+ Global[0].name+"</h4></div>")
                  // res.send;
                  



                  // var transporter = nodemailer.createTransport({
                  //       service: 'gmail',
                  //       auth: {
                  //         user: 'Suneelgupta0108@gmail.com',
                  //         pass: 'Suneel#08'
                  //       }
                  //     });
                      
                  // var mailOptions = {
                  //       from: 'Suneelgupta0108@gmail.com',
                  //       to: emaill,
                  //       subject: 'Vaccine Found',
                  //       text: 'vaccine aviability at center'+ center+' is <em>'+vacant+'.Book your vaccine,NOW!!'
                       
                  //     };

                  // transporter.sendMail(mailOptions, function(error, info){
                  //       if (error) {
                  //         console.log(error);
                  //       } else {
                  //         console.log('Email sent: ' + info.response);
                  //       }
                  //     });

                  
                  

            })
      })
})



app.listen(3000,function(){
      console.log("server running on 3000")
});
