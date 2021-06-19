import Layout from '@/Layout/Layout';
import { Banner, KeyFeature, ServiceContainer } from '@/containers/';
export default function Home(): JSX.Element {
    return (
        <Layout>
            <Banner />
            <KeyFeature />
            <ServiceContainer />
        </Layout>
    );
}
