import React from "react";
import { Box } from "@mui/system";

const Contact = () => {
  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12 paddingtop11 ranking" >
            <h2 className="top-nfts">Support</h2>
          </Box>
          <Box className="col-md-12" style={{ padding: "50px 0px" }}>
            <Box className="row">
              <Box className="col-lg-8 mb-sm-30">
                <h3>Do you have any question?</h3>
                <form name="contactForm" id="contact_form" className="form-border" method="post">
                  <Box className="field-set">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                  </Box>
                  <Box className="field-set">
                    <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" />
                  </Box>
                  <Box className="field-set">
                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                  </Box>
                  <Box className="field-set">
                    <textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
                  </Box>
                  <Box className="spacer-half"></Box>
                  <Box id="submit">
                    <input type="submit" id="send_message" value="Submit Form" className="btn btn-main" />
                  </Box>
                  <Box id="mail_success" className="success">Your message has been sent successfully.</Box>
                  <Box id="mail_fail" className="error">Sorry, error occured this time sending your message.
                  </Box>
                </form>
              </Box>
              <Box className="col-lg-4">
                <Box className="padding40 box-rounded mb30" data-bgcolor="#F2F6FE">
                  <h3>US Office</h3>
                  <address className="s1">
                    <span><i className="id-color fa fa-map-marker fa-lg"></i>08 W 36th St, New York, NY 10001</span>
                    <span><i className="id-color fa fa-phone fa-lg"></i>+1 333 9296</span>
                    <span><i className="id-color fa fa-envelope-o fa-lg"></i><a href="mailto:contact@example.com">contact@example.com</a></span>
                    <span><i className="id-color fa fa-file-pdf-o fa-lg"></i><a href="#">Download Brochure</a></span>
                  </address>
                </Box>
                <Box className="padding40 bg-color text-light box-rounded">
                  <h3>AU Office</h3>
                  <address className="s1">
                    <span><i className="fa fa-map-marker fa-lg"></i>100 Mainstreet Center, Sydney</span>
                    <span><i className="fa fa-phone fa-lg"></i>+61 333 9296</span>
                    <span><i className="fa fa-envelope-o fa-lg"></i><a href="mailto:contact@example.com">contact@example.com</a></span>
                    <span><i className="fa fa-file-pdf-o fa-lg"></i><a href="#">Download Brochure</a></span>
                  </address>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Contact