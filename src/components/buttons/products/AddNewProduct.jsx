"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { PostProduct } from "@/actions/server/Product";

const AddNewProduct = ({ onSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "Veterinary Solution",
      name: "",
      tagline: "",
      price: "",
      moqQuantity: "",
      moqUnit: "pcs",
      summary: "",
      whySupplement: "",
      nutritionalValueAmount: "10 ml.",
      nutritionalValues: [{ ingredient: "", concentration: "" }],
      uniqueFeatures: [{ feature: "" }],
      indications: [{ indication: "" }],
      inclusionRates: [{ livestock: "", rate: "" }],
    },
  });

  // Dynamic Array Fields Management via React Hook Form hooks
  const { fields: nutrientFields, append: appendNutrient, remove: removeNutrient } = 
    useFieldArray({ control, name: "nutritionalValues" });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = 
    useFieldArray({ control, name: "uniqueFeatures" });

  const { fields: indicationFields, append: appendIndication, remove: removeIndication } = 
    useFieldArray({ control, name: "indications" });

  const { fields: rateFields, append: appendRate, remove: removeRate } = 
    useFieldArray({ control, name: "inclusionRates" });

  const openModal = () => {
    reset({
      category: "Veterinary Solution",
      name: "",
      tagline: "",
      price: "",
      moqQuantity: "",
      moqUnit: "pcs",
      summary: "",
      whySupplement: "",
      nutritionalValueAmount: "10 ml.",
      nutritionalValues: [{ ingredient: "", concentration: "" }],
      uniqueFeatures: [{ feature: "" }],
      indications: [{ indication: "" }],
      inclusionRates: [{ livestock: "", rate: "" }],
    });
    setImages([]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setImages([]);
    setIsModalOpen(false);
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, { id: Date.now() + Math.random(), src: reader.result, name: file.name }]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Remove Image
  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  // Handle Form Submission
  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
     const formData = {
      ...data,
      images: images.map((img) => img.src),
      };
      
      const result = await PostProduct(formData);
      
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Product created successfully!',
          confirmButtonColor: '#3b82f6',
          confirmButtonText: 'OK',
        }).then(() => {
          reset();
          setImages([]);
          closeModal();
          if (onSuccess) onSuccess();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: result.message || 'Failed to create product',
          confirmButtonColor: '#ef4444',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while creating the product',
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'Try Again',
      });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      {/* Trigger Button */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <button 
          onClick={openModal}
          className="btn btn-primary text-white rounded-xl mt-10 md:mt-0 flex items-center gap-2"
        >
          <GoPlus size={24} /> Add New Product
        </button>
      </div>

      {/* Modal Setup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 overflow-y-auto">
          
          {/* Background overlay click-to-close handler */}
          <div 
            className="absolute inset-0" 
            onClick={closeModal}
          />

          {/* Card container matching the reference style */}
          <div className="card bg-white w-full mx-auto max-w-2xl shrink-0 shadow-2xl p-5 relative z-10 rounded-xl overflow-hidden my-8">
            
            {/* Upper Color banner styling */}
            <div className="bg-primary text-white p-5 -mx-5 -mt-5 mb-4 text-center">
              <h3 className="font-semibold text-2xl">
                Add New Product
              </h3>
              <p className="text-sm pt-1 opacity-90">
                Create a new industrial product record.
              </p>
            </div>

            {/* Top-Right Close Cross Icon */}
            <button
              className="btn btn-sm btn-circle absolute right-3 top-3 bg-white/20 text-white border-none hover:bg-white/40"
              onClick={closeModal}
            >
              <FaTimes size={16} />
            </button>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0 max-h-[70vh] overflow-y-auto">
              <fieldset className="fieldset space-y-4" disabled={isLoading}>
                
                {/* SEGMENT 1: Core Product Identity */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Core Product Information</h4>
                  
                  <div>
                    <label className="label text-sm font-medium text-gray-700">Category</label>
                    <input 
                      type="text" 
                      {...register("category", { required: "Category is required" })} 
                      className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.category && <p className="text-red-500 text-xs font-medium mt-1">{errors.category.message}</p>}
                  </div>

                  <div>
                    <label className="label text-sm font-medium text-gray-700">Product Name</label>
                    <input 
                      type="text" 
                      {...register("name", { required: "Product name is required" })} 
                      placeholder="e.g. ImuLiv"
                      className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.name && <p className="text-red-500 text-xs font-medium mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="label text-sm font-medium text-gray-700">Tagline</label>
                    <input 
                      type="text" 
                      {...register("tagline")} 
                      placeholder="e.g. Premium Liver Tonic & Immune Booster"
                      className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* SEGMENT 2: Commercial Metrics */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Commercial Details</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label text-sm font-medium text-gray-700">Price (₹)</label>
                      <input 
                        type="number" 
                        step="0.01" 
                        {...register("price", { required: "Price is required" })} 
                        placeholder="0.00"
                        className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {errors.price && <p className="text-red-500 text-xs font-medium mt-1">{errors.price.message}</p>}
                    </div>
                    <div>
                      <label className="label text-sm font-medium text-gray-700">MOQ Quantity</label>
                      <input 
                        type="number" 
                        {...register("moqQuantity", { required: "MOQ is required" })} 
                        placeholder="100"
                        className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {errors.moqQuantity && <p className="text-red-500 text-xs font-medium mt-1">{errors.moqQuantity.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="label text-sm font-medium text-gray-700">MOQ Unit</label>
                    <select 
                      {...register("moqUnit")} 
                      className="select w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="pcs">Pieces (pcs)</option>
                      <option value="Litres">Litres</option>
                      <option value="Bottles">Bottles</option>
                      <option value="Boxes">Boxes</option>
                    </select>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* SEGMENT 3: Summary & Why Supplement */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Product Description</h4>
                  
                  <div>
                    <label className="label text-sm font-medium text-gray-700">Summary</label>
                    <textarea 
                      {...register("summary", { required: "Summary is required" })} 
                      rows={2}
                      placeholder="Product summary..."
                      className="textarea w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    {errors.summary && <p className="text-red-500 text-xs font-medium mt-1">{errors.summary.message}</p>}
                  </div>

                  <div>
                    <label className="label text-sm font-medium text-gray-700">Why Supplement?</label>
                    <textarea 
                      {...register("whySupplement", { required: "This field is required" })} 
                      rows={2}
                      placeholder="Explain supplement benefits..."
                      className="textarea w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    {errors.whySupplement && <p className="text-red-500 text-xs font-medium mt-1">{errors.whySupplement.message}</p>}
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* SEGMENT 4: Product Images */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Product Images</h4>
                  
                  <div>
                    <label className="label text-sm font-medium text-gray-700">Upload Images</label>
                    <input 
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="file-input file-input-bordered w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload one or more product images</p>
                  </div>

                  {/* Display Uploaded Images */}
                  {images.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs text-gray-600 font-medium">Uploaded Images ({images.length})</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                        {images.map((image) => (
                          <div key={image.id} className="relative group">
                            <img 
                              src={image.src} 
                              alt={image.name}
                              className="w-full h-24 object-cover rounded-md border border-gray-300"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(image.id)}
                              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <FaTrashAlt size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <hr className="border-gray-200" />

                {/* SEGMENT 5: Nutritional Values */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-gray-700">Nutritional Values</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600 font-medium">Per</span>
                      <input 
                        type="text" 
                        {...register("nutritionalValueAmount")} 
                        className="input input-sm border border-gray-300 rounded-md p-1 w-24 text-xs"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    {nutrientFields.map((field, index) => (
                      <div key={field.id} className="flex gap-2 items-center">
                        <input 
                          type="text" 
                          placeholder="Ingredient"
                          {...register(`nutritionalValues.${index}.ingredient`, { required: true })} 
                          className="input input-sm border border-gray-300 rounded-md p-2 flex-1 text-xs"
                        />
                        <input 
                          type="text" 
                          placeholder="Concentration"
                          {...register(`nutritionalValues.${index}.concentration`, { required: true })} 
                          className="input input-sm border border-gray-300 rounded-md p-2 w-32 text-xs"
                        />
                        {nutrientFields.length > 1 && (
                          <button 
                            type="button" 
                            onClick={() => removeNutrient(index)} 
                            className="btn btn-sm btn-ghost text-error"
                          >
                            <FaTrashAlt size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button 
                      type="button" 
                      onClick={() => appendNutrient({ ingredient: "", concentration: "" })} 
                      className="btn btn-xs btn-outline btn-primary rounded-md text-xs mt-1"
                    >
                      <GoPlus size={12} /> Add Row
                    </button>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* SEGMENT 5: Features & Indications */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700">Unique Features</h4>
                    <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200 max-h-48 overflow-y-auto">
                      {featureFields.map((field, index) => (
                        <div key={field.id} className="flex gap-2 items-center">
                          <input 
                            type="text" 
                            placeholder="Feature"
                            {...register(`uniqueFeatures.${index}.feature`, { required: true })} 
                            className="input input-sm border border-gray-300 rounded-md p-2 flex-1 text-xs"
                          />
                          {featureFields.length > 1 && (
                            <button 
                              type="button" 
                              onClick={() => removeFeature(index)} 
                              className="btn btn-sm btn-ghost text-error"
                            >
                              <FaTrashAlt size={14} />
                            </button>
                          )}
                        </div>
                      ))}
                      <button 
                        type="button" 
                        onClick={() => appendFeature({ feature: "" })} 
                        className="btn btn-xs btn-outline btn-primary rounded-md text-xs w-full mt-1"
                      >
                        <GoPlus size={12} /> Add
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700">Indications</h4>
                    <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200 max-h-48 overflow-y-auto">
                      {indicationFields.map((field, index) => (
                        <div key={field.id} className="flex gap-2 items-center">
                          <input 
                            type="text" 
                            placeholder="Indication"
                            {...register(`indications.${index}.indication`, { required: true })} 
                            className="input input-sm border border-gray-300 rounded-md p-2 flex-1 text-xs"
                          />
                          {indicationFields.length > 1 && (
                            <button 
                              type="button" 
                              onClick={() => removeIndication(index)} 
                              className="btn btn-sm btn-ghost text-error"
                            >
                              <FaTrashAlt size={14} />
                            </button>
                          )}
                        </div>
                      ))}
                      <button 
                        type="button" 
                        onClick={() => appendIndication({ indication: "" })} 
                        className="btn btn-xs btn-outline btn-primary rounded-md text-xs w-full mt-1"
                      >
                        <GoPlus size={12} /> Add
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* SEGMENT 6: Inclusion Rates */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Dosing / Inclusion Rates</h4>
                  <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200 max-h-48 overflow-y-auto">
                    {rateFields.map((field, index) => (
                      <div key={field.id} className="flex gap-2 items-center">
                        <input 
                          type="text" 
                          placeholder="Livestock Type"
                          {...register(`inclusionRates.${index}.livestock`, { required: true })} 
                          className="input input-sm border border-gray-300 rounded-md p-2 w-32 text-xs"
                        />
                        <input 
                          type="text" 
                          placeholder="Dosing Rate"
                          {...register(`inclusionRates.${index}.rate`, { required: true })} 
                          className="input input-sm border border-gray-300 rounded-md p-2 flex-1 text-xs"
                        />
                        {rateFields.length > 1 && (
                          <button 
                            type="button" 
                            onClick={() => removeRate(index)} 
                            className="btn btn-sm btn-ghost text-error"
                          >
                            <FaTrashAlt size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button 
                      type="button" 
                      onClick={() => appendRate({ livestock: "", rate: "" })} 
                      className="btn btn-xs btn-outline btn-primary rounded-md text-xs mt-1"
                    >
                      <GoPlus size={12} /> Add Livestock
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 mt-4">
                  <button 
                    type="button" 
                    className="btn btn-ghost rounded-md text-sm"
                    onClick={() => { reset(); closeModal(); }}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="btn bg-primary text-white hover:bg-opacity-90 rounded-md border-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {isLoading ? 'Creating Product...' : 'Create Product'}
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewProduct;