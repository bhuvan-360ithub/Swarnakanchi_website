import React, { useState } from 'react';
import WomenGoldRing from '@/assets/womens-gold-ring.jpg';
import WomenGoldEarring from '@/assets/womens-gold-earring.jpg';
import WomenGoldPendant from '@/assets/womens-gold-pendant.jpg';
import WomenGoldChain from '@/assets/womens-gold-chain.jpg';


import MenGoldRing from '@/assets/mens-gold-ring.jpg';
import MensGoldKada from '@/assets/mens-gold-kada.jpg';
import MensGoldChain from '@/assets/mens-gold-chain.jpg';
import MensGoldPedant from '@/assets/mens-gold-pendant.jpg';

import KidsGoldRing from '@/assets/kids-gold-ring.jpg';
import KidsGoldEarring from '@/assets/kids-gold-earring.jpg';
import KidsGoldBracelete from '@/assets/child-gold-bracelete.jpg';
import KidsGoldPedant from '@/assets/child-gold-pendant.jpg';

const imageData = {
  women: [WomenGoldRing, WomenGoldChain, WomenGoldPendant, WomenGoldEarring],
  men: [MenGoldRing, MensGoldPedant, MensGoldChain, MensGoldKada ],
  child: [KidsGoldRing, KidsGoldBracelete, KidsGoldPedant, KidsGoldEarring ],
};

const tabs = [
  { key: 'women', label: "Women's" },
  { key: 'men', label: "Men's" },
  { key: 'child', label: "Child's" },
];

const GenderCollectionTabs = () => {
  const [activeTab, setActiveTab] = useState('women');
  const images = imageData[activeTab];

  return (
    <section className="py-12 bg-white w-full overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-3">
          Shop By Gender
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center items-center mb-10">
        {tabs.map((tab, index) => (
          <div key={tab.key} className="flex items-center">
            <button
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 md:px-6 py-2 font-medium text-lg border-none focus:outline-none ${
                activeTab === tab.key
                  ? 'text-maroon border-b-2 border-maroon'
                  : 'text-gray-600'
              }`}
            >
              {tab.label}
            </button>
            {index < tabs.length - 1 && (
              <div className="h-6 w-px bg-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>

      {/* Image Layout */}
      <div className="max-w-[1440px] px-4 mx-auto">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-4 items-stretch">
          {/* Left */}
          <div className="h-[420px] overflow-hidden rounded relative group">
            <img
              src={images[0]}
              alt={`${activeTab} 1`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Center (stacked) */}
          <div className="flex flex-col gap-3">
            <div className="h-[204px] overflow-hidden rounded relative group">
              <img
                src={images[1]}
                alt={`${activeTab} 2`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="h-[204px] overflow-hidden rounded relative group">
              <img
                src={images[2]}
                alt={`${activeTab} 3`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right */}
          <div className="h-[420px] overflow-hidden rounded relative group">
            <img
              src={images[3]}
              alt={`${activeTab} 4`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Top row: Left + Right */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[200px] overflow-hidden rounded relative group">
              <img
                src={images[0]}
                alt={`${activeTab} 1`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="h-[200px] overflow-hidden rounded relative group">
              <img
                src={images[3]}
                alt={`${activeTab} 4`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Bottom: Center stacked */}
          <div className="flex flex-col gap-4">
            <div className="h-[200px] overflow-hidden rounded relative group">
              <img
                src={images[1]}
                alt={`${activeTab} 2`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="h-[200px] overflow-hidden rounded relative group">
              <img
                src={images[2]}
                alt={`${activeTab} 3`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionTabs;
