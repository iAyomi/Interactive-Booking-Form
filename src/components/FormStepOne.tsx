import React from "react";
import { useForm } from "react-hook-form";
import { NavigationButton } from ".";
import { Header } from "./Typography";
import { TextField, Label, ErrorMessage } from "./FormComponents";
import { FormStepOneProps } from "../utils/types";

const FormStepOne = ({
  formData,
  updateFormData,
  onNext,
}: FormStepOneProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const handleFormOneSubmit = (data: any) => {
    updateFormData(data);
    onNext();
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(handleFormOneSubmit)}>
        <Header header="Shipment Sender Information" />

        <div className="mb-3">
          <Label htmlFor="senderName" label="Full Name" required />
          <TextField
            placeholder="Ayomitunde Isijola"
            {...register("senderName", { required: "Full Name is required" })}
          />
          {errors.senderName && (
            <ErrorMessage errorMessage={errors?.senderName?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="senderCountry" label="Country/Territory" required />
          <TextField
            {...register("senderCountry", { required: "Country is required" })}
          />
          {errors.senderCountry && (
            <ErrorMessage errorMessage={errors?.senderCountry?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="senderState" label="State" required />
          <TextField
            {...register("senderState", { required: "State is required" })}
          />
          {errors.senderState && (
            <ErrorMessage errorMessage={errors?.senderState?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="senderCity" label="City" required />
          <TextField
            {...register("senderCity", { required: "City is required" })}
          />
          {errors.senderCity && (
            <ErrorMessage errorMessage={errors?.senderCity?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="senderAddress" label="Street Address" required />
          <TextField
            {...register("senderAddress", { required: "Address is required" })}
          />
          {errors.senderAddress && (
            <ErrorMessage errorMessage={errors?.senderAddress?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="senderEmail" label="Email Address" required />
          <TextField
            placeholder="ayomitunde.isijola@gmail.com"
            type="email"
            {...register("senderEmail", {
              required: "Email Address is required",
            })}
          />
          {errors.senderEmail && (
            <ErrorMessage errorMessage={errors?.senderEmail?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="senderPhone" label="Phone Number" required />
          <TextField
            placeholder="08105921692"
            {...register("senderPhone", {
              required: "Phone Number is required",
            })}
          />
          {errors.senderPhone && (
            <ErrorMessage errorMessage={errors?.senderPhone?.message} />
          )}
        </div>

        <NavigationButton nextLabel="Next" />
      </form>
    </div>
  );
};

export default FormStepOne;
