import React from "react";
import Anja from "../../images/Anja-img.jpg";
import Ryno from "../../images/Ryno-img.jpg";

function Couple() {
  return (
    <section id="couple">
      <div className="couple-container container-xl">
        <div className="vector-title">
          <div className="vector-img"></div>
          <h1>Happy Couple</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 border-right">
            <div className="couple-wrap">
              <div className="couple-img">
                <img src={Anja} alt="Anja" />
              </div>
              <div className="couple-content">
                <h3>Anja De Beer</h3>
                <p>
                  Anja De Beer is a smart and beautiful woman with a passion for
                  netball. She enjoys watching rugby, particularly when the
                  Springboks are playing. Currently studying to become a
                  teacher, she aspires to be a loving and supportive mother to
                  her future children, with plans to have four: one son, one
                  daughter, and twin boys.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="couple-wrap">
              <div className="couple-img">
                <img src={Ryno} alt="Ryno" />
              </div>
              <div className="couple-content">
                <h3>Ryno Van der Walt</h3>
                <p>
                  Ryno Van der Walt is known for his dry humour and techy-nerd
                  persona, with a huge fascination for sport. A passionate
                  swimmer and rugby player, he strives to be the perfect partner
                  to his significant other. Already knows he will be an amazing
                  dad and husband (he wrote this).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
