import './file-upload.scss';

export interface FileUploadProps {
  name: string;
  accept?: string;
  className?: string;
  onChange?: (files: FileList | null) => unknown;

  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function FileUpload(props: FileUploadProps) {
  return (
    <input
      className="armeniagov-file-upload"
      id={props.name}
      name={props.name}
      type="file"
      accept={props.accept}
      onChange={e => {
        if(props.onChange) props.onChange(e.target.files);
      }}
      {...(props.inputAttributes ? props.inputAttributes : {})}
    />
  );
}

export default FileUpload;
