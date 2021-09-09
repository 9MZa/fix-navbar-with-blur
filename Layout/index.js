import NavigationBar from './NavigationBar'
import tw from 'twin.macro'

export default function Layout({ children }) {
    return (
        <Wrap>
            <NavigationBar />
            <div>{children}</div>
        </Wrap>
    )
}




const Wrap = tw.div`
    bg-gray-100
`