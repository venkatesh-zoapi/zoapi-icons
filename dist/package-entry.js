"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// generated/icons/camera.tsx
var camera_exports = {};
__export(camera_exports, {
  Camera: () => MemoCamera
});
var import_react, import_jsx_runtime, Camera, MemoCamera;
var init_camera = __esm({
  "generated/icons/camera.tsx"() {
    "use strict";
    import_react = require("react");
    import_jsx_runtime = require("react/jsx-runtime");
    Camera = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h4l2-2h4l2 2h4v12H4z" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "13", r: "3.5" })
        ]
      }
    );
    MemoCamera = (0, import_react.memo)(Camera);
  }
});

// generated/icons/compass.tsx
var compass_exports = {};
__export(compass_exports, {
  Compass: () => MemoCompass
});
var import_react2, import_jsx_runtime2, Compass, MemoCompass;
var init_compass = __esm({
  "generated/icons/compass.tsx"() {
    "use strict";
    import_react2 = require("react");
    import_jsx_runtime2 = require("react/jsx-runtime");
    Compass = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m9 9 6-2-2 6-6 2z" })
        ]
      }
    );
    MemoCompass = (0, import_react2.memo)(Compass);
  }
});

// generated/icons/cpu.tsx
var cpu_exports = {};
__export(cpu_exports, {
  Cpu: () => MemoCpu
});
var import_react3, import_jsx_runtime3, Cpu, MemoCpu;
var init_cpu = __esm({
  "generated/icons/cpu.tsx"() {
    "use strict";
    import_react3 = require("react");
    import_jsx_runtime3 = require("react/jsx-runtime");
    Cpu = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" })
        ]
      }
    );
    MemoCpu = (0, import_react3.memo)(Cpu);
  }
});

// generated/icons/download.tsx
var download_exports = {};
__export(download_exports, {
  Download: () => MemoDownload
});
var import_react4, import_jsx_runtime4, Download, MemoDownload;
var init_download = __esm({
  "generated/icons/download.tsx"() {
    "use strict";
    import_react4 = require("react");
    import_jsx_runtime4 = require("react/jsx-runtime");
    Download = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12 3v12" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m7 11 5 5 5-5" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M4 21h16" })
        ]
      }
    );
    MemoDownload = (0, import_react4.memo)(Download);
  }
});

// generated/icons/file-code.tsx
var file_code_exports = {};
__export(file_code_exports, {
  FileCode: () => MemoFileCode
});
var import_react5, import_jsx_runtime5, FileCode, MemoFileCode;
var init_file_code = __esm({
  "generated/icons/file-code.tsx"() {
    "use strict";
    import_react5 = require("react");
    import_jsx_runtime5 = require("react/jsx-runtime");
    FileCode = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M7 3h7l5 5v13H7z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M10 13 8 15l2 2M14 17l2-2-2-2" })
        ]
      }
    );
    MemoFileCode = (0, import_react5.memo)(FileCode);
  }
});

// generated/icons/file.tsx
var file_exports = {};
__export(file_exports, {
  File: () => MemoFile
});
var import_react6, import_jsx_runtime6, File, MemoFile;
var init_file = __esm({
  "generated/icons/file.tsx"() {
    "use strict";
    import_react6 = require("react");
    import_jsx_runtime6 = require("react/jsx-runtime");
    File = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M7 3h7l5 5v13H7z" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M14 3v5h5" })
        ]
      }
    );
    MemoFile = (0, import_react6.memo)(File);
  }
});

// generated/icons/folder.tsx
var folder_exports = {};
__export(folder_exports, {
  Folder: () => MemoFolder
});
var import_react7, import_jsx_runtime7, Folder, MemoFolder;
var init_folder = __esm({
  "generated/icons/folder.tsx"() {
    "use strict";
    import_react7 = require("react");
    import_jsx_runtime7 = require("react/jsx-runtime");
    Folder = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
      }
    );
    MemoFolder = (0, import_react7.memo)(Folder);
  }
});

