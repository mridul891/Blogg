import { Container } from '../component';
import PostForm from '../component/post-form/PostForm'
function AddPost() {
    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost;