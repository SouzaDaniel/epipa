import React, { useEffect } from 'react';
import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Input from '../../Components/Input';

import imageHelper from '../../helpers/image';

export default function Login({ appEnvironment, status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  useEffect(() => {
    (() => status && toast.success(status))();
  }, []);

  return (
    <>
      <Head title="Login" />
      <main>
        <section className="min-vh-100 d-flex align-items-center">
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
                        src={imageHelper({ appEnvironment, path: 'logo.svg' })}
                        alt=""
                        className="mb-5 w-100 img-fluid"
                      />
                      <p className="fz-14 text-awe-gray-first mb-4">
                        Tenha acesso a um mundo de novidades e promoções para
                        você que é cliente do e-pipa.
                      </p>
                      <div className="d-flex flex-column gapy-awe-12 mb-awe-12 w-100">
                        <Input
                          id="email"
                          placeholder="Digite seu e-mail"
                          label="E-mail"
                          value={data.email}
                          onChange={({ target: { value } }) =>
                            setData('email', value)
                          }
                          error={errors.email}
                        />
                        <Input
                          id="password"
                          placeholder="******"
                          type="password"
                          label="Senha"
                          value={data.password}
                          onChange={({ target: { value } }) =>
                            setData('password', value)
                          }
                          error={errors.password}
                        />
                      </div>
                      <InertiaLink
                        href={route('password.request')}
                        className="ms-auto fz-14 link-awe-blue-first text-decoration-none"
                      >
                        Esqueceu sua senha?
                      </InertiaLink>
                      <button
                        type="submit"
                        className="btn btn-awe-blue-first w-100 mt-awe-20 mb-3"
                        disabled={processing}
                      >
                        {processing ? 'REALIZANDO LOGIN' : 'FAZER LOGIN'}
                      </button>
                      <span className="fz-14 text-awe-gray-first">
                        Ainda não está cadastrado?{' '}
                        <InertiaLink
                          href={route('register')}
                          className="ms-auto link-awe-blue-first text-decoration-none fw-bold"
                        >
                          Crie uma conta
                        </InertiaLink>
                      </span>
                    </form>
                  </div>
                  <div className="col-5 d-lg-block d-none mx-auto">
                    <div className="h-100 d-flex align-items-center">
                      <img
                        src={imageHelper({
                          appEnvironment,
                          path: 'user-secure.svg',
                        })}
                        alt=""
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

Login.propTypes = {
  appEnvironment: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
