import React from "react";

import "./Footer.scss"
import AppWrap from "../../wrapper/AppWrap";

const Footer = () => {
  return (
<div className="app__footer ">
        <div className="top_foot">
                <img className="foot_logo " src="/logo.png"  alt="logo" />
                <div className="foot_outreach">
                        <div className="joinus ">
                                <h3 className="">
                                        Join our newsletter
                                </h3>
                                <div className="flex flex-row gap-x-3 pb-6">
                                        <a href="https://ogooluwanick-portfolio.netlify.app/">
                                                <button>Subscribe</button>
                                        </a>
                                </div>
                                <p className="text-xs font-normal text-[#4D5761]">
                                        Gain a competitive edge with the latest AI breakthroughs and
                                        updates - all in a 5 minute email. Our AI experts sift through
                                        the clutter, honing in on the news that truly matters.
                                </p>
                        </div>
                        <div className="address">
                                <div className="flex flex-col ">
                                        <div className="f_bold">Address</div>
                                        <div className="f_light">Toronto, Canada</div>
                                </div>
                        </div>
                        <div className="contact">
                                <p className="f_bold">Contact</p>
                                <p className="f_light"><a href="mailto:extremeworkbench@gmail.com">Email:extremeworkbench@gmail.com</a></p>
                        </div>
                </div>
        </div>
        <hr/>
        <div className="bottom_foot">
                <div className="copy">
                        ©FUTURIQ INC.
                </div>
                <div className="legal">
                        <div>Privacy Policy</div>
                        <div>Terms of Service</div>
                        <div>Cookie Settings</div>
                </div>
        </div>
</div>
  );
};

export default AppWrap(Footer, "footer", "app__whitebg  default__container")
