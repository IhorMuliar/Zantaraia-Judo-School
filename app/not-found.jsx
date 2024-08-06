import Link from 'next/link';
import React from 'react';

import { BGAPPOINT } from '@/constants';

const NotFound = () => {
    return (
        <>
            <div className="page-wraper">
                <div className="page-content bg-white">		
                    <section className="error-page" data-text="ERROR" style={{backgroundImage: "url("+ BGAPPOINT+")"}}>
                        <div className="container">
                            <div className="inner-content text-center" data-text="">
                                <div className="dz_error">404</div>
                                <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                                <Link href={"/"} className="btn btn-primary btn-skew"><span>BACK TO HOMEPAGE</span></Link>
                            </div>
                        </div>
                    </section>
                
                </div>
            </div>
        </>
    );
};

export default NotFound;