// generated/icons/laptop.tsx
var laptop_exports = {};
__export(laptop_exports, {
  Laptop: () => MemoLaptop
});
var import_react8, import_jsx_runtime8, Laptop, MemoLaptop;
var init_laptop = __esm({
  "generated/icons/laptop.tsx"() {
    "use strict";
    import_react8 = require("react");
    import_jsx_runtime8 = require("react/jsx-runtime");
    Laptop = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { x: "4", y: "5", width: "16", height: "11", rx: "1" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M2 19h20" })
        ]
      }
    );
    MemoLaptop = (0, import_react8.memo)(Laptop);
  }
});

// generated/icons/mail.tsx
var mail_exports = {};
__export(mail_exports, {
  Mail: () => MemoMail
});
var import_react9, import_jsx_runtime9, Mail, MemoMail;
var init_mail = __esm({
  "generated/icons/mail.tsx"() {
    "use strict";
    import_react9 = require("react");
    import_jsx_runtime9 = require("react/jsx-runtime");
    Mail = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "m4 7 8 6 8-6" })
        ]
      }
    );
    MemoMail = (0, import_react9.memo)(Mail);
  }
});

// generated/icons/map.tsx
var map_exports = {};
__export(map_exports, {
  Map: () => MemoMap
});
var import_react10, import_jsx_runtime10, Map2, MemoMap;
var init_map = __esm({
  "generated/icons/map.tsx"() {
    "use strict";
    import_react10 = require("react");
    import_jsx_runtime10 = require("react/jsx-runtime");
    Map2 = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M9 4v14M15 6v14" })
        ]
      }
    );
    MemoMap = (0, import_react10.memo)(Map2);
  }
});

// generated/icons/message-circle.tsx
var message_circle_exports = {};
__export(message_circle_exports, {
  MessageCircle: () => MemoMessageCircle
});
var import_react11, import_jsx_runtime11, MessageCircle, MemoMessageCircle;
var init_message_circle = __esm({
  "generated/icons/message-circle.tsx"() {
    "use strict";
    import_react11 = require("react");
    import_jsx_runtime11 = require("react/jsx-runtime");
    MessageCircle = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M8 16l-3 3" })
        ]
      }
    );
    MemoMessageCircle = (0, import_react11.memo)(MessageCircle);
  }
});

// generated/icons/music.tsx
var music_exports = {};
__export(music_exports, {
  Music: () => MemoMusic
});
var import_react12, import_jsx_runtime12, Music, MemoMusic;
var init_music = __esm({
  "generated/icons/music.tsx"() {
    "use strict";
    import_react12 = require("react");
    import_jsx_runtime12 = require("react/jsx-runtime");
    Music = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M9 18a3 3 0 1 0 0 .01zM15 16a3 3 0 1 0 0 .01z" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M12 6v10M18 4v10M12 6l6-2" })
        ]
      }
    );
    MemoMusic = (0, import_react12.memo)(Music);
  }
});

// generated/icons/pause.tsx
var pause_exports = {};
__export(pause_exports, {
  Pause: () => MemoPause
});
var import_react13, import_jsx_runtime13, Pause, MemoPause;
var init_pause = __esm({
  "generated/icons/pause.tsx"() {
    "use strict";
    import_react13 = require("react");
    import_jsx_runtime13 = require("react/jsx-runtime");
    Pause = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("rect", { x: "7", y: "6", width: "3", height: "12", rx: "1" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("rect", { x: "14", y: "6", width: "3", height: "12", rx: "1" })
        ]
      }
    );
    MemoPause = (0, import_react13.memo)(Pause);
  }
});

// generated/icons/phone.tsx
var phone_exports = {};
__export(phone_exports, {
  Phone: () => MemoPhone
});
var import_react14, import_jsx_runtime14, Phone, MemoPhone;
var init_phone = __esm({
  "generated/icons/phone.tsx"() {
    "use strict";
    import_react14 = require("react");
    import_jsx_runtime14 = require("react/jsx-runtime");
    Phone = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M5 4h4l2 5-2 2a14 14 0 0 0 6 6l2-2 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" })
      }
    );
    MemoPhone = (0, import_react14.memo)(Phone);
  }
});

