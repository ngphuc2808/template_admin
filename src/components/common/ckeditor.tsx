import "../styles.scss";

import dayjs from "dayjs";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-ss-custom/build/ckeditor";

import { convertFileToBase64, uploadS3 } from "@/utils/methods";

type FormFieldType = {
  value?: string;
  onChange?: (data: string) => void;
  isReadOnly?: boolean;
};

const FormField = ({
  value = "",
  onChange = () => {},
  isReadOnly = false,
}: FormFieldType) => {
  const itemsConfig = [
    "heading",
    "|",
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ];

  return (
    <CKEditor
      editor={ClassicEditor as any}
      data={value}
      onChange={({}, editor: any) => {
        onChange(editor.getData());
      }}
      config={{
        extraPlugins: [MyCustomUploadAdapterPlugin],
        toolbar: {
          items: itemsConfig,
        },
        image: {
          resizeUnit: "px",
          toolbar: [
            "resizeImage",
            "imageStyle:alignLeft",
            "imageStyle:alignCenter",
            "imageStyle:alignRight",
            "|",
            "imageStyle:full",
            "imageStyle:side",
            "|",
            "imageTextAlternative",
          ],
          styles: ["full", "side", "alignLeft", "alignCenter", "alignRight"],
          resizeOptions: [
            {
              name: "imageResize:original",
              label: "Original",
              value: null,
            },
            {
              name: "imageResize:50",
              label: "50px",
              value: "50",
            },
            {
              name: "imageResize:75",
              label: "75px",
              value: "75",
            },
          ],
        },
        isReadOnly: isReadOnly,
      }}
    />
  );
};

function MyCustomUploadAdapterPlugin(editor: any) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  private loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  async upload(): Promise<{ default: string }> {
    return this.loader.file.then((uploadedFile: File) => {
      return new Promise(async (resolve, reject) => {
        try {
          const encodeBase64: ConvertFileToBase64ResultType =
            await convertFileToBase64(uploadedFile);
          const timestamp = dayjs(new Date()).format("YYYYMMDDHHMMSS");
          const filename = `${timestamp}_${uploadedFile.name}`;
          const filetype = uploadedFile.type;
          const type = encodeBase64.base64.split("/")[0].split(":")[1];

          //@ts-ignore
          uploadS3({
            filename,
            filetype,
            base64: encodeBase64.base64,
            userID: "0",
            type,
            uploadDir: "/ckeditor",
          })
            .on("httpUploadProgress", () => {})
            .send((err: Error, data: any) => {
              if (err) {
                reject("Upload failed");
              } else {
                const url = data.Location;
                resolve({ default: url });
              }
            });
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

export default FormField;
