import React from 'react';
import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import PropTypes from 'prop-types';

import Input from '../../Components/Input';

import imageHelper from '../../helpers/image';

export default function RegisterUser({ appEnvironment }) {
  const {
    data: userData,
    setData: userSetData,
    post: userPost,
    processing: userProcessing,
    errors: userErrors,
  } = useForm({
    name: '',
    email: '',
    phone_number: '',
    password: '',
    password_confirmation: '',
  });

  const userHandleSubmit = (e) => {
    e.preventDefault();
    userPost(route('register'));
  };

  return (
    <>
      <Head title="Registrar" />
      <main>
        <div className="min-vh-100 d-flex align-items-center">
          <div className="container py-4">
            <div className="row">
              <div className="col-12">
                <div className="shadow p-5 px-lg-0 row m-0">
                  <div className="col-xl-4 col-lg-5 mx-lg-auto">
                    <form
                      onSubmit={userHandleSubmit}
                      className="d-flex flex-column align-items-start"
                    >
                      <img
                        src={imageHelper({ appEnvironment, path: 'logo.svg' })}
                        alt=""
                        className="mb-4 w-100 img-fluid"
                      />
                      <h1 className="fz-24 mb-3">Cadastro de hóspede</h1>
                      <p className="fz-14 text-awe-gray-first mb-4">
                        Preencha seus dados abaixo e comece a desfrutar as
                        vantagens de ter o <strong>e-pipa vip</strong>.
                      </p>
                      <div className="d-flex flex-column gapy-awe-12 mb-awe-12 w-100">
                        <Input
                          id="name"
                          placeholder="Digite seu nome e sobrenome"
                          label="Nome"
                          value={userData.name}
                          onChange={({ target: { value } }) =>
                            userSetData('name', value)
                          }
                          error={!userProcessing && userErrors.name}
                        />
                        <Input
                          id="email"
                          placeholder="E-mail"
                          label="E-mail"
                          value={userData.email}
                          onChange={({ target: { value } }) =>
                            userSetData('email', value)
                          }
                          error={!userProcessing && userErrors.email}
                        />
                        <Input
                          id="phone_number"
                          placeholder="Digite seu telefone celular"
                          label="Telefone"
                          value={userData.phone_number}
                          onChange={({ target: { value } }) =>
                            userSetData('phone_number', value)
                          }
                          error={!userProcessing && userErrors.phone_number}
                        />
                        <Input
                          id="password"
                          placeholder="Digite sua senha"
                          label="Senha"
                          type="password"
                          value={userData.password}
                          onChange={({ target: { value } }) =>
                            userSetData('password', value)
                          }
                          error={!userProcessing && userErrors.password}
                        />
                        <Input
                          id="password_confirmation"
                          placeholder="Confirme sua senha"
                          label="Confirmação de senha"
                          type="password"
                          value={userData.password_confirmation}
                          onChange={({ target: { value } }) =>
                            userSetData('password_confirmation', value)
                          }
                          error={
                            !userProcessing && userErrors.password_confirmation
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-awe-blue-first w-100 mt-awe-20 mb-3"
                        disabled={userProcessing}
                      >
                        REALIZAR CADASTRO
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

RegisterUser.propTypes = {
  appEnvironment: PropTypes.string.isRequired,
};
