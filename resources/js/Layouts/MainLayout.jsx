import { Head } from '@inertiajs/react';
import Header from '@/Components/welcome/Header';
import Footer from '@/Components/welcome/Footer';
import { CartProvider } from '@/Contexts/CartContext';

export default function Layout({ title, auth, children }) {


  return (
    <CartProvider>
      <Head title={title || " Automatizando online"} />

      <div className="relative flex flex-col min-h-screen dark:bg-[#0a0a0a] text-darkGray">
        <Header auth={auth} />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
