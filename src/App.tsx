/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, ChevronDown, Home, Umbrella, Utensils, Flag, Leaf, ChevronLeft, Store, Bed, Palmtree, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [view, setView] = useState<'home' | 'category' | 'route-detail' | 'search-results' | 'sub-category'>('home');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentSubBanner, setCurrentSubBanner] = useState(0);
  const [currentEnjoyBanner, setCurrentEnjoyBanner] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState('广州市');
  const [selectedDistrict, setSelectedDistrict] = useState('从化区');
  const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);

  const locations = [
    { city: '广州市', districts: ['从化区'] },
    { city: '深圳市', districts: ['深汕特别合作区', '光明区'] },
    { city: '珠海市', districts: ['万山区', '斗门区', '香洲区'] },
    { city: '汕头市', districts: ['潮阳区', '濠江区'] },
    { city: '佛山市', districts: ['南海区', '高明区'] },
    { city: '韶关市', districts: ['乐昌市', '南雄市'] },
    { city: '河源市', districts: ['东源县', '紫金县', '源城区', '连平县'] },
    { city: '梅州市', districts: ['平远县', '兴宁市', '大埔县'] },
    { city: '惠州市', districts: ['龙门县'] },
    { city: '东莞市', districts: ['麻涌镇', '茶山镇'] },
    { city: '中山市', districts: [] },
    { city: '江门市', districts: ['开平市', '台山市', '鹤山市', '新会区'] },
    { city: '湛江市', districts: ['徐闻县'] },
    { city: '茂名市', districts: ['高州市', '信宜市'] },
    { city: '肇庆市', districts: ['德庆县', '封开县', '四会市', '高要区'] },
    { city: '清远市', districts: ['英德市', '连山壮族瑶族自治县', '连州市', '清城区', '佛冈县', '连南瑶族自治县'] },
    { city: '潮州市', districts: ['潮安区', '饶平县'] },
  ];

  const banners = [
    {
      title: '从化温泉',
      subtitle: '生态乡村游',
      image: 'https://qiniu.yuhuofei.cn/banner1.png',
    },
    {
      title: '汕头濠江',
      subtitle: '赏田园风光 享采摘乐趣',
      image: 'https://qiniu.yuhuofei.cn/banner2.png',
    },
    {
      title: '东莞市',
      subtitle: '美丽乡村观光游',
      image: 'https://qiniu.yuhuofei.cn/banner3.png',
    },
  ];

  const subCategoryBanners = selectedSubCategory?.banners || [
    'https://qiniu.yuhuofei.cn/b1.png',
    'https://qiniu.yuhuofei.cn/b2.png',
    'https://qiniu.yuhuofei.cn/b3.png',
  ];

  useEffect(() => {
    if (view !== 'home') return; // Stop banner rotation on other pages
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
      setCurrentEnjoyBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [view]);

  useEffect(() => {
    if (view !== 'sub-category') return;
    const timer = setInterval(() => {
      setCurrentSubBanner((prev) => (prev + 1) % subCategoryBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [view]);

  const categories = [
    /*
    { 
      name: '非遗民宿', 
      icon: Home, 
      gradient: 'from-[#FF9A8B] to-[#FF6A88]',
      shadow: 'shadow-red-200'
    },
    */
    { 
      name: '休闲度假', 
      icon: Umbrella, 
      gradient: 'from-[#00C6FF] to-[#0072FF]',
      shadow: 'shadow-blue-200'
    },
    { 
      name: '乡村美食', 
      icon: Utensils, 
      gradient: 'from-[#FFCC70] to-[#C850C0]',
      shadow: 'shadow-purple-200'
    },
    { 
      name: '红色印记', 
      icon: Flag, 
      gradient: 'from-[#FF512F] to-[#DD2476]',
      shadow: 'shadow-red-200'
    },
    { 
      name: '生态文化', 
      icon: Leaf, 
      gradient: 'from-[#11998E] to-[#38EF7D]',
      shadow: 'shadow-green-200'
    },
  ];

  const travelCards = [
    {
      title: '香洲海岛休闲旅居游',
      image: 'https://qiniu.yuhuofei.cn/lx1.png',
    },
    {
      title: '连平县 春日乡村观花游',
      image: 'https://qiniu.yuhuofei.cn/lx2.png',
    },
    {
      title: '大埔县 “品客家文化，赏田园风光”秋冬之旅',
      image: 'https://qiniu.yuhuofei.cn/lx3.png',
    },
    {
      title: '开平市侨乡休闲文化体验游',
      image: 'https://qiniu.yuhuofei.cn/lx4.png',
    },
  ];

  const searchTravelCards = [
    {
      title: '从化温泉生态乡村游',
      image: 'https://qiniu.yuhuofei.cn/js-lx1.png',
    },
    {
      title: '小镇休闲文化游',
      image: 'https://qiniu.yuhuofei.cn/js-lx2.png',
    },
    {
      title: '生态从化休闲农业游',
      image: 'https://qiniu.yuhuofei.cn/js-lx3.png',
    },
  ];

  const categoryTravelCards = [
    {
      title: '从化温泉生态乡村游',
      image: 'https://qiniu.yuhuofei.cn/jg-1.png',
    },
    {
      title: '深汕特别合作区生态艺术文化休闲游',
      image: 'https://qiniu.yuhuofei.cn/jg-2.png',
    },
    {
      title: '桂山岛乡村生态文化游',
      image: 'https://qiniu.yuhuofei.cn/jg-3.png',
    },
  ];

  const detailFunctions = [
    { 
      name: '风景名胜', 
      icon: Palmtree, 
      showPrice: false,
      banners: ['https://qiniu.yuhuofei.cn/b1.png', 'https://qiniu.yuhuofei.cn/b2.png', 'https://qiniu.yuhuofei.cn/b3.png'],
      title: '石门国家森林公园',
      description: '广东石门国家森林公园位于广东省广州市从化区东北部，总面积2636公顷，森林覆盖率达98.9%。公园里有华南地区仅存的原始次生林1.6万亩，被称为北回归线的一片绿洲，海拔1210米高的天堂顶为广州地区高山之最。',
      listItems: [
        { title: '石门香雪', desc: '石门国家森林公园内著名的景观，每年冬季梅花盛开，如雪压枝头。', img: 'https://picsum.photos/seed/landscape-scenery1/200/200' },
        { title: '红叶观赏区', desc: '广州地区著名的红叶观赏点，秋冬季节层林尽染。', img: 'https://picsum.photos/seed/shimen2/200/200' },
        { title: '天堂顶', desc: '广州地区最高峰，登高远眺，云海翻腾。', img: 'https://picsum.photos/seed/shimen3/200/200' }
      ]
    },
    { 
      name: '非遗民俗', 
      icon: Flag, 
      showPrice: true,
      banners: ['https://qiniu.yuhuofei.cn/bb1.png', 'https://qiniu.yuhuofei.cn/bb2.png', 'https://qiniu.yuhuofei.cn/bb3.png'],
      title: '莲麻小镇',
      description: '莲麻小镇位于广州最北端、流溪河源头。2015年纳入广州市首批特色小镇建设试点，依托东江纵队革命遗址 and 生态资源，形成集红色研学、生态旅游、客家文化于一体的乡村振兴示范区。',
      listItems: [
        { title: '东江纵队从化大队旧址', desc: '作为抗日战争时期东江纵队的重要活动据点，旧址保留当年的枪械修理所、交通站等遗迹，是追寻红色足迹、重温革命历史的爱国主义教育基地。', img: 'https://qiniu.yuhuofei.cn/bblx1.png' },
        { title: '莲麻古村', desc: '依山傍水的客家古村落，青砖黛瓦、石板巷道，保留着原汁原味的岭南乡村风貌。村中古树参天，溪水潺潺，尽显田园诗意。', img: 'https://qiniu.yuhuofei.cn/bblx2.png' },
        { title: '莲麻酒坊', desc: '传承百年的古法酿酒作坊，以当地优质山泉 and 糯米酿制客家黄酒，酒香醇厚。游客可现场体验酿酒过程，品尝地道客家米酒。', img: 'https://qiniu.yuhuofei.cn/bblx3.png' }
      ]
    },
    { 
      name: '特色农产品', 
      icon: Store, 
      showPrice: false,
      banners: ['https://qiniu.yuhuofei.cn/b1.png', 'https://qiniu.yuhuofei.cn/b2.png', 'https://qiniu.yuhuofei.cn/b3.png'],
      title: '石门国家森林公园',
      description: '广东石门国家森林公园位于广东省广州市从化区东北部，总面积2636公顷，森林覆盖率达98.9%。公园里有华南地区仅存的原始次生林1.6万亩，被称为北回归线的一片绿洲，海拔1210米高的天堂顶为广州地区高山之最。',
      listItems: [
        { title: '石门香雪', desc: '石门国家森林公园内著名的景观，每年冬季梅花盛开，如雪压枝头。', img: 'https://picsum.photos/seed/landscape-scenery1/200/200' },
        { title: '红叶观赏区', desc: '广州地区著名的红叶观赏点，秋冬季节层林尽染。', img: 'https://picsum.photos/seed/shimen2/200/200' },
        { title: '天堂顶', desc: '广州地区最高峰，登高远眺，云海翻腾。', img: 'https://picsum.photos/seed/shimen3/200/200' }
      ]
    },
    { 
      name: '地方美食', 
      icon: Utensils, 
      showPrice: true,
      banners: ['https://qiniu.yuhuofei.cn/bb1.png', 'https://qiniu.yuhuofei.cn/bb2.png', 'https://qiniu.yuhuofei.cn/bb3.png'],
      title: '莲麻小镇',
      description: '莲麻小镇位于广州最北端、流溪河源头。2015年纳入广州市首批特色小镇建设试点，依托东江纵队革命遗址 and 生态资源，形成集红色研学、生态旅游、客家文化于一体的乡村振兴示范区。',
      listItems: [
        { title: '东江纵队从化大队旧址', desc: '作为抗日战争时期东江纵队的重要活动据点，旧址保留当年的枪械修理所、交通站等遗迹，是追寻红色足迹、重温革命历史的爱国主义教育基地。', img: 'https://qiniu.yuhuofei.cn/bblx1.png' },
        { title: '莲麻古村', desc: '依山傍水的客家古村落，青砖黛瓦、石板巷道，保留着原汁原味的岭南乡村风貌。村中古树参天，溪水潺潺，尽显田园诗意。', img: 'https://qiniu.yuhuofei.cn/bblx2.png' },
        { title: '莲麻酒坊', desc: '传承百年的古法酿酒作坊，以当地优质山泉和糯米酿制客家黄酒，酒香醇厚。游客可现场体验酿酒过程，品尝地道客家米酒。', img: 'https://qiniu.yuhuofei.cn/bblx3.png' }
      ]
    },
    { 
      name: '民宿酒店', 
      icon: Bed, 
      showPrice: true,
      banners: ['https://qiniu.yuhuofei.cn/bb1.png', 'https://qiniu.yuhuofei.cn/bb2.png', 'https://qiniu.yuhuofei.cn/bb3.png'],
      title: '莲麻小镇',
      description: '莲麻小镇位于广州最北端、流溪河源头。2015年纳入广州市首批特色小镇建设试点，依托东江纵队革命遗址 and 生态资源，形成集红色研学、生态旅游、客家文化于一体的乡村振兴示范区。',
      listItems: [
        { title: '东江纵队从化大队旧址', desc: '作为抗日战争时期东江纵队的重要活动据点，旧址保留当年的枪械修理所、交通站等遗迹，是追寻红色足迹、重温革命历史的爱国主义教育基地。', img: 'https://qiniu.yuhuofei.cn/bblx1.png' },
        { title: '莲麻古村', desc: '依山傍水的客家古村落，青砖黛瓦、石板巷道，保留着原汁原味的岭南乡村风貌。村中古树参天，溪水潺潺，尽显田园诗意。', img: 'https://qiniu.yuhuofei.cn/bblx2.png' },
        { title: '莲麻酒坊', desc: '传承百年的古法酿酒作坊，以当地优质山泉和糯米酿制客家黄酒，酒香醇厚。游客可现场体验酿酒过程，品尝地道客家米酒。', img: 'https://qiniu.yuhuofei.cn/bblx3.png' }
      ]
    },
    { 
      name: '美丽乡村', 
      icon: Leaf, 
      showPrice: true,
      banners: ['https://qiniu.yuhuofei.cn/bb1.png', 'https://qiniu.yuhuofei.cn/bb2.png', 'https://qiniu.yuhuofei.cn/bb3.png'],
      title: '莲麻小镇',
      description: '莲麻小镇位于广州最北端、流溪河源头。2015年纳入广州市首批特色小镇建设试点，依托东江纵队革命遗址 and 生态资源，形成集红色研学、生态旅游、客家文化于一体的乡村振兴示范区。',
      listItems: [
        { title: '东江纵队从化大队旧址', desc: '作为抗日战争时期东江纵队的重要活动据点，旧址保留当年的枪械修理所、交通站等遗迹，是追寻红色足迹、重温革命历史的爱国主义教育基地。', img: 'https://qiniu.yuhuofei.cn/bblx1.png' },
        { title: '莲麻古村', desc: '依山傍水的客家古村落，青砖黛瓦、石板巷道，保留着原汁原味的岭南乡村风貌。村中古树参天，溪水潺潺，尽显田园诗意。', img: 'https://qiniu.yuhuofei.cn/bblx2.png' },
        { title: '莲麻酒坊', desc: '传承百年的古法酿酒作坊，以当地优质山泉 and 糯米酿制客家黄酒，酒香醇厚。游客可现场体验酿酒过程，品尝地道客家米酒。', img: 'https://qiniu.yuhuofei.cn/bblx3.png' }
      ]
    },
  ];

  const handleCategoryClick = (cat: any) => {
    setSelectedCategory(cat);
    setView('category');
  };

  const handleRouteClick = (route: any) => {
    setSelectedRoute(route);
    setView('route-detail');
  };

  const handleSubCategoryClick = (func: any) => {
    setSelectedSubCategory(func);
    setCurrentSubBanner(0);
    setView('sub-category');
  };

  const handleBack = () => {
    if (view === 'sub-category') {
      setView('route-detail');
      setSelectedSubCategory(null);
    } else if (view === 'route-detail') {
      if (selectedCategory) {
        setView('category');
      } else {
        setView('home');
      }
      setSelectedRoute(null);
    } else {
      setView('home');
      setSelectedCategory(null);
      setSelectedRoute(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex justify-center items-center sm:py-6">
      <div className="w-full max-w-[430px] h-screen sm:h-[844px] sm:max-h-[95vh] bg-[#F7F7F7] font-sans text-[#333] shadow-2xl relative flex flex-col sm:rounded-[48px] sm:border-[12px] sm:border-[#1A1A1A] overflow-hidden">
        {/* Phone Notch */}
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1A1A] rounded-b-2xl z-[60]"></div>
        
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center bg-white px-4 py-3 pt-4 sm:pt-6 border-b border-[#EEEEEE] shrink-0">
          {view !== 'home' && (
            <button 
              onClick={handleBack}
              className="absolute left-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          <h1 className="flex-1 text-center text-lg font-bold">
            {view === 'category' ? `生态文化游 · ${selectedCategory?.name}` : view === 'route-detail' ? '路线详情' : view === 'search-results' ? '搜索结果' : view === 'sub-category' ? selectedSubCategory?.name : '粤美乡村'}
          </h1>
        </header>

        <main className="px-4 pb-10 flex-1 overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search Bar Section */}
              <div className="mt-4 flex items-center space-x-3">
                <div 
                  onClick={() => setIsLocationPickerOpen(true)}
                  className="flex items-center space-x-1 bg-[#EDEDED] rounded-full px-3 py-1.5 text-sm cursor-pointer active:opacity-70"
                >
                  <span className="max-w-[100px] truncate">
                    {selectedCity.replace('市', '')}·{selectedDistrict || '全部'}
                  </span>
                  <ChevronDown size={14} />
                </div>
                <div 
                  onClick={() => setView('search-results')}
                  className="flex-1 flex items-center space-x-2 bg-[#F2F2F2] rounded-full px-4 py-1.5 text-[#999] cursor-pointer"
                >
                  <Search size={16} />
                  <span className="text-sm">搜索内容</span>
                </div>
              </div>

              {/* Banner / Carousel */}
              <div className="mt-6 relative overflow-hidden rounded-2xl aspect-[16/9] shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentBanner}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={banners[currentBanner].image} 
                      alt={banners[currentBanner].title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <motion.h2 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold mb-1"
                      >
                        {banners[currentBanner].title}
                      </motion.h2>
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xs text-white/80 font-light tracking-wide"
                      >
                        {banners[currentBanner].subtitle}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 right-6 flex space-x-1.5">
                  {banners.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentBanner === idx ? 'w-4 bg-white' : 'w-1 bg-white/40'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Category Grid */}
              <div className="mt-8 flex justify-between items-start">
                {categories.map((cat, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleCategoryClick(cat)}
                    className="flex flex-col items-center space-y-2.5 w-[18%] outline-none"
                  >
                    <div className={`relative w-full aspect-square rounded-[22px] flex items-center justify-center bg-gradient-to-br ${cat.gradient} ${cat.shadow} shadow-lg transition-all duration-300 active:scale-90 active:rotate-3 hover:shadow-xl`}>
                      <div className="absolute inset-0 rounded-[22px] border border-white/30 pointer-events-none"></div>
                      <div className="text-white drop-shadow-md">
                        <cat.icon size={26} strokeWidth={2.5} />
                      </div>
                    </div>
                    <span className="text-[11px] text-[#444] font-bold tracking-tight whitespace-nowrap">{cat.name}</span>
                  </button>
                ))}
              </div>

              {/* Boutique Routes Title */}
              <div className="mt-10 mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#333] flex items-center">
                  <div className="w-1 h-5 bg-[#11998E] rounded-full mr-2"></div>
                  精品路线
                </h2>
                <span className="text-xs text-[#999]">发现更多美好</span>
              </div>

              {/* Travel Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {travelCards.map((card, idx) => (
                  <motion.div 
                    key={idx}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRouteClick(card)}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] p-3 cursor-pointer"
                  >
                    <div className="w-full aspect-square bg-[#D1D1D1] rounded-xl overflow-hidden mb-3">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-sm mb-1 leading-tight">{card.title}</h3>
                  </motion.div>
                ))}
              </div>

              {/* Enjoy Guangdong Countryside Section */}
              <div className="mt-10 mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#333] flex items-center">
                  <div className="w-1 h-5 bg-[#11998E] rounded-full mr-2"></div>
                  尽享粤乡
                </h2>
                <span className="text-xs text-[#999]">发现更多美好</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] shadow-xl mb-8">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentEnjoyBanner}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={banners[currentEnjoyBanner].image} 
                      alt={banners[currentEnjoyBanner].title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <motion.h2 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold mb-1"
                      >
                        {banners[currentEnjoyBanner].title}
                      </motion.h2>
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xs text-white/80 font-light tracking-wide"
                      >
                        {banners[currentEnjoyBanner].subtitle}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 right-6 flex space-x-1.5">
                  {banners.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentEnjoyBanner === idx ? 'w-4 bg-white' : 'w-1 bg-white/40'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'category' && (
            <motion.div
              key="category"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Static Banner */}
              <div className="mt-6 relative overflow-hidden rounded-2xl aspect-[16/9] shadow-xl">
                <div className="absolute inset-0">
                  <img 
                    src="https://qiniu.yuhuofei.cn/jg-banner-1.png" 
                    alt="Category Banner" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-xl font-bold mb-1">在自然与人文的交汇处</h2>
                    <p className="text-xs text-white/80 font-light tracking-wide">感受生态之美，寻味乡土之韵</p>
                  </div>
                </div>
              </div>

              {/* Travel Cards Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {categoryTravelCards.map((card, idx) => (
                  <motion.div 
                    key={idx}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRouteClick(card)}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] p-3 cursor-pointer"
                  >
                    <div className="w-full aspect-square bg-[#D1D1D1] rounded-xl overflow-hidden mb-3">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-sm mb-1 leading-tight">{card.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'sub-category' && (
            <motion.div
              key="sub-category"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sub-category Banner Carousel */}
              <div className="mt-4 relative overflow-hidden rounded-2xl aspect-[16/9] bg-[#E5E7EB] shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentSubBanner}
                    src={subCategoryBanners[currentSubBanner]} 
                    alt="Sub-category Banner" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1.5">
                  {subCategoryBanners.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSubBanner ? 'bg-white w-4' : 'bg-white/40'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Description Section */}
              {selectedSubCategory?.title && (
                <div className="mt-6 bg-white rounded-2xl p-5 shadow-sm border border-[#F0F0F0]">
                  <h2 className="text-xl font-bold text-[#333] mb-3">{selectedSubCategory.title}</h2>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {selectedSubCategory.description}
                  </p>
                </div>
              )}

              {/* Items List */}
              <div className="mt-6 space-y-4">
                {(selectedSubCategory?.listItems || [1, 2, 3]).map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-2xl p-3 flex space-x-4 shadow-sm">
                    <div className="w-24 h-24 bg-[#F3F4F6] rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.img || `https://picsum.photos/seed/${selectedSubCategory?.name}-${item}/200/200`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        alt={item.title || "item"}
                      />
                    </div>
                    <div className="flex-1 py-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-base leading-tight">{item.title || `标题 ${item}`}</h4>
                        {selectedSubCategory?.showPrice && (
                          <p className="text-[#FF4D4F] text-xs font-bold mt-1">
                            全票 40元、半票 20元
                          </p>
                        )}
                      </div>
                      <p className="text-[#999] text-xs line-clamp-2">
                        {item.desc || '一段文本内容一段文本内容一段文本内容一段文本内容一段文本内容一段文本内容'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'search-results' && (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search Bar Section (Same as Category) */}
              <div className="mt-4 flex items-center space-x-3">
                <div 
                  onClick={() => setIsLocationPickerOpen(true)}
                  className="flex items-center space-x-1 bg-[#EDEDED] rounded-full px-3 py-1.5 text-sm cursor-pointer active:opacity-70"
                >
                  <span className="max-w-[100px] truncate">
                    {selectedCity.replace('市', '')}·{selectedDistrict || '全部'}
                  </span>
                  <ChevronDown size={14} />
                </div>
                <div className="flex-1 flex items-center space-x-2 bg-[#F2F2F2] rounded-full px-4 py-1.5 text-[#999]">
                  <Search size={16} />
                  <span className="text-sm">搜索内容</span>
                </div>
              </div>

              {/* Static Banner */}
              <div className="mt-6 relative overflow-hidden rounded-2xl aspect-[16/9] shadow-xl">
                <div className="absolute inset-0">
                  <img 
                    src="https://qiniu.yuhuofei.cn/js-banner-1.png" 
                    alt="Search Banner" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-xl font-bold mb-1">在自然与人文的交汇处</h2>
                    <p className="text-xs text-white/80 font-light tracking-wide">感受生态之美，寻味乡土之韵</p>
                  </div>
                </div>
              </div>

              {/* Travel Cards Grid (Same as Category) */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {searchTravelCards.map((card, idx) => (
                  <motion.div 
                    key={idx}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRouteClick(card)}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] p-3 cursor-pointer"
                  >
                    <div className="w-full aspect-square bg-[#D1D1D1] rounded-xl overflow-hidden mb-3">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-sm mb-1 leading-tight">{card.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'route-detail' && (
            <motion.div
              key="route-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl mt-4 p-4 shadow-sm min-h-[80vh]"
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#E5E7EB]">
                <img 
                  src={selectedRoute?.image} 
                  alt={selectedRoute?.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Info */}
              <div className="mt-6 space-y-3">
                <h2 className="text-xl font-bold text-[#333]">{selectedRoute?.title}</h2>
                <p className="text-[#666] text-sm leading-relaxed">
                  藏于青山绿水之间，泡一池暖汤，枕一夜清风。漫步荔林深处，拾味田园烟火，在温泉氤氲中慢下来，遇见向往的田园生活
                </p>
                <p className="text-[#999] text-xs">
                  线路定位地址
                </p>
              </div>

              {/* Category Icons (Tags) */}
              <div className="mt-10 grid grid-cols-3 gap-y-6 gap-x-2 px-2">
                {detailFunctions.map((func, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleSubCategoryClick(func)}
                    className="flex flex-col items-center space-y-2 cursor-pointer active:opacity-70"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F3F4F6] text-[#9CA3AF]">
                      <func.icon size={24} />
                    </div>
                    <span className="text-[11px] text-[#666] text-center leading-tight whitespace-nowrap">{func.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Location Picker Modal */}
      <AnimatePresence>
        {isLocationPickerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLocationPickerOpen(false)}
              className="fixed inset-0 bg-black/40 z-[100] sm:rounded-[48px]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-[101] rounded-t-[32px] max-h-[80vh] flex flex-col sm:max-w-[430px] sm:left-1/2 sm:-translate-x-1/2 sm:bottom-0"
            >
              <div className="p-4 border-b border-gray-100 flex justify-between items-center shrink-0">
                <h3 className="text-lg font-bold">选择地区</h3>
                <button 
                  onClick={() => setIsLocationPickerOpen(false)}
                  className="text-gray-400 p-1"
                >
                  取消
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
                {locations.map((loc) => (
                  <div key={loc.city} className="space-y-3">
                    <div className="text-sm font-bold text-gray-400 flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {loc.city}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {loc.districts.length > 0 ? (
                        loc.districts.map((dist) => (
                          <button
                            key={dist}
                            onClick={() => {
                              setSelectedCity(loc.city);
                              setSelectedDistrict(dist);
                              setIsLocationPickerOpen(false);
                            }}
                            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                              selectedCity === loc.city && selectedDistrict === dist
                                ? 'bg-[#11998E] text-white'
                                : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                            }`}
                          >
                            {dist}
                          </button>
                        ))
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedCity(loc.city);
                            setSelectedDistrict('');
                            setIsLocationPickerOpen(false);
                          }}
                          className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                            selectedCity === loc.city && !selectedDistrict
                              ? 'bg-[#11998E] text-white'
                              : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                          }`}
                        >
                          全境
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
