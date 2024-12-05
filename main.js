// import type { Types } from '@cornerstonejs/core';
import {
  RenderingEngine,
  Enums,
  getRenderingEngine,
  init as csRenderInit,
} from '@cornerstonejs/core';
import { init as initLoader } from '@cornerstonejs/dicom-image-loader';

// import * as cornerstone from '@cornerstonejs/core';
// import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
// import { Enums,RenderingEngine } from '@cornerstonejs/core';
import dicomParser from 'dicom-parser';

const run = async () => {
  const { ViewportType } = Enums;

  const content = document.getElementById('viewport');
  const element = document.createElement('div');
  element.id = 'cornerstone-element';
  element.style.width = '500px';
  element.style.height = '500px';
  content.appendChild(element);

  // await cornerstone.init();
  // await cornerstoneDICOMImageLoader.init({
  //   maxWebWorkers: 1,
  // });

  // Instantiate a rendering engine
  const renderingEngineId = 'myRenderingEngine';
  const viewportId = 'CT_STACK';

  await csRenderInit();
  await initLoader();

  const renderingEngine = new RenderingEngine(renderingEngineId);

  // Create a stack viewport
  const viewportInput = {
    viewportId,
    type: ViewportType.STACK,
    element,
  };

  renderingEngine.enableElement(viewportInput);

  // Get the stack viewport that was created
  const viewport = renderingEngine.getViewport(
    viewportId
  );


  // const renderingEngineId = 'myRenderingEngine';
  // const renderingEngine = new RenderingEngine(renderingEngineId);
  
  // Create a stack viewport
  // const viewportId = 'CT_STACK';
  // const viewportInput = {
  //   viewportId,
  //   type: Enums.ViewportType.STACK,
  //   element,
  // };
  
  // renderingEngine.enableElement(viewportInput);
  
  // // Get the stack viewport that was created
  // const viewport = renderingEngine.getViewport(viewportId);
  const imageIds = ['wadouri:/dicom.dcm'];
  // const imageIds = [
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000000.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000001.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000002.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000003.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000004.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000005.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000006.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000007.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000008.dcm',
  //   'wadouri:https://ohif-assets-new.s3.us-east-1.amazonaws.com/ACRIN-Regular/CT+CT+IMAGES/CT000009.dcm'
  // ];
  console.log('->', imageIds)
  await viewport.setStack(imageIds);
  console.log('-->>')
  viewport.render();
}
run();
