import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFruit } from '../context/FruitContext';

const FruitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedFruit, getFruitDetailById } = useFruit();
  useEffect(() => {
    if (id) getFruitDetailById(id);
  }, [id]);

  if (!selectedFruit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{selectedFruit.productName}</h2>
      <p className="text-lg text-gray-600 mb-2">{selectedFruit.description}</p>
      <p className="text-xl text-gray-900 font-semibold">Price: ${selectedFruit.price}</p>
      <p className="text-lg text-gray-600">Stock: {selectedFruit.stock}</p>
    </div>
  );
};

export default FruitDetail;
