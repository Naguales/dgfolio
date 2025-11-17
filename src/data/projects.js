// src/data/projects.js
import mqttImage from "../assets/project-mqtt.png";
import toolOptImage from "../assets/project-tool-optimization.png";
import trussDataImage from "../assets/project-truss-data.png";
import jobSwitchingRobotsImage from "../assets/job-switching-robots.png";
import jobSwitchingRobotsGif from "../assets/job-switching-robots-animation.gif";
import jobSwitchingRobotsLists from "../assets/job-switching-robots-lists.png";
import ubuntuPortImage from "../assets/ubuntu-port-automatic-truss-line-sw.png";

import svgGeneratorOverview from "../assets/svg-generator-overview.png";
import svgGeneratorSimpleReport from "../assets/svg-generator-simple-report.png";
import svgGeneratorCrownAngleRefract from "../assets/svg-generator-crown-angle-report-refract.png";
import svgGeneratorCrownAngleReport from "../assets/svg-generator-crown-angle-report.png";
import svgGeneratorPlotLengthAxisSym from "../assets/svg-generator-plot-length-axis-sym.png";
import remainingDepthChart from "../assets/remaining-depth-chart.png";
import sawingRecognitionTestSystem from "../assets/sawing-recognition-test-system.png";
import sawingRecognitionTestSystemBatch from "../assets/sawing-recognition-test-system-batch-mode.png";
import predictiveModelPipeline from "../assets/predictive-model-pipeline.png";
import galahadAutostopBlocking from "../assets/galahad-autostop-blocking.png";
import galahadAutostopPolished from "../assets/galahad-autostop-polished.png";

import danfossIcp from "../assets/danfoss-icp.jpg";
import danfossFrequencyConverter from "../assets/danfoss-frequency-converter.png";
import eduFileCreator from "../assets/edu-file-creator.png";
import eduFileCreator1 from "../assets/edu-file-creator-1.png";
import smartHomeApp from "../assets/smart-home-app.png";
import smartHomeApp1 from "../assets/smart-home-app-1.png";

import facetTypesUi from "../assets/facet-types-ui.png";
import semipolishReport from "../assets/semipolish-report.png";
import comparativeI3dDistances from "../assets/comparative-i3d-distances.png";
import cutwiseCloud from "../assets/cutwise-cloud.png";
import cutwiseLoginAnimation from "../assets/cutwise-login-animation.gif";
import cutwiseLoginDialog from "../assets/cutwise-login-dialog.png";
import supportEnhanceReport from "../assets/support-enhance-report-generation-module.png";
import modelsComparisonEngine from "../assets/models-comparison-engine.png";
import comparativeReportOval from "../assets/comparative-report-oval.png";
import facetTypesOval from "../assets/facet-types-oval.png";
import solutionsReport from "../assets/solutions-report.png";
import girdleThicknessI3d from "../assets/diamond-girdle-thickness-i3d.png";
import comparisonScannedModelsReport from "../assets/comparison-scanned-models-report.png";
import comparisonScannedModelsReportBrief from "../assets/comparison-scanned-models-report-brief.png";
import facetsMultiSelectionToolModel from "../assets/facets-multi-selection-tool-model.png";
import facetsMultiSelectionToolLegend from "../assets/facets-multi-selection-tool-legend.png";
import polishReportCylinder from "../assets/polish-report-cylinder.png";
import interactive3dReport from "../assets/interactive-3d-report.png";
import facetingReport from "../assets/faceting-report.png";
import facetingReportOval from "../assets/faceting-report-oval-pavilion-main-wing.png";
import settingsDialogReportButtons from "../assets/settings-dialog-report-buttons-page.png";
import settingsDialogPostScanExport from "../assets/settings-dialog-post-scan-export-page.png";
import settingsDialogPostScanActions from "../assets/settings-dialog-post-scan-actions-page.png";
import settingsDialogScanningGeneral from "../assets/settings-dialog-scanning-general-page.png";
import settingsDialogShortcuts from "../assets/settings-dialog-shortcuts-page.png";
import standardReport from "../assets/standard-report.png";
import standardReportTooltip from "../assets/standard-report-tooltip.png";
import asynchronousLogger from "../assets/asynchronous-logger.png";
import asynchronousLoggerFilter from "../assets/asynchronous-logger-filter-completer.png";
import interactive3dReportsClient from "../assets/interactive-3d-reports-client.png";
import interactive3dReportsClientContextMenu from "../assets/interactive-3d-reports-client-context-menu.png";
import interactive3dReportsClientSettings from "../assets/interactive-3d-reports-client-settings.png";

import setTopBoxST from "../assets/set-top-box-st.png";
import setTopBoxAli from "../assets/set-top-box-ali.jpg";
import setTopBoxJtag from "../assets/set-top-box-jtag.jpg";
import aerodynamicMeasurementsMain from "../assets/aerodynamic-measurements-main.png";
import aerodynamicMeasurementsSettings from "../assets/aerodynamic-measurements-settings.png";
import aerodynamicMeasurementsInstaller from "../assets/aerodynamic-measurements-installer.png";
import lasMeasurementsOverview from "../assets/las-measurements-overview.png";
import likaLd200 from "../assets/lika-ld200.png";
import characterRecognition from "../assets/character-recognition.png";
import characterRecognitionIssJoining from "../assets/character-recognition-iss-joining.jpg";
import characterRecognitionImageProcessing from "../assets/character-recognition-image-processing-steps.png";
import samsungSmartTvWidget from "../assets/samsung-smart-tv-widget.png";
import portingDeviceDrivers from "../assets/porting-device-drivers.png";
import tunerDemodHost from "../assets/tuner-demod-host.png";
import portingDeviceDriversDemod from "../assets/porting-device-drivers-demod.jpg";
import necKLineTasteIt2 from "../assets/nec-k-line-taste-it-2.png";
import softwareEngineeringMicrocontrollers from "../assets/software-engineering-for-microcontrollers.jpg";
import emma3slHdDvbTStb from "../assets/emma3sl-hd-dvb-t-stb.png";

import solarPanelsResearchSoftware from "../assets/solar-panels-research-software.png";
import confidentialityProtectionDataIntegrity from "../assets/confidentiality-protection-and-data-integrity.jpg";
import testSystemForComputingComplex from "../assets/test-system-for-computing-complex.png";

