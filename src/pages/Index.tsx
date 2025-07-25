import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import FeaturedCollections from '@/components/FeaturedCollections';
import DiamondJewellerySection from '@/components/DiamondJewellerySection';
import EarringCollectionSection from '@/components/EarringCollectionSection';
import GoldJewellerySection from '@/components/GoldJewellerySection';
import GemstoneCollection from '@/components/GemstoneJewellerySection';
import PlatinumSection from '@/components/PlatinumJewellerySection';
import ShopByGender from '@/components/ShopByGender';
import WhyChooseUs from '@/components/WhyChooseUs';
import VideoGallery from '@/components/VideoGallery';
import TrendingProducts from '@/components/TrendingProductsSection';
import ProductShowcase from '@/components/ProductShowcase';
import GiftingJewellerySection from '@/components/GiftingJewellerySection';
import InstagramSection from '@/components/instagram'; // You can keep or remove your old Instagram component
import ElfsightInstagramFeed from "@/components/ElfsightInstagramFeed"; // Import the new Elfsight component
import StoreLocation from '@/components/StoreLocation';
// import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      <TopBar />
      <Header />
      <main>
        <HeroCarousel />
        <ProductShowcase />
        <DiamondJewellerySection />
        <GoldJewellerySection />
        <EarringCollectionSection />
        <GemstoneCollection />
        <PlatinumSection />
        <ShopByGender />
        <FeaturedCollections />
        <WhyChooseUs />
        <GiftingJewellerySection />
        <VideoGallery />
        <TrendingProducts />
        <InstagramSection />
        
        <ElfsightInstagramFeed />

        <StoreLocation />
        
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;