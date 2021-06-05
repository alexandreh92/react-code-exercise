import { useQuery } from '~/hooks';
import DefaultLayout from '~/layouts/Default';

const Congressman = () => {
  const { chamber, search, congress } = useQuery();

  return (
    <DefaultLayout>
      <div>foo</div>
      <div>{JSON.stringify(chamber)}</div>
      <div>{search}</div>
    </DefaultLayout>
  );
};

export default Congressman;
