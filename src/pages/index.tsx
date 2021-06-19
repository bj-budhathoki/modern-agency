import Layout from '@/Layout/Layout';
import { Banner, KeyFeature } from '@/containers/';
export default function Home(): JSX.Element {
    return (
        <Layout>
            <Banner />
            <KeyFeature />
        </Layout>
    );
}
