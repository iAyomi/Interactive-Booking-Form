export interface BookingData {
  senderName: string;
  senderCountry: string;
  senderState: string;
  senderCity: string;
  senderAddress: string;
  senderEmail: string;
  senderPhone: string;
  collectorName: string;
  collectorCountry: string;
  collectorState: string;
  collectorCity: string;
  collectorAddress: string;
  collectorEmail: string;
  collectorPhone: string;
  numberOfPackages: string;
  shipmentWeight: string;
  shipmentDate: string;
  shipmentTime: string;
  totalCost: number;
  paymentMethod: string;
}

export interface FormStepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export interface FormStepOneProps {
  formData: BookingData;
  updateFormData: (data: any) => void;
  onNext: () => void;
}

export interface FormStepTwoProps {
  formData: BookingData;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export interface FormStepThreeProps {
  formData: BookingData;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export interface FormSummaryProps {
  formData: BookingData;
  onSubmit: () => void;
  onPrev: () => void;
}

export interface NavigationButtonProps {
  onPrev?: () => void;
  onSubmit?: () => void;
  nextLabel: string;
}
