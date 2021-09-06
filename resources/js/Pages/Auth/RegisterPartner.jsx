import React from 'react';
import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import PropTypes from 'prop-types';

import logo from '../../../image/logo.svg';
import register from '../../../image/register.svg';

import Input from '../../Components/Input';
import DataList from '../../Components/DataList';

export default function RegisterPartner({ users }) {
  const {
    data: partnerData,
    setData: partnerSetData,
    post: partnerPost,
    processing: partnerProcessing,
    errors: partnerErrors,
  } = useForm({
    name: '',
    service_type: '',
    responsible_name: '',
    phone_number: '',
    user_id: '',
    accepted_terms: false,
  });

  const partnerHandleSubmit = (e) => {
    e.preventDefault();
    partnerPost(route('register.partner'));
  };

  return (
    <>
      <Head title="Registrar" />
      <main>
        <section className="min-vh-100 d-flex align-items-center">
          {partnerErrors.success ? (
            <div className="container-fluid py-4">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-7 mx-auto">
                  <div className="d-flex flex-column text-center">
                    <img src={logo} alt="" className="img-fluid w-100 mb-5" />
                    <h2 className="text-awe-black-first fw-semibold fz-20 mb-awe-20">
                      Feito!
                    </h2>
                    <p className="fz-14 text-awe-gray-first mb-5">
                      O parceiro foi criado com sucesso, na próximo login ao
                      sistema, você irá ter acesso aos dados!
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
                        onSubmit={partnerHandleSubmit}
                        className="d-flex flex-column align-items-start"
                      >
                        <img
                          src={logo}
                          alt=""
                          className="mb-4 w-100 img-fluid"
                        />
                        <h1 className="fz-24 mb-3">Cadastro de parceiro</h1>
                        <p className="fz-14 text-awe-gray-first mb-4">
                          Preencha seus dados abaixo para se tornar um parceiro
                          do <strong>e-pipa vip</strong>.
                        </p>
                        <div className="d-flex flex-column gapy-awe-12 mb-awe-12 w-100">
                          <Input
                            id="partnerName"
                            placeholder="Digite o nome da sua empresa"
                            label="Empresa"
                            value={partnerData.name}
                            onChange={({ target: { value } }) =>
                              partnerSetData('name', value)
                            }
                            error={!partnerProcessing ? partnerErrors.name : ''}
                          />
                          <Input
                            id="service_type"
                            placeholder="Alimentação, entretenimento, passeios"
                            label="Tipo de Serviço"
                            value={partnerData.service_type}
                            onChange={({ target: { value } }) =>
                              partnerSetData('service_type', value)
                            }
                            error={
                              !partnerProcessing
                                ? partnerErrors.service_type
                                : ''
                            }
                          />
                          <Input
                            id="responsible_name"
                            placeholder="Digite o nome da pessoa será o responsável"
                            label="Nome do responsável"
                            value={partnerData.responsible_name}
                            onChange={({ target: { value } }) =>
                              partnerSetData('responsible_name', value)
                            }
                            error={
                              !partnerProcessing
                                ? partnerErrors.responsible_name
                                : ''
                            }
                          />
                          <DataList
                            id="user_id"
                            placeholder="Digite o nome da pessoa será o responsável"
                            label="Nome do usuário"
                            uid="id"
                            value={
                              partnerData.user_id
                                ? users.find(
                                    (user) =>
                                      user.id === Number(partnerData.user_id)
                                  )?.name
                                : ''
                            }
                            data={users}
                            onChange={({ target: { value } }) =>
                              partnerSetData('user_id', value)
                            }
                            error={
                              !partnerProcessing ? partnerErrors.user_id : ''
                            }
                          />
                          <Input
                            id="partnerPhoneNumber"
                            placeholder="Telefone de contato"
                            label="Telefone"
                            value={partnerData.phone_number}
                            onChange={({ target: { value } }) =>
                              partnerSetData('phone_number', value)
                            }
                            error={
                              !partnerProcessing
                                ? partnerErrors.phone_number
                                : ''
                            }
                          />
                          <div className="d-flex flex-column">
                            <div className="form-check">
                              <label
                                className="form-check-label fz-14 text-awe-gray-first"
                                htmlFor="accepted_terms"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={partnerData.accepted_terms}
                                  onChange={() =>
                                    partnerSetData(
                                      'accepted_terms',
                                      !partnerData.accepted_terms
                                    )
                                  }
                                  id="accepted_terms"
                                />
                                Aceitar termos de uso
                              </label>
                            </div>
                            {!partnerProcessing &&
                              partnerErrors.accepted_terms && (
                                <span className="fz-12 text-awe-red-first fw-semibold">
                                  {partnerErrors.accepted_terms}
                                </span>
                              )}
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-awe-blue-first w-100 mt-awe-20 mb-3"
                          disabled={partnerProcessing}
                        >
                          REALIZAR CADASTRO
                        </button>
                        <span className="fz-14">
                          Já é cadastrado?{' '}
                          <InertiaLink
                            href={route('login')}
                            className="link-awe-blue-first text-decoration-none fw-bold"
                          >
                            Voltar ao login
                          </InertiaLink>
                        </span>
                      </form>
                    </div>
                    <div className="col-5 d-lg-block d-none mx-auto">
                      <div className="h-100 d-flex align-items-center">
                        <img src={register} alt="" className="img-fluid" />
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

RegisterPartner.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};
