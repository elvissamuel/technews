import Image from 'next/image'
import CategoriesList from '../components/CategoriesList'
import Post from '@/components/Post'

export default function Home() {
  const postData:Array<any> = []
  return (
    <>
    <CategoriesList />
      {postData && postData.length > 0 ? ( <Post />) : (<div>No Post to Display</div>)}
    </>
  )
}
