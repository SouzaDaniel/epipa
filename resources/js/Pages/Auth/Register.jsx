import React from 'react';
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import PropTypes from 'prop-types';

import imageHelper from '../../helpers/image';

export default function Register({ appEnvironment }) {
  return (
    <>
      <Head title="Registrar" />
      <main>
        <div className="min-vh-100 d-flex align-items-center">
          <div className="container py-4">
            <div className="row">
              <div className="col-12">
                <div className="shadow p-5 px-lg-0 row m-0">
                  <div className="col-xl-5 col-lg-6 mx-lg-auto">
                    <form className="d-flex flex-column align-items-start">
                      <img
                        src={imageHelper({ appEnvironment, path: 'logo.svg' })}
                        alt=""
                        className="mb-awe-32 w-100 img-fluid"
                      />
                      <h1 className="fz-16 fw-semibold text-awe-black-first mb-4">
                        Escolha como você quer fazer parte da E-pipa VIP
                      </h1>
                      <div className="d-flex flex-column gapy-awe-20 w-100">
                        <InertiaLink
                          className="text-awe-gray-first bg-awe-light-first bg-awe-light-second-hover transition border-0 py-3 px-awe-32 rounded shadow-sm text-start text-decoration-none"
                          href={route('register.partner')}
                        >
                          Gostaria de ser{' '}
                          <span className="fw-bold text-awe-blue-first">
                            parceiro
                          </span>{' '}
                          e oferecer descontos
                        </InertiaLink>
                        <InertiaLink
                          className="text-awe-gray-first bg-awe-light-first bg-awe-light-second-hover transition border-0 py-3 px-awe-32 rounded shadow-sm text-start text-decoration-none"
                          href={route('register.user')}
                        >
                          Sou{' '}
                          <span className="fw-bold text-awe-blue-first">
                            hóspede
                          </span>{' '}
                          e quero ter descontos
                        </InertiaLink>
                      </div>
                    </form>
                  </div>
                  <div className="col-5 d-lg-block d-none mx-auto">
                    <div className="h-100 d-flex align-items-center">
                      <img
                        src={imageHelper({
                          appEnvironment,
                          path: 'register.svg',
                        })}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Register.propTypes = {
  appEnvironment: PropTypes.string.isRequired,
};
