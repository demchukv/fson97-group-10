import axios from 'axios';
import { showAlert, getLoader } from './common';

const form = document.querySelector('.footer-form');

async function addEmail(email) {
  return axios.post('https://energyflow.b.goit.study/api/subscription', email);
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const userEmail = evt.currentTarget.email.value.trim().toLowerCase();
  const userInfo = {
    email: userEmail,
  };
  getLoader('show');
  addEmail(userInfo)
    .then(({ data, status }) => {
      if (status === 201) {
        getLoader('hide');
        showAlert(data.message, 'OK');
      }
    })
    .catch(error => {
      if (error.response.status === 409) {
        getLoader('hide');
        showAlert('Subscription already exists!');
      } else {
        showAlert(error.message, 'ERROR');
        getLoader('hide');
      }
    })
    .finally(form.reset());
}
