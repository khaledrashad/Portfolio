import React from "react";

export default function Contact() {

    const handleDownload = () => {
        const googleDriveLink = 'https://drive.google.com/file/d/1AX0FhgMINrw4196zXoyif0I6L2r7FfSr/view?usp=drive_link';
        window.location.href = googleDriveLink;
    };


  return (
    <>
      <div className="main-bg mx-auto py-5" id="contactSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="py-3 h-1">Contact Me</h2>
              <p>Thank you for viewing my portfolio.</p>
              <p>I really hope you have enjoyed looking at my work</p>
            </div>
            <div className="col-md-5 text-center">
              <div className="mb-3">
                <a href="https://wa.link/54c4tr" className="text-black px-4">
                  <i class="fa-brands fa-whatsapp h1"></i>
                </a>
                <a
                  href="https://github.com/khaledrashad"
                  className="text-black px-4"
                >
                  <i class="fa-brands fa-github h1"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/khaledrashad98/"
                  className="text-black px-4"
                >
                  <i class="fa-brands fa-linkedin h1"></i>
                </a>
                <a href="tel:+201150907160" className="text-black px-4">
                  <i class="fa-solid fa-phone h1"></i>
                </a>
                <a href="mailto:khaledrashad9898@gmail.com" className="text-black px-4">
                  <i class="fa-solid fa-envelope h1"></i>
                </a>
              </div>
              <button className="btn btn-dark" onClick={handleDownload}>Download my resume</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
