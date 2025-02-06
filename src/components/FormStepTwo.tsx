import React from "react";
import { useForm } from "react-hook-form";
import { NavigationButton } from ".";
import { Header } from "./Typography";
import { TextField, Label, ErrorMessage } from "./FormComponents";
import { FormStepTwoProps } from "../utils/types";

const FormStepTwo = ({
  formData,
  updateFormData,
  onNext,
  onPrev,
}: FormStepTwoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const handleFormTwoSubmit = (data: any) => {
    updateFormData(data);
    onNext();
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(handleFormTwoSubmit)}>
        <Header header="Shipment Collector Information" />

        <div className="mb-3">
          <Label htmlFor="collectorName" label="Full Name" required />
          <TextField
            placeholder="Ayomitunde Isijola"
            {...register("collectorName", {
              required: "Full Name is required",
            })}
          />
          {errors.collectorName && (
            <ErrorMessage errorMessage={errors?.collectorName?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label
            htmlFor="collectorCountry"
            label="Country/Territory"
            required
          />
          <TextField
            {...register("collectorCountry", {
              required: "Country is required",
            })}
          />
          {errors.collectorCountry && (
            <ErrorMessage errorMessage={errors?.collectorCountry?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="collectorState" label="State" required />
          <TextField
            {...register("collectorState", { required: "State is required" })}
          />
          {errors.collectorState && (
            <ErrorMessage errorMessage={errors?.collectorState?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="collectorCity" label="City" required />
          <TextField
            {...register("collectorCity", { required: "City is required" })}
          />
          {errors.collectorCity && (
            <ErrorMessage errorMessage={errors?.collectorCity?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="collectorAddress" label="Street Address" required />
          <TextField
            {...register("collectorAddress", {
              required: "Address is required",
            })}
          />
          {errors.collectorAddress && (
            <ErrorMessage errorMessage={errors?.collectorAddress?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="collectorEmail" label="Email Address" required />
          <TextField
            placeholder="ayomitunde.isijola@gmail.com"
            type="email"
            {...register("collectorEmail", {
              required: "Email Address is required",
            })}
          />
          {errors.collectorEmail && (
            <ErrorMessage errorMessage={errors?.collectorEmail?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label htmlFor="collectorPhone" label="Phone Number" required />
          <TextField
            placeholder="08105921692"
            {...register("collectorPhone", {
              required: "Phone Number is required",
            })}
          />
          {errors.collectorPhone && (
            <ErrorMessage errorMessage={errors?.collectorPhone?.message} />
          )}
        </div>

        <NavigationButton onPrev={onPrev} nextLabel="Next" />
      </form>
    </div>
  );
};

export default FormStepTwo;
