import { useParams } from 'react-router-dom';

type Params = {
  id: string;
};

const Show = () => {
  const { id } = useParams<Params>();

  return <div>Hello {id}</div>;
};

export default Show;
