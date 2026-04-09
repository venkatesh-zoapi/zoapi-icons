export type IconRecord = { name: string; componentName: string; category: string; tags: string[]; body: string };

export const iconRecords: IconRecord[] = [
  { name: "camera", componentName: "Camera", category: "Media", tags: ["photo","lens","camera"], body: "<path d=\"M4 7h4l2-2h4l2 2h4v12H4z\" /><circle cx=\"12\" cy=\"13\" r=\"3.5\" />" },
  { name: "compass", componentName: "Compass", category: "Navigation", tags: ["direction","explore","compass"], body: "<circle cx=\"12\" cy=\"12\" r=\"9\" /><path d=\"m9 9 6-2-2 6-6 2z\" />" },
  { name: "cpu", componentName: "Cpu", category: "Devices", tags: ["chip","processor","cpu"], body: "<rect x=\"7\" y=\"7\" width=\"10\" height=\"10\" rx=\"2\" /><path d=\"M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4\" />" },
  { name: "download", componentName: "Download", category: "Files", tags: ["save","arrow","download"], body: "<path d=\"M12 3v12\" /><path d=\"m7 11 5 5 5-5\" /><path d=\"M4 21h16\" />" },
  { name: "file-code", componentName: "FileCode", category: "Files", tags: ["dev","snippet","file","code"], body: "<path d=\"M7 3h7l5 5v13H7z\" /><path d=\"M10 13 8 15l2 2M14 17l2-2-2-2\" />" },
  { name: "file", componentName: "File", category: "Files", tags: ["document","page","file"], body: "<path d=\"M7 3h7l5 5v13H7z\" /><path d=\"M14 3v5h5\" />" },
  { name: "folder", componentName: "Folder", category: "Files", tags: ["directory","storage","folder"], body: "<path d=\"M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />" },
  { name: "laptop", componentName: "Laptop", category: "Devices", tags: ["computer","macbook","laptop"], body: "<rect x=\"4\" y=\"5\" width=\"16\" height=\"11\" rx=\"1\" /><path d=\"M2 19h20\" />" },
  { name: "mail", componentName: "Mail", category: "Communication", tags: ["email","inbox","mail"], body: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\" /><path d=\"m4 7 8 6 8-6\" />" },
  { name: "map", componentName: "Map", category: "Navigation", tags: ["location","route","map"], body: "<path d=\"M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z\" /><path d=\"M9 4v14M15 6v14\" />" },
  { name: "message-circle", componentName: "MessageCircle", category: "Communication", tags: ["chat","bubble","message","circle"], body: "<circle cx=\"12\" cy=\"12\" r=\"9\" /><path d=\"M8 16l-3 3\" />" },
  { name: "music", componentName: "Music", category: "Media", tags: ["song","audio","music"], body: "<path d=\"M9 18a3 3 0 1 0 0 .01zM15 16a3 3 0 1 0 0 .01z\" /><path d=\"M12 6v10M18 4v10M12 6l6-2\" />" },
  { name: "pause", componentName: "Pause", category: "Media", tags: ["stop","audio","pause"], body: "<rect x=\"7\" y=\"6\" width=\"3\" height=\"12\" rx=\"1\" /><rect x=\"14\" y=\"6\" width=\"3\" height=\"12\" rx=\"1\" />" },
  { name: "phone", componentName: "Phone", category: "Communication", tags: ["call","contact","phone"], body: "<path d=\"M5 4h4l2 5-2 2a14 14 0 0 0 6 6l2-2 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z\" />" },
  { name: "pin", componentName: "Pin", category: "Navigation", tags: ["marker","location","pin"], body: "<path d=\"M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z\" /><circle cx=\"12\" cy=\"10\" r=\"2.5\" />" },
  { name: "play", componentName: "Play", category: "Media", tags: ["video","start","play"], body: "<polygon points=\"9 7 18 12 9 17 9 7\" />" },
  { name: "route", componentName: "Route", category: "Navigation", tags: ["path","directions","route"], body: "<circle cx=\"6\" cy=\"6\" r=\"2\" /><circle cx=\"18\" cy=\"18\" r=\"2\" /><path d=\"M8 6h5a3 3 0 0 1 3 3v5\" />" },
  { name: "send", componentName: "Send", category: "Communication", tags: ["share","paper plane","send"], body: "<path d=\"M3 11.5 21 3l-8.5 18-1.8-7.7z\" /><path d=\"M10.7 13.3 21 3\" />" },
  { name: "smartphone", componentName: "Smartphone", category: "Devices", tags: ["mobile","phone","smartphone"], body: "<rect x=\"7\" y=\"2\" width=\"10\" height=\"20\" rx=\"2\" /><path d=\"M11 18h2\" />" },
  { name: "watch", componentName: "Watch", category: "Devices", tags: ["clock","wearable","watch"], body: "<rect x=\"7\" y=\"6\" width=\"10\" height=\"12\" rx=\"2\" /><path d=\"M9 2h6M9 22h6\" />" }
];
