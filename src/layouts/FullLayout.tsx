import Footer from "../components/Footer"
import Header from "../components/Header"

const FullLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default FullLayout
