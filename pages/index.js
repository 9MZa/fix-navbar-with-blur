import Layout from "../Layout"
import Image from 'next/image'
import tw from "twin.macro"

export default function index() {
  return (
    <Layout>
      <First>
        <h1 css={[tw`text-7xl font-bold text-gray-800 text-center py-10`]}>Some Image</h1>
        <Image src="/bg.jpeg" width="1280" height="960" alt="some image" />
        <Image src="/bg.jpeg" width="1280" height="960" alt="some image" />
        <Image src="/bg.jpeg" width="1280" height="960" alt="some image" />
      </First>
    </Layout>
  )
}

const First = tw.div`
  flex flex-col justify-center 
`