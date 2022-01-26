import { Box } from "@mui/system";
import MyProvider from "./MyProvider"
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { UIEvent, PhotoEditorSDKUI, ImageFormat, ExportFormat, ContainedPrimaryButton } from "photoeditorsdk";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from "@mui/material";

const ExportButton = styled(ContainedPrimaryButton)`
  color: ${({ theme }) => theme.button.containedPrimaryForeground}
  background: ${({ theme }) => theme.button.containedPrimaryBackground}
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Create = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("light")
  const [open, setOpen] = useState(false);
  const [imgdata, setImgdata] = useState(false);
  const [postable, setpostable] = useState(false);
  const load = async () => {
    const editor = await PhotoEditorSDKUI.init({
      library: {
        provider: MyProvider,
        enableUpload: !0
      },
      theme: theme,
      container: "#editor",
      mainCanvasActions: ["undo", "redo", "export"],
      assetBaseUrl: "./assets",
      image: "./example.jpg",
      export: {
        image: {
          enableDownload: false,
          format: ImageFormat.PNG,
          exportType: ExportFormat.DATA_URL,
        },
      },
      custom: {
        languages: {
          en: {
            mainCanvasActions: {
              buttonExport: 'Save NFT',
            },
          },
          components: {
            buttons: {
              mainCanvasActionExport: ExportButton,
            },
          },
        },
      },
      license: '{"api_token":"FIjt93hJjd1aTDypx2wYog","app_identifiers":[],"available_actions":[],"domains":["https://api.photoeditorsdk.com"],"enterprise_license":false,"expires_at":null,"features":["camera","library","export","customassets","whitelabel","adjustment","brush","filter","focus","frame","overlay","sticker","text","textdesign","transform"],"issued_at":1586248517,"minimum_sdk_version":"1.0","owner":"Alexander Schiewe","platform":"HTML5","products":["pesdk"],"version":"2.4","signature":"bEZWMchF+f1RPFSQ5jEIL/DteRrbrlSJb6I42a6RAkDkBcmfaI2IOjf0tm76NEPUiF7Oc+eHzxk/f5cNqXEjeAYhj9vZYTMaCgwX2jNqpSv51cnTTln+cEA3J43mJl40ZgYYkSMxXo4yKtXxvtsEat4EgxM9gHVV1dvfpXQjIaBWJiB72T2/IaZHxFjivj0tcT/jAvwr5geASUKPMLR6Q5NsCKHqX6Q/2a9wcnEUgWknqBI7kbQrCI5HNcEOMF0TxFhmake7R3hbzU6W5Heu92erWjLqkuTj0gcjY1A7giIQaCGmEc5tfmPzVeF7ByrID/WXUQ0ksezLDuXcnZHrSxf+g/SfHmauDadCHdXz64CcdjO3/5z/QYTSEL7sR1f7DHmd0eK30idXpZ4ISzV0FP7fqxzI2Q2r2niNcUpNnqj+z2vg0fqoFs++ojmFVYTDowPVL2CeLnNBflLkU+Rwka5YUMfPLlhxKBxrR/hmk+N4jlcfPZi2tCfMg27/vzuNO82VDeGAECzqIq8veaoLipPcp5Fnw3uwcUpH4EEn5Cgu26hf/mt6cKvJZgsTmjwgaZ09l1Vd9K5+MpFAb1aOmvCydx5GsYdiA6tVB/J3trDTzT3v6/doZR5jDxTOM5PbqdgwdbkKury6Sv7MtxMEHXtbPR/4bSxipISdq9NuwMk="}',
    });
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log("Exported ", imageSrc);
      setImgdata(imageSrc)
      setOpen(true)
    });
  }

  const next = () => {
    setpostable(true)
  }

  const handleClose = () => {
    setOpen(false)
    setpostable(false)

  }

  useEffect(() => {
    load()
  }, [theme])
  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="row" style={{ position: "relative", top: "143px", marginBottom: "143px" }}>
        <Box className="col-md-12">
          <Box>
            <div
              id="editor"
              style={{ width: "100vw", height: "93vh" }}
            />
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose()}
        aria-describedby="alert-dialog-slide-description"
        className="dialog"
      >
        <DialogTitle>{postable ? "Create NFT" : "Preview NFT"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {
              imgdata ?
                <img src={imgdata} className="preview-img"></img>
                :
                ""
            }
            {
              postable ?
                <>
                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Title</h5>
                    <TextField id="outlined-basic" fullWidth label="Title" variant="outlined" />
                  </Box>
                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Details</h5>
                    <TextField id="outlined-basic" fullWidth label="Details" rows={5} multiline variant="outlined" />
                  </Box>
                </>
                :
                ""
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            postable ?
              <>
                <Button variant="outlined" onClick={() => handleClose()}>Create</Button>
                <Button variant="outlined" onClick={() => handleClose()}>Cancel</Button>
              </>
              :
              <>
                <Button variant="outlined" onClick={() => next()}>Next</Button>
                <Button variant="outlined" onClick={() => handleClose()}>Cancel</Button>
              </>
          }
        </DialogActions>
      </Dialog>
    </Box >
  )
}
export default Create