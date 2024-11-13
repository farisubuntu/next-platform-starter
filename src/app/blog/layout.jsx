import '@/styles/blog_globals.css';
import { Footer } from '@/components/blog/footer';
import { Header } from '@/components/blog/header';
export default function BlogLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
            <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                <Header />
                <div className="grow">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
