import { render, fireEvent } from '../test_utils';
import Pagination from '../../src/components/Pagination';

describe('Pagination', () => {
  const mockFnNext = jest.fn();
  const mockFnPrev = jest.fn();

  it('renders previous Text', () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onNextPress={mockFnNext}
        onPreviousPress={mockFnPrev}
        previousText="Previous Test"
      />,
    );

    expect(getByTestId('prevbutton')).toHaveTextContent('Previous Test');
  });

  it('renders next Text', () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onNextPress={mockFnNext}
        onPreviousPress={mockFnPrev}
        nextText="Next Test"
      />,
    );

    expect(getByTestId('nextbutton')).toHaveTextContent('Next Test');
  });

  it('fire next button click event', () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onNextPress={mockFnNext}
        onPreviousPress={mockFnPrev}
        nextText="Next Test"
      />,
    );

    const nextBtn = getByTestId('nextbutton');
    fireEvent.click(nextBtn);

    expect(mockFnNext).toHaveBeenCalled();
  });

  it('fire prev button click event', () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onNextPress={mockFnNext}
        onPreviousPress={mockFnPrev}
        nextText="Prev Test"
      />,
    );

    const prevBtn = getByTestId('prevbutton');
    fireEvent.click(prevBtn);

    expect(mockFnPrev).toHaveBeenCalled();
  });

  describe('when current page is first page', () => {
    it('disables prev button', () => {
      const { getByTestId } = render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onNextPress={mockFnNext}
          onPreviousPress={mockFnPrev}
        />,
      );

      expect(getByTestId('prevbutton')).toHaveAttribute('disabled', '');
    });
  });

  describe('when current page is last page', () => {
    it('disables next button', () => {
      const { getByTestId } = render(
        <Pagination
          currentPage={5}
          totalPages={5}
          onNextPress={mockFnNext}
          onPreviousPress={mockFnPrev}
        />,
      );

      expect(getByTestId('nextbutton')).toHaveAttribute('disabled', '');
    });
  });
});
