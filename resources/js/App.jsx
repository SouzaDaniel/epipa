import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { createInertiaApp } from '@inertiajs/inertia-react';
import 'react-toastify/dist/ReactToastify.min.css';

import 'bootstrap';

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(
      <>
        <App {...props} />
        <ToastContainer />
      </>,
      el
    );
  },
  title: (title) => `${title} - Epipa`,
});
