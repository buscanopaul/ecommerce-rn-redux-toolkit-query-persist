import React, { useEffect } from 'react';
import { View } from 'react-native';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

const categoryData = [
  {
    id: '100',
    title: 'Men',
    imageUrl: '',
  },
  {
    id: '200',
    title: 'Women',
    imageUrl: '',
  },
  {
    id: '300',
    title: 'electronics',
    imageUrl: '',
  },
  {
    id: '4',
    title: 'jewelery',
    imageUrl: '',
  },
];

const productData = [
  {
    id: '1',
    title: 'Padded Jacket',
    price: 483.61,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-awrCBwWayKOVEW1x5axIYfvksy1ijE4ZVrO73tIStZmZWXta88_Lu7U-7yMnHnlw4z0&usqp=CAU',
    colors: [
      {
        id: '11',
        value: 'red',
      },
      {
        id: '12',
        value: 'green',
      },
      {
        id: '13',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '14',
        value: 'l',
      },
      {
        id: '15',
        value: 'xl',
      },
      {
        id: '16',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
  {
    id: '2',
    title: 'Padded Bomber',
    price: 368.85,
    imageUrl: 'https://d1x8vd8pvkt0tz.cloudfront.net/936845/L.jpg',
    colors: [
      {
        id: '17',
        value: 'red',
      },
      {
        id: '18',
        value: 'green',
      },
      {
        id: '19',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '20',
        value: 'l',
      },
      {
        id: '21',
        value: 'xl',
      },
      {
        id: '22',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
  {
    id: '3',
    title: 'Padded Coat',
    price: 565.57,
    imageUrl:
      'https://5.imimg.com/data5/XG/IR/MY-29209603/e-commerce-men-photo-shoot-service-1000x1000.jpg',
    colors: [
      {
        id: '23',
        value: 'red',
      },
      {
        id: '24',
        value: 'green',
      },
      {
        id: '25',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '26',
        value: 'l',
      },
      {
        id: '27',
        value: 'xl',
      },
      {
        id: '28',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
  {
    id: '4',
    title: 'Padded Bomber',
    price: 483.21,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC97W1NjFj4gYt8xHTqVT_qG7nLe2VzaXSB-lvplZWTlYV0TGyHdfWgEdeOFb-65_sEGs&usqp=CAU',
    colors: [
      {
        id: '30',
        value: 'red',
      },
      {
        id: '31',
        value: 'green',
      },
      {
        id: '32',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '33',
        value: 'l',
      },
      {
        id: '34',
        value: 'xl',
      },
      {
        id: '35',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
  {
    id: '5',
    title: 'Padded Jacket',
    price: 483.61,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9fbq5Ej2VXYqQhPg6uX77tRMPExmbzxStw&usqp=CAU',
    colors: [
      {
        id: '30',
        value: 'red',
      },
      {
        id: '31',
        value: 'green',
      },
      {
        id: '32',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '33',
        value: 'l',
      },
      {
        id: '34',
        value: 'xl',
      },
      {
        id: '35',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
  {
    id: '6',
    title: 'Padded Bomber',
    price: 368.85,
    imageUrl:
      'https://shapesdefined.sirv.com/SD%20Portfolio/Fashion%20%26%20Apparel/lifestyle/SHOOT-397.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=500&h=0&q=100',
    colors: [
      {
        id: '30',
        value: 'red',
      },
      {
        id: '31',
        value: 'green',
      },
      {
        id: '32',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '33',
        value: 'l',
      },
      {
        id: '34',
        value: 'xl',
      },
      {
        id: '35',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
  {
    id: '7',
    title: 'Padded Coat',
    price: 565.57,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQybgPd8xW4yXOCyzHF8wwCdfsh5de-gIsApBbMHnOhjHNi7pIELVNZQ8hAtRI66G2ag&usqp=CAU',
    colors: [
      {
        id: '37',
        value: 'red',
      },
      {
        id: '38',
        value: 'green',
      },
      {
        id: '39',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '40',
        value: 'l',
      },
      {
        id: '41',
        value: 'xl',
      },
      {
        id: '42',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
  {
    id: '8',
    title: 'Padded Bomber',
    price: 483.21,
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5516f11ae4b099836263dc40/51a49016-4a7a-4ba0-b006-c8e5f81337fc/VSP+Studios+Miami+Amazon+Photographer-1020.jpg',
    colors: [
      {
        id: '43',
        value: 'red',
      },
      {
        id: '44',
        value: 'green',
      },
      {
        id: '45',
        value: 'blue',
      },
    ],
    sizes: [
      {
        id: '46',
        value: 'l',
      },
      {
        id: '47',
        value: 'xl',
      },
      {
        id: '48',
        value: 'xxl',
      },
    ],
    quantity: 1,
  },
];

const HomeScreen = () => {
  useEffect(() => {});

  return (
    <View className="bg-light flex-1 pt-5 w-full">
      <CategoryList categoryData={categoryData} />
      <ProductList productData={productData} />
    </View>
  );
};

export default HomeScreen;
