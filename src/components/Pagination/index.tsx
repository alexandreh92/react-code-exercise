import { Container, Button } from './styles';

interface PaginationProps {
  onPreviousPress: React.MouseEventHandler<HTMLDivElement>;
  onNextPress: React.MouseEventHandler<HTMLDivElement>;
  previousText?: string;
  nextText?: string;
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  previousText = 'Previous',
  nextText = 'Next',
  onPreviousPress,
  onNextPress,
}: PaginationProps) => {
  return (
    <Container>
      <Button disabled={currentPage <= 1} onClick={onPreviousPress}>
        {previousText}
      </Button>
      <Button disabled={currentPage >= totalPages} onClick={onNextPress}>
        {nextText}
      </Button>
    </Container>
  );
};

export default Pagination;
