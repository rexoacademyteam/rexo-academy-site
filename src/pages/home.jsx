import MainBanner from "../components/home/MainBanner";
import Layout from "../components/layouts";

export default function HomePage() {
    return (
        <>
            {/* Helmet Heading */}

            <Layout name="main">
                <MainBanner />
            </Layout>
        </>
    )
}
