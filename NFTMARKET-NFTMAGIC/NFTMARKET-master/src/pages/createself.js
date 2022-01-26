import { Box } from "@mui/system";
import React from "react";
import { DropzoneArea } from 'material-ui-dropzone';
import { TextField } from "@mui/material";
const CreateSelf = () => {
  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12 paddingtop11" >
            <h2 className="top-nfts">Create New Item</h2>
          </Box>
          <Box className="col-md-12">
            <Box className="container">
              <Box className="row" style={{ display: "flex", justifyContent: "center" }}>
                <Box className="col-lg-8">
                  <Box className="field-set">
                    <h5>Upload file</h5>
                    <DropzoneArea
                      filesLimit={1}
                      onChange={(files) => console.log('Files:', files)}
                    />
                  </Box>
                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Title</h5>
                    <TextField id="outlined-basic" fullWidth label="Title" variant="outlined" />
                  </Box>
                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Details</h5>
                    <TextField id="outlined-basic" fullWidth label="Details" rows={5} multiline variant="outlined" />
                  </Box>
                  <Box className="field-set" style={{ padding: "50px 0px" }}>
                    <a href="/wallet" className="btn-main btn-lg" >
                      Create
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default CreateSelf