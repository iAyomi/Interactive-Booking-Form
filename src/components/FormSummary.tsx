import React from "react";
import { NavigationButton } from ".";
import { Header, Paragraph } from "./Typography";
import { FormSummaryProps } from "../utils/types";

const FormSummary = ({ formData, onSubmit, onPrev }: FormSummaryProps) => {
  const {
    senderName,
    senderCountry,
    senderState,
    senderCity,
    senderAddress,
    senderEmail,
    senderPhone,
    collectorName,
    collectorCountry,
    collectorState,
    collectorCity,
    collectorAddress,
    collectorEmail,
    collectorPhone,
    numberOfPackages,
    shipmentWeight,
    shipmentDate,
    shipmentTime,
    totalCost,
    paymentMethod,
  } = formData;

  return (
    <div className="p-6">
      <Header header="Cargo Shipment Summary" />

      <hr className="mb-2 border-2 border-gray-500" />

      <div className="mb-6">
        <Header header="Shipment Sender Details" />
        <Paragraph title="Name" paragraph={senderName} />
        <Paragraph title="Country" paragraph={senderCountry} />
        <Paragraph title="State" paragraph={senderState} />
        <Paragraph title="City" paragraph={senderCity} />
        <Paragraph title="Address" paragraph={senderAddress} />
        <Paragraph title="Email Address" paragraph={senderEmail} />
        <Paragraph title="Phone Number" paragraph={senderPhone} />
      </div>

      <hr className="mb-2 border-2 border-gray-500" />

      <div className="mb-6">
        <Header header="Shipment Collector Details" />
        <Paragraph title="Name" paragraph={collectorName} />
        <Paragraph title="Country" paragraph={collectorCountry} />
        <Paragraph title="State" paragraph={collectorState} />
        <Paragraph title="City" paragraph={collectorCity} />
        <Paragraph title="Address" paragraph={collectorAddress} />
        <Paragraph title="Email Address" paragraph={collectorEmail} />
        <Paragraph title="Phone Number" paragraph={collectorPhone} />
      </div>

      <hr className="mb-2 border-2 border-gray-500" />

      <div className="mb-6">
        <Header header="Shipment Information" />
        <Paragraph
          title="Number of Packages in Shipment"
          paragraph={numberOfPackages}
        />
        <Paragraph title="Total Shipment Weight" paragraph={shipmentWeight} />
        <Paragraph title="Preferred Shipment Date" paragraph={shipmentDate} />
        <Paragraph title="Preferred Shipment Time" paragraph={shipmentTime} />
        <Paragraph title="Total Shipment Cost" paragraph={`$${totalCost}`} />
        <Paragraph title="Preferred Payment Method" paragraph={paymentMethod} />
      </div>

      <hr className="mb-2 border-2 border-gray-500" />

      <NavigationButton
        onPrev={onPrev}
        onSubmit={onSubmit}
        nextLabel="Proceed to Payment"
      />
    </div>
  );
};

export default FormSummary;
