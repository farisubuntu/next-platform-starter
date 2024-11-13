import EdgeFunctionExplainer from '@/app/blog/edge/explainer';

export const metadata = {
    title: 'In Australia'
};

export default function Page() {
    return (
        <>
            <h1>You are in Australia!</h1>
            <EdgeFunctionExplainer />
        </>
    );
}