// generated/icons/pin.tsx
var pin_exports = {};
__export(pin_exports, {
  Pin: () => MemoPin
});
var import_react15, import_jsx_runtime15, Pin, MemoPin;
var init_pin = __esm({
  "generated/icons/pin.tsx"() {
    "use strict";
    import_react15 = require("react");
    import_jsx_runtime15 = require("react/jsx-runtime");
    Pin = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("circle", { cx: "12", cy: "10", r: "2.5" })
        ]
      }
    );
    MemoPin = (0, import_react15.memo)(Pin);
  }
});

// generated/icons/play.tsx
var play_exports = {};
__export(play_exports, {
  Play: () => MemoPlay
});
var import_react16, import_jsx_runtime16, Play, MemoPlay;
var init_play = __esm({
  "generated/icons/play.tsx"() {
    "use strict";
    import_react16 = require("react");
    import_jsx_runtime16 = require("react/jsx-runtime");
    Play = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("polygon", { points: "9 7 18 12 9 17 9 7" })
      }
    );
    MemoPlay = (0, import_react16.memo)(Play);
  }
});

// generated/icons/route.tsx
var route_exports = {};
__export(route_exports, {
  Route: () => MemoRoute
});
var import_react17, import_jsx_runtime17, Route, MemoRoute;
var init_route = __esm({
  "generated/icons/route.tsx"() {
    "use strict";
    import_react17 = require("react");
    import_jsx_runtime17 = require("react/jsx-runtime");
    Route = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("circle", { cx: "6", cy: "6", r: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("circle", { cx: "18", cy: "18", r: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M8 6h5a3 3 0 0 1 3 3v5" })
        ]
      }
    );
    MemoRoute = (0, import_react17.memo)(Route);
  }
});

// generated/icons/send.tsx
var send_exports = {};
__export(send_exports, {
  Send: () => MemoSend
});
var import_react18, import_jsx_runtime18, Send, MemoSend;
var init_send = __esm({
  "generated/icons/send.tsx"() {
    "use strict";
    import_react18 = require("react");
    import_jsx_runtime18 = require("react/jsx-runtime");
    Send = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M3 11.5 21 3l-8.5 18-1.8-7.7z" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M10.7 13.3 21 3" })
        ]
      }
    );
    MemoSend = (0, import_react18.memo)(Send);
  }
});

// generated/icons/smartphone.tsx
var smartphone_exports = {};
__export(smartphone_exports, {
  Smartphone: () => MemoSmartphone
});
var import_react19, import_jsx_runtime19, Smartphone, MemoSmartphone;
var init_smartphone = __esm({
  "generated/icons/smartphone.tsx"() {
    "use strict";
    import_react19 = require("react");
    import_jsx_runtime19 = require("react/jsx-runtime");
    Smartphone = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("rect", { x: "7", y: "2", width: "10", height: "20", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M11 18h2" })
        ]
      }
    );
    MemoSmartphone = (0, import_react19.memo)(Smartphone);
  }
});

// generated/icons/watch.tsx
var watch_exports = {};
__export(watch_exports, {
  Watch: () => MemoWatch
});
var import_react20, import_jsx_runtime20, Watch, MemoWatch;
var init_watch = __esm({
  "generated/icons/watch.tsx"() {
    "use strict";
    import_react20 = require("react");
    import_jsx_runtime20 = require("react/jsx-runtime");
    Watch = ({
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...rest
    }) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("rect", { x: "7", y: "6", width: "10", height: "12", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M9 2h6M9 22h6" })
        ]
      }
    );
    MemoWatch = (0, import_react20.memo)(Watch);
  }
});

// package-entry.ts
var package_entry_exports = {};
__export(package_entry_exports, {
  Camera: () => MemoCamera,
  Compass: () => MemoCompass,
  Cpu: () => MemoCpu,
  Download: () => MemoDownload,
  File: () => MemoFile,
  FileCode: () => MemoFileCode,
  Folder: () => MemoFolder,
  Icon: () => Icon,
  Laptop: () => MemoLaptop,
  Mail: () => MemoMail,
  Map: () => MemoMap,
  MessageCircle: () => MemoMessageCircle,
  Music: () => MemoMusic,
  Pause: () => MemoPause,
  Phone: () => MemoPhone,
  Pin: () => MemoPin,
  Play: () => MemoPlay,
  Route: () => MemoRoute,
  Send: () => MemoSend,
  Smartphone: () => MemoSmartphone,
  Watch: () => MemoWatch,
  iconLoaders: () => iconLoaders,
  iconRecords: () => iconRecords
});
module.exports = __toCommonJS(package_entry_exports);

