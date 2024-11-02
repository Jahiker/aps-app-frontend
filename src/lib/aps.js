/* eslint-disable no-undef */
export const initViewer = async (urn) => {
  //Get aps access token
  const response = await fetch("http://localhost:3000/auth/get-token");
  const { data } = await response.json();

  const apsAccessToken = data.access_token;

  // const options = {
  //   env: "AutodeskProduction",
  //   api: "derivativeV2",
  //   accessToken: apsAccessToken, // for models uploaded to EMEA change this option to 'streamingV2_EU'
  // };

  const options = {
    env: "AutodeskProduction2",
    api: "streamingV2", // for models uploaded to EMEA change this option to 'streamingV2_EU'
    getAccessToken: function (onTokenReady) {
      var token = apsAccessToken;
      var timeInSeconds = 3600; // Use value provided by APS Authentication (OAuth) API
      onTokenReady(token, timeInSeconds);
    },
  };

  //contenedor para pintar el modelo
  const viewerContainer = document.getElementById("myViewer");

  let viewer = new Autodesk.Viewing.GuiViewer3D(viewerContainer, {});

  const documentUrn = `urn:${urn}`;

  Autodesk.Viewing.Initializer(options, function () {
    var htmlDiv = document.getElementById("myViewer");
    viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
    var startedCode = viewer.start();
    if (startedCode > 0) {
      console.error("Failed to create a Viewer: WebGL not supported.");
      return;
    }

    Autodesk.Viewing.Document.load(
      documentUrn,
      (viewerDocument) => {
        //generar geometria, el Root se refiere al arbol de categorias
        const defaultModel = viewerDocument.getRoot().getDefaultGeometry();

        viewer.loadDocumentNode(viewerDocument, defaultModel);
        console.log("Document loaded successfully");
      },
      () => {
        console.error("Failed fetching Forge manifest");
      }
    );

    console.log("Initialization complete, loading a model next...");
  });

  //inicializar el viewer
  // Autodesk.Viewing.Initializer(options, () => {
  //   //arrancar el viewer
  //   const startedCode = viewer.start();

  //   if (startedCode > 0) {
  //     console.error("Failed to create a Viewer: WebGL not supported.");
  //     return;
  //   }

  //   //cargar el documento a traves de la
  //   Autodesk.Viewing.Document.load(
  //     documentUrn,
  //     (viewerDocument) => {
  //       //generar geometria, el Root se refiere al arbol de categorias
  //       const defaultModel = viewerDocument.getRoot().getDefaultGeometry();

  //       viewer.loadDocumentNode(viewerDocument, defaultModel);
  //       console.log("Document loaded successfully");
  //     },
  //     () => {
  //       console.error("Failed fetching Forge manifest");
  //     }
  //   );
  // });
};
