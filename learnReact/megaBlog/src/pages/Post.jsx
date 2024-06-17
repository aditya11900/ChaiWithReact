import React, {useState, useEffect} from 'react'
import parse from 'html-react-parser'
import {Link, useNavigate, useParams} from 'react-router-dom'
import appwriteService from '../appwrite/config'
import {Button, Container} from '../components'
import {useSelector} from 'react-redux'

function Post() {
    const {slug} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const user = useSelector((state)=>state.auth.userData);
const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(()=>{
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPost(post)
            }
            else{
                navigate('/')
            }
        })
    },[slug,navigate])

    const deletePost =()=> {
        appwriteService.deletePost(post.$id).then((status)=>{
            if(status){
                appwriteService.deleteFile(post.featuredImage);
                navigate('/')
            }
        });
    };
  return post ? (
    <div className='py-8'>
        <Container>
            <div className=' w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                <div className='w-full p-2'>
                    <img 
                    src = {appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className='rounded-xl'
                    />
                    {isAuthor && (
                        <div className='absolute top-6 right-6'>
                            <Link to={`/edit-post/${post.id}`}>
                            <Button
                            bgColor='bg-green-500'
                            className ='mr-3'>Edit</Button>
                            </Link>
                            <Button
                            bgColor='bg-red-500' 
                            onClick={deletePost}>Delete</Button>
                        </div>
                    )}
                    </div>
                </div>
        </Container>
    </div>
  ): null
}

export default Post