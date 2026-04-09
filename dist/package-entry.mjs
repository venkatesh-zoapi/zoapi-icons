import {
  MemoPlay
} from "./chunk-5DWSXEZU.mjs";
import {
  MemoRoute
} from "./chunk-JSA4VY3C.mjs";
import {
  MemoSend
} from "./chunk-4EMTZE6U.mjs";
import {
  MemoSmartphone
} from "./chunk-L7S2FV57.mjs";
import {
  MemoWatch
} from "./chunk-3DVF3Z5I.mjs";
import {
  MemoLaptop
} from "./chunk-ITS256P7.mjs";
import {
  MemoMail
} from "./chunk-ZEXJCOFY.mjs";
import {
  MemoMap
} from "./chunk-GASQ2SMP.mjs";
import {
  MemoMessageCircle
} from "./chunk-JPWDVL7V.mjs";
import {
  MemoMusic
} from "./chunk-ZKTZFFCV.mjs";
import {
  MemoPause
} from "./chunk-5OTKP5UZ.mjs";
import {
  MemoPhone
} from "./chunk-BFH6I626.mjs";
import {
  MemoPin
} from "./chunk-7XXYFT62.mjs";
import {
  MemoCamera
} from "./chunk-E5KC7EYA.mjs";
import {
  MemoCompass
} from "./chunk-JOKUJPFD.mjs";
import {
  MemoCpu
} from "./chunk-W3DFH25P.mjs";
import {
  MemoDownload
} from "./chunk-CU7Q2GHW.mjs";
import {
  MemoFileCode
} from "./chunk-FDWZY4NO.mjs";
import {
  MemoFile
} from "./chunk-RVUBS23I.mjs";
import {
  MemoFolder
} from "./chunk-WSD6ONVH.mjs";

// components/icon.tsx
import { memo, useEffect, useState } from "react";

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
  "camera": () => import("./camera-O4EP2R2E.mjs").then((m) => m.Camera),
  "compass": () => import("./compass-CFJTHXC7.mjs").then((m) => m.Compass),
  "cpu": () => import("./cpu-ORXLEXYL.mjs").then((m) => m.Cpu),
  "download": () => import("./download-CWGNWPQM.mjs").then((m) => m.Download),
  "file-code": () => import("./file-code-IGL277ZQ.mjs").then((m) => m.FileCode),
  "file": () => import("./file-23JZMLGS.mjs").then((m) => m.File),
  "folder": () => import("./folder-F7EEIZS6.mjs").then((m) => m.Folder),
  "laptop": () => import("./laptop-ZFVHMUDH.mjs").then((m) => m.Laptop),
  "mail": () => import("./mail-ZIAEUCJW.mjs").then((m) => m.Mail),
  "map": () => import("./map-HXJHTUNM.mjs").then((m) => m.Map),
  "message-circle": () => import("./message-circle-BNS35DA3.mjs").then((m) => m.MessageCircle),
  "music": () => import("./music-TPP3F52P.mjs").then((m) => m.Music),
  "pause": () => import("./pause-RW27WTHA.mjs").then((m) => m.Pause),
  "phone": () => import("./phone-FTSHPOA6.mjs").then((m) => m.Phone),
  "pin": () => import("./pin-27FP5QYH.mjs").then((m) => m.Pin),
  "play": () => import("./play-BLXASDEG.mjs").then((m) => m.Play),
  "route": () => import("./route-5XG5BE2W.mjs").then((m) => m.Route),
  "send": () => import("./send-G6NMPAGL.mjs").then((m) => m.Send),
  "smartphone": () => import("./smartphone-UAVVG3LV.mjs").then((m) => m.Smartphone),
  "watch": () => import("./watch-NSIJLXLC.mjs").then((m) => m.Watch)
};

// components/icon.tsx
import { jsx } from "react/jsx-runtime";
var componentCache = /* @__PURE__ */ new Map();
function IconBase({ name, ...props }) {
  const [Component, setComponent] = useState(() => componentCache.get(name) ?? null);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(Component, { ...props });
}
var Icon = memo(IconBase);
export {
  MemoCamera as Camera,
  MemoCompass as Compass,
  MemoCpu as Cpu,
  MemoDownload as Download,
  MemoFile as File,
  MemoFileCode as FileCode,
  MemoFolder as Folder,
  Icon,
  MemoLaptop as Laptop,
  MemoMail as Mail,
  MemoMap as Map,
  MemoMessageCircle as MessageCircle,
  MemoMusic as Music,
  MemoPause as Pause,
  MemoPhone as Phone,
  MemoPin as Pin,
  MemoPlay as Play,
  MemoRoute as Route,
  MemoSend as Send,
  MemoSmartphone as Smartphone,
  MemoWatch as Watch,
  iconLoaders,
  iconRecords
};
