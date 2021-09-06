import React from 'react';
import { useForm, InertiaLink, Head } from '@inertiajs/inertia-react';

import logo from '../../../image/logo.svg';
import userForgotPassword from '../../../image/user-forgot-password.svg';
import emailSend from '../../../image/email-send.svg';

import Input from '../../Components/Input';

export default function ForgotPassword() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('password.email'));
  };

  return (
    <>
      <Head title="Recuperar senha" />
      <main>
        <section className="min-vh-100 d-flex align-items-center">
          {errors.success ? (
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
                      Enviamos um e-mail com um link para criação de nova senha.
                      Acesse sua caixa postal e realize os passos indicados.
                    </p>
                    <InertiaLink
                      href={route('login')}
                      className="fz-14 link-awe-blue-first text-decoration-none fw-bold"
                    >
                      Voltar ao login
                    </InertiaLink>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container py-4">
              <div className="row">
                <div className="col-12">
                  <div className="shadow p-5 px-lg-0 row m-0">
                    <div className="col-xl-4 col-lg-5 mx-lg-auto">
                      <form
                        onSubmit={handleSubmit}
                        className="d-flex flex-column align-items-start"
                      >
                        <img
                          src={logo}
                          alt=""
                          className="mb-4 w-100 img-fluid"
                        />
                        <h1 className="fz-24 mb-3">Recuperação de senha</h1>
                        <p className="fz-14 text-awe-gray-first mb-4">
                          Digite o seu e-mail que está cadatrado no e-pipa vip e
                          iremos enviar um link para criar sua nova senha.
                        </p>
                        <div className="d-flex flex-column mb-awe-12 w-100">
                          <Input
                            id="email"
                            placeholder="Digite seu e-mail"
                            label="E-mail"
                            value={data.email}
                            onChange={({ target: { value } }) =>
                              setData('email', value)
                            }
                            error={!processing ? errors.email : ''}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-awe-blue-first w-100 mt-awe-20 mb-3"
                          disabled={processing}
                        >
                          RECUPERAR SENHA
                        </button>
                        <InertiaLink
                          href={route('login')}
                          className="fz-14 link-awe-blue-first text-decoration-none fw-bold"
                        >
                          Voltar ao login
                        </InertiaLink>
                      </form>
                    </div>
                    <div className="col-5 d-lg-block d-none mx-auto">
                      <div className="h-100 d-flex align-items-center">
                        <img
                          src={userForgotPassword}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
