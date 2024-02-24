// book/[id].js
import BookComponent from '@/components/BookComponent';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <BookComponent bookId={id}/>
    </div>
  );
};

export default Post;