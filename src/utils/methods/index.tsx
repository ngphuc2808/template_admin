import AWS from "aws-sdk";
import dayjs from "dayjs";
import { Buffer } from "buffer";
import { ENV_ENVIRONMENT_AWS_KEYS } from "@/api.config/config";

AWS.config.update({
  accessKeyId: ENV_ENVIRONMENT_AWS_KEYS.accessKeyID,
  secretAccessKey: ENV_ENVIRONMENT_AWS_KEYS.secretKeyID,
  region: ENV_ENVIRONMENT_AWS_KEYS.region,
  signatureVersion: "v4",
  s3ForcePathStyle: true,
});
const s3Bucket = new AWS.S3({ endpoint: ENV_ENVIRONMENT_AWS_KEYS.endpoint });

const defaultUploadDir = "/upload/files";

export const uploadS3 = ({
  filename,
  filetype,
  base64,
  userID,
  type,
  uploadDir = defaultUploadDir,
}: ParamsUploadS3Type) => {
  try {
    let newDir;
    const timestamp = dayjs(new Date()).format("YYYYMMDDHHMMSS");
    let buf;
    if (type === "video") {
      buf = Buffer.from(
        base64.replace(/^data:video\/\w+;base64,/, ""),
        "base64"
      );
      newDir = `${userID}/videos`;
    } else if (type === "image") {
      buf = Buffer.from(
        base64.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );
      newDir = `${userID}/images`;
    } else {
      buf = Buffer.from(base64, "base64");
      newDir = `${userID}/files`;
    }
    const params = {
      Bucket: ENV_ENVIRONMENT_AWS_KEYS.bucket,
      Key: `${uploadDir}/${newDir}/${timestamp}_${filename}`,
      Body: buf,
      ContentType: filetype,
      ContentEncoding: "base64",
      ACL: "public-read",
    };
    return s3Bucket.upload(params);
  } catch (error) {
    console.log("list folder error", error);
  }
};

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
  return true;
};

export const getCurrentUrl = (path: string) => {
  return path.split("/")[1];
};

export const lowercaseFirstCharacter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export const convertFileToBase64 = (
  file: File
): Promise<ConvertFileToBase64ResultType> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve({
          fileName: file.name,
          base64: reader.result,
        });
      } else {
        reject(new Error("Failed to convert file to base64"));
      }
    };

    reader.onerror = () => {
      reject(new Error("File reading error"));
    };
  });
};
