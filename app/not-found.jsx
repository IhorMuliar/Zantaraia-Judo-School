import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="page-wraper">
        <div className="page-content bg-white">
          <section
            className="error-page"
            data-text="ERROR"
            style={{
              backgroundImage: "url(/images/background/bg-appointment.jpg)",
            }}
          >
            <div className="container">
              <div className="inner-content text-center" data-text="">
                <div className="dz_error">404</div>
                <h2 className="error-head">
                  Ми вибачаємося. Але сторінка, яку ви шукаєте, не може бути
                  знайдено.
                </h2>
                <Link href={"/"} className="btn btn-primary btn-skew">
                  <span>Повернутись на головну</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NotFound;
