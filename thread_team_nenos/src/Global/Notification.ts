import { notification } from 'antd';

function error(params: { description: string, message: string, duration?: number }) {
  notification.destroy();
  notification.error({
    placement: 'topRight',
    description: params.description,
    message: params.message,
    duration: params.duration ? params.duration : 100,
  });
}

function success(params: { description: string, message: string, duration?: number }) {
  notification.destroy();
  notification.success({
    placement: 'topRight',
    description: params.description,
    message: params.message,
    duration: params.duration ? params.duration : 100,
  });
}

export default {
  error, success,
};
