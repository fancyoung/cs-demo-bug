import * as cornerstone from '@cornerstonejs/core';
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
import { Enums,RenderingEngine } from '@cornerstonejs/core';
import dicomParser from 'dicom-parser';

const run = async () => {
  await cornerstone.init();
  await cornerstoneDICOMImageLoader.init({
    maxWebWorkers: 1,
  });

  const element = document.getElementById('viewport');

  // Instantiate a rendering engine
  const renderingEngineId = 'myRenderingEngine';
  const renderingEngine = new RenderingEngine(renderingEngineId);
  
  // Create a stack viewport
  const viewportId = 'CT_STACK';
  const viewportInput = {
    viewportId,
    type: Enums.ViewportType.STACK,
    element,
  };
  
  renderingEngine.enableElement(viewportInput);
  
  // Get the stack viewport that was created
  const viewport = renderingEngine.getViewport(viewportId);
  const imageIds = ['wadouri:/dicom.dcm'];
  console.log('->', imageIds)
  await viewport.setStack(imageIds);
  console.log('-->>')
  viewport.render();
}

run();