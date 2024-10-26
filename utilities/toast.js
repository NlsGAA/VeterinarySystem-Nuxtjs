import { useToast } from 'vue-toastification';

const toast = useToast();

export const showToast = ({message, status }) => {
  if (status === 'success') {
    toast.success(message);
  } else if (status === 'error') {
    toast.error(message);
  } else {
    toast.info(message || 'Informação');
  }
};