// book/[id].js
import BooksComponent from '@/components/BooksComponent';
import { useRouter } from 'next/router';

const Books = () => {
  const router = useRouter();
  const { pages } = router.query;

  return (
    <div>
      <BooksComponent sheet={pages}/>
    </div>
  );
};

export default Books;