import React from 'react'
import './c/Cont.css'



const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "097b26a1-d6f7-4ad9-9115-61da99732701");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("mail sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        {/* <div className="contact-title">
            <h1>Get in touch</h1>
            
        </div> */}
        <div className="contact-container">
          <form onSubmit={onSubmit} className="contact-right">
            {/* <label htmlFor="">Your Name</label>
            <input className='hdn' type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="Your Email"></label>
            <input className='hdn'  type="email" placeholder='Enter your email' name='email'/> */}
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="15" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit Save-as-Draft">Save as Draft</button>
            <button type='submit' className="contact-submit Upload-to-Drive">Upload to Drive</button>
          </form>
        </div>
    </div>
  )
}

export default Contact