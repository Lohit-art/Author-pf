import React from 'react';
import { motion } from 'framer-motion';

const ebookStores = [
  {
    name: 'Apple Books',
    icon: '/icons/apple-books-logo.png',
    url: 'https://books.apple.com/us/book/curled-crystal/id6745721319',
  },
  {
    name: 'Barnes & Noble',
    icon: '/icons/barnes-and-noble-removebg-preview.png',
    url: 'https://www.barnesandnoble.com/w/curled-crystal-s-nimma/1147406379;jsessionid=AA1983BB6AF3D47C28F6F43C4ED27597.prodny_store02-atgap01?ean=2940181661851&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital',
  },
  {
    name: 'Kobo',
    icon: '/icons/kobo.png',
    url: 'https://www.kobo.com/us/en/ebook/curled-crystal',
  },
  {
    name: 'Angus & Robertson',
    icon: '/icons/Angus.png',
    url: 'https://www.angusrobertson.com.au/ebooks/curled-crystal-s-nimma/p/9798231494248',
  },
  {
    name: 'Thalia',
    icon: '/icons/Thalia.png',
    url: 'https://www.thalia.de/shop/home/artikeldetails/A1075341297',
  },
  {
    name: 'Smashwords',
    icon: '/icons/smashwords.png',
    url: 'https://www.smashwords.com/books/view/1766986',
  },
  {
    name: 'vivlio',
    icon: '/icons/vivlio.png',
    url: 'https://shop.vivlio.com/product/9798231494248_9798231494248_10020/curled-crystal',
  },
  {
    name: 'Fable',
    icon: '/icons/fable.png',
    url: 'https://fable.co/book/x-9798231494248',
  },
  {
    name: 'Palace Marketplace',
    icon: '/icons/palace.png',
    url: 'https://market.thepalaceproject.org/item/6690842',
  },
  {
    name: 'Everand',
    icon: '/icons/everand.png',
    url: 'https://www.everand.com/book/859644756/Curled-Crystal',
  },
];

const Book: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.2 }}
    className="relative min-h-screen flex flex-col justify-center"
  >
    {/* Home page style background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 z-0"></div>
    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3705944/pexels-photo-3705944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center opacity-10 z-0"></div>
    <div className="container-custom pt-52 pb-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-12 mx-auto relative z-10">
      {/* Book Cover on the left */}
      <motion.img
        src="/Remove background project.png"
        alt="Curled Crystal Book Cover"
        className="w-56 h-auto rounded-lg shadow-lg mb-8 md:mb-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      />

      {/* Icons on the right */}
      <motion.div
        className="flex flex-col items-center w-full md:w-auto"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left"
          style={{ color: '#B76E79' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Available in E-book:
        </motion.h1>
        <motion.div
          className="flex flex-row flex-wrap gap-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {ebookStores.map(store => (
            <motion.a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 h-28 p-0 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-transform duration-200 flex items-center justify-center"
              title={store.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              <img
                src={store.icon}
                alt={store.name}
                className="w-full h-full object-contain p-2"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

export default Book; 