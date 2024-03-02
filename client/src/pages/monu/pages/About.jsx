import React from "react";
import "./About.css"; // Assuming you have an about-us.css file

function About() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="about-us.css" />
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script
        src="https://code.jquery.com/jquery-2.2.0.min.js"
        type="text/javascript"
      ></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

      <div className="ct-pageWrapper" id="ct-js-wrapper">
        <section
          className="story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding"
          id="section"
        >
          <div className="container text-center">
            <h2>WHAT DRIVES US</h2>
            <div className="col-md-8 col-md-offset-2">
              <div className="red-border">&nbsp;</div>
              <p className="ct-u-size22 ct-u-fontWeight300 marginTop40">
                At our core, we're fueled by a passion for gaming and a
                commitment to delivering unparalleled customer satisfaction.
                Every decision we make is driven by the desire to provide
                enthusiasts with top-notch products, exceptional service, and an
                unforgettable shopping experience. It's this dedication that
                propels us forward, ensuring that we remain at the forefront of
                the gaming industry.
              </p>
            </div>
          </div>
        </section>

        <section className="culture-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
          <div className="container">
            <div className="col-md-8 col-md-offset-2">
              <h2>About the Company</h2>
              <p className="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60">
                <br />
                Pixel-Cartel is more than just an e-commerce platform; it's a
                haven for gamers worldwide. With a dynamic blend of innovation
                and expertise, we curate a vast array of games and accessories,
                catering to every gaming need and desire. Our relentless
                dedication to quality, coupled with a deep understanding of the
                gaming community, defines us as a leading force in the industry.
                At Pixel-Cartel, we're not just selling products; we're crafting
                experiences, fostering camaraderie, and shaping the future of
                gaming culture, one pixel at a time.
              </p>
            </div>

            <a
              className="ct-u-marginTop60 btn btn-solodev-red-reversed btn-fullWidth-sm ct-u-size19"
              href="/"
            >
              Ready to Learn More?
            </a>
          </div>
        </section>

        <section className="customers-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
          <div className="container">
            <div className="col-md-8 col-md-offset-2">
              <h2>CUSTOMERS</h2>
              <h3>Trusted by some of the world’s leading Gaming Companies.</h3>
              <p className="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60 marginTop40">
                Customers rave about the seamless browsing experience on our
                e-commerce website for games and accessories, praising its
                intuitive interface and easy navigation. They appreciate the
                diverse selection of products and hassle-free checkout process,
                making shopping a delight every time.
              </p>
            </div>
          </div>
          <div className="clearfix">&nbsp;</div>
        </section>

        <main>
          <div className="container ct-u-paddingTop40 ct-u-paddingBottom100">
            <div className="row">
              <div className="col-md-12 ct-content">
                <section className="clients-home">
                  <div className="container">
                    <div className="clients-logos text-center"></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
