  import Image from "next/image";
import ResumeImg from "../../../../public/assets/image 161.png"
import CertificateImg from "../../../../public/assets/image 160.png"
import checkIcon from "../../../../public/assets/Done.png"
import "@/app/components/apply/styles/Apply.css"
import Link from "next/link";

export default function Apply() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="sections">
            <div className="left-section">
              <h1 className="heading">Internship Program</h1>
              <p className="para">
                Join our fully remote and free internship program to apply your knowledge in practical settings and work on real world projects.
              </p>
              <div className="info">
                <p>10, 000+</p>
                <p className="info-2">10+</p>
                <p>3 months</p>
              </div>
              <span className="span">
                <p>Interns Trained</p>
                <p className="span-2">Profiles Provided</p>
                <p className="span-3">Become job ready</p>
              </span>

              <div className="certificate-section">
                <div className="resume-section">
                  <Image src={ResumeImg} className="img"></Image>
                  <p>
                    Gain Valuable Networking Opportunities and Build Your Resume
                  </p>
                </div>

                <div className="tenure-section">
                  <Image src={CertificateImg} className="img"></Image>
                  <p>Gain Certificate on Completion of Tenure</p>
                </div>
              </div>
            </div>

            <div className="right-section">
              <div className="inner-right-section">
                <h1>Who Should Apply?</h1>
                <div className="check-para-1">
                  <Image src={checkIcon}></Image>
                  <p className="p1">Semi Skilled Individuals with Intermediate to Advanced knowledge</p>
                </div>
                <div className="check-para-2">
                  <Image src={checkIcon}></Image>
                  <p className="p2">Looking for Hands-On Experience</p>
                </div>
                <div className="check-para-1">
                  <Image src={checkIcon}></Image>
                  <p className="p1">
                    Confident to test their readiness in the industry
                  </p>
                </div>
                <div className="check-para-1 para4">
                  <Image src={checkIcon}></Image>
                  <p className="p1 p4">
                    Want to know their fit in a corporate environment
                  </p>
                </div>
                <div className="charges-section">
                  <p>
                    Charges:<span>FREE</span>
                  </p>
                  <button><Link href="#form" style={{all:"unset"}} >Apply Now</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
