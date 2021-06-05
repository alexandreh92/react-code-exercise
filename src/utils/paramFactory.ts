import history from '~/services/history';

const paramFactory = (name: string, value: string | undefined) => {
  const params = new URLSearchParams();
  if (value) {
    params.append(name, value);
  } else {
    params.delete(name);
  }

  history.push({ search: params.toString() });
};

export default paramFactory;
