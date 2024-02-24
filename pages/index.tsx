import AmazonLetterSize from '@/components/AmazonASizeComponent';
import BookComponent from '@/components/BookComponent';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Sudoku App</h1>
      {/* <AmazonLetterSize/>
       */}
       <BookComponent/>
    </div>
  );
};

export default Home;