export const projects = [
  {
    slug: "mqtt-data-collection",
    title: "MQTT for Data Collection",
    company: "Trussmatic Oy, Tampere, Finland",
    period: "December 2024 – February 2025, September – October 2025",
    image: { src: mqttImage.src, square: true },
    tags: ["C++20", "MQTT", "REST API", "Mosquitto", "CMake", "Docker", "Industrial Automation", "Ubuntu"],
    summary: "Developed MQTT-based data collection and communication system for Trussmatic’s automated roof truss production software.",
    overview: `<p>Developed and maintained an <strong>MQTT-based data collection and communication system</strong> for Trussmatic’s automated roof truss production platform. The work focused on aligning <strong>message schemas</strong> and <strong>topic structures</strong> to ensure consistent and reliable data exchange across distributed subsystems.</p>
      <p>Additionally, contributed to the <strong>analysis of factory production metrics</strong>, identifying communication bottlenecks and supporting data-driven improvements to overall system stability and performance.</p>`,
    achievements: [
      "Designed and implemented new MQTT interfaces aligned with the updated communication schema and topic structure.",
      "Integrated the MQTT messaging layer into UI and backend components with full cross-platform compatibility on&nbspWindows and Linux.",
      "Enhanced system stability and connectivity by optimizing message handling and fault tolerance.",
      "Ensured smooth integration between production, monitoring, and analytics subsystems.",
      "Authored comprehensive documentation covering configuration, setup, and data flow design.",
    ],
    result: "Delivered a robust, scalable, and transparent communication layer improving data reliability, observability, and integration efficiency across Trussmatic’s production environment.",
    images: [{ src: mqttImage.src, square: true }],
  },

  {
    slug: "tool-placement-optimization",
    title: "Optimization System for Tool Placement in Truss Design",
    company: "Trussmatic Oy, Tampere, Finland",
    period: "May – August 2025",
    image: { src: toolOptImage.src, square: true },
    tags: ["C++20", "Algorithms", "REST API", "Boost", "Multithreading"],
    summary: "Developed an intelligent system optimizing tool placement in automated truss design for higher efficiency and stability.",
    overview: `<p>Developed a <strong>calculation and optimization system</strong> to improve tool placement efficiency for various truss designs within Trussmatic’s automated production software. The algorithms intelligently determine the <strong>optimal number and positioning of web tools</strong> for each timber, ensuring resource-efficient and structurally valid truss configurations.</p>
      <p>The work also included <strong>multithreading performance fixes</strong> in calculation and analysis modules to enhance system responsiveness.</p>`,
    achievements: [
      "Enhanced the <strong>Web Tool Allocation Algorithm</strong> for geometry- and angle-based optimization.",
      "Introduced availability-aware allocation preventing tool overuse and enabling adaptive redistribution.",
      "Improved handling of complex trusses with balancing, cluster detection, and proximity-based logic.",
      "Fixed multithreading and synchronization issues in core calculation and analyzer modules.",
    ],
    result: "Delivered a smarter, faster, and more stable truss design system, improving calculation speed, tool utilization, and production efficiency.",
    images: [{ src: toolOptImage.src, square: true }],
  },

  {
    slug: "truss-data-redesign",
    title: "Redesigning Truss Data-Related Classes",
    company: "Trussmatic Oy, Tampere, Finland",
    period: "March – April 2025",
    image: { src: trussDataImage.src, square: true },
    tags: ["C++20", "Ubuntu", "Software Architecture", "Google Test", "UML"],
    summary: "Redesigned Trussmatic’s data architecture to improve flexibility, modularity, and future scalability.",
    overview: `<p>Refactored and redesigned the <strong>Truss Data architecture</strong> for Trussmatic’s automated roof truss production software to improve flexibility, modularity, and maintainability. The new <strong>property system</strong> allows dynamic addition of attributes to truss components at any processing level – calculation, preprocessing, or AI integration – without modifying the core class hierarchy.</p>`,
    achievements: [
      "Implemented a flexible property system using std::variant to improve type safety and debugger visibility.",
      "Created a VariantConverter utility for safe and flexible property access.",
      "Refactored class structure for improved modularity and separation of concerns.",
      "Adopted smart pointers for safer and cleaner memory management.",
      "Added Google Test unit tests to ensure functionality and backward compatibility.",
    ],
    result: "Delivered a robust, extensible, and memory-safe foundation for truss data handling, simplifying maintenance and enabling future feature expansion.",
    images: [{ src: trussDataImage.src, square: true }],
  },

  {
    slug: "job-switching-between-robots",
    title: "Job Switching Between Robots in Production Software",
    company: "Trussmatic Oy, Tampere, Finland",
    period: "August – October 2024",
    category: "Desktop application development, System development",
    image: { src: jobSwitchingRobotsImage.src, square: true },
    tags: ["Qt", "C++20", "Boost", "REST API", "UI/UX", "Docker", "Ubuntu", "Industrial Automation", "Software Architecture", "UML"],
    summary: "Added drag-and-drop job transfer between robots, boosting flexibility and operator control.",
    overview: `<p>Implemented a new feature that allows operators to <strong>move truss production jobs between robots</strong> when automatic job allocation proves suboptimal. This improvement enhances production flexibility and operator control within Trussmatic’s automated roof truss manufacturing system.</p>`,
    achievements: [
      "Designed and implemented <strong>job transfer logic</strong> between robots across control and UI components.",
      "Developed a <strong>drag-and-drop interface</strong> for intuitive job movement with visual feedback and confirmation prompts.",
      "Enhanced recipe handling by tracking robot edits within the recipe structure itself.",
      "Refactored UI to follow Model–View–Controller (MVC) architecture for better maintainability.",
      "Redesigned the Job List interface from tree to table view, improving readability and diagnostics.",
      "Enhanced UX with tooltips, editing indicators, and background processing signals.",
      "Added commands to reset single or all job assignments to original mappings.",
    ],
    result: "Delivered a more intuitive and flexible production interface, enabling efficient real-time job management and optimization in automated truss lines.",
    images: [
      { src: jobSwitchingRobotsImage.src, square: true },
      { src: jobSwitchingRobotsGif.src, square: false },
      { src: jobSwitchingRobotsLists.src, square: true },
    ],
  },

  {
    slug: "ubuntu-port-automatic-truss-line-sw",
    title: "Ubuntu Port of Fully Automatic Roof Truss Line Software",
    company: "Trussmatic Oy, Tampere, Finland",
    period: "May – July 2024",
    category: "Desktop application development, System development",
    image: { src: ubuntuPortImage.src, square: true, },
    tags: ["C++20", "Boost", "Ubuntu", "Shell Scripting", "Docker", "PostgreSQL", "Multithreading"],
    summary: "Revived and completed the Ubuntu build of Trussmatic’s truss-line automation software, enabling stable cross-platform deployment.",
    overview: `<p>Worked on finalizing and stabilizing the <strong>Ubuntu port</strong> of Trussmatic’s <strong>fully automatic roof truss production system</strong>, originally developed for Windows. 
      Before my involvement, the Linux build existed only in a partial state and could not run successfully. 
      My primary focus was to make the system operational under Ubuntu – resolving platform-specific issues, improving reliability, and ensuring consistency with the Windows version.</p>`,
    achievements: [
      "Stabilized and completed the Ubuntu port of the automated truss line control software.",
      "Resolved major runtime issues in database connectivity, inter-process communication, and daemon execution.",
      "Refactored and cleaned up existing C++ code to remove compiler warnings and improve maintainability.",
      "Set up and validated a functional Linux development environment with VS Code, Docker, and Makefiles.",
      "Created UML diagrams documenting system architecture and data flow between modules.",
      "Authored detailed developer and user documentation for Ubuntu deployment and operation."
    ],
    result: "Delivered a fully functional and maintainable Ubuntu version of Trussmatic’s automated production software, enabling true cross-platform development and testing alongside the Windows build.",
    images: [{ src: ubuntuPortImage.src, square: true }],
  },

  {
    slug: "generating-svg-images",
    title: "Generating SVG Images",
    company: "OctoNus Finland Oy Ltd, Tampere, Finland",
    period: "March – April 2024",
    category: "Desktop application development",
    image: { src: svgGeneratorOverview.src, square: true },
    tags: ["C++17", "SVG", "2D Graphics", "Algorithms"],
    summary: "Implemented a C++ SVG generator for 3D diamond projections with labels and charts (≈70 verified outputs).",
    overview: `<p>Developed a feature to generate <strong>SVG images</strong> containing multiple 3D diamond model projections with <strong>text labels and charts</strong>. The system produces approximately <strong>70 verified SVG variations</strong> for reporting and analysis.</p>`,
    achievements: [
      "Designed a reusable <strong>SVG composition layer</strong> in C++ for shapes, text, and transformations.",
      "Implemented projection layouts and label placement for facet and metric rendering.",
      "Added <strong>chart primitives</strong> (axes, ticks, polylines) for compact reporting visuals.",
      "Generated ~70 validated SVG outputs with deterministic rendering for consistent reporting.",
    ],
    result: "Delivered a maintainable SVG export system ensuring consistent, high-quality visuals across desktop, web, and analytics reports.",
    images: [
      { src: svgGeneratorOverview.src, square: true },
      { src: svgGeneratorSimpleReport.src, square: true },
      { src: svgGeneratorCrownAngleRefract.src, square: true },
      { src: svgGeneratorCrownAngleReport.src, square: true },
      { src: svgGeneratorPlotLengthAxisSym.src, square: true },
    ],
  },
  
  {
    slug: "remaining-depth-chart-interactivity",
    title: "Remaining Depth Chart Interactivity",
    period: "January – February 2024",
    category: "Web development",
    company: "OctoNus Finland Oy Ltd, Tampere, Finland",
    image: { src: remainingDepthChart.src, square: true },
    tags: ["HTML", "CSS", "JavaScript", "D3.js", "3D Visualization", "UI/UX"],
    summary: "Enhanced the Remaining Depth chart with interactivity and multi-resolution support using D3.js.",
    overview: `<p>Enhanced <strong>interactivity</strong> and adapted the Remaining Depth chart, created using D3.js and JavaScript, for multiple resolutions. This chart visually illustrates the <strong>distance between girdle facets</strong> observed in a scan and those outlined in a plan.</p>
      <p>The girdle – a thin perimeter of a diamond separating the crown from the pavilion – is critical in assessing bruting precision. This tool provides valuable insights into the alignment of scan data with the intended plan.</p>`,
    achievements: [
      "Implemented enhanced interactivity for the Remaining Depth chart using D3.js.",
      "Adapted rendering for consistent visualization across resolutions and aspect ratios.",
      "Improved clarity in visualizing distances between measured and planned girdle facets.",
      "Refined tooltips and hover behaviors for better user feedback and precision.",
      "Optimized layout and scaling for integration into reports and analytical tools."
    ],
    result: "Delivered an interactive, resolution-adaptive Remaining Depth chart improving visualization accuracy and analysis of bruting precision.",
    images: [{ src: remainingDepthChart.src, square: true }]
  },

  {
    slug: "sawing-and-recognition-automated-test-system",
    title: "Sawing and Recognition Automated Test System",
    period: "November – December 2023",
    category: "Desktop application development, Automated test development",
    company: "OctoNus Finland Oy Ltd, Tampere, Finland",
    image: { src: sawingRecognitionTestSystem.src, square: true },
    tags: ["C++17", "Test Automation", "3D Visualization", "Algorithms"],
    summary: "Developed an automated test system for Recognition and Sawing Preplan generation, enabling batch testing and result analysis.",
    overview: `<p>The <strong>Sawing + Recognition automated test system</strong> was built to streamline testing for the new Recognition algorithm, which selectively ignores specific facets to improve <strong>3D model matching accuracy</strong>. It also automates validation of sawing preplan generation using batch processing for large datasets.</p>
      <p>The system comprises two main components – sawing preplan &amp; synthetic scan generation and the Recognition process itself. It generates structured input data for Recognition testing using a solution database based on rough examples. Tests run in batch mode, storing results in CSV for quantitative analysis.</p>`,
    achievements: [
      "Developed an automated batch testing framework for Recognition and Sawing Preplan validation.",
      "Implemented generation of synthetic scans and preplans from a structured solution database.",
      "Integrated Recognition algorithm validation with <strong>CSV-based logging and metric tracking</strong>.",
      "Enabled efficient <strong>multi-file batch processing</strong> for large test sets.",
      "Improved reproducibility and performance evaluation with structured input/output data."
    ],
    result: "Delivered a robust, automated C++ testing framework enabling consistent validation and large-scale performance analysis of Recognition and Sawing components.",
    images: [
      { src: sawingRecognitionTestSystem.src, square: true },
      { src: sawingRecognitionTestSystemBatch.src, square: true }
    ]
  },

  {
    slug: "predictive-model-concept-and-pipeline",
    title: "Predictive Model Concept and Pipeline",
    period: "March – October 2023",
    category: "Desktop application development, Web development",
    company: "OctoNus Finland Oy Ltd, Tampere, Finland",
    image: { src: predictiveModelPipeline.src, square: true },
    tags: ["C++17", "Qt", "HTML", "CSS", "JavaScript", "UI/UX", "3D Visualization", "Algorithms", "Software Architecture", "UML"],
    summary: "Designed and implemented a predictive modeling pipeline and UI for virtual diamond processing stages with web integration.",
    overview: `<p>In the diamond production workflow, manufacturers rely on scan and virtual models at every technological stage. The <em>preplan</em> concept acts as a <strong>predictive virtual model</strong> anticipating outcomes for each step and enabling smooth data transfer across stages.</p>
      <p>Collaboration with clients and the company founder led to developing a <strong>process architecture, pipeline, and algorithms</strong> for crafting virtual 3D models in C++. A <strong>Qt-based UI</strong> allows configuration of preplan parameters, while data is exported to <strong>web reports</strong> via HTML, CSS, and JavaScript.</p>
      <p>Implemented stages include Blocking – initial shaping of crown &amp; pavilion facets – and Sawing, simulating raw stone division. Each pipeline stage underwent rigorous precision and stability testing.</p>`,
    achievements: [
      "Developed the full predictive modeling pipeline and process architecture for diamond preplans.",
      "Implemented C++ algorithms for virtual 3D model construction across multiple stages.",
      "Built a Qt-based UI for parameter configuration and stage control.",
      "Integrated pipeline results into interactive web-based reports using HTML, CSS, and JavaScript.",
      "Implemented Blocking and Sawing virtual stages with accurate geometry handling.",
      "Conducted extensive testing to ensure data consistency and reliability.",
      "Produced comprehensive documentation and training videos for clients."
    ],
    result: "Implemented a complete predictive modeling pipeline in C++ and Qt, enabling seamless data transfer, interactive configuration, and realistic stage visualization.",
    images: [
      { src: predictiveModelPipeline.src, square: true },
      { src: galahadAutostopBlocking.src, square: true },
      { src: galahadAutostopPolished.src, square: true }
    ]
  },

  {
    slug: "embedded-control-panel",
    title: "Embedded Software Development for Control Panel",
    period: "December 2022 – February 2023",
    category: "Embedded software development",
    company: "Proekspert AS, Tallinn, Estonia",
    image: { src: danfossIcp.src, square: true },
    tags: ["C", "C++", "Azure Pipelines", "JTAG"],
    summary: "Contributed to next-generation Danfoss control panel development – enhancing UI, optimizing memory, and refining embedded architecture.",
    overview: `<p>Contributed to development of a <strong>control panel for Danfoss frequency converters</strong>, devices that regulate motor speed for asynchronous, PM, and Synchronous Reluctance motors.</p>
      <p>The goal was to design a next-generation panel with improved UI, refined fonts, and optimized RAM/flash usage. My work covered architecture design, board assembly, component wiring, menu creation, interface modeling, JTAG setup, and debugging.</p>`,
    achievements: [
      "Collaborated on system architecture design for the new control panel.",
      "Optimized RAM and flash usage to improve embedded efficiency.",
      "Developed UI menu structure and navigation logic for better usability.",
      "Configured and debugged hardware connections using JTAG and MyDrive Insight.",
      "Contributed to integration testing and firmware stability improvements."
    ],
    result: "Contributed to ongoing development of the next-generation control panel, implementing and testing core components for future integration.",
    images: [{ src: danfossIcp.src, square: true }]
  },

  {
    slug: "embedded-frequency-converters",
    title: "Embedded Software Development for Frequency Converters",
    period: "June – November 2022",
    category: "Embedded software development",
    company: "Proekspert AS, Tallinn, Estonia",
    image: { src: danfossFrequencyConverter.src, square: true },
    tags: ["C", "C++", "Azure Pipelines", "JTAG"],
    summary: "Developed embedded software for Danfoss iC7 converters, focusing on stability, resource efficiency, and integration.",
    overview: `<p>Contributed to <strong>embedded software development for Danfoss iC7 Series frequency converters</strong>, which control asynchronous, PM, and Synchronous Reluctance motors.</p>
      <p>Responsibilities included engineering, commissioning, and monitoringdrive products – assembling boards, performing feature tests, and resolving software and hardware-level issues. Key work involved debugging the hardware abstraction layer unit tests and integrating an optimized RAM driver to improve performance and memory efficiency.</p>`,
    achievements: [
      "Developed and tested embedded software components for iC7 frequency converters.",
      "Debugged and resolved critical issues in the hardware abstraction layer.",
      "Integrated an optimized RAM driver to improve memory efficiency.",
      "Assembled and tested boards to verify stability and hardware integration.",
      "Collaborated with hardware teams using JTAG, Xilinx Vivado, and TRACE32 for debugging."
    ],
    result: "Improved the stability, efficiency, and maintainability of embedded software for Danfoss iC7 drives, supporting reliable operation across testing environments.",
    images: [{ src: danfossFrequencyConverter.src, square: true }]
  },

  {
    slug: "custom-file-type-app",
    title: "Desktop Application for Creating a Custom File Type",
    period: "January – May 2022",
    category: "Desktop application development",
    company: "Proekspert AS, Tallinn, Estonia",
    image: { src: eduFileCreator.src, square: true },
    tags: ["Qt", "C++14", "UI/UX"],
    summary: "Developed a Qt-based desktop tool for creating and editing a custom firmware file format for motor control systems.",
    overview: `<p>Designed and developed a Windows desktop application using Qt and C++ to create and manipulate a <strong>custom firmware file type</strong>. The format stores configuration options and binary data for asynchronous, PM, and Synchronous Reluctance motor firmware.</p>
      <p>The application features an intuitive UI for opening, editing, and saving firmware files, enabling engineers to adjust configuration parameters quickly and reliably.</p>`,
    achievements: [
      "Built a Qt-based GUI for editing and visualizing firmware parameters.",
      "Implemented binary parsing and serialization for a custom file format.",
      "Integrated validation logic to prevent invalid firmware states.",
      "Improved usability with structured menus and responsive layout."
    ],
    result: "Delivered a working prototype of a firmware configuration tool simplifying creation and modification of proprietary binary file types.",
    images: [
      { src: eduFileCreator.src, square: true },
      { src: eduFileCreator1.src, square: true }
    ]
  },

  {
    slug: "smart-home-mobile-app",
    title: "Smart-home Mobile Application",
    period: "August 2021 – January 2022",
    category: "Mobile application development",
    company: "Proekspert AS, Tallinn, Estonia",
    image: { src: smartHomeApp.src, square: true },
    tags: ["C++14", "QML", "Qt", "Qt WebSockets", "FlatBuffers", "Android", "iOS", "Mobile Development", "UI/UX", "Software Architecture"],
    summary: "Developed a cross-platform MVP for smart-home water heater control using Qt, QML, and C++.",
    overview: `<p>Developed a Minimum Viable Product (MVP) for a <strong>smart-home app managing water heaters</strong> for STIEBEL ELTRON GmbH &amp; Co. KG (Germany). Targeting <strong>Android and iOS</strong>, it used the Qt framework with QML for UI and C++ for core logic.</p>
      <p>Implemented <strong>real-time synchronization</strong> between the mobile app and </strong>Azure-based cloud services</strong> via Qt WebSockets, providing live device status updates. Integrated <strong>FlatBuffers</strong> for lightweight serialization, efficient memory use, and schema evolution compatibility.</p>`,
    achievements: [
      "Implemented real-time communication with cloud services via Qt WebSockets.",
      "Integrated FlatBuffers serialization for efficient data exchange and backward compatibility.",
      "Developed a shared C++ backend for Android and iOS, reducing code duplication.",
      "Designed modular QML UI components for responsive cross-platform interaction."
    ],
    result: "Delivered a stable cross-platform MVP demonstrating real-time control, data reliability, and a scalable UI foundation for future expansion.",
    images: [
      { src: smartHomeApp.src, square: true },
      { src: smartHomeApp1.src, square: true }
    ]
  },

  {
    slug: "porting-qml-ui-to-qt",
    title: "Porting QML UI to Qt",
    period: "January – March 2021",
    category: "Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: facetTypesUi.src, square: true },
    tags: ["QML", "Qt", "C++14", "3D Visualization", "UI/UX", "Software Architecture"],
    summary: "Migrated the ‘Facet Types’ 3D visualization module from QML to native Qt for improved performance and integration.",
    overview: `<p>Migrated the UI of the diamond model’s <strong>Facet Types module</strong> – responsible for 3D visualization and editing – from QML to native Qt (C++). This component is central to <em>HP Carbon</em> software for diamond scanning and analysis.</p>
      <p>The migration improved <strong>performance, modularity,</strong> and <strong>integration</strong> with existing C++ logic, enabling flexible facet-type customization across multiple workflows.</p>`,
    achievements: [
      "Refactored QML components into native Qt widgets for higher performance.",
      "Improved data flow between UI and core logic for smoother editing.",
      "Enhanced customization and visualization of facet-type parameters."
    ],
    result: "Delivered a faster, more integrated Qt-native module with improved customization and performance for 3D diamond editing.",
    images: [{ src: facetTypesUi.src, square: true }]
  },

  {
    slug: "semipolish-report",
    title: "Semipolish Report",
    period: "October – December 2020",
    category: "Application programming, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: semipolishReport.src, square: true },
    tags: ["C++14", "GDI+", "2D Graphics", "3D Visualization", "Qt", "Qt WebEngine", "Algorithms", "HTML", "CSS", "JavaScript", "UI/UX", "Software Architecture"],
    summary: "Developed an interactive report system for controlling and visualizing the diamond Table polishing process.",
    overview: `<p>Designed and implemented the Semipolish Report – an HTML/CSS/JavaScript-based interface providing precise visual and numerical control of the <strong>table-facet polishing process</strong>. The Table facet acts as a window into the gem.</p>
      <p>Introduced a rotation feature aligning the facet azimuth with the machine “door” for simpler setup. Integrated a <strong>Qt WebEngine</strong>-based panel within the 3D Scene and generated dynamic reports with visuals rendered via <strong>GDI+</strong> and <strong>2D/3D algorithms</strong>.</p>`,
    achievements: [
      "Created an interactive report using Qt WebEngine with HTML, CSS, and JavaScript integration.",
      "Implemented 2D and 3D geometry algorithms for polishing visualization.",
      "Added Table-facet rotation alignment to simplify operator setup.",
      "Generated dynamic report templates with calculated graphics.",
      "Integrated report viewer directly within the 3D Scene."
    ],
    result: "Delivered an interactive, visually rich reporting tool improving polishing precision and operator usability.",
    images: [{ src: semipolishReport.src, square: true }]
  },

  {
    slug: "comparative-i3d-distances",
    title: "Distances between Models in Comparative I3D Report",
    period: "September 2020",
    category: "Web development, 3D graphics, Algorithms, Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: comparativeI3dDistances.src, square: true },
    tags: ["HTML", "CSS", "JavaScript", "C++14", "3D Visualization", "Qt WebEngine", "Algorithms", "UI/UX"],
    summary: "Added interactive 3D visualization modes comparing facet distances between diamond models.",
    overview: `<p>The <strong>Comparative I3D Report</strong> (HTML/CSS/JavaScript) is a visualization tool that displays diamond models and parameters within an embedded 3D scene, leveraging <strong>Qt WebEngine</strong>.</p>
      <p>Developed two new interactive modes to display <strong>facet-to-facet distances</strong> between Current and Reference models, enabling precise analysis of geometric deviations and manufacturing accuracy.</p>`,
    achievements: [
      "Implemented two visualization modes for measuring facet-to-facet distances.",
      "Integrated with Comparative I3D Report using JS + C++ backend data.",
      "Developed color-coded overlays to display geometric deviations.",
      "Enhanced scene navigation and GUI responsiveness in Qt WebEngine."
    ],
    result: "Delivered an enhanced 3D comparison tool enabling precise geometric evaluation and model-selection optimization.",
    images: [{ src: comparativeI3dDistances.src, square: true }]
  },

  {
    slug: "desktop-cloud-integration",
    title: "Integration of Desktop Application with Cloud",
    period: "May – August 2020",
    category: "Application programming, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: cutwiseCloud.src, square: true },
    tags: ["C++14", "Multithreading", "Software Architecture", "Qt", "UI/UX"],
    summary: "Developed a C++ and Qt integration layer connecting HP Carbon desktop software with the Cutwise cloud platform.",
    overview: `<p>Developed and implemented an integration architecture (C++) and GUI (Qt) connecting the company’s <em>HP Carbon</em> desktop application with the <a href="https://cutwise.com/" target="_blank">Cutwise cloud platform</a>.</p>
      <p>The system uploads <strong>scans, 3D models, reports,</strong> and <strong>metadata</strong> to the cloud for easy access by processing companies and clients. Communication is handled via a persistent <strong>Windows service</strong> managing authentication, file transfer, and status tracking.</p>
      <p>My role included implementing <strong>data-generation</strong> and <strong>preprocessing modules</strong>, as well as designing robust asynchronous communication between the desktop application and the service client.</p>`,
    achievements: [
      "Designed and implemented C++/Qt architecture for desktop-to-cloud integration.",
      "Developed a Windows service client for secure login and file transfer.",
      "Implemented asynchronous data-transfer logic for responsiveness.",
      "Enabled automatic upload of models, reports, and metadata to Cutwise.",
      "Improved collaboration efficiency between production teams and clients."
    ],
    result: "Delivered a seamless link between local HP Carbon software and the Cutwise cloud, enabling automated data sharing and greater workflow transparency.",
    images: [
      { src: cutwiseCloud.src, square: true },
      { src: cutwiseLoginAnimation.src, square: true },
      { src: cutwiseLoginDialog.src, square: true }
    ]
  },

  {
    slug: "report-generation-module",
    title: "Support and Enhancement of Report Generation Module",
    period: "January – April 2020",
    category: "Application programming, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: supportEnhanceReport.src, square: true },
    tags: ["C++11", "HTML", "CSS", "JavaScript", "QML", "Qt", "MFC", "UI/UX"],
    summary:  "Enhanced the HP Carbon report generation module by adding new report types, improving visualization, and ensuring mobile compatibility.",
    overview: `<p>Enhanced the <strong>Report Generation Module</strong> within OctoNus’s <em>HP Carbon</em> desktop software for diamond scanning and processing on Windows. 
      The work included adding new features, fixing bugs, and improving report templates across multiple formats such as <strong>HTML</strong> and <strong>Word-based</strong> reports.</p>
      <p>Implemented report logic in C++ while refining GUI components with MFC and QML, and building responsive HTML/CSS/JavaScript report templates. 
      Reports were adapted for mobile compatibility, improving accessibility for users across devices.</p>
      <p>Additionally, enhanced the <strong>3D visualization and facet marking module</strong> using QML, Qt, and C++, integrating it more closely with other parts of the application to deliver a smoother and more unified user experience.</p>`,
    achievements: [
      "Extended the Report Generation Module with new report formats and dynamic templates.",
      "Fixed bugs and improved reliability in HTML and Word-based report creation logic.",
      "Enhanced GUI elements using MFC and QML for a more intuitive user interface.",
      "Adapted HTML reports for compatibility with mobile and touch-based devices.",
      "Improved the 3D facet marking and visualization subsystem for better interactivity.",
      "Integrated visualization components more tightly with the overall HP Carbon workflow."
    ],
    result: "Delivered a more stable, feature-rich, and accessible reporting system with improved 3D visualization, better usability, and mobile-ready HTML reports.",
    images: [{ src: supportEnhanceReport.src, square: true }]
  },

  {
    slug: "models-comparison-engine-refactoring",
    title: "Refactoring of Models Comparison Engine",
    period: "November – December 2019",
    category: "Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: modelsComparisonEngine.src, square: true },
    tags: ["C++11", "Algorithms", "Multithreading", "UML"],
    summary: "Refactored and optimized the diamond model comparison engine to improve accuracy, performance, and multithreaded stability.",
    overview: `<p>Refactored and optimized the <strong>diamond model comparison engine</strong> written in <strong>C++</strong> within OctoNus’s diamond scanning and processing software to enhance its <strong>accuracy</strong>, <strong>performance</strong>, and <strong>scalability</strong>.</p>
      <p>The work involved restructuring the existing dynamic library, improving geometric comparison algorithms, and introducing reliable <strong>multithreading support</strong> to significantly accelerate model processing. 
      These updates ensured faster and more precise analysis of complex diamond models.</p>
      <p>The upgraded engine was successfully integrated into multiple software modules, providing a noticeable improvement in comparison accuracy, reliability, and responsiveness across the platform.</p>`,
    achievements: [
      "Refactored the existing comparison engine for improved accuracy and computational efficiency.",
      "Introduced multithreading support to enhance performance and responsiveness under load.",
      "Improved geometric comparison algorithms for higher analytical precision.",
      "Enhanced memory and data handling to support larger and more complex models.",
      "Integrated the optimized engine across key modules for improved overall reliability."
    ],
    result: "Delivered a more accurate, faster, and multithreaded comparison engine, improving analysis precision and responsiveness across the diamond processing software.",
    images: [
      { src: comparativeReportOval.src, square: true },
      { src: facetTypesOval.src, square: true },
    ]
  },

  {
    slug: "solutions-report",
    title: "Solutions Report",
    period: "July – August 2019",
    category: "Application programming, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: solutionsReport.src, square: true },
    tags: ["C++11", "Qt", "Qt WebEngine", "ReactJS", "HTML", "CSS", "JavaScript", "Multithreading", "UI/UX"],
    summary: "Developed a hybrid C++/Qt and ReactJS-based Solutions Report for viewing photorealistic diamond images and parameters in an interactive scene.",
    overview: `<p>Designed and developed the <strong>Solutions Report</strong> – an interactive reporting tool built with <strong>React</strong>, <strong>HTML/CSS/JavaScript</strong>, and <strong>Qt WebEngine</strong> for viewing photorealistic diamond imagery and 3D scene parameters.</p>
      <p>The system enables users to browse, add, and remove diamond solutions directly in the report. Photorealistic images are loaded dynamically as they are generated by the rendering engine. 
      A <strong>Qt WebChannel</strong> bridge provides real-time communication between the web-based report, the Qt GUI panel, and the core <strong>C++ backend</strong>.</p>
      <p>The panel was fully integrated into OctoNus’s <em>HP Oxygen</em> diamond scanning software and developed under Visual Studio for the Windows platform, ensuring seamless interaction between native and web components.</p>`,
    achievements: [
      "Developed an interactive Solutions Report using ReactJS, HTML, CSS, and JavaScript.",
      "Implemented a Qt WebEngine panel for report browsing and interaction.",
      "Established real-time communication between C++ core and web UI via Qt WebChannel.",
      "Enabled dynamic addition and removal of diamond solutions within the report.",
      "Integrated the panel into the HP Oxygen diamond scanning software for Windows.",
    ],
    result: "Delivered an interactive, hybrid C++/Qt and ReactJS reporting module that enhanced solution visualization, interactivity, and integration within the diamond scanning workflow.",
    images: [{ src: solutionsReport.src, square: true }]
  },

  {
    slug: "diamond-girdle-thickness-visualization",
    title: "Visualization of Diamond Girdle Thickness in Interactive 3D Report",
    period: "May 2019",
    category: "Web development, 3D Visualization, Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: girdleThicknessI3d.src, square: true },
    tags: ["Algorithms", "HTML", "CSS", "JavaScript", "3D Visualization", "Qt WebEngine", "UI/UX"],
    summary: "Enhanced the Interactive 3D Report by implementing accurate girdle thickness visualization, final calculations, and a user legend.",
    overview: `<p>Worked on the <strong>Interactive 3D Report</strong> (HTML/CSS/JavaScript), a visualization tool for displaying diamond models and their parameters in a 3D scene integrated within a Qt WebEngine panel.</p>
      <p>Addressed and resolved issues in the <strong>visualization of diamond girdle thickness</strong>, ensuring accurate and consistent representation across various diamond shapes. 
      Implemented <strong>final girdle thickness calculations</strong> using precomputed data for enhanced measurement precision.</p>
      <p>Additionally, developed a <strong>legend component</strong> within the report, providing users with a clear and intuitive reference for interpreting thickness visualization and related parameters.</p>`,
    achievements: [
      "Fixed inaccuracies in girdle thickness visualization across multiple diamond shapes.",
      "Implemented final girdle thickness calculations based on precomputed measurement data.",
      "Developed an interactive legend within the 3D report for reference and clarity.",
      "Improved consistency and readability of the Interactive 3D Report visualization.",
      "Ensured accurate representation and usability within the Qt WebEngine-based GUI panel."
    ],
    result: "Delivered a more precise and informative 3D report, enhancing visualization accuracy and usability for diamond girdle thickness analysis.",
    images: [{ src: girdleThicknessI3d.src, square: true }]
  },

  {
    slug: "comparison-scanned-models-report",
    title: "Report for Comparison of Scanned Diamond Models",
    period: "April 2019",
    category: "Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: comparisonScannedModelsReport.src, square: true },
    tags: ["C++11", "Qt"],
    summary: "Developed a C++-based report system for comparing scanned diamond models, including statistical calculations and Excel export.",
    overview: `<p>Designed and developed a <strong>report generation module</strong> in C++ and Qt for comparing scanned diamond models within OctoNus’s <em>HP Oxygen</em> software.</p>
      <p>The report verifies the <strong>repeatability and precision</strong> of diamond model building by the company’s scanning equipment. 
      It is dynamically generated to a text file based on INI templates that define parameter sets and report layouts. 
      Both detailed and concise templates were created to support various analytical and operational needs.</p>
      <p>Implemented a <strong>calculation mechanism</strong> for generating statistical summaries across parameters, and added functionality to export cumulative results to Microsoft Excel for further analysis and validation.</p>`,
    achievements: [
      "Developed a C++ report generator for comparing scanned diamond models.",
      "Implemented support for INI-based templates defining report structure and parameters.",
      "Created detailed and concise reporting modes for flexible analysis.",
      "Added statistical calculations to assess measurement repeatability and precision.",
      "Integrated Excel export for cumulative data aggregation and review.",
      "Embedded the reporting feature into the HP Oxygen software for seamless use."
    ],
    result: "Delivered a flexible and automated reporting module improving quality control, repeatability verification, and analytical efficiency within the diamond scanning workflow.",
    images: [
      { src: comparisonScannedModelsReport.src, square: true },
      { src: comparisonScannedModelsReportBrief.src, square: true }
    ]
  },

  {
    slug: "facets-multi-selection-tool",
    title: "Facets Multi-Selection Tool",
    period: "November 2018 – January 2019",
    category: "Application programming, 3D Visualization, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: facetsMultiSelectionToolModel.src, square: true },
    tags: ["C++11", "Algorithms", "OpenGL", "Qt", "Qt WebEngine", "HTML", "CSS", "JavaScript", "3D Visualization", "UI/UX"],
    summary: "Developed an interactive OpenGL-based tool for multi-selecting facets in 3D scenes with integrated hint dialogs via Qt WebEngine.",
    overview: `<p>Designed and implemented a <strong>multi-selection tool</strong> for diamond facets within a 3D scene using <strong>C++</strong> and <strong>OpenGL</strong>. 
      The tool allows users to rotate the model, visually explore its geometry, and mark specific facets as “undesirable” for specialized processing in later modeling algorithms.</p>
      <p>The feature introduced a user-friendly interaction layer enabling intuitive selection directly in 3D, backed by efficient data structures and algorithms for performance and precision.</p>
      <p>Additionally, a <strong>hint dialog</strong> was developed using Qt WebEngine with HTML, CSS, and JavaScript, providing contextual guidance and improving the user experience. 
      Together, these enhancements increased workflow efficiency and model inspection accuracy.</p>`,
    achievements: [
      "Implemented an OpenGL-based 3D tool for multi-selecting diamond facets.",
      "Enabled real-time rotation, highlighting, and marking of facets within a 3D scene.",
      "Utilized STL containers and algorithms for fast facet identification and selection logic.",
      "Developed a hint dialog using Qt WebEngine, HTML, CSS, and JavaScript for contextual help.",
      "Integrated the selection system seamlessly with existing modeling and visualization modules."
    ],
    result: "Delivered an intuitive 3D interaction tool that enhanced visualization, model editing, and user feedback in the diamond processing workflow.",
    images: [
      { src: facetsMultiSelectionToolModel.src, square: true },
      { src: facetsMultiSelectionToolLegend.src, square: true },
    ]
  },

  {
    slug: "polish-report-for-cylinder",
    title: "Polish Report for Cylinder",
    period: "October 2018",
    category: "Application programming, 2D graphics, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: polishReportCylinder.src, square: true },
    tags: ["C++11", "GDI+", "Algorithms", "HTML", "CSS", "JavaScript", "2D Graphics"],
    summary: "Developed a C++ and GDI+ report system visualizing polished cylinder geometry with dynamic HTML report rendering.",
    overview: `<p>Designed and developed an HTML/CSS/JavaScript report template for analyzing <strong>polished cylinder</strong> parameters including diameters and cross-sections.</p>
    <p>The report is dynamically generated and populated with computed data and rendered illustrations produced via <strong>C++</strong> and <strong>GDI+</strong>. 
    Implemented the drawing of detailed cylinder diagrams, including <strong>perpendicular</strong> and <strong>vertical sections</strong> to visualize dimensional relationships and symmetry.</p>
    <p>Upon generation, reports open automatically in the system’s default browser for instant access and review, 
    providing an efficient and visually clear method for assessing polished cylinder characteristics.</p>`,
    achievements: [
      "Built a report-generation system that combines C++ backend logic with modular HTML/CSS/JavaScript templates.",
      "Implemented 2D visualization of cylinder geometry using GDI+.",
      "Rendered cross-sectional and longitudinal cylinder diagrams for dimensional analysis.",
      "Automated report output with dynamic data and image embedding.",
      "Enabled automatic report viewing in the default system browser for quick access."
    ],
    result: "Delivered an accessible, data-driven visualization and reporting tool improving clarity and usability in polished cylinder analysis.",
    images: [{ src: polishReportCylinder.src, square: true }]
  },

  {
    slug: "interactive-3d-report",
    title: "Interactive 3D Report",
    period: "October 2017 – July 2018",
    category: "Web development, 3D Visualization, Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: interactive3dReport.src, square: true },
    tags: ["HTML", "CSS", "JavaScript", "C++11", "Qt", "Qt WebEngine", "3D Visualization", "Algorithms", "Software Architecture", "UI/UX"],
    summary: "Integrated interactive 3D reports for visualizing diamond models, enabling comparison, symmetry analysis, and seamless Qt–web interaction.",
    overview: `<p>Integrated <strong>Interactive 3D Reports</strong> built with <strong>HTML, CSS, and JavaScript</strong> to visualize diamond models and their parameters within a 3D scene. 
    Developed a <strong>Qt WebEngine</strong>-based GUI panel for intuitive navigation and seamless embedding of web-based reports into the desktop environment.</p>
    <p>Implemented <strong>Axis Symmetry analysis</strong> and introduced a dedicated interface for <strong>comparing two diamond models</strong> directly in 3D, 
    improving both analytical depth and user interactivity.</p>
    <p>Established robust <strong>data exchange between C++, Qt,</strong> and <strong>web layers</strong> using <strong>Qt WebChannel</strong>, ensuring synchronized updates and interactive control. 
    Successfully integrated this module into the company’s <em>HP Oxygen</em> diamond scanning software within Visual Studio for Windows.</p>`,
    achievements: [
      "Developed a Qt WebEngine-based GUI panel to display and navigate interactive 3D reports.",
      "Integrated HTML/CSS/JavaScript reports into the Qt desktop environment for real-time visualization.",
      "Implemented Axis Symmetry analysis and a comparative 3D viewing mode for multiple models.",
      "Connected C++ and web layers via Qt WebChannel for dynamic data synchronization.",
      "Embedded the interactive 3D reporting module into HP Oxygen for Windows, enhancing analytical capabilities."
    ],
    result: "Delivered a unified, interactive 3D reporting environment that bridged web visualization and native C++ systems, elevating analytical and presentation capabilities in diamond modeling software.",
    images: [{ src: interactive3dReport.src, square: true }]
  },

  {
    slug: "faceting-report",
    title: "Faceting Report",
    period: "July – September 2017",
    category: "Application programming, 2D graphics, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: facetingReport.src, square: true },
    tags: ["C++11", "2D Graphics", "GDI+", "Algorithms", "HTML", "CSS", "JavaScript", "Qt", "UI/UX"],
    summary: "Developed a data-driven HTML faceting report system visualizing cutting sequences and results with C++ and GDI+ integration.",
    overview: `<p>Designed and implemented an <strong>HTML/CSS/JavaScript/JSON report template</strong> for examining <strong>faceting plans</strong> and the sequence of facet processing steps and outcomes.</p>
    <p>Built a <strong>report manager</strong> to automate report generation and a <strong>Qt-based GUI panel</strong> for convenient configuration. 
    Reports are dynamically generated from templates, populated with structured JSON data, and enriched with rendered diagrams and images created using <strong>Windows GDI+</strong>.</p>
    <p>Each generated report opens automatically in the user’s default browser, providing immediate visual and numerical feedback. 
    The entire workflow was integrated into the company’s <em>HP Oxygen</em> diamond scanning and analysis software.</p>`,
    achievements: [
      "Created an HTML/CSS/JavaScript report template for visualizing faceting sequences and results.",
      "Implemented C++ report manager with dynamic JSON-based data population.",
      "Developed GDI+ rendering logic for generating precise facet images and diagrams.",
      "Built a Qt GUI panel for configuring and launching report generation.",
      "Integrated automatic browser preview for immediate access to generated reports."
    ],
    result: "Delivered a dynamic, visual reporting system that streamlined faceting analysis and enhanced presentation quality within HP Oxygen.",
    images: [
      { src: facetingReport.src, square: true },
      { src: facetingReportOval.src, square: true }
    ]
  },

  {
    slug: "centralized-settings-diamond-software",
    title: "Centralized Settings of Diamond Scanning Software",
    period: "August 2016 – July 2017",
    category: "Architecture design, Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: settingsDialogReportButtons.src, square: true },
    tags: ["C++11", "Qt", "UI/UX", "Software Architecture"],
    summary: "Designed a modular architecture and Qt-based GUI for centralized settings in HP Oxygen, integrating configurable pages from multiple plugins.",
    overview: `<p>Designed, developed, and implemented a <strong>centralized settings architecture</strong> and a <strong>Qt-based GUI</strong> within the company’s diamond scanning software, <em>HP Oxygen</em>.</p>
      <p>The settings system features a <strong>hierarchical structure of categories and pages</strong>, organized by weight coefficients for intuitive navigation. 
      It supports search and filtering by keywords and was architected to allow future integration of settings pages from external plugins or dynamic libraries, even though, at this stage, all pages resided within a single module.</p>
      <p>The interface was initially developed in Qt Creator and later ported to a standalone reusable library under Visual Studio, ensuring maintainability and extensibility across the application ecosystem.</p>`,
    achievements: [
      "Designed a centralized architecture for managing configuration pages from multiple software modules.",
      "Developed a flexible Qt-based GUI with categorized and searchable settings pages.",
      "Implemented plugin integration logic for automatic inclusion of module-specific configuration dialogs.",
      "Organized settings hierarchy using weighted ordering for intuitive user navigation.",
      "Packaged the settings dialog as a standalone library for reuse across projects."
    ],
    result: "Delivered a scalable and maintainable centralized settings framework that unified configuration management across HP Oxygen’s modular architecture.",
    images: [
      { src: settingsDialogReportButtons.src, square: true },
      { src: settingsDialogPostScanExport.src, square: true },
      { src: settingsDialogPostScanActions.src, square: true },
      { src: settingsDialogScanningGeneral.src, square: true },
      { src: settingsDialogShortcuts.src, square: true }
    ]
  },

  {
    slug: "diamond-reports",
    title: "Diamond Reports",
    period: "February – June 2016",
    category: "Application programming, Web development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: standardReport.src, square: true },
    tags: ["C++11", "Qt", "Qt WebEngine", "HTML", "CSS", "JavaScript","UI/UX"],
    summary: "Developed HTML-based diamond grading reports with a Qt WebEngine viewer integrated into HP Oxygen.",
    overview: `<p>Designed and implemented <strong>HTML/CSS/JavaScript report templates</strong> for analyzing <strong>diamond parameters</strong> and <strong>grading</strong> across various cutting types.</p>
    <p>Created a <strong>Qt WebEngine</strong>-based GUI panel enabling smooth navigation through dynamically generated reports and seamless interaction with report content. 
    The system automatically launches after each diamond scan, providing immediate access to analytical data and visual summaries.</p>
    <p>The report panel was developed in Visual Studio and integrated into the company’s diamond scanning and processing solution, <em>HP Oxygen</em>, optimized for the Windows platform.</p>`,
    achievements: [
      "Developed HTML/CSS/JavaScript report templates for visualizing diamond grading and parameters.",
      "Implemented a Qt WebEngine-based GUI panel for viewing and interacting with generated reports.",
      "Integrated the report viewer into HP Oxygen with automatic launch after each scan.",
      "Optimized HTML templates for performance and visual consistency across multiple report types.",
      "Delivered a maintainable reporting subsystem bridging desktop and web technologies."
    ],
    result: "Delivered a unified, interactive HTML reporting solution that improved post-scan analysis and presentation quality within HP Oxygen.",
    images: [
      { src: standardReport.src, square: true },
      { src: standardReportTooltip.src, square: true }
    ]
  },

  {
    slug: "asynchronous-logger-and-gui-panel",
    title: "Asynchronous Logger and GUI Panel for Log Messages",
    period: "November 2015 – February 2016",
    category: "Architecture design, Application programming",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: asynchronousLogger.src, square: true },
    tags: ["C++11", "Qt", "Logging System", "Software Architecture", "UI/UX"],
    summary: "Integrated an asynchronous logging subsystem (g3log) with a Qt-based GUI panel for real-time log monitoring in HP Oxygen.",
    overview: `<p>Integrated an <strong>asynchronous C++11 logger</strong> based on <strong>g3log</strong> into the company’s diamond scanning software, <em>HP Oxygen</em>. 
      Designed and implemented a <strong>logging library</strong> responsible for writing messages to rotating log files and feeding data to a live GUI view.</p>
      <p>The logger captures messages from all application libraries, providing real-time insights into system state, errors, and diagnostic information across the entire workflow. 
      It supports configurable log levels, rotation policies, and thread-safe message handling.</p>
      <p>Developed a <strong>Qt-based GUI panel</strong> for viewing logs in real time, featuring message filtering by severity, keyword search, and sorting by log parameters. 
      The panel was integrated into an existing MFC environment via QtWinMigrate, combining modern Qt functionality with legacy UI frameworks.</p>`,
    achievements: [
      "Integrated an asynchronous C++11 logging system (g3log) into HP Oxygen.",
      "Developed a modular logging sublibrary with file rotation and thread-safe message handling.",
      "Created a Qt-based GUI panel for real-time log viewing, filtering, and search.",
      "Integrated Qt GUI into MFC using QtWinMigrate for hybrid UI operation.",
      "Enhanced debugging and maintenance efficiency through unified log management."
    ],
    result: "Delivered a robust asynchronous logging system with an integrated Qt GUI panel, improving system observability, debugging, and workflow transparency within HP Oxygen.",
    images: [
      { src: asynchronousLogger.src, square: true },
      { src: asynchronousLoggerFilter.src, square: true }
    ]
  },

  {
    slug: "interactive-3d-reports-client",
    title: "Interactive 3D Reports Client",
    period: "August – October 2015",
    category: "Application programming, Installer development",
    company: "OctoNus Software, Moscow, Russia",
    image: { src: interactive3dReportsClient.src, square: true },
    tags: ["C++11", "Qt", "HTML", "UI/UX"],
    summary: "Developed a Windows application for browsing and launching HTML-based Interactive 3D Reports with XML metadata management.",
    overview: `<p>Developed a <strong>Windows desktop client</strong> that enables scanner operators and cutters to easily <strong>locate, open,</strong> and <strong>interact with HTML</strong>-based <strong>Interactive 3D Reports</strong> directly from their workstations.</p>
      <p>The application indexes and organizes report metadata stored in XML format, allowing users to search by <strong>stone identifiers</strong> and open reports from local or network storage. 
      It supports launching reports in modern web browsers for consistent visualization and analysis.</p>
      <p>The client was implemented in <strong>C++11</strong> using <strong>Qt Creator</strong>, ensuring stability and maintainability. 
      An Inno Setup installer was created for simplified distribution and deployment across multiple systems.</p>`,
    achievements: [
      "Developed a Qt-based Windows client for locating and viewing Interactive 3D Reports.",
      "Implemented XML parsing and indexing of report metadata for structured search and access.",
      "Enabled report launching in modern web browsers with full HTML compatibility.",
      "Supported both local and network storage locations for flexible report retrieval.",
      "Created an Inno Setup installer for streamlined software deployment."
    ],
    result: "Delivered a lightweight, user-friendly client application that simplified access to Interactive 3D Reports and improved workflow efficiency for operators and cutters.",
    images: [
      { src: interactive3dReportsClient.src, square: true },
      { src: interactive3dReportsClientContextMenu.src, square: true },
      { src: interactive3dReportsClientSettings.src, square: true }
    ]
  },

  {
    slug: "set-top-boxes-software",
    title: "Set-Top Boxes Software",
    period: "August 2010 – August 2015",
    category: "Embedded software development and testing",
    company: "Moscow Scientific Research Television Institute, Moscow, Russia",
    image: { src: setTopBoxST.src, square: true },
    tags: ["C", "C++", "Shell Scripting", "Makefiles", "Embedded Linux", "DVB-T/T2", "Cross Compilers", "JTAG"],
    summary: "Developed, tested, and optimized software for DVB-T/T2 and IPTV set-top boxes across multiple embedded platforms and chipsets.",
    overview: `<p>Contributed to the <strong>development, refactoring,</strong> and <strong>testing</strong> of embedded software for <strong>DVB-T/T2</strong> and <strong>IPTV set-top boxes</strong> using platforms from Renesas Electronics, ST Electronics, NXP Semiconductors, ALi Corporation, and HiSilicon Technologies.</p>
    <p>Worked on <strong>Embedded Linux–based systems</strong> using C, C++, Shell scripting, and Makefiles for build automation and cross-compilation. 
    Configured multiple development environments and toolchains for diverse hardware architectures.</p>
    <p>Highlights include configuring and launching a <strong>HiSilicon 4K platform</strong> with Android OS support, and initiating and testing an <strong>NXP IPTV set-top box</strong> using VLC media player. 
    Performed <strong>Nordig compliance testing</strong> and extensive debugging using <strong>Minicom</strong> and <strong>JTAG</strong>.</p>
    <p>Set up and maintained development environments on SUSE, Fedora, and Ubuntu Linux distributions, ensuring reliable cross-platform development and hardware validation workflows.</p>`,
    achievements: [
      "Developed and tested software for DVB-T/T2 and IPTV set-top boxes across multiple embedded platforms.",
      "Refactored C/C++ applications for improved performance and maintainability under Embedded Linux.",
      "Configured HiSilicon 4K platform with Android OS and validated NXP IPTV functionality via VLC testing.",
      "Conducted Nordig compliance tests ensuring adherence to broadcasting standards.",
      "Performed low-level debugging and fault analysis using Minicom and JTAG.",
      "Set up cross-compilation environments and automated build processes with Shell scripts and Makefiles."
    ],
    result: "Delivered reliable, high-performance embedded software and validation workflows for multi-platform digital TV set-top boxes, supporting diverse hardware ecosystems and broadcast standards.",
    images: [
      { src: setTopBoxST.src, square: true },
      { src: setTopBoxAli.src, square: true },
      { src: setTopBoxJtag.src, square: true },
    ]
  },

  {
    slug: "aerodynamic-measurements-software",
    title: "Aerodynamic Measurements Software",
    period: "January – April 2015",
    category: "Application programming",
    company: "Moscow Scientific Research Television Institute, Moscow, Russia",
    image: { src: aerodynamicMeasurementsMain.src, square: true },
    tags: ["C++", "Qt", "UI/UX"],
    summary: "Developed aerodynamic measurement and control software for wind modeling experiments with turntable and laser sensor integration.",
    overview: `<p>Developed and tested <strong>aerodynamic measurement control software</strong> for the Windows platform, used in <strong>physical wind modeling experiments</strong> on scaled building models.</p>
      <p>The setup positions a scaled building model on a <strong>rotatable turntable</strong> to simulate wind from any azimuth. The <strong>turntable control application</strong>, written in C++ and Qt, communicates with the hardware via a <strong>serial interface</strong> and position display unit.</p>
      <p>Additionally, a <strong>laser sensor control module</strong> was developed in <strong>NI LabVIEW</strong> to measure distances between sensors and the model. 
      The sensors connect to an <strong>NI FPGA chassis</strong> over Ethernet, with collected data automatically exported to Excel files for analysis.</p>
      <p>The final software package was prepared for distribution using the Qt Installer Framework, ensuring streamlined installation and configuration.</p>`,
    achievements: [
      "Developed aerodynamic measurement control software simulating wind effects on scaled building models.",
      "Implemented C++/Qt application for serial communication with a turntable and position display unit.",
      "Created LabVIEW-based laser sensor control for precise distance measurement via FPGA over Ethernet.",
      "Automated data logging and Excel export for streamlined experimental analysis.",
      "Packaged the complete software system using Qt Installer Framework for easy deployment."
    ],
    result: "Delivered a functional aerodynamic measurement and control suite integrating hardware management, sensor data collection, and experiment automation for wind modeling research.",
    images: [
      { src: aerodynamicMeasurementsMain.src, square: true },
      { src: aerodynamicMeasurementsSettings.src, square: true },
      { src: aerodynamicMeasurementsInstaller.src, square: true },
      { src: lasMeasurementsOverview.src, square: true },
      { src: likaLd200.src, square: true },
    ]
  },

  {
    slug: "character-recognition-algorithm",
    title: "Algorithm of Character Recognition",
    period: "March 2013 – June 2014",
    category: "Algorithm design and implementation, Research and development project",
    company: "Moscow Scientific Research Television Institute, Moscow, Russia",
    image: { src: characterRecognition.src, square: true },
    tags: ["C++", "OpenCV", "Qt", "SQL", "Algorithms", "Multithreading"],
    summary: "Developed a character recognition algorithm for satellite TV telemetry images using OpenCV, FFT cross-correlation, and multithreading.",
    overview: `<p>Designed and implemented a <strong>character recognition algorithm</strong> for extracting telemetry data from <strong>satellite TV images</strong> through the detection of binary character patterns.</p>
      <p>The algorithm segments characters using <strong>contour analysis</strong> and determines similarity between input and template images via <strong>cross-correlation with FFT</strong>. 
      The system, written primarily in C++ with <strong>OpenCV</strong>, processes real-time video streams and stores recognition results in an <strong>SQL database</strong>.</p>
      <p>Implemented multithreaded processing for concurrent image handling, improving throughput and responsiveness. 
      The algorithm’s complexity and performance were benchmarked against other image recognition methods.</p>
      <p>The application was developed within the Qt Creator IDE for Windows, featuring a graphical interface built with <strong>Qt</strong> and <strong>Qwt</strong> for data visualization.</p>`,
    achievements: [
      "Developed a C++ character recognition algorithm for satellite TV telemetry data extraction.",
      "Implemented contour-based segmentation and FFT-based cross-correlation for pattern matching.",
      "Utilized OpenCV for image preprocessing and analysis steps.",
      "Integrated SQL database for storing recognition results and metadata.",
      "Optimized algorithm performance with multithreaded processing of video streams.",
      "Designed visualization and configuration UI using Qt and Qwt frameworks."
    ],
    result: "Delivered a performant, real-time character recognition system for satellite telemetry analysis, combining computer vision, and database integration.",
    images: [
      { src: characterRecognition.src, square: true },
      { src: characterRecognitionIssJoining.src, square: true },
      { src: characterRecognitionImageProcessing.src, square: true }
    ]
  },

  {
    slug: "samsung-smart-tv-widget",
    title: "Widget for Samsung Smart TV",
    period: "June – November 2012",
    category: "Web development",
    company: "Moscow Scientific Research Television Institute, Moscow, Russia",
    image: { src: samsungSmartTvWidget.src, square: true },
    tags: ["CSS", "JavaScript"],
    summary: "Developed a prototype Samsung Smart TV widget providing structured public service information with remote control navigation.",
    overview: `<p>Designed, developed, and tested a <strong>JavaScript</strong>-based <strong>prototype widget</strong> for Samsung Smart TV aimed at providing clear, user-friendly access to information about public services in Russia.</p>
      <p>The prototype displays a hierarchical structure of ministries and departments, along with comprehensive details about available services. Data is retrieved from XML resources via AJAX for dynamic content updates.</p>
      <p>The interface supports full remote control navigation, ensuring accessibility and ease of use on TV screens. The project was built using the <strong>Samsung Smart TV SDK</strong> within the Eclipse IDE.</p>`,
    achievements: [
      "Developed a Smart TV widget prototype using HTML, CSS, JavaScript, and Samsung SDK.",
      "Implemented dynamic content loading via AJAX from structured XML data sources.",
      "Designed hierarchical service navigation with focus-based remote control interaction.",
      "Optimized layout and font rendering for clear readability on large screens.",
      "Validated usability and performance across Smart TV firmware versions."
    ],
    result: "Delivered a functional prototype of a Smart TV widget for browsing public service information with intuitive remote-based interaction.",
    images: [{ src: samsungSmartTvWidget.src, square: true }],
  },

  {
    slug: "porting-device-drivers",
    title: "Porting Device Drivers",
    period: "January – May 2012",
    category: "Device driver development",
    company: "Moscow Scientific Research Television Institute, Moscow, Russia",
    image: { src: portingDeviceDrivers.src, square: true },
    tags: ["C", "C++", "Shell Scripting", "Embedded Linux", "Signal Processing"],
    summary: "Integrated and ported tuner and demodulator frontend drivers for DVB-T/T2 set-top boxes on a Renesas Embedded Linux platform.",
    overview: `<p>Integrated and adapted <strong>frontend device drivers</strong> (tuner and demodulator) for <strong>DVB-T and DVB-T2 set-top boxes</strong> operating on the Renesas Embedded Linux platform.</p>
      <p>The system employed two types of frontends: 
      (1) MaxLinear tuner with Sony demodulator, and 
      (2) DiBcom tuner with DiBcom demodulator. 
      Each frontend contained two channels, with <strong>paired tuners</strong> and <strong>demodulators</strong> communicating over the <strong>I2C bus</strong>, where the set-top box CPU acted as the master device.</p>
      <p>The software, written in <strong>C</strong> and <strong>C++</strong>, utilized the <strong>Linux I2C Core</strong> for low-level communication. A kernel module wrapper was implemented to expose demodulator functions to user space, enabling control and data retrieval through structured interfaces.</p>`,
    achievements: [
      "Integrated MaxLinear/Sony and DiBcom tuner–demodulator frontends into Renesas-based set-top boxes.",
      "Adapted Linux I2C communication between the CPU (master) and demodulators (slaves).",
      "Developed a kernel module wrapper to enable user-space interaction with demodulator functions.",
      "Configured build scripts and environment for driver compilation and deployment under Embedded Linux.",
      "Validated multi-channel tuner–demodulator synchronization and signal stability across both frontends."
    ],
    result: "Delivered fully integrated and tested frontend drivers for DVB-T/T2 set-top boxes, ensuring stable I2C communication and reliable signal processing on Embedded Linux.",
    images: [
      { src: portingDeviceDrivers.src, square: true },
      { src: tunerDemodHost.src, square: true },
      { src: portingDeviceDriversDemod.src, square: true }
    ]
  },

  {
    slug: "software-engineering-for-microcontrollers",
    title: "Software Engineering for Microcontrollers",
    period: "August 2009 – July 2010",
    category: "Microcontroller programming, Embedded software development, Low-level debugging",
    company: "Moscow Scientific Research Television Institute, Moscow, Russia",
    image: { src: necKLineTasteIt2.src, square: true },
    tags: ["C", "I2C", "Embedded Linux", "Microcontrollers"],
    summary: "Developed firmware for the front panel of DVB-T/T2 set-top boxes, handling LED control, key input, and RC-5 remote decoding via I2C communication.",
    overview: `<p>Designed, implemented, and tested <strong>firmware for the front panel microcontroller</strong> of a digital set-top box using <strong>C</strong> in the <strong>IAR Embedded Workbench EW78K</strong> environment. 
      The system, based on <strong>Renesas Electronics components</strong>, facilitated communication between the front panel microcontroller, an LED driver, and the main CPU over the <strong>I2C bus</strong>.</p>
      <p>The firmware managed <strong>LED indicators</strong>, processed key inputs, decoded <strong>Philips RC-5 remote control signals</strong>, synchronized real-time clocks, and supported standby mode. 
      A custom <strong>communication protocol</strong> was developed between the CPU and the front panel controller to ensure reliable data exchange and synchronization.</p>
      <p>Software for the CPU side was implemented in <strong>Green Hills Multi IDE</strong>, while <strong>low-level debugging</strong> and signal verification were performed using an oscilloscope. 
      The resulting firmware was successfully integrated into two DVB set-top box models (DVB-T and DVB-T2) built on different Renesas chipsets.</p>`,
    achievements: [
      "Developed microcontroller firmware for front panel LED and key control over the I2C bus.",
      "Implemented RC-5 remote signal decoding and real-time clock synchronization logic.",
      "Created a custom communication protocol between the main CPU and front panel controller.",
      "Performed low-level debugging and timing verification using an oscilloscope.",
      "Delivered stable firmware successfully deployed across multiple DVB-T/T2 set-top box models."
    ],
    result: "Delivered reliable, production-ready firmware for front panel microcontrollers, ensuring synchronized control, accurate input handling, and seamless integration with set-top box CPUs.",
    images: [
      { src: necKLineTasteIt2.src, square: true },
      { src: softwareEngineeringMicrocontrollers.src, square: true },
      { src: emma3slHdDvbTStb.src, square: true },
    ]
  },

  {
    slug: "solar-panels-research-software",
    title: "Software for Researching of Solar Panels",
    period: "February – May 2009",
    category: "Research and Development Project",
    company: "Bauman Moscow State Technical University",
    image: { src: solarPanelsResearchSoftware.src, square: true },
    tags: ["C#", "UI/UX"],
    summary: "Developed a C# application for monitoring, analyzing, and visualizing solar panel efficiency based on real-time insolation data.",
    overview: `<p>Developed and tested an application for researching the <strong>insolation level and efficiency of solar panels</strong>. The software, written in C#, controls and monitors output current and voltage from sensors connected via a serial port.</p>
      <p>The application stores the measured data in Excel files using <strong>InteropServices</strong>, enabling automatic calculation of hourly capacity and generation of analytical graphs. This facilitated a more accurate assessment of real solar panel efficiency under varying conditions.</p>
      <p>The project was implemented in Visual Studio with a Windows Forms GUI and packaged using InstallShield for easy deployment in laboratory environments.</p>`,
    achievements: [
      "Developed real-time monitoring and control of solar panel output via serial communication.",
      "Implemented automated data export and visualization using Excel InteropServices.",
      "Designed intuitive Windows Forms interface for monitoring insolation and power efficiency.",
      "Created algorithms to compute hourly and total capacity of solar panels.",
      "Packaged and deployed the research tool using InstallShield."
    ],
    result: "Delivered a robust research application that streamlined solar panel efficiency analysis and data visualization for academic experiments.",
    images: [{ src: solarPanelsResearchSoftware.src, square: true }]
  },

  {
    slug: "confidentiality-protection-and-data-integrity",
    title: "System of Confidentiality Protection and Data Integrity",
    period: "January – November 2008",
    category: "Application programming, Architecture design, Database development, Installer development, Testing",
    company: "Perimetrix, Moscow, Russia",
    image: { src: confidentialityProtectionDataIntegrity.src, square: true },
    tags: ["C++", "C#", "MFC", "SQL", "UML"],
    summary: "Contributed to the Perimetrix SafeSpace DLP system, developing core modules of the SafeEdge subsystem for real-time document monitoring and data protection.",
    overview: `<p>Actively contributed to the development team of the <strong>Perimetrix SafeSpace Data Loss Prevention (DLP) System</strong>, focusing on the <strong>SafeEdge subsystem</strong> – a real-time solution for monitoring and protecting documents leaving the corporate network perimeter.</p>
      <p>The subsystem automatically <strong>analyzes, filters,</strong> and <strong>classifies outgoing documents</strong> to ensure confidentiality and data integrity. My work included the development of a client driver, GUI components, test utilities, and database structures, as well as the design of UML-based class diagrams and unit tests.</p>
      <p>The project utilized <strong>C++</strong> and <strong>C#</strong> within the Visual Studio IDE, integrating <strong>SQLite</strong> for local data storage and <strong>Active Directory</strong> for user authentication and policy management. The team followed the <strong>Scrum methodology</strong> to ensure efficient development cycles and iterative testing.</p>`,
    achievements: [
      "Developed core modules of the SafeEdge subsystem for real-time document monitoring and classification.",
      "Implemented a client driver and test utility for low-level data control and validation.",
      "Designed UML class diagrams for system architecture and component interaction.",
      "Created a Windows-based GUI using MFC for administrative configuration and monitoring.",
      "Developed an installer with InstallShield and integrated Active Directory authentication.",
      "Tested and debugged system modules using WinDbg and custom test cases."
    ],
    result: "Delivered key software components and tools that enhanced Perimetrix’s data loss prevention capabilities, ensuring secure handling of confidential corporate information.",
    images: [{ src: confidentialityProtectionDataIntegrity.src, square: true }]
  },

  {
    slug: "test-system-for-computing-complex",
    title: "Test-System for a Computing Complex",
    period: "March 2007 – January 2008",
    category: "Test-system development",
    company: "MCST, Moscow, Russia",
    image: { src: testSystemForComputingComplex.src, square: true },
    tags: ["C", "Shell Scripting", "Linux", "Test Automation"],
    summary: "Developed automated testing and build scripts for a Linux-based computing complex, enhancing test coverage and kernel deployment efficiency.",
    overview: `<p>Worked as part of a development team responsible for software testing and validation of a <strong>computing complex</strong> at MCST. The role involved designing and modifying <strong>test programs for hardware devices</strong> using C and Shell scripting.</p>
    <p>Implemented a <strong>system for automating Linux kernel assembly and installation</strong>, significantly streamlining testing workflows and system setup procedures. Contributed to Linux installation, configuration, and test framework development for the computing environment.</p>
    <p>The work was conducted under Linux using CVS for version control, focusing on improving reliability, test automation, and maintainability across hardware validation processes.</p>`,
    achievements: [
      "Developed and modified C-based test programs for main hardware devices of the computing complex.",
      "Created Shell scripts to automate kernel assembly and installation processes.",
      "Configured and maintained Linux systems for testing environments.",
      "Improved reliability and repeatability of test runs through automation.",
      "Contributed to integration and validation processes within a multi-component computing architecture."
    ],
    result: "Delivered a stable and automated testing system that reduced manual effort and improved efficiency of the Linux-based computing complex validation cycle.",
    images: [{ src: testSystemForComputingComplex.src, square: true }]
  }

];
