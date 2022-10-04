import { InputWrapperWithErrorMessage } from "lib/ui/inputs/InputWrapper";
import { useEffect } from "react";
import { FileInput } from "lib/ui/inputs/FileInput";
import { SelectedFile } from "lib/ui/inputs/SelectedFile";
import { useUploadFileMutation } from "web3/hooks/useUploadFileMutation";
import { getDistributedFileName } from "web3/utils/getDistributedFileName";

interface Props {
  value?: string;
  error?: string;
  onChange: (value?: string) => void;
}

export const PdfFileInput = ({ value, error, onChange }: Props) => {
  const {
    mutate: uploadFile,
    data: uploadedFileUri,
    reset,
    isLoading,
  } = useUploadFileMutation();

  useEffect(() => {
    if (uploadedFileUri && !value) {
      onChange(uploadedFileUri);
      reset();
    }
  }, [onChange, reset, uploadedFileUri, value]);

  return (
    <InputWrapperWithErrorMessage label="Upload a file" error={error}>
      {value ? (
        <SelectedFile
          name={getDistributedFileName(value)}
          onRemove={() => onChange(undefined)}
        />
      ) : (
        <FileInput
          isLoading={isLoading}
          onSubmit={(file) => {
            uploadFile(file);
          }}
          accept={{
            "application/pdf": [".pdf"],
          }}
        />
      )}
    </InputWrapperWithErrorMessage>
  );
};
