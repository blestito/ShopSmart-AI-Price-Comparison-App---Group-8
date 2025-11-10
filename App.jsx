import React, { useState } from "react";
import {
  Search,
  Home,
  TrendingUp,
  Star,
  Bell,
  User,
  ShoppingBag,
  DollarSign,
  Heart,
  History,
  Settings,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("register");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const products = [
    { 
      id: 1, 
      name: "Wireless Earbuds Pro",
      category: "Electronics",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      rating: 4.5,
      reviews: 234,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181",
      stores: [
        {name:'Shopee',price:1299,rating:4.8},
        {name:'Lazada',price:1450,rating:4.6},
        {name:'Amazon',price:1599,rating:4.7}
      ]
    },
    { 
      id: 2, 
      name: "Smart Watch Series 5",
      category: "Gadgets",
      price: 3499,
      originalPrice: 4999,
      discount: 30,
      rating: 4.7,
      reviews: 567,
      image: "https://i5.walmartimages.com/seo/Apple-Watch-Series-5-GPS-44mm-Space-Gray-Aluminum-Case-with-Black-Sport-Band-S-M-M-L_e432b519-20fe-40fe-9657-b1e2b4499112_1.c3f2fd5e454fde376899a10c2b6f2477.jpeg",
      stores: [
        {name:'Shopee',price:3499,rating:4.9},
        {name:'Lazada',price:3699,rating:4.7},
        {name:'Amazon',price:3850,rating:4.8}
      ]
    },
    { 
      id: 3, 
      name: "Laptop Stand Aluminum",
      category: "Gadgets",
      price: 599,
      originalPrice: 899,
      discount: 33,
      rating: 4.3,
      reviews: 123,
      image: "https://jgsuperstore.com/cdn/shop/products/Untitled-6_251936d4-53ff-4898-a9fd-b983b955b805.jpg?v=1663040604",
      stores: [
        {name:'Shopee',price:599,rating:4.5},
        {name:'Lazada',price:650,rating:4.3},
        {name:'Amazon',price:720,rating:4.4}
      ]
    },
    { 
      id: 4, 
      name: "Gaming Keyboard RGB",
      category: "Electronics",
      price: 2199,
      originalPrice: 3299,
      discount: 33,
      rating: 4.6,
      reviews: 432,
      image: "https://ecommerce.datablitz.com.ph/cdn/shop/products/1_5390f04c-1422-4584-93ca-d8a918d0be28.png?v=1736502288",
      stores: [
        {name:'Shopee',price:2199,rating:4.8},
        {name:'Lazada',price:2350,rating:4.5},
        {name:'Amazon',price:2499,rating:4.7}
      ]
    },
    { 
      id: 5, 
      name: "Cotton T-Shirt Basic",
      category: "Clothing",
      price: 299,
      originalPrice: 499,
      discount: 40,
      rating: 4.4,
      reviews: 789,
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467134/item/goods_00_467134_3x4.jpg?width=494",
      stores: [
        {name:'Shopee',price:299,rating:4.6},
        {name:'Lazada',price:320,rating:4.4},
        {name:'Amazon',price:350,rating:4.5}
      ]
    },
    { 
      id: 6, 
      name: "Denim Jeans Slim Fit",
      category: "Clothing",
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.5,
      reviews: 456,
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/463907/item/goods_62_463907_3x4.jpg?width=494",
      stores: [
        {name:'Shopee',price:899,rating:4.7},
        {name:'Lazada',price:950,rating:4.5},
        {name:'Amazon',price:999,rating:4.6}
      ]
    }
  ];



  const categories = [
    { name: "All Categories", icon: "🏪" },
    { name: "Electronics", icon: "💻" },
    { name: "Gadgets", icon: "📱" },
    { name: "Clothing", icon: "👕" },
  ];

  const toggleSaved = (productId) => {
    setSavedItems(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const TopHeader = ({ title = "ShopSmart", onBack, showSearch=false, showHeart=false }) => (
    <div className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between mb-3">
        { onBack ? <ArrowLeft size={22} className="cursor-pointer" onClick={onBack} /> : <div style={{width:22}}/> }
        <h3 className="text-lg font-semibold">{title}</h3>
        { showHeart
          ? <Heart size={22} className={`cursor-pointer ${selectedProduct && savedItems.includes(selectedProduct.id) ? 'fill-white text-white' : ''}`} onClick={() => selectedProduct && toggleSaved(selectedProduct.id)} />
          : <div style={{width:22}}/>
        }
      </div>

      { showSearch && (
        <div className="bg-white rounded-full px-4 py-2 flex items-center">
          <Search size={18} className="text-gray-400 mr-2" />
          <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="flex-1 outline-none text-gray-800 text-sm" placeholder="Search" />
        </div>
      )}
    </div>
  );

    const RegisterPage = () => (
      <div className="flex flex-col items-center justify-start min-h-full bg-white px-8 pt-16">

        {/* Logo */}
        <div className="w-28 h-28 bg-blue-500 rounded-3xl flex items-center justify-center mb-4 shadow-md">
          <ShoppingBag size={60} className="text-white" />
        </div>

        {/* Brand */}
        <h1 className="text-[30px] font-bold text-[#1e40af] leading-none mb-1">ShopSmart</h1>
        <p className="text-[11px] text-[#0077ff] tracking-wide mb-8">AI PRICE COMPARISON APP</p>

        {/* Title */}
        <h2 className="text-[15px] font-semibold text-gray-800 mb-1">Create an account</h2>
        <p className="text-[12px] text-gray-500 mb-6">Enter your email to sign up for this app</p>

        {/* Fields */}
        <input type="email" placeholder="email@domain.com"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 text-sm outline-none mb-3 focus:border-blue-500" />

        <input type="password" placeholder="password"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 text-sm outline-none mb-5 focus:border-blue-500" />

        {/* Continue */}
        <button onClick={() => setCurrentPage('login')}
          className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm font-semibold shadow-sm mb-4">
          Continue
        </button>

        {/* Sign in redirect */}
        <p className="text-[13px] text-gray-600 mb-4">
          Already have an account?{" "}
          <span onClick={() => setCurrentPage('login')} className="text-blue-500 cursor-pointer font-medium">Sign in</span>
        </p>

        {/* Divider */}
        <div className="w-full flex items-center gap-2 mb-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-400 text-xs">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google */}
        <button className="w-full bg-gray-100 border border-gray-300 py-3 rounded-lg flex items-center justify-center text-sm text-gray-700 shadow-sm mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-4 h-4 mr-2" />
          Continue with Google
        </button>

        {/* Apple */}
        <button className="w-full bg-gray-100 border border-gray-300 py-3 rounded-lg flex items-center justify-center text-sm text-gray-700 shadow-sm mb-8">
          <svg viewBox="0 0 384 512" className="w-4 h-4 mr-2 fill-black"><path d="..."/></svg>
          Continue with Apple
        </button>

        {/* Terms */}
        <p className="text-[11px] text-gray-400 text-center leading-4 w-[90%]">
          By clicking continue, you agree to our Terms of Service & Privacy Policy
        </p>

      </div>
    );

    const LoginPage = () => (
      <div className="flex flex-col items-center justify-start min-h-full bg-white px-8 pt-20">

        {/* Logo */}
        <div className="w-24 h-24 bg-blue-500 rounded-3xl flex items-center justify-center mb-6 shadow-md">
          <ShoppingBag size={52} className="text-white" />
        </div>

        {/* App Text */}
        <h1 className="text-[28px] font-bold text-gray-900 leading-none mb-1">
          ShopSmart
        </h1>
        <p className="text-[11px] text-gray-500 tracking-wide mb-8">
          AI-PRICE COMPARISON APP
        </p>

        {/* Input Fields */}
        <input
          type="email"
          placeholder="email@domain.com"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 text-[14px] outline-none mb-3 focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="password"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 text-[14px] outline-none mb-5 focus:border-blue-500"
        />

        {/* Continue Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="w-full bg-blue-500 text-white py-3 rounded-lg text-[14px] font-semibold shadow-sm mb-4"
        >
          Continue
        </button>

        {/* Already have an account */}
        <p className="text-[13px] text-gray-700 mb-6">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign in</span>
        </p>

        {/* Google Button */}
        <button className="w-full bg-white border border-gray-300 py-3 rounded-lg flex items-center justify-center text-[14px] text-gray-700 shadow-sm mb-3">
          <span className="mr-2">G</span> Continue with Google
        </button>

        {/* Apple Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center text-[14px] shadow-sm mb-8">
          Continue with Apple
        </button>

        {/* Terms */}
        <p className="text-[11px] text-gray-500 text-center leading-5 w-[90%]">
          By clicking continue, you agree to our Terms of{"\n"}Service & Privacy Policy
        </p>
      </div>
    );



  const HomePage = () => (
  <div className="pb-20 min-h-screen bg-[#F3F5F7]">
    {/* BLUE HEADER */}
    <div className="bg-gradient-to-b from-[#0B74F1] to-[#3A9BFF] px-6 pt-16 pb-20 rounded-b-[36px] shadow-md">
      {/* slight move to the right to match mockup */}
      <div className="ml-2">
        <h1 className="text-[34px] font-extrabold text-white leading-tight">ShopSmart</h1>
        <p className="text-white/90 text-[13px] mt-1">AI-Powered Price Comparison</p>
      </div>

      {/* Search bar inside the blue background and aligned under title */}
      <div className="relative mt-5">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>

        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-white text-gray-800 placeholder-gray-400 pl-10 pr-3 py-3 rounded-[24px] shadow-md text-[14px] outline-none"
        />
      </div>
    </div>

    {/* FEATURE GRID - spacing, rounded corners, white text */}
    <div className="grid grid-cols-2 gap-3 px-6 mt-6">
      <div
        className="rounded-[22px] h-[118px] p-4 text-white bg-gradient-to-br from-[#7A3EF6] to-[#5A2BDC] flex flex-col justify-between shadow-md"
        onClick={() => setCurrentPage('dashboard')}
      >
        {/* icon top-left */}
        <div className="flex items-start">
          <TrendingUp size={24} className="text-white" />
        </div>
        {/* text bottom-left */}
        <div className="">
          <div className="font-semibold text-[15px] leading-tight">Dashboard</div>
          <div className="text-[11px] text-white/85 leading-tight mt-0.5">View insights</div>
        </div>
      </div>

      <div
        className="rounded-[22px] h-[118px] p-4 text-white bg-gradient-to-br from-[#22C55E] to-[#128E3B] flex flex-col justify-between shadow-md"
        onClick={() => setCurrentPage('search')}
      >
        <div className="flex items-start">
          <Search size={24} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-[15px] leading-tight">Search</div>
          <div className="text-[11px] text-white/85 leading-tight mt-0.5">Compare prices</div>
        </div>
      </div>

      <div
        className="rounded-[22px] h-[118px] p-4 text-white bg-gradient-to-br from-[#F97316] to-[#C2410C] flex flex-col justify-between shadow-md"
        onClick={() => setCurrentPage('categories')}
      >
        <div className="flex items-start">
          <ShoppingBag size={24} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-[15px] leading-tight">Categories</div>
          <div className="text-[11px] text-white/85 leading-tight mt-0.5">Browse products</div>
        </div>
      </div>

      <div
        className="rounded-[22px] h-[118px] p-4 text-white bg-gradient-to-br from-[#EC4899] to-[#BE185D] flex flex-col justify-between shadow-md"
        onClick={() => setCurrentPage('profile')}
      >
        <div className="flex items-start">
          <User size={24} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-[15px] leading-tight">Profile</div>
          <div className="text-[11px] text-white/85 leading-tight mt-0.5">Your account</div>
        </div>
      </div>
    </div>

    {/* centered logo like in mockup */}
    <div className="flex justify-center mt-10 opacity-60">
      <ShoppingBag size={84} className="text-gray-400" />
    </div>
  </div>

  );

  const DashboardPage = () => (
  <div className="pb-20 min-h-screen" style={{backgroundColor: '#f5f5f5'}}>
    <TopHeader title="Dashboard" onBack={() => setCurrentPage('home')} showSearch />
    
    <div className="p-4 space-y-4">
      
      {/* Trending Products */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-lg">Trending Products</h4>
          <TrendingUp size={20} className="text-green-500"/>
        </div>

        {products.slice(0,3).map(p=>(
          <div 
            key={p.id} 
            className="flex items-center py-3 border-b last:border-b-0 cursor-pointer" 
            onClick={()=>{ setSelectedProduct(p); setCurrentPage('productDetails'); }}
          >
            {/* ✅ IMAGE SIZE UPDATED */}
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mr-3">
              <img 
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="font-semibold text-sm mb-1">{p.name}</div>
              <div className="text-xs text-gray-500">{p.category}</div>
              <div className="flex items-center mt-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs ml-1">{p.rating}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-green-600 font-bold">₱{p.price}</div>
              <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full mt-1">-{p.discount}%</div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-lg">AI Recommendations</h4>
          <Star size={20} className="text-yellow-400"/>
        </div>

        {products.slice(3,4).map(p=>(
          <div 
            key={p.id} 
            className="flex items-center cursor-pointer"
            onClick={()=>{ setSelectedProduct(p); setCurrentPage('productDetails'); }}
          >
            {/* ✅ IMAGE SIZE UPDATED */}
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mr-3">
              <img 
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="font-semibold text-sm mb-1">{p.name}</div>
              <div className="text-green-600 font-bold text-lg">₱{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


  const SearchPage = () => (
    <div className="pb-20 min-h-screen" style={{backgroundColor: '#f5f5f5'}}>
      <TopHeader title="Search & Compare" onBack={()=>setCurrentPage('home')} showSearch />
      
      <div className="p-4">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, i)=>(
            <button 
              key={i} 
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium shadow-sm ${selectedCategory === cat.name ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <h4 className="font-bold mb-3 text-lg">Search Results</h4>
        <div className="space-y-3">
          {products
            .filter(p => (selectedCategory === 'All Categories' || p.category === selectedCategory) && p.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(product=>(
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-sm p-4 cursor-pointer" 
              onClick={()=>{ setSelectedProduct(product); setCurrentPage('productDetails'); }}
            >
              <div className="flex">
                
                {/* ✅ IMAGE SIZE UPDATED HERE */}
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mr-3">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm mb-1">{product.name}</div>
                  <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                  <div className="flex items-center mb-2">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold ml-1">{product.rating}</span>
                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-green-600 font-bold text-lg">₱{product.price}</div>
                      <div className="text-xs text-gray-400 line-through">₱{product.originalPrice}</div>
                    </div>
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">-{product.discount}%</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductDetailsPage = () => {
    if (!selectedProduct) return null;
    return (
      <div className="pb-20 min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
        <TopHeader title="Product Details" onBack={() => setCurrentPage('search')} showHeart />

        <div className="p-4 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            
            {/* ✅ CLEAN CENTERED IMAGE DESIGN */}
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="font-bold text-xl mb-1">{selectedProduct.name}</h4>
            <div className="text-sm text-gray-500 mb-3">{selectedProduct.category}</div>
            <div className="flex items-center mb-4">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold ml-2">{selectedProduct.rating}</span>
              <span className="text-sm text-gray-400 ml-2">({selectedProduct.reviews} reviews)</span>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="text-green-600 font-bold text-3xl">₱{selectedProduct.price}</div>
              <div className="text-sm text-gray-400 line-through">₱{selectedProduct.originalPrice}</div>
            </div>

          </div>
        </div>
      </div>
    );
  };


  const CategoriesPage = () => (
    <div className="pb-20 min-h-screen" style={{backgroundColor: '#f5f5f5'}}>
      <TopHeader title="Categories" onBack={()=>setCurrentPage('home')} />
      
      <div className="p-4 space-y-3">
        {categories.map((cat, idx)=>(
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow" 
            onClick={() => { setCurrentPage('search'); setSearchQuery(''); setSelectedCategory(cat.name); }}
          >
            <div className="flex items-center">
              <div className="text-5xl mr-4">{cat.icon}</div>
              <div className="font-bold text-lg">{cat.name}</div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="pb-20 min-h-screen" style={{backgroundColor: '#f5f5f5'}}>
      <div className="bg-blue-500 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <ArrowLeft size={22} className="cursor-pointer" onClick={()=>setCurrentPage('home')} />
          <h3 className="text-lg font-semibold">Profile</h3>
          <div style={{width:22}} />
        </div>

        <div className="flex items-center">
          <div className="w-20 h-20 bg-white rounded-full mr-4 flex items-center justify-center">
            <User size={40} className="text-blue-500" />
          </div>
          <div>
            <div className="font-bold text-xl">Bles G. Tito</div>
            <div className="text-blue-100 text-sm">tito.bles@email.com</div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow" onClick={()=>setCurrentPage('saved')}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                <Heart size={20} className="text-red-500" />
              </div>
              <div className="font-semibold">Saved Items / Favorites</div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center mr-3">
                <Bell size={20} className="text-yellow-500" />
              </div>
              <div className="font-semibold">Price Alerts</div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mr-3">
                <DollarSign size={20} className="text-green-500" />
              </div>
              <div className="font-semibold">Best Deals</div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <Settings size={20} className="text-gray-500" />
              </div>
              <div className="font-semibold">Account Settings</div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mr-3">
                <History size={20} className="text-purple-500" />
              </div>
              <div className="font-semibold">Purchase History</div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <button 
          onClick={() => setCurrentPage('login')} 
          className="w-full bg-red-500 text-white py-4 rounded-2xl font-semibold mt-4 hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );

  const SavedItemsPage = () => (
    <div className="pb-20 min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <TopHeader title="Saved Items" onBack={() => setCurrentPage('profile')} showSearch />

      <div className="p-4">
        {savedItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={48} className="text-gray-300" />
            </div>
            <div className="text-gray-500 mb-6 text-lg">No saved items yet</div>
            <button onClick={() => setCurrentPage('search')} className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold">Start Shopping</button>
          </div>
        ) : (
          <div className="space-y-3">
            {products.filter(p => savedItems.includes(p.id)).map(p => (
              <div key={p.id} className="bg-white rounded-2xl shadow-sm p-4 flex items-center">
                
                {/* ✅ FIXED BUG & NEW SIZE */}
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 ml-3">
                  <div className="font-bold text-sm mb-1">{p.name}</div>
                  <div className="text-green-600 font-bold text-lg mb-2">₱{p.price}</div>
                  <button onClick={() => { setSelectedProduct(p); setCurrentPage('productDetails'); }} className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">View Details</button>
                </div>

                <Heart
                  size={22}
                  className="text-red-500 fill-red-500 cursor-pointer flex-shrink-0 ml-2"
                  onClick={() => toggleSaved(p.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );


  const renderPage = () => {
    switch (currentPage) {
      case "register": return <RegisterPage />;
      case "login": return <LoginPage />;
      case "home": return <HomePage />;
      case "dashboard": return <DashboardPage />;
      case "search": return <SearchPage />;
      case "productDetails": return <ProductDetailsPage />;
      case "categories": return <CategoriesPage />;
      case "profile": return <ProfilePage />;
      case "saved": return <SavedItemsPage />;
      default: return <LoginPage />;
    }
  };

  const BottomNav = () => {
    if (currentPage === "login" || currentPage === "register") return null;

    return (
      <div className="bottom-nav">
        <div className={`nav-item ${currentPage==='home' ? 'active' : ''}`} onClick={()=>setCurrentPage('home')}>
          <Home size={22} />
          <span>Home</span>
        </div>

        <div className={`nav-item ${currentPage==='search' ? 'active' : ''}`} onClick={()=>setCurrentPage('search')}>
          <Search size={22} />
          <span>Search</span>
        </div>

        <div className={`nav-item ${currentPage==='categories' ? 'active' : ''}`} onClick={()=>setCurrentPage('categories')}>
          <ShoppingBag size={22} />
          <span>Categories</span>
        </div>

        <div className={`nav-item ${currentPage==='profile' || currentPage==='saved' ? 'active' : ''}`} onClick={()=>setCurrentPage('profile')}>
          <User size={22} />
          <span>Profile</span>
        </div>
      </div>
    );
  };



  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="app-frame relative w-[390px] h-[844px] bg-white rounded-[32px] shadow-lg overflow-hidden">
        {renderPage()}
        <BottomNav />
      </div>
    </div>
  );


}

export default App;