// components/icon.tsx
var import_react21 = require("react");

// generated/runtime/data.ts
var iconRecords = [
  { name: "camera", componentName: "Camera", category: "Media", tags: ["photo", "lens", "camera"], body: '<path d="M4 7h4l2-2h4l2 2h4v12H4z" /><circle cx="12" cy="13" r="3.5" />' },
  { name: "compass", componentName: "Compass", category: "Navigation", tags: ["direction", "explore", "compass"], body: '<circle cx="12" cy="12" r="9" /><path d="m9 9 6-2-2 6-6 2z" />' },
  { name: "cpu", componentName: "Cpu", category: "Devices", tags: ["chip", "processor", "cpu"], body: '<rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />' },
  { name: "download", componentName: "Download", category: "Files", tags: ["save", "arrow", "download"], body: '<path d="M12 3v12" /><path d="m7 11 5 5 5-5" /><path d="M4 21h16" />' },
  { name: "file-code", componentName: "FileCode", category: "Files", tags: ["dev", "snippet", "file", "code"], body: '<path d="M7 3h7l5 5v13H7z" /><path d="M10 13 8 15l2 2M14 17l2-2-2-2" />' },
  { name: "file", componentName: "File", category: "Files", tags: ["document", "page", "file"], body: '<path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5" />' },
  { name: "folder", componentName: "Folder", category: "Files", tags: ["directory", "storage", "folder"], body: '<path d="M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />' },
  { name: "laptop", componentName: "Laptop", category: "Devices", tags: ["computer", "macbook", "laptop"], body: '<rect x="4" y="5" width="16" height="11" rx="1" /><path d="M2 19h20" />' },
  { name: "mail", componentName: "Mail", category: "Communication", tags: ["email", "inbox", "mail"], body: '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />' },
  { name: "map", componentName: "Map", category: "Navigation", tags: ["location", "route", "map"], body: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" /><path d="M9 4v14M15 6v14" />' },
  { name: "message-circle", componentName: "MessageCircle", category: "Communication", tags: ["chat", "bubble", "message", "circle"], body: '<circle cx="12" cy="12" r="9" /><path d="M8 16l-3 3" />' },
  { name: "music", componentName: "Music", category: "Media", tags: ["song", "audio", "music"], body: '<path d="M9 18a3 3 0 1 0 0 .01zM15 16a3 3 0 1 0 0 .01z" /><path d="M12 6v10M18 4v10M12 6l6-2" />' },
  { name: "pause", componentName: "Pause", category: "Media", tags: ["stop", "audio", "pause"], body: '<rect x="7" y="6" width="3" height="12" rx="1" /><rect x="14" y="6" width="3" height="12" rx="1" />' },
  { name: "phone", componentName: "Phone", category: "Communication", tags: ["call", "contact", "phone"], body: '<path d="M5 4h4l2 5-2 2a14 14 0 0 0 6 6l2-2 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />' },
  { name: "pin", componentName: "Pin", category: "Navigation", tags: ["marker", "location", "pin"], body: '<path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" />' },
  { name: "play", componentName: "Play", category: "Media", tags: ["video", "start", "play"], body: '<polygon points="9 7 18 12 9 17 9 7" />' },
  { name: "route", componentName: "Route", category: "Navigation", tags: ["path", "directions", "route"], body: '<circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 6h5a3 3 0 0 1 3 3v5" />' },
  { name: "send", componentName: "Send", category: "Communication", tags: ["share", "paper plane", "send"], body: '<path d="M3 11.5 21 3l-8.5 18-1.8-7.7z" /><path d="M10.7 13.3 21 3" />' },
  { name: "smartphone", componentName: "Smartphone", category: "Devices", tags: ["mobile", "phone", "smartphone"], body: '<rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" />' },
  { name: "watch", componentName: "Watch", category: "Devices", tags: ["clock", "wearable", "watch"], body: '<rect x="7" y="6" width="10" height="12" rx="2" /><path d="M9 2h6M9 22h6" />' }
];

// generated/runtime/loaders.ts
var iconLoaders = {
  "camera": () => Promise.resolve().then(() => (init_camera(), camera_exports)).then((m) => m.Camera),
  "compass": () => Promise.resolve().then(() => (init_compass(), compass_exports)).then((m) => m.Compass),
  "cpu": () => Promise.resolve().then(() => (init_cpu(), cpu_exports)).then((m) => m.Cpu),
  "download": () => Promise.resolve().then(() => (init_download(), download_exports)).then((m) => m.Download),
  "file-code": () => Promise.resolve().then(() => (init_file_code(), file_code_exports)).then((m) => m.FileCode),
  "file": () => Promise.resolve().then(() => (init_file(), file_exports)).then((m) => m.File),
  "folder": () => Promise.resolve().then(() => (init_folder(), folder_exports)).then((m) => m.Folder),
  "laptop": () => Promise.resolve().then(() => (init_laptop(), laptop_exports)).then((m) => m.Laptop),
  "mail": () => Promise.resolve().then(() => (init_mail(), mail_exports)).then((m) => m.Mail),
  "map": () => Promise.resolve().then(() => (init_map(), map_exports)).then((m) => m.Map),
  "message-circle": () => Promise.resolve().then(() => (init_message_circle(), message_circle_exports)).then((m) => m.MessageCircle),
  "music": () => Promise.resolve().then(() => (init_music(), music_exports)).then((m) => m.Music),
  "pause": () => Promise.resolve().then(() => (init_pause(), pause_exports)).then((m) => m.Pause),
  "phone": () => Promise.resolve().then(() => (init_phone(), phone_exports)).then((m) => m.Phone),
  "pin": () => Promise.resolve().then(() => (init_pin(), pin_exports)).then((m) => m.Pin),
  "play": () => Promise.resolve().then(() => (init_play(), play_exports)).then((m) => m.Play),
  "route": () => Promise.resolve().then(() => (init_route(), route_exports)).then((m) => m.Route),
  "send": () => Promise.resolve().then(() => (init_send(), send_exports)).then((m) => m.Send),
  "smartphone": () => Promise.resolve().then(() => (init_smartphone(), smartphone_exports)).then((m) => m.Smartphone),
  "watch": () => Promise.resolve().then(() => (init_watch(), watch_exports)).then((m) => m.Watch)
};

// components/icon.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var componentCache = /* @__PURE__ */ new Map();
function IconBase({ name, ...props }) {
  const [Component, setComponent] = (0, import_react21.useState)(() => componentCache.get(name) ?? null);
  (0, import_react21.useEffect)(() => {
    let active = true;
    const cached = componentCache.get(name);
    if (cached) {
      setComponent(() => cached);
      return;
    }
    const load = iconLoaders[name];
    if (!load) {
      setComponent(null);
      return;
    }
    load().then((resolved) => {
      if (!active) return;
      componentCache.set(name, resolved);
      setComponent(() => resolved);
    });
    return () => {
      active = false;
    };
  }, [name]);
  if (!Component) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Component, { ...props });
}
var Icon = (0, import_react21.memo)(IconBase);

// generated/icons/index.ts
init_camera();
init_compass();
init_cpu();
init_download();
init_file_code();
init_file();
init_folder();
init_laptop();
init_mail();
init_map();
init_message_circle();
init_music();
init_pause();
init_phone();
init_pin();
init_play();
init_route();
init_send();
init_smartphone();
init_watch();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Camera,
  Compass,
  Cpu,
  Download,
  File,
  FileCode,
  Folder,
  Icon,
  Laptop,
  Mail,
  Map,
  MessageCircle,
  Music,
  Pause,
  Phone,
  Pin,
  Play,
  Route,
  Send,
  Smartphone,
  Watch,
  iconLoaders,
  iconRecords
});
