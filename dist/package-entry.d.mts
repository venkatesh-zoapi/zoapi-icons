import * as react from 'react';
import { SVGProps, ComponentType } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type IconProps = {
    size?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
} & Omit<SVGProps<SVGSVGElement>, "color">;
type IconComponent = ComponentType<IconProps>;

type IconRecord = {
    name: string;
    componentName: string;
    category: string;
    tags: string[];
    body: string;
};
declare const iconRecords: IconRecord[];

declare const iconLoaders: Record<string, () => Promise<IconComponent>>;

type DynamicIconProps = IconProps & {
    name: string;
};
declare function IconBase({ name, ...props }: DynamicIconProps): react_jsx_runtime.JSX.Element | null;
declare const Icon: react.MemoExoticComponent<typeof IconBase>;

declare const MemoCamera: react.NamedExoticComponent<IconProps>;

declare const MemoCompass: react.NamedExoticComponent<IconProps>;

declare const MemoCpu: react.NamedExoticComponent<IconProps>;

declare const MemoDownload: react.NamedExoticComponent<IconProps>;

declare const MemoFileCode: react.NamedExoticComponent<IconProps>;

declare const MemoFile: react.NamedExoticComponent<IconProps>;

declare const MemoFolder: react.NamedExoticComponent<IconProps>;

declare const MemoLaptop: react.NamedExoticComponent<IconProps>;

declare const MemoMail: react.NamedExoticComponent<IconProps>;

declare const MemoMap: react.NamedExoticComponent<IconProps>;

declare const MemoMessageCircle: react.NamedExoticComponent<IconProps>;

declare const MemoMusic: react.NamedExoticComponent<IconProps>;

declare const MemoPause: react.NamedExoticComponent<IconProps>;

declare const MemoPhone: react.NamedExoticComponent<IconProps>;

declare const MemoPin: react.NamedExoticComponent<IconProps>;

declare const MemoPlay: react.NamedExoticComponent<IconProps>;

declare const MemoRoute: react.NamedExoticComponent<IconProps>;

declare const MemoSend: react.NamedExoticComponent<IconProps>;

declare const MemoSmartphone: react.NamedExoticComponent<IconProps>;

declare const MemoWatch: react.NamedExoticComponent<IconProps>;

export { MemoCamera as Camera, MemoCompass as Compass, MemoCpu as Cpu, MemoDownload as Download, MemoFile as File, MemoFileCode as FileCode, MemoFolder as Folder, Icon, type IconComponent, type IconProps, MemoLaptop as Laptop, MemoMail as Mail, MemoMap as Map, MemoMessageCircle as MessageCircle, MemoMusic as Music, MemoPause as Pause, MemoPhone as Phone, MemoPin as Pin, MemoPlay as Play, MemoRoute as Route, MemoSend as Send, MemoSmartphone as Smartphone, MemoWatch as Watch, iconLoaders, iconRecords };
