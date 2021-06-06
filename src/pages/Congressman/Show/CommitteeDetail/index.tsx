import { Committee, SubCommittee } from '~/@types';

interface CommitteeDetailProps {
  data: Committee | SubCommittee;
}

const CommitteeDetail = ({ data }: CommitteeDetailProps) => {
  return (
    <>
      <h4>
        Title: <span>{data.title}</span>
      </h4>
      <h4>
        Side: <span>{data.side}</span>
      </h4>
      <h4>
        Code: <span>{data.code}</span>
      </h4>
      <h4>
        Rank in Party: <span>{data.rank_in_party}</span>
      </h4>
      <h4>
        Begin Date: <span>{data.begin_date}</span>
      </h4>
      <h4>
        End Date: <span>{data.end_date}</span>
      </h4>
    </>
  );
};

export default CommitteeDetail;
