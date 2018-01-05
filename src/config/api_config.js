
const ENV = {
  develop:{
    baseURL: 'http://ec2-34-228-27-54.compute-1.amazonaws.com',
  },
  stage:{
    baseURL: '',
  },
  local: {
    baseURL: 'http://localhost:3000',
  },
  production:{
    baseURL: '',
  }
};

export const host = ENV.develop.baseURL;

export const client = {
  id: "",
  secret: "",
};
