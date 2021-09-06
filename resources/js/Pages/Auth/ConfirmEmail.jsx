/* eslint-disable no-nested-ternary */

import React from 'react';
import { useForm, Head } from '@inertiajs/inertia-react';

import logo from '../../../image/logo.svg';
import emailSend from '../../../image/email-send.svg';

export default function ConfirmPassword() {
  const { post, processing, wasSuccessful } = useForm({});

  const handleResendEmailVerification = () => {
    post(route('verification.send'));
  };

  return (
    <>
      <Head title="Verifição de email" />
      <main>
        <section className="min-vh-100 d-flex align-items-center">
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-7 mx-auto">
                <div className="d-flex flex-column text-center">
                  <img src={logo} alt="" className="img-fluid w-100" />
                  <img
                    src={emailSend}
                    alt=""
                    className="mx-auto img-fluid mt-awe-80 mb-5"
                  />
                  <h2 className="text-awe-black-first fw-semibold fz-20 mb-awe-20">
                    Estamos quase lá.
                  </h2>
                  <p className="fz-14 text-awe-gray-first mb-5">
                    Enviamos um e-mail para confirmação de acesso. Acesse sua
                    caixa postal e realize os passos indicados.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-awe-blue-first mx-auto mt-awe-20 mb-3"
                    disabled={processing || wasSuccessful}
                    onClick={handleResendEmailVerification}
                  >
                    {processing
                      ? 'REENVIANDO EMAIL'
                      : wasSuccessful
                      ? 'EMAIL REENVIADO COM SUCESSO'
                      : 'REENVIAR EMAIL'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
