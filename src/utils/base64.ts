const encrypt = (string: string) => {
  return btoa(string);
};

const decrypt = (string: string) => {
  return atob(string);
};

export { encrypt, decrypt };
