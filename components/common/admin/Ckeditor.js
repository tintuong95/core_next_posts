import React from "react";

import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";


const Ckeditor = ({ setValue, defaultValue }) => {
  
  return (
    <CKEditor
      editor={Editor}
      config={{
        ckfinder: {
          // Upload the images to the server using the CKFinder QuickUpload command.
          uploadUrl: "/api/upload",
          withCredentials: true,
        },
      }}
      data={defaultValue}
      onChange={(event, editor) => {
        setValue("content", editor.getData());
      }}
    />
  );
};

export default Ckeditor;
