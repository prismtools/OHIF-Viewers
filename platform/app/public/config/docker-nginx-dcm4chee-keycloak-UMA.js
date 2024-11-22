/** @type {AppTypes.Config} */
window.config = {
  routerBasename: '/ohif-viewer/',
  showStudyList: true,
  extensions: [],
  modes: [],
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'TCIA DICOMWeb Server',
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://dicom-stg.cancerimagingarchive.net/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://dicom-stg.cancerimagingarchive.net/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://dicom-stg.cancerimagingarchive.net/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        dicomUploadEnabled: false,
        bulkDataURI: {
          enabled: true,
        },
         omitQuotationForMultipartRequest: true,
      },
    },
  ],
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      // authority: 'https://keycloak-stg.dbmi.cloud/auth/realms/dcm4che',
      authority: 'https://keycloak-stg.dbmi.cloud/auth/realms/TCIA',
      client_id: 'ohif-viewer-stg',
      client_secret: '9PJ5WSsufu5m3WttZat1dyc1hFwaRU1U',
      redirect_uri: 'https://dicom-stg.cancerimagingarchive.net/callback', // `OHIFStandaloneViewer.js`
      // "Authorization Code Flow"
      // Resource: https://medium.com/@darutk/diagrams-of-all-the-openid-connect-flows-6968e3990660
      response_type: 'code',
      scope: 'openid', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
    },
  ],
};
