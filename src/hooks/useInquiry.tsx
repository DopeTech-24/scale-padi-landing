
import { axiosClient } from "@/lib/api/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export interface InquiryData {
  firstName: string;
  lastName: string;
  email: string;
  note: string; // Changed from 'note' to match your form field
}

export interface InquiryResponse {
  status: boolean;
  message: string;
  data?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    note: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const useInquiryMutation = (options?: {
  onSuccess?: (data: InquiryResponse) => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (inquiryData: InquiryData) => {
      try {
        const response = await axiosClient.post<InquiryResponse>("/inquiry", inquiryData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data?.status === false) {
          throw new Error(response.data?.message || "Failed to submit inquiry.");
        }
console.log(response.data);
        return response.data;
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          toast.error(
            error.response?.data?.message || "Failed to submit inquiry."
          );
        } else if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred while submitting inquiry.");
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
      toast.success("Inquiry submitted successfully!");
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
};