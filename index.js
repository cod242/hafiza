import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [currency, setCurrency] = useState('TL');
  const [language, setLanguage] = useState('tr');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Döviz kuru efekti
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Döviz kurları güncellendi');
    }, 300000);
    return () => clearInterval(interval);
  }, [currency]);

  const Header = () => (
    <header className="fixed top-0 w-full bg-gray-900 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gold-500">HAFIZA</h1>
        <div className="flex space-x-4">
          <select 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <option value="TL">₺ TL</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
          </select>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );

  const LiveChat = () => (
    <div className={`fixed bottom-4 right-4 transition-all duration-300 ${isChatOpen ? 'w-80 h-96' : 'w-16 h-16'}`}>
      {isChatOpen ? (
        <div className="bg-gray-800 rounded-lg shadow-xl h-full p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Canlı Destek</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">
              ✕
            </button>
          </div>
          <div className="bg-gray-700 p-3 rounded mb-3">
            <p>Merhaba! Size nasıl yardımcı olabilirim?</p>
          </div>
          <input 
            type="text" 
            placeholder="Mesajınızı yazın..." 
            className="w-full bg-gray-700 p-2 rounded text-white"
          />
        </div>
      ) : (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-600 transition"
        >
          💬
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <Head>
        <title>Hafıza - Premium Alışveriş</title>
        <meta name="description" content="Lüks ürünlerde en iyi fiyatlar" />
      </Head>
      
      <Header />
      
      <main className="pt-20 container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Premium Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ürün kartları buraya gelecek */}
        </div>
      </main>
      
      <LiveChat />
    </div>
  );
}
