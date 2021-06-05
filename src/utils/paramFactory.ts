import history from '~/services/history';

const paramFactory = (name: string, value: string | undefined) => {
  const params = new URLSearchParams(window.location.search);

  if (value) {
    if (params.has(name)) {
      params.delete(name);
    }
    params.append(name, value);
  } else {
    params.delete(name);
  }

  history.push({ search: params.toString() });
};

export default paramFactory;
