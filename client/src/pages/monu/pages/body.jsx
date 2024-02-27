import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./ProductsB"; // Assuming Products component is imported from a file

function Body() {
  return (
    <>
      <section
        className="py-3"
        style={{
          backgroundImage: 'url("images/background-pattern.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-blocks">
                <div className="banner-ad large bg-info block-1">
                  <div className="swiper main-swiper">
                    <div
                      className="swiper-wrapper"
                      style={{
                        color: "white",
                        backgroundImage:
                          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://sm.ign.com/ign_nordic/cover/p/persona-3-/persona-3-reload_c3ab.jpg")',
                      }}
                    >
                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories my-3">
                              Atlus &amp; Sega
                            </div>
                            <h3
                              className="display-4"
                              style={{ color: "#83C8DD" }}
                            >
                              Persona 3: Reload
                            </h3>
                            <p>
                              Persona 3 Reload: Enhanced version with new
                              features, quests, and content, enriching the
                              original experience.
                            </p>
                            <NavLink
                              to="#"
                              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
                            >
                              Shop Now
                            </NavLink>
                          </div>
                          <div className="img-wrapper col-md-5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                {/* <div
                  className="banner-ad bg-success-subtle block-2"
                  style={{
                    color: "#F0BC2C",
                    background:
                      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://freaking.news/wp-content/uploads/2023/09/Migliori-Giochi-JRPG-Game-Pass.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div
                        className="categories sale mb-3 pb-3"
                        style={{ color: "#EAECE7" }}
                      >
                        20% off
                      </div>
                      <h3 className="banner-title" style={{ color: "#EAECE7" }}>
                        All JRPG Games
                      </h3>
                      <NavLink
                        to="#"
                        className="d-flex align-items-center nav-link"
                      >
                        Shop Collection{" "}
                        <svg width={24} height={24}>
                          <use xlinkto="#arrow-right" />
                        </svg>
                      </NavLink>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  className="banner-ad bg-danger block-3"
                  style={{
                    color: "#F0BC2C",
                    background:
                      'url("https://m.economictimes.com/thumb/msid-104940359,width-1600,height-900,resizemode-4,imgsize-398056/gaming-accessories.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div
                        className="categories sale mb-3 pb-3"
                        style={{ color: "#EAECE7" }}
                      >
                        15% off
                      </div>
                      <h3 className="item-title" style={{ color: "#EAECE7" }}>
                        Accessories
                      </h3>
                      <NavLink
                        to="#"
                        className="d-flex align-items-center nav-link"
                      >
                        Shop Collection{" "}
                        <svg width={24} height={24}>
                          <use xlinkto="#arrow-right" />
                        </svg>
                      </NavLink>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-5 overflow-hidden">
        <div>
          <div className="row">
            <h2
              className="section-title"
              style={{
                color: "#E9EFE7",
                fontSize: "40px",
                textAlign: "left",
                paddingLeft: "50px",
              }}
            >
              Games
            </h2>
            <hr style={{ borderBottom: "3px solid white" }} />
          </div>

          <section className="py-5">
            <div style={{ paddingLeft: "50px" }}>
              <div className="row">
                <div>
                  <Products />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section> */}
    </>
  );
}

export default Body;
