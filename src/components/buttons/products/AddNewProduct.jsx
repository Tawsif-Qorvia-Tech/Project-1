import React from "react";
import { GoPlus } from "react-icons/go";

const AddNewProduct = () => {
  return (
    <div>
      <button className="btn btn-primary text-white rounded-xl">
        Add New Product <GoPlus size={24} />
      </button>
    </div>
  );
};

export default AddNewProduct;
