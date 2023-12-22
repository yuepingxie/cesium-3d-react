// components/CesiumMap.js
import React, { useRef, useEffect } from 'react';
import 'cesium/Widgets/widgets.css';
// import './node_modules/cesium/Source/Widgets/widgets.css'
// import * as Cesium from 'cesium';
// import { Viewer } from 'cesium'

var Cesium = require('cesium/Cesium');

const CesiumMap = () => {
    const cesiumContainer = useRef(null);

    useEffect(() => {
        if (cesiumContainer.current) {
            // Initialize the Cesium Viewer in the div with `cesiumContainer` ref
            const viewer = new Cesium.Viewer(cesiumContainer.current);
            return () => {
                viewer && viewer.destroy();
            };
        }
    }, []);

    return <div ref={cesiumContainer} style={{ width: '100%', height: '800px' }} />;
};

export default CesiumMap;