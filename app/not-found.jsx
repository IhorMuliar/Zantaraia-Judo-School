import Link from "next/link";

import "@/styles/scss/main.scss";

const NotFound = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="page-content bg-white">
          <section
            className="error-page"
            data-text="ERROR"
            style={{
              backgroundImage: "url(/images/background/bg-appointment.jpg)",
            }}
          >
            <div className="container">
              <div className="text-center">
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
        </main>
      </div>
    </>
  );
};

export default NotFound;
