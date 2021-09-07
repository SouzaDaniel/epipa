import React from 'react';
import { useForm, Head } from '@inertiajs/inertia-react';
import PropTypes from 'prop-types';

import Input from '../../Components/Input';

import imageHelper from '../../helpers/image';

export default function ResetPassword({ appEnvironment, token, email }) {
  const { data, setData, post, processing, errors } = useForm({
    email,
    password: '',
    password_confirmation: '',
    token,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('password.update'));
  };

  return (
    <>
      <Head title="Criar nova senha" />
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
                        src={imageHelper({
                          appEnvironment,
                          path: 'logo.svg',
                        })}
                        alt=""
                        className="mb-4 w-100 img-fluid"
                      />
                      <h1 className="fz-24 mb-3">Recuperação de senha</h1>
                      <p className="fz-14 text-awe-gray-first mb-4">
                        Digite sua nova senha e confirme-a!
                      </p>
                      <div className="d-flex flex-column mb-awe-12 gapy-awe-12 w-100">
                        <Input
                          id="email"
                          placeholder="Email"
                          label="Email solicitante"
                          disabled
                          value={data.email}
                          onChange={({ target: { value } }) =>
                            setData('email', value)
                          }
                          error={!processing ? errors.email : ''}
                        />
                        <Input
                          id="password"
                          placeholder="Senha"
                          label="Digite sua nova senha"
                          type="password"
                          value={data.password}
                          onChange={({ target: { value } }) =>
                            setData('password', value)
                          }
                          error={!processing ? errors.password : ''}
                        />
                        <Input
                          id="password_confirmation"
                          placeholder="Senha"
                          label="Confirme sua nova senha"
                          type="password"
                          value={data.password_confirmation}
                          onChange={({ target: { value } }) =>
                            setData('password_confirmation', value)
                          }
                          error={
                            !processing ? errors.password_confirmation : ''
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-awe-blue-first w-100 mt-awe-20 mb-3"
                        disabled={processing}
                      >
                        RECUPERAR SENHA
                      </button>
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

ResetPassword.propTypes = {
  appEnvironment: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
