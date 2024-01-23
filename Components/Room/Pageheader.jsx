import React from 'react';

const PageHeader = ({ pageTitle }) => {
  return (
    <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-1.jpg)" }}>
      <div className="container-fluid page-header-inner py-5">
        <div className="container text-center pb-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            {pageTitle}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Hjem</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Sider</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                {pageTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
