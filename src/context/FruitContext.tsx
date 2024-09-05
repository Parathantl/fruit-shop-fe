import React, { createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface FruitProps {
    _id: string,
    description: string
    price: string
    productName: string
    stock: string
};

interface FruitContextProps {
    addFruit: (fruitProps: FruitProps) => Promise<void>;
    getAllFruits: () => Promise<FruitProps[]>;
    fruits: FruitProps[];
    selectedFruit: FruitProps | null;
    getFruitDetailById: (id: string) => Promise<FruitProps | null>;
}

const FruitContext = createContext<FruitContextProps>({
    addFruit: async () => {},
    getAllFruits: async () => [],
    fruits: [],
    selectedFruit: null,
    getFruitDetailById: async () => null,
});

export const useFruit = () => useContext(FruitContext);

export const FruitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fruits, setFruits] = React.useState<FruitProps []>([]);
    const [selectedFruit, setSelectedFruit] = React.useState<FruitProps | null>(null);

  const navigate = useNavigate();

  const addFruit = async (fruitDetails: FruitProps) => {
    try {
        const response = await axios.post("http://localhost:3000/api/v1/fruits/addFruit", fruitDetails, 
        { withCredentials: true } 
        );

        if (response.status === 201) {
            toast.success("Fruit added successfully");
            navigate("/products");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to add fruit");
    }
  };

  const getAllFruits = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/fruits", {
        withCredentials: true,
      });
      console.log(response.data);
      setFruits(response.data.fruits);
      return response.data;
    } catch (error) {
      console.error("Error fetching fruits:", error);
      return [];
    }
  }

  const getFruitDetailById = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/fruits/get/${id}`, {
        withCredentials: true,
      });
      setSelectedFruit(response.data.fruit);
      return response.data.fruit;
    } catch (error) {
      console.error("Error fetching fruit detail:", error);
      return null;
    }
  }


return (
    <FruitContext.Provider value={{ addFruit, fruits, getAllFruits, getFruitDetailById, selectedFruit }}>
        {children}
    </FruitContext.Provider>
);
};
