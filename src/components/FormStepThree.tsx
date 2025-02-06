import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavigationButton } from ".";
import { Header } from "./Typography";
import { TextField, NumberField, Label, ErrorMessage } from "./FormComponents";
import { FormStepThreeProps } from "../utils/types";
import { calculateTotalCost } from "../utils/methods";

const FormStepThree = ({
  formData,
  updateFormData,
  onNext,
  onPrev,
}: FormStepThreeProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const shipmentWeight = watch("shipmentWeight") || 0;
  const numberOfPackages = watch("numberOfPackages") || 0;
  const shipmentTime = watch("shipmentTime");
  const shipmentDate = watch("shipmentDate");

  // Function to calculate cost dynamically
  useEffect(() => {
    if (shipmentWeight && numberOfPackages && shipmentDate && shipmentTime) {
      const calculatedCost = calculateTotalCost(
        Number(shipmentWeight),
        Number(numberOfPackages),
        shipmentDate,
        shipmentTime
      );

      setValue("totalCost", Number(calculatedCost));
    }
  }, [shipmentWeight, numberOfPackages, shipmentDate, shipmentTime]);

  const handleFormThreeSubmit = (data: any) => {
    updateFormData(data);
    onNext();
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(handleFormThreeSubmit)}>
        <Header header="Shipment Information" />

        <div className="mb-3">
          <Label
            htmlFor="numberOfPackages"
            label="Number of Packages in Shipment"
            required
          />
          <NumberField
            {...register("numberOfPackages", {
              required: "Number of Packages is required",
            })}
          />
          {errors.numberOfPackages && (
            <ErrorMessage errorMessage={errors?.numberOfPackages?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label
            htmlFor="shipmentWeight"
            label="Total Shipment Weight"
            required
          />
          <div className="flex items-center gap-x-2">
            <NumberField
              {...register("shipmentWeight", {
                required: "Total Shipment Weight is required",
              })}
            />
            <p>kg</p>
          </div>
          {errors.shipmentWeight && (
            <ErrorMessage errorMessage={errors?.shipmentWeight?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label
            htmlFor="shipmentDate"
            label="Preferred Shipment Date"
            required
          />
          <input
            type="date"
            id="shipmentDate"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            {...register("shipmentDate", {
              required: "Shipment Date is required",
            })}
          />
          {errors.shipmentDate && (
            <ErrorMessage errorMessage={errors?.shipmentDate?.message} />
          )}
        </div>

        <div className="mb-3">
          <Label
            htmlFor="shipmentTime"
            label="Preferred Shipment Time"
            required
          />
          <input
            type="time"
            id="shipmentTime"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            {...register("shipmentTime", {
              required: "Shipment Time is required",
            })}
          />
          {errors.shipmentTime && (
            <ErrorMessage errorMessage={errors?.shipmentTime?.message} />
          )}
        </div>

        <hr className="mt-5 mb-3 border-2 border-gray-500" />

        <div className="mb-3">
          <Label htmlFor="totalCost" label="Total Cost in Dollars($)" />
          <TextField disabled {...register("totalCost")} />
        </div>

        <div className="mb-3">
          <Label
            htmlFor="paymentMethod"
            label="Preferred Payment Method"
            required
          />
          <select
            id="paymentMethod"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            {...register("paymentMethod", {
              required: "Payment Method is required",
            })}
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Paypal">PayPal</option>
          </select>
          {errors.paymentMethod && (
            <ErrorMessage errorMessage={errors?.paymentMethod?.message} />
          )}
        </div>

        <NavigationButton onPrev={onPrev} nextLabel="Next" />
      </form>
    </div>
  );
};

export default FormStepThree;
