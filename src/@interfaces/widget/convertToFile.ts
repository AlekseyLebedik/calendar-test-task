type ExtensionType = {
  standart: "pdf" | "json" | "text";
  webStandart: "application/json" | "text/plain" | "application/pdf";
};

interface ConvertToFileProps {
  extension?: ExtensionType;
}

export { type ExtensionType, type ConvertToFileProps };
