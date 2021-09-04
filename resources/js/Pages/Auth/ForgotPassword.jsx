import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

import logo from '../../../image/logo.svg';
import userForgotPassword from '../../../image/user-forgot-password.svg';

import Input from '../../Components/Input';

export default function ForgotPassword() {
  const { data, setData, post, processing, errors, wasSuccessful } = useForm({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('password.email'));
  };

  return (
    <main>
      <section className="min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shadow p-5 px-lg-0 row m-0">
                <div className="col-xl-4 col-lg-5 mx-lg-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column align-items-start"
                  >
                    <img src={logo} alt="" className="mb-5 w-100 img-fluid" />
                    <p className="fz-14 text-awe-gray-first mb-4">
                      Digite o seu e-mail que está cadatrado no e-pipa vip e
                      iremos enviar uma nova senha temporária para você.
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
                        error={errors.email}
                        isSuccess={wasSuccessful}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-awe-blue-first w-100 mt-awe-20 mb-3"
                      disabled={processing}
                    >
                      RECUPERAR SENHA
                    </button>
                    <a
                      href={route('login')}
                      className="fz-14 link-awe-blue-first text-decoration-none fw-bold"
                    >
                      Voltar ao login
                    </a>
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
      </section>
    </main>
  );